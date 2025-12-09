import { Template } from '@pdfme/common';

export const parkingPassTemplate: Template = {
  basePdf: {
    width: 210,
    height: 297,
    padding: [20, 20, 20, 20]
  },
  schemas: [
    [
      {
        name: 'title',
        type: 'text',
        position: { x: 50, y: 30 },
        width: 110,
        height: 20,
        fontSize: 18,
        fontWeight: 'bold',
        align: 'center',
        color: '#2e7d32'
      },
      {
        name: 'nameLabel',
        type: 'text',
        content: 'Name:',
        position: { x: 20, y: 80 },
        width: 40,
        height: 15,
        fontSize: 12,
        fontWeight: 'bold'
      },
      {
        name: 'name',
        type: 'text',
        position: { x: 60, y: 80 },
        width: 100,
        height: 15,
        fontSize: 12
      },
      {
        name: 'plateLabel',
        type: 'text',
        content: 'Plate Number:',
        position: { x: 20, y: 110 },
        width: 40,
        height: 15,
        fontSize: 12,
        fontWeight: 'bold'
      },
      {
        name: 'plateNumber',
        type: 'text',
        position: { x: 60, y: 110 },
        width: 100,
        height: 15,
        fontSize: 12
      },
      {
        name: 'passNumberLabel',
        type: 'text',
        content: 'Pass #:',
        position: { x: 20, y: 140 },
        width: 40,
        height: 15,
        fontSize: 12,
        fontWeight: 'bold'
      },
      {
        name: 'passNumber',
        type: 'text',
        position: { x: 60, y: 140 },
        width: 100,
        height: 15,
        fontSize: 12
      },
      {
        name: 'dateLabel',
        type: 'text',
        content: 'Event Date:',
        position: { x: 20, y: 170 },
        width: 40,
        height: 15,
        fontSize: 12,
        fontWeight: 'bold'
      },
      {
        name: 'eventDate',
        type: 'text',
        position: { x: 60, y: 170 },
        width: 100,
        height: 15,
        fontSize: 12
      },
      {
        name: 'locationLabel',
        type: 'text',
        content: 'Location:',
        position: { x: 20, y: 200 },
        width: 40,
        height: 15,
        fontSize: 12,
        fontWeight: 'bold'
      },
      {
        name: 'eventLocation',
        type: 'text',
        position: { x: 60, y: 200 },
        width: 100,
        height: 15,
        fontSize: 12
      },
      {
        name: 'scanLabel',
        type: 'text',
        content: 'Scan for verification:',
        position: { x: 35, y: 240 },
        width: 140,
        height: 12,
        fontSize: 10,
        align: 'center'
      },
      {
        name: 'barcode',
        type: 'text',
        position: { x: 20, y: 260 },
        width: 170,
        height: 40,
        fontSize: 12,
        align: 'center',
        backgroundColor: '#f0f0f0'
      },
      {
        name: 'footer',
        type: 'text',
        content: 'This pass must be displayed on the dashboard of the vehicle. Unauthorized vehicles will be towed at owner\'s expense.',
        position: { x: 20, y: 320 },
        width: 170,
        height: 30,
        fontSize: 8,
        align: 'center',
        color: '#666'
      }
    ]
  ]
};
