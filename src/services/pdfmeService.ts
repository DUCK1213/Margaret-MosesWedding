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
          title: 'PARKING PASS',
          nameLabel: 'Name:',
          name: data.name,
          plateLabel: 'Plate Number:',
          plateNumber: data.plateNumber,
          passNumberLabel: 'Pass #:',
          passNumber: data.passNumber,
          dateLabel: 'Event Date:',
          eventDate: data.eventDate,
          locationLabel: 'Location:',
          eventLocation: data.eventLocation,
          scanLabel: 'Scan for verification:',
          barcode: `PASS-${data.passNumber}-${data.plateNumber.replace(/\s+/g, '')}`,
          footer: 'This pass must be displayed on the dashboard of the vehicle. Unauthorized vehicles will be towed at owner\'s expense.'
        }
      ];

      const pdf = await generate({
        template: parkingPassTemplate,
        inputs
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
          title: 'VOLUNTEER',
          eventName: data.eventName,
          photoPlaceholder: '[PHOTO]',
          nameLabel: 'Name:',
          name: data.name,
          roleLabel: 'Role:',
          role: data.role,
          idLabel: 'ID #:',
          idNumber: data.idNumber,
          dateLabel: 'Date:',
          eventDate: data.eventDate,
          emergencyLabel: 'Emergency:',
          emergencyContact: data.emergencyContact,
          barcode: `VOL-${data.idNumber}-${data.name.substring(0, 3).toUpperCase()}`,
          footer: 'This tag must be worn and visible at all times during the event.'
        }
      ];

      const pdf = await generate({
        template: volunteerTagTemplate,
        inputs
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
