import { generate } from '@pdfme/generator';
import { parkingPassTemplate } from '@/templates/parkingPassTemplate';
import { volunteerTagTemplate } from '@/templates/volunteerTagTemplate';

export interface ParkingPassData {
  name: string;
  plateNumber: string;
  passNumber: string;
  eventDate: string;
  eventLocation: string;
}

export interface VolunteerTagData {
  name: string;
  role: string;
  idNumber: string;
  eventName: string;
  eventDate: string;
  emergencyContact: string;
}

export class PDFMeService {
  static async generateParkingPass(data: ParkingPassData): Promise<Uint8Array> {
    try {
      const inputs = [
        {
          name: data.name,
          plateNumber: data.plateNumber,
          passNumber: data.passNumber,
          eventDate: data.eventDate,
          eventLocation: data.eventLocation,
          barcode: `PASS-${data.passNumber}-${data.plateNumber.replace(/\s+/g, '')}`
        }
      ];

      const pdf = await generate({
        template: parkingPassTemplate,
        inputs,
        options: {
          font: {
            defaultFont: {
              data: new ArrayBuffer(0), // Will use default font
              fallback: true
            }
          }
        }
      });

      return pdf;
    } catch (error) {
      console.error('Error generating parking pass:', error);
      throw new Error('Failed to generate parking pass PDF');
    }
  }

  static async generateVolunteerTag(data: VolunteerTagData): Promise<Uint8Array> {
    try {
      const inputs = [
        {
          name: data.name,
          role: data.role,
          idNumber: data.idNumber,
          eventName: data.eventName,
          eventDate: data.eventDate,
          emergencyContact: data.emergencyContact,
          barcode: `VOL-${data.idNumber}-${data.name.substring(0, 3).toUpperCase()}`
        }
      ];

      const pdf = await generate({
        template: volunteerTagTemplate,
        inputs,
        options: {
          font: {
            defaultFont: {
              data: new ArrayBuffer(0), // Will use default font
              fallback: true
            }
          }
        }
      });

      return pdf;
    } catch (error) {
      console.error('Error generating volunteer tag:', error);
      throw new Error('Failed to generate volunteer tag PDF');
    }
  }

  static downloadPDF(pdfData: Uint8Array, filename: string): void {
    const blob = new Blob([pdfData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  static async generateAndDownloadParkingPass(data: ParkingPassData): Promise<void> {
    try {
      const pdfData = await this.generateParkingPass(data);
      const filename = `Parking_Pass_${data.passNumber.replace(/\s+/g, '_')}.pdf`;
      this.downloadPDF(pdfData, filename);
    } catch (error) {
      console.error('Error generating and downloading parking pass:', error);
      throw error;
    }
  }

  static async generateAndDownloadVolunteerTag(data: VolunteerTagData): Promise<void> {
    try {
      const pdfData = await this.generateVolunteerTag(data);
      const filename = `Volunteer_Tag_${data.idNumber.replace(/\s+/g, '_')}.pdf`;
      this.downloadPDF(pdfData, filename);
    } catch (error) {
      console.error('Error generating and downloading volunteer tag:', error);
      throw error;
    }
  }
}
