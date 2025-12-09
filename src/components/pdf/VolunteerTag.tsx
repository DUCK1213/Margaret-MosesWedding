import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 20,
    flexGrow: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    borderTop: '10px solid #d4af37',
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    color: '#2e7d32',
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottom: '2px solid #d4af37',
    paddingBottom: 10,
  },
  subheader: {
    fontSize: 14,
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 15,
  },
  content: {
    marginTop: 10,
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: '40%',
    fontWeight: 'bold',
  },
  value: {
    width: '60%',
  },
  barcode: {
    width: '100%',
    height: 40,
    backgroundColor: '#f0f0f0',
    marginTop: 10,
    textAlign: 'center',
    padding: 8,
    fontFamily: 'Courier',
    letterSpacing: 1,
    fontSize: 10,
  },
  footer: {
    fontSize: 8,
    textAlign: 'center',
    marginTop: 15,
    color: '#666',
  },
  photoPlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#f0f0f0',
    margin: '10px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 8,
    color: '#999',
  },
});

interface VolunteerTagProps {
  name: string;
  role: string;
  idNumber: string;
  eventName: string;
  eventDate: string;
  emergencyContact: string;
}

const VolunteerTag: React.FC<VolunteerTagProps> = ({
  name,
  role,
  idNumber,
  eventName,
  eventDate,
  emergencyContact,
}) => (
  <Document>
    <Page size="A7" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>VOLUNTEER</Text>
        <Text style={styles.subheader}>{eventName}</Text>
        
        <View style={styles.photoPlaceholder}>
          <Text>PHOTO</Text>
        </View>
        
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Role:</Text>
            <Text style={styles.value}>{role}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>ID #:</Text>
            <Text style={styles.value}>{idNumber}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>{eventDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Emergency:</Text>
            <Text style={styles.value}>{emergencyContact}</Text>
          </View>
          
          <View style={{ marginTop: 10, alignItems: 'center' }}>
            <View style={styles.barcode}>
              VOL-{idNumber}-{name.substring(0, 3).toUpperCase()}
            </View>
          </View>
          
          <Text style={styles.footer}>
            This tag must be worn and visible at all times during the event.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default VolunteerTag;
