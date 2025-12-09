import { PDFDownloadLink, PDFViewer, PDFViewerProps, PDFDownloadLinkProps } from '@react-pdf/renderer';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import React, { ReactElement } from 'react';

interface PDFDocumentProps {
  document: ReactElement;
  fileName: string;
  buttonText?: string;
  className?: string;
}

interface PDFDownloadButtonProps {
  document: ReactElement;
  fileName: string;
  buttonText?: string;
  className?: string;
  children?: React.ReactNode;
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  document,
  fileName,
  buttonText = 'Download PDF',
  className = '',
  children,
}) => {
  return (
    <PDFDownloadLink
      document={document}
      fileName={`${fileName.replace(/\s+/g, '_')}.pdf`}
      className="inline-block"
    >
      {({ loading }: { loading: boolean }) => (
        <Button className={`gap-2 ${className}`} disabled={loading}>
          <Download className="h-4 w-4" />
          {children || (loading ? 'Generating...' : buttonText)}
        </Button>
      )}
    </PDFDownloadLink>
  );
};

interface PDFPreviewProps {
  document: ReactElement;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const PDFPreview: React.FC<PDFPreviewProps> = ({
  document,
  width = '100%',
  height = '600px',
  className = '',
}) => {
  return (
    <div className={`w-full border rounded-lg overflow-hidden ${className}`} style={{ height }}>
      <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
        {document}
      </PDFViewer>
    </div>
  );
};

export const generateAndDownloadPDF = async (
  document: ReactElement,
  fileName: string
): Promise<void> => {
  const { pdf } = await import('@react-pdf/renderer');
  const blob = await pdf(document).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName.replace(/\s+/g, '_')}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Type for PDF document components
export type PDFDocumentComponent<T = {}> = React.FC<T> & {
  generatePdf: (props: T) => Promise<Blob>;
  getDataUrl: (props: T) => Promise<string>;
};

// Helper to add PDF generation methods to a component
export function withPdf<T>(
  Component: React.FC<T>
): PDFDocumentComponent<T> {
  const PdfComponent = Component as PDFDocumentComponent<T>;
  
  PdfComponent.generatePdf = async (props: T): Promise<Blob> => {
    const { pdf } = await import('@react-pdf/renderer');
    return pdf(React.createElement(Component, props)).toBlob();
  };
  
  PdfComponent.getDataUrl = async (props: T): Promise<string> => {
    const { pdf } = await import('@react-pdf/renderer');
    const blob = await pdf(React.createElement(Component, props)).toBlob();
    return URL.createObjectURL(blob);
  };
  
  return PdfComponent;
}
