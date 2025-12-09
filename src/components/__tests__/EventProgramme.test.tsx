import { describe, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Sonner } from "@/components/ui/sonner";
import EventProgramme from "@/components/EventProgramme";

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

describe("EventProgramme Download and Print", () => {
  const wrapper = createWrapper();

  beforeEach(() => {
    vi.spyOn(window, "open").mockImplementation(() => null as any);
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders programme sections and download buttons", () => {
    render(<EventProgramme />, { wrapper });

    expect(screen.getByText(/event programme/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /download programme/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /print programme/i })).toBeInTheDocument();
  });

  it("opens print window when Download Programme is clicked", async () => {
    render(<EventProgramme />, { wrapper });

    const downloadButton = screen.getByRole("button", { name: /download programme/i });
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining("width=1000,height=800"),
        "_blank"
      );
    });
  });

  it("opens print window when Print Programme is clicked", async () => {
    render(<EventProgramme />, { wrapper });

    const printButton = screen.getByRole("button", { name: /print programme/i });
    fireEvent.click(printButton);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining("width=1000,height=800"),
        "_blank"
      );
    });
  });

  it("shows alert if programme ref is not ready", async () => {
    render(<EventProgramme />, { wrapper });

    const downloadButton = screen.getByRole("button", { name: /download programme/i });

    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining("not ready yet")
      );
    });
  });

  it("shows alert if pop-ups are blocked", async () => {
    vi.mocked(window.open).mockReturnValueOnce(null);

    render(<EventProgramme />, { wrapper });

    const downloadButton = screen.getByRole("button", { name: /download programme/i });
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining("enable pop-ups")
      );
    });
  });
});
