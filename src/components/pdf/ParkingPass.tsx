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
    borderLeft: '10px solid #2e7d32',
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
    height: 50,
    backgroundColor: '#f0f0f0',
    marginTop: 10,
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Courier',
    letterSpacing: 2,
  },
  footer: {
    fontSize: 8,
    textAlign: 'center',
    marginTop: 15,
    color: '#666',
  },
});

interface ParkingPassProps {
  name: string;
  plateNumber: string;
  passNumber: string;
  eventDate: string;
  eventLocation: string;
}

const ParkingPass: React.FC<ParkingPassProps> = ({
  name,
  plateNumber,
  passNumber,
  eventDate,
  eventLocation,
}) => (
  <Document>
    <Page size="A6" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>PARKING PASS</Text>
        
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Plate Number:</Text>
            <Text style={styles.value}>{plateNumber}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Pass #:</Text>
            <Text style={styles.value}>{passNumber}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Event Date:</Text>
            <Text style={styles.value}>{eventDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.value}>{eventLocation}</Text>
          </View>
          
          <View style={{ marginTop: 15, alignItems: 'center' }}>
            <Text style={{ fontSize: 10, marginBottom: 5 }}>Scan for verification:</Text>
            <View style={styles.barcode}>
              PASS-{passNumber}-{plateNumber.replace(/\s+/g, '')}
            </View>
          </View>
          
          <Text style={styles.footer}>
            This pass must be displayed on the dashboard of the vehicle. Unauthorized vehicles will be towed at owner's expense.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default ParkingPass;
