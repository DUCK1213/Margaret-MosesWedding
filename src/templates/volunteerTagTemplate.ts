import { Template } from '@pdfme/common';

export const volunteerTagTemplate: Template = {
  pages: [
    {
      name: 'Volunteer Tag',
      elements: [
        {
          type: 'text',
          name: 'title',
          content: 'VOLUNTEER',
          position: { x: 50, y: 20 },
          width: 150,
          height: 18,
          fontSize: 18,
          fontWeight: 'bold',
          align: 'center',
          color: '#2e7d32'
        },
        {
          type: 'text',
          name: 'eventName',
          position: { x: 20, y: 50 },
          width: 210,
          height: 14,
          fontSize: 14,
          align: 'center',
          color: '#2e7d32'
        },
        {
          type: 'rect',
          name: 'photoPlaceholder',
          position: { x: 95, y: 80 },
          width: 60,
          height: 60,
          backgroundColor: '#f0f0f0',
          borderColor: '#ccc',
          borderWidth: 1
        },
        {
          type: 'text',
          name: 'photoText',
          content: 'PHOTO',
          position: { x: 110, y: 105 },
          width: 30,
          height: 10,
          fontSize: 8,
          align: 'center',
          color: '#999'
        },
        {
          type: 'text',
          name: 'nameLabel',
          content: 'Name:',
          position: { x: 20, y: 160 },
          width: 50,
          height: 12,
          fontSize: 12,
          fontWeight: 'bold'
        },
        {
          type: 'text',
          name: 'name',
          position: { x: 70, y: 160 },
          width: 130,
          height: 12,
          fontSize: 12,
          align: 'left'
        },
        {
          type: 'text',
          name: 'roleLabel',
          content: 'Role:',
          position: { x: 20, y: 180 },
          width: 50,
          height: 12,
          fontSize: 12,
          fontWeight: 'bold'
        },
        {
          type: 'text',
          name: 'role',
          position: { x: 70, y: 180 },
          width: 130,
          height: 12,
          fontSize: 12,
          align: 'left'
        },
        {
          type: 'text',
          name: 'idLabel',
          content: 'ID #:',
          position: { x: 20, y: 200 },
          width: 50,
          height: 12,
          fontSize: 12,
          fontWeight: 'bold'
        },
        {
          type: 'text',
          name: 'idNumber',
          position: { x: 70, y: 200 },
          width: 130,
          height: 12,
          fontSize: 12,
          align: 'left'
        },
        {
          type: 'text',
          name: 'dateLabel',
          content: 'Date:',
          position: { x: 20, y: 220 },
          width: 50,
          height: 12,
          fontSize: 12,
          fontWeight: 'bold'
        },
        {
          type: 'text',
          name: 'eventDate',
          position: { x: 70, y: 220 },
          width: 130,
          height: 12,
          fontSize: 12,
          align: 'left'
        },
        {
          type: 'text',
          name: 'emergencyLabel',
          content: 'Emergency:',
          position: { x: 20, y: 240 },
          width: 50,
          height: 12,
          fontSize: 12,
          fontWeight: 'bold'
        },
        {
          type: 'text',
          name: 'emergencyContact',
          position: { x: 70, y: 240 },
          width: 130,
          height: 12,
          fontSize: 12,
          align: 'left'
        },
        {
          type: 'text',
          name: 'barcode',
          position: { x: 20, y: 270 },
          width: 210,
          height: 30,
          fontSize: 10,
          align: 'center',
          backgroundColor: '#f0f0f0',
          fontFamily: 'Courier',
          letterSpacing: 1
        },
        {
          type: 'text',
          name: 'footer',
          content: 'This tag must be worn and visible at all times during the event.',
          position: { x: 20, y: 310 },
          width: 210,
          height: 20,
          fontSize: 8,
          align: 'center',
          color: '#666'
        }
      ],
      background: {
        type: 'image',
        base64: '', // Can add background image if needed
        width: 250,
        height: 340
      },
      backgroundColor: '#E4E4E4'
    }
  ],
  schemas: [
    {
      name: 'Volunteer Tag',
      schema: {
        name: {
          type: 'string',
          title: 'Name',
          required: true
        },
        role: {
          type: 'string',
          title: 'Role',
          required: true
        },
        idNumber: {
          type: 'string',
          title: 'ID Number',
          required: true
        },
        eventName: {
          type: 'string',
          title: 'Event Name',
          required: true
        },
        eventDate: {
          type: 'string',
          title: 'Event Date',
          required: true
        },
        emergencyContact: {
          type: 'string',
          title: 'Emergency Contact',
          required: true
        }
      }
    }
  ]
};
