import { describe, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Sonner } from "@/components/ui/sonner";
import UsherTag from "@/components/UsherTag";

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          {children}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

describe("UsherTag Download and Print", () => {
  const wrapper = createWrapper();

  beforeEach(() => {
    vi.spyOn(window, "open").mockImplementation(() => null as any);
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders name input and role selector", () => {
    render(<UsherTag />, { wrapper });

    expect(screen.getByLabelText(/usher name/i)).toBeInTheDocument();
    expect(screen.getByText(/crew role/i)).toBeInTheDocument();
    expect(screen.getByText(/usher/i)).toBeInTheDocument();
    expect(screen.getByText(/hospitality/i)).toBeInTheDocument();
    expect(screen.getByText(/security/i)).toBeInTheDocument();
    expect(screen.getByText(/protocol/i)).toBeInTheDocument();
  });

  it("updates badge preview when name and role change", async () => {
    render(<UsherTag />, { wrapper });

    const nameInput = screen.getByLabelText(/usher name/i);
    fireEvent.change(nameInput, { target: { value: "Grace Wanjiku" } });

    await waitFor(() => {
      expect(screen.getByText("Grace Wanjiku")).toBeInTheDocument();
    });

    const hospitalityRadio = screen.getByLabelText(/hospitality/i);
    fireEvent.click(hospitalityRadio);

    await waitFor(() => {
      expect(screen.getByText("Hospitality")).toBeInTheDocument();
      expect(screen.getByText("Hospitality")).toBeInTheDocument();
    });
  });

  it("opens print window when Download Tag is clicked", async () => {
    render(<UsherTag />, { wrapper });

    const downloadButton = screen.getByRole("button", { name: /download tag/i });
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining("width=900,height=700"),
        "_blank"
      );
    });
  });

  it("opens print window when Print Tag is clicked", async () => {
    render(<UsherTag />, { wrapper });

    const printButton = screen.getByRole("button", { name: /print tag/i });
    fireEvent.click(printButton);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining("width=900,height=700"),
        "_blank"
      );
    });
  });

  it("shows alert if tag ref is not ready on download", async () => {
    render(<UsherTag />, { wrapper });

    const downloadButton = screen.getByRole("button", { name: /download tag/i });

    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining("still loading")
      );
    });
  });

  it("shows alert if pop-ups are blocked", async () => {
    vi.mocked(window.open).mockReturnValueOnce(null);

    render(<UsherTag />, { wrapper });

    const downloadButton = screen.getByRole("button", { name: /download tag/i });
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining("allow pop-ups")
      );
    });
  });
});
