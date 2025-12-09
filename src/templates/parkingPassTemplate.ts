import { Template } from '@pdfme/common';

export const parkingPassTemplate: Template = {
  pages: [
    {
      name: 'Parking Pass',
      elements: [
        {
          type: 'text',
          name: 'title',
          content: 'PARKING PASS',
          position: { x: 50, y: 30 },
          width: 200,
          height: 20,
          fontSize: 18,
          fontWeight: 'bold',
          align: 'center',
          color: '#2e7d32'
        },
        {
          type: 'text',
          name: 'nameLabel',
          content: 'Name:',
          position: { x: 20, y: 80 },
          width: 60,
          height: 15,
          fontSize: 12,
          fontWeight: 'bold'
        },
        {
          type: 'text',
          name: 'name',
          position: { x: 80, y: 80 },
          width: 150,
          height: 15,
          fontSize: 12,
          align: 'left'
        },
        {
          type: 'text',
          name: 'plateLabel',
          content: 'Plate Number:',
          position: { x: 20, y: 110 },
          width: 60,
          height: 15,
          fontSize: 12,
          fontWeight: 'bold'
        },
        {
          type: 'text',
          name: 'plateNumber',
          position: { x: 80, y: 110 },
          width: 150,
          height: 15,
          fontSize: 12,
          align: 'left'
        },
        {
          type: 'text',
          name: 'passNumberLabel',
          content: 'Pass #:',
          position: { x: 20, y: 140 },
          width: 60,
          height: 15,
          fontSize: 12,
          fontWeight: 'bold'
        },
        {
          type: 'text',
          name: 'passNumber',
          position: { x: 80, y: 140 },
          width: 150,
          height: 15,
          fontSize: 12,
          align: 'left'
        },
        {
          type: 'text',
          name: 'dateLabel',
          content: 'Event Date:',
          position: { x: 20, y: 170 },
          width: 60,
          height: 15,
          fontSize: 12,
          fontWeight: 'bold'
        },
        {
          type: 'text',
          name: 'eventDate',
          position: { x: 80, y: 170 },
          width: 150,
          height: 15,
          fontSize: 12,
          align: 'left'
        },
        {
          type: 'text',
          name: 'locationLabel',
          content: 'Location:',
          position: { x: 20, y: 200 },
          width: 60,
          height: 15,
          fontSize: 12,
          fontWeight: 'bold'
        },
        {
          type: 'text',
          name: 'eventLocation',
          position: { x: 80, y: 200 },
          width: 150,
          height: 15,
          fontSize: 12,
          align: 'left'
        },
        {
          type: 'text',
          name: 'scanLabel',
          content: 'Scan for verification:',
          position: { x: 50, y: 240 },
          width: 120,
          height: 12,
          fontSize: 10,
          align: 'center'
        },
        {
          type: 'text',
          name: 'barcode',
          position: { x: 20, y: 260 },
          width: 210,
          height: 40,
          fontSize: 12,
          align: 'center',
          backgroundColor: '#f0f0f0',
          fontFamily: 'Courier',
          letterSpacing: 2
        },
        {
          type: 'text',
          name: 'footer',
          content: 'This pass must be displayed on the dashboard of the vehicle. Unauthorized vehicles will be towed at owner\'s expense.',
          position: { x: 20, y: 320 },
          width: 210,
          height: 30,
          fontSize: 8,
          align: 'center',
          color: '#666'
        }
      ],
      background: {
        type: 'image',
        base64: '', // Can add background image if needed
        width: 250,
        height: 350
      },
      backgroundColor: '#E4E4E4'
    }
  ],
  schemas: [
    {
      name: 'Parking Pass',
      schema: {
        name: {
          type: 'string',
          title: 'Name',
          required: true
        },
        plateNumber: {
          type: 'string',
          title: 'Plate Number',
          required: true
        },
        passNumber: {
          type: 'string',
          title: 'Pass Number',
          required: true
        },
        eventDate: {
          type: 'string',
          title: 'Event Date',
          required: true
        },
        eventLocation: {
          type: 'string',
          title: 'Event Location',
          required: true
        }
      }
    }
  ]
};
