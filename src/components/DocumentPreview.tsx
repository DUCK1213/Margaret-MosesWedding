import React, { useState } from 'react';
import { PDFMeService } from '@/services/pdfmeService';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';

const DocumentPreview: React.FC = () => {
  const [activeDocument, setActiveDocument] = useState<'parking' | 'volunteer'>('parking');

  // Sample data for demonstration
  const sampleParkingPass = {
    name: 'John Doe',
    plateNumber: 'KAA 123A',
    passNumber: 'P001',
    eventDate: 'December 12, 2025',
    eventLocation: 'Homeland Ruiru Resort'
  };

  const sampleVolunteerTag = {
    name: 'Jane Smith',
    role: 'Usher',
    idNumber: 'V001',
    eventName: 'Margaret & Moses Wedding',
    eventDate: 'December 12, 2025',
    emergencyContact: 'John (555-0123)'
  };

  const handleDownloadParkingPass = async () => {
    try {
      await PDFMeService.generateAndDownloadParkingPass(sampleParkingPass);
    } catch (error) {
      console.error('Error downloading parking pass:', error);
      alert('Failed to download parking pass');
    }
  };

  const handleDownloadVolunteerTag = async () => {
    try {
      await PDFMeService.generateAndDownloadVolunteerTag(sampleVolunteerTag);
    } catch (error) {
      console.error('Error downloading volunteer tag:', error);
      alert('Failed to download volunteer tag');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-emerald-800 mb-6">Document Preview</h1>
      
      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 font-medium ${
            activeDocument === 'parking'
              ? 'text-emerald-700 border-b-2 border-emerald-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveDocument('parking')}
        >
          <Eye className="inline mr-2 h-4 w-4" />
          Parking Pass
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeDocument === 'volunteer'
              ? 'text-emerald-700 border-b-2 border-emerald-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveDocument('volunteer')}
        >
          <Eye className="inline mr-2 h-4 w-4" />
          Volunteer Tag
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Document Preview */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Preview</h2>
          <div className="border rounded-lg overflow-hidden bg-gray-50 p-8">
            {activeDocument === 'parking' ? (
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-green-700 border-b-2 border-yellow-400 pb-2">
                    PARKING PASS
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="font-bold w-24">Name:</span>
                    <span>{sampleParkingPass.name}</span>
                  </div>
                  <div className="flex">
                    <span className="font-bold w-24">Plate Number:</span>
                    <span>{sampleParkingPass.plateNumber}</span>
                  </div>
                  <div className="flex">
                    <span className="font-bold w-24">Pass #:</span>
                    <span>{sampleParkingPass.passNumber}</span>
                  </div>
                  <div className="flex">
                    <span className="font-bold w-24">Event Date:</span>
                    <span>{sampleParkingPass.eventDate}</span>
                  </div>
                  <div className="flex">
                    <span className="font-bold w-24">Location:</span>
                    <span>{sampleParkingPass.eventLocation}</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-600 mb-2">Scan for verification:</div>
                  <div className="bg-gray-200 p-2 text-xs font-mono">
                    PASS-{sampleParkingPass.passNumber}-{sampleParkingPass.plateNumber.replace(/\s+/g, '')}
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-600 text-center">
                  This pass must be displayed on the dashboard of the vehicle. Unauthorized vehicles will be towed at owner's expense.
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-green-700 border-b-2 border-yellow-400 pb-2">
                    VOLUNTEER
                  </div>
                  <div className="text-sm text-green-700 mt-1">{sampleVolunteerTag.eventName}</div>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-200 w-16 h-16 flex items-center justify-center text-xs">
                    PHOTO
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="font-bold w-24">Name:</span>
                    <span>{sampleVolunteerTag.name}</span>
                  </div>
                  <div className="flex">
                    <span className="font-bold w-24">Role:</span>
                    <span>{sampleVolunteerTag.role}</span>
                  </div>
                  <div className="flex">
                    <span className="font-bold w-24">ID #:</span>
                    <span>{sampleVolunteerTag.idNumber}</span>
                  </div>
                  <div className="flex">
                    <span className="font-bold w-24">Date:</span>
                    <span>{sampleVolunteerTag.eventDate}</span>
                  </div>
                  <div className="flex">
                    <span className="font-bold w-24">Emergency:</span>
                    <span>{sampleVolunteerTag.emergencyContact}</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="bg-gray-200 p-2 text-xs font-mono">
                    VOL-{sampleVolunteerTag.idNumber}-{sampleVolunteerTag.name.substring(0, 3).toUpperCase()}
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-600 text-center">
                  This tag must be worn and visible at all times during the event.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Document Details */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Document Details</h2>
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            {activeDocument === 'parking' ? (
              <div>
                <h3 className="text-lg font-medium text-emerald-700 mb-4">Parking Pass Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium text-gray-600">Pass Number:</span>
                    <span className="text-gray-900">{sampleParkingPass.passNumber}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium text-gray-600">Name:</span>
                    <span className="text-gray-900">{sampleParkingPass.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium text-gray-600">Plate Number:</span>
                    <span className="text-gray-900">{sampleParkingPass.plateNumber}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium text-gray-600">Event Date:</span>
                    <span className="text-gray-900">{sampleParkingPass.eventDate}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium text-gray-600">Location:</span>
                    <span className="text-gray-900">{sampleParkingPass.eventLocation}</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-700">
                    <strong>Note:</strong> This pass must be displayed on the dashboard of the vehicle. 
                    Unauthorized vehicles will be towed at owner's expense.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-medium text-amber-700 mb-4">Volunteer Tag Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium text-gray-600">ID Number:</span>
                    <span className="text-gray-900">{sampleVolunteerTag.idNumber}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium text-gray-600">Name:</span>
                    <span className="text-gray-900">{sampleVolunteerTag.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium text-gray-600">Role:</span>
                    <span className="text-gray-900">{sampleVolunteerTag.role}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium text-gray-600">Event:</span>
                    <span className="text-gray-900">{sampleVolunteerTag.eventName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium text-gray-600">Date:</span>
                    <span className="text-gray-900">{sampleVolunteerTag.eventDate}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium text-gray-600">Emergency Contact:</span>
                    <span className="text-gray-900">{sampleVolunteerTag.emergencyContact}</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-700">
                    <strong>Note:</strong> This tag must be worn and visible at all times during the event.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        <Button
          onClick={activeDocument === 'parking' ? handleDownloadParkingPass : handleDownloadVolunteerTag}
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default DocumentPreview;
