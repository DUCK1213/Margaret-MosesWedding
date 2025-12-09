import { describe, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Sonner } from "@/components/ui/sonner";
import ParkingPass from "@/components/ParkingPass";

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

describe("ParkingPass Download and Print", () => {
  const wrapper = createWrapper();

  beforeEach(() => {
    vi.spyOn(window, "open").mockImplementation(() => null as any);
    vi.spyOn(window, "alert").mockImplementation(() => {});
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({}),
    } as Response);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders parking pass form and action buttons", () => {
    render(<ParkingPass />, { wrapper });

    expect(screen.getByLabelText(/guest name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/plate number/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save as pdf/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /print pass/i })).toBeInTheDocument();
  });

  it("updates pass preview when form fields are filled", async () => {
    render(<ParkingPass />, { wrapper });

    const nameInput = screen.getByLabelText(/guest name/i);
    const phoneInput = screen.getByLabelText(/phone number/i);
    const plateInput = screen.getByLabelText(/plate number/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(phoneInput, { target: { value: "0712345678" } });
    fireEvent.change(plateInput, { target: { value: "KAB 123C" } });

    await waitFor(() => {
      expect(nameInput).toHaveValue("John Doe");
      expect(phoneInput).toHaveValue("0712345678");
      expect(plateInput).toHaveValue("KAB 123C");
    });
  });

  it("opens print window when Save as PDF is clicked", async () => {
    render(<ParkingPass />, { wrapper });

    const downloadButton = screen.getByRole("button", { name: /save as pdf/i });
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining("width=900,height=700"),
        "_blank"
      );
    });
  });

  it("opens print window when Print Pass is clicked", async () => {
    render(<ParkingPass />, { wrapper });

    const printButton = screen.getByRole("button", { name: /print pass/i });
    fireEvent.click(printButton);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining("width=900,height=700"),
        "_blank"
      );
    });
  });

  it("shows alert if pass ref is not ready", async () => {
    render(<ParkingPass />, { wrapper });

    const downloadButton = screen.getByRole("button", { name: /save as pdf/i });

    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining("not ready yet")
      );
    });
  });

  it("shows alert if pop-ups are blocked", async () => {
    vi.mocked(window.open).mockReturnValueOnce(null);

    render(<ParkingPass />, { wrapper });

    const downloadButton = screen.getByRole("button", { name: /save as pdf/i });
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining("allow pop-ups")
      );
    });
  });

  it("submits form data to netlify function on download", async () => {
    render(<ParkingPass />, { wrapper });

    const nameInput = screen.getByLabelText(/guest name/i);
    const phoneInput = screen.getByLabelText(/phone number/i);
    const plateInput = screen.getByLabelText(/plate number/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(phoneInput, { target: { value: "0712345678" } });
    fireEvent.change(plateInput, { target: { value: "KAB 123C" } });

    const downloadButton = screen.getByRole("button", { name: /save as pdf/i });
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "/.netlify/functions/parking-log",
        expect.objectContaining({
          method: "POST",
          body: expect.stringContaining("John Doe"),
        })
      );
    });
  });
});
