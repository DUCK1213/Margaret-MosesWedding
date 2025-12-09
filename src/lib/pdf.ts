import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type JsPDFOptions = ConstructorParameters<typeof jsPDF>[0];

type PdfOptions = {
  filename: string;
  format?: JsPDFOptions["format"];
  orientation?: JsPDFOptions["orientation"];
  marginMm?: number;
  scale?: number;
};

export const downloadElementAsPdf = async (
  element: HTMLElement,
  { filename, format = "a4", orientation = "portrait", marginMm = 10, scale = 2 }: PdfOptions,
) => {
  const canvas = await html2canvas(element, {
    scale,
    useCORS: true,
    backgroundColor: null,
    logging: false,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  });

  const imgData = canvas.toDataURL("image/png", 1.0);
  const pdf = new jsPDF({
    orientation,
    unit: "mm",
    format,
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const printableWidth = pageWidth - marginMm * 2;
  const ratio = printableWidth / canvas.width;
  const imgWidth = printableWidth;
  const imgHeight = canvas.height * ratio;
  const x = marginMm;
  const availableHeight = pageHeight - marginMm * 2;
  const y = marginMm + Math.max(0, (availableHeight - imgHeight) / 2);

  pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
  pdf.save(filename);
};

export default downloadElementAsPdf;
