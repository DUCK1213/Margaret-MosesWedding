import { Template } from '@pdfme/common';

export const volunteerTagTemplate: Template = {
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
        content: 'VOLUNTEER',
        position: { x: 50, y: 20 },
        width: 110,
        height: 18,
        fontSize: 18,
        fontWeight: 'bold',
        align: 'center',
        color: '#2e7d32'
      },
      {
        name: 'eventName',
        type: 'text',
        position: { x: 20, y: 50 },
        width: 170,
        height: 14,
        fontSize: 14,
        align: 'center',
        color: '#2e7d32'
      },
      {
        name: 'photoPlaceholder',
        type: 'text',
        content: '[PHOTO]',
        position: { x: 75, y: 80 },
        width: 60,
        height: 60,
        fontSize: 10,
        align: 'center',
        backgroundColor: '#f0f0f0',
        verticalAlign: 'middle'
      },
      {
        name: 'nameLabel',
        type: 'text',
        content: 'Name:',
        position: { x: 20, y: 160 },
        width: 40,
        height: 12,
        fontSize: 12,
        fontWeight: 'bold'
      },
      {
        name: 'name',
        type: 'text',
        position: { x: 60, y: 160 },
        width: 100,
        height: 12,
        fontSize: 12
      },
      {
        name: 'roleLabel',
        type: 'text',
        content: 'Role:',
        position: { x: 20, y: 180 },
        width: 40,
        height: 12,
        fontSize: 12,
        fontWeight: 'bold'
      },
      {
        name: 'role',
        type: 'text',
        position: { x: 60, y: 180 },
        width: 100,
        height: 12,
        fontSize: 12
      },
      {
        name: 'idLabel',
        type: 'text',
        content: 'ID #:',
        position: { x: 20, y: 200 },
        width: 40,
        height: 12,
        fontSize: 12,
        fontWeight: 'bold'
      },
      {
        name: 'idNumber',
        type: 'text',
        position: { x: 60, y: 200 },
        width: 100,
        height: 12,
        fontSize: 12
      },
      {
        name: 'dateLabel',
        type: 'text',
        content: 'Date:',
        position: { x: 20, y: 220 },
        width: 40,
        height: 12,
        fontSize: 12,
        fontWeight: 'bold'
      },
      {
        name: 'eventDate',
        type: 'text',
        position: { x: 60, y: 220 },
        width: 100,
        height: 12,
        fontSize: 12
      },
      {
        name: 'emergencyLabel',
        type: 'text',
        content: 'Emergency:',
        position: { x: 20, y: 240 },
        width: 40,
        height: 12,
        fontSize: 12,
        fontWeight: 'bold'
      },
      {
        name: 'emergencyContact',
        type: 'text',
        position: { x: 60, y: 240 },
        width: 100,
        height: 12,
        fontSize: 12
      },
      {
        name: 'barcode',
        type: 'text',
        position: { x: 20, y: 270 },
        width: 170,
        height: 30,
        fontSize: 10,
        align: 'center',
        backgroundColor: '#f0f0f0'
      },
      {
        name: 'footer',
        type: 'text',
        content: 'This tag must be worn and visible at all times during the event.',
        position: { x: 20, y: 310 },
        width: 170,
        height: 20,
        fontSize: 8,
        align: 'center',
        color: '#666'
      }
    ]
  ]
};
