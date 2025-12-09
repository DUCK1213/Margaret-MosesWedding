import { describe, it, vi, beforeEach, afterEach } from "vitest";
import { downloadElementAsPdf } from "@/lib/pdf";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

vi.mock("jspdf");
vi.mock("html2canvas");

const mockJsPDF = vi.mocked(jsPDF);
const mockHtml2Canvas = vi.mocked(html2canvas);

describe("downloadElementAsPdf", () => {
  let mockElement: HTMLElement;
  let mockPdf: any;

  beforeEach(() => {
    mockElement = document.createElement("div");
    mockElement.scrollWidth = 800;
    mockElement.scrollHeight = 600;

    const mockCanvas = document.createElement("canvas");
    mockCanvas.width = 1600;
    mockCanvas.height = 1200;
    mockCanvas.toDataURL = vi.fn().mockReturnValue("data:image/png;base64,mockimage");

    mockHtml2Canvas.mockResolvedValue(mockCanvas);

    mockPdf = {
      internal: { pageSize: { getWidth: () => 210, getHeight: () => 297 } },
      addImage: vi.fn(),
      save: vi.fn(),
    };
    mockJsPDF.mockImplementation(() => mockPdf);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders element to canvas and creates PDF", async () => {
    await downloadElementAsPdf(mockElement, { filename: "test.pdf" });

    expect(mockHtml2Canvas).toHaveBeenCalledWith(mockElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false,
      windowWidth: 800,
      windowHeight: 600,
    });

    expect(mockJsPDF).toHaveBeenCalledWith({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    expect(mockPdf.addImage).toHaveBeenCalledWith(
      "data:image/png;base64,mockimage",
      "PNG",
      10,
      expect.any(Number),
      expect.any(Number),
      expect.any(Number)
    );

    expect(mockPdf.save).toHaveBeenCalledWith("test.pdf");
  });

  it("supports custom PDF options", async () => {
    await downloadElementAsPdf(mockElement, {
      filename: "custom.pdf",
      format: "a3",
      orientation: "landscape",
      marginMm: 20,
      scale: 3,
    });

    expect(mockJsPDF).toHaveBeenCalledWith({
      orientation: "landscape",
      unit: "mm",
      format: "a3",
    });

    expect(mockHtml2Canvas).toHaveBeenCalledWith(mockElement, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
      logging: false,
      windowWidth: 800,
      windowHeight: 600,
    });

    expect(mockPdf.addImage).toHaveBeenCalledWith(
      expect.any(String),
      "PNG",
      20,
      expect.any(Number),
      expect.any(Number),
      expect.any(Number)
    );
  });

  it("calculates image dimensions to fit page with margins", async () => {
    await downloadElementAsPdf(mockElement, { filename: "test.pdf", marginMm: 15 });

    expect(mockPdf.addImage).toHaveBeenCalledWith(
      expect.any(String),
      "PNG",
      15,
      expect.any(Number),
      180,
      expect.any(Number)
    );
  });

  it("centers image vertically if smaller than available height", async () => {
    await downloadElementAsPdf(mockElement, { filename: "test.pdf" });

    const call = mockPdf.addImage.mock.calls[0];
    const x = call[1];
    const y = call[2];
    const imgWidth = call[3];
    const imgHeight = call[4];

    expect(x).toBe(10);
    expect(imgWidth).toBe(190);
    expect(y).toBeGreaterThan(10);
    expect(y).toBeLessThan(287 - imgHeight);
  });
});
