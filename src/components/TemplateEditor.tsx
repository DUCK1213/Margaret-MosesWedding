import React, { useState } from 'react';
import { Template } from '@pdfme/ui';
import { PDFMeService, ParkingPassData, VolunteerTagData } from '@/services/pdfmeService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Eye, Settings } from 'lucide-react';

const TemplateEditor: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'parking' | 'volunteer'>('parking');
  const [templateEditor, setTemplateEditor] = useState<Template | null>(null);

  // Sample data for preview
  const sampleParkingData: ParkingPassData = {
    name: 'John Doe',
    plateNumber: 'KAA 123A',
    passNumber: 'P001',
    eventDate: 'December 12, 2025',
    eventLocation: 'Homeland Ruiru Resort'
  };

  const sampleVolunteerData: VolunteerTagData = {
    name: 'Jane Smith',
    role: 'Usher',
    idNumber: 'V001',
    eventName: 'Margaret & Moses Wedding',
    eventDate: 'December 12, 2025',
    emergencyContact: 'John (555-0123)'
  };

  const handleDownloadParkingPass = async () => {
    try {
      await PDFMeService.generateAndDownloadParkingPass(sampleParkingData);
    } catch (error) {
      console.error('Error downloading parking pass:', error);
      alert('Failed to download parking pass');
    }
  };

  const handleDownloadVolunteerTag = async () => {
    try {
      await PDFMeService.generateAndDownloadVolunteerTag(sampleVolunteerData);
    } catch (error) {
      console.error('Error downloading volunteer tag:', error);
      alert('Failed to download volunteer tag');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-emerald-800 mb-2">PDF Template Editor</h1>
        <p className="text-gray-600">
          Visual template editor for parking passes and volunteer tags using pdfme
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'parking' | 'volunteer')}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="parking">Parking Pass</TabsTrigger>
          <TabsTrigger value="volunteer">Volunteer Tag</TabsTrigger>
        </TabsList>

        <TabsContent value="parking" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Parking Pass Template
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Template Fields</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Name:</span>
                        <span className="font-mono">{sampleParkingData.name}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Plate Number:</span>
                        <span className="font-mono">{sampleParkingData.plateNumber}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Pass Number:</span>
                        <span className="font-mono">{sampleParkingData.passNumber}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Event Date:</span>
                        <span className="font-mono">{sampleParkingData.eventDate}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Location:</span>
                        <span className="font-mono">{sampleParkingData.eventLocation}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Template Preview</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
                      <div className="text-center space-y-2">
                        <div className="bg-green-700 text-white p-2 rounded font-bold">PARKING PASS</div>
                        <div className="text-left space-y-1 text-sm">
                          <div><strong>Name:</strong> {sampleParkingData.name}</div>
                          <div><strong>Plate Number:</strong> {sampleParkingData.plateNumber}</div>
                          <div><strong>Pass #:</strong> {sampleParkingData.passNumber}</div>
                          <div><strong>Event Date:</strong> {sampleParkingData.eventDate}</div>
                          <div><strong>Location:</strong> {sampleParkingData.eventLocation}</div>
                        </div>
                        <div className="bg-gray-200 p-2 text-xs font-mono">
                          PASS-{sampleParkingData.passNumber}-{sampleParkingData.plateNumber.replace(/\s+/g, '')}
                        </div>
                        <div className="text-xs text-gray-600">
                          This pass must be displayed on the dashboard...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleDownloadParkingPass} className="bg-emerald-600 hover:bg-emerald-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download Sample PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="volunteer" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Volunteer Tag Template
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Template Fields</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Name:</span>
                        <span className="font-mono">{sampleVolunteerData.name}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Role:</span>
                        <span className="font-mono">{sampleVolunteerData.role}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>ID Number:</span>
                        <span className="font-mono">{sampleVolunteerData.idNumber}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Event Name:</span>
                        <span className="font-mono">{sampleVolunteerData.eventName}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Event Date:</span>
                        <span className="font-mono">{sampleVolunteerData.eventDate}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Emergency Contact:</span>
                        <span className="font-mono">{sampleVolunteerData.emergencyContact}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Template Preview</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
                      <div className="text-center space-y-2">
                        <div className="bg-green-700 text-white p-2 rounded font-bold">VOLUNTEER</div>
                        <div className="text-sm text-green-700">{sampleVolunteerData.eventName}</div>
                        <div className="bg-gray-200 p-4 text-xs">PHOTO</div>
                        <div className="text-left space-y-1 text-sm">
                          <div><strong>Name:</strong> {sampleVolunteerData.name}</div>
                          <div><strong>Role:</strong> {sampleVolunteerData.role}</div>
                          <div><strong>ID #:</strong> {sampleVolunteerData.idNumber}</div>
                          <div><strong>Date:</strong> {sampleVolunteerData.eventDate}</div>
                          <div><strong>Emergency:</strong> {sampleVolunteerData.emergencyContact}</div>
                        </div>
                        <div className="bg-gray-200 p-2 text-xs font-mono">
                          VOL-{sampleVolunteerData.idNumber}-{sampleVolunteerData.name.substring(0, 3).toUpperCase()}
                        </div>
                        <div className="text-xs text-gray-600">
                          This tag must be worn and visible at all times...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleDownloadVolunteerTag} className="bg-amber-600 hover:bg-amber-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download Sample PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Template Editor Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Current Implementation</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Pre-defined templates for parking passes and volunteer tags</li>
                <li>• Dynamic data binding</li>
                <li>• Automatic barcode generation</li>
                <li>• Professional styling with wedding theme colors</li>
                <li>• Download functionality for generated PDFs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Future Enhancements</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Visual drag-and-drop template editor</li>
                <li>• Real-time preview updates</li>
                <li>• Custom font and color selection</li>
                <li>• Image upload for logos and backgrounds</li>
                <li>• Template save/load functionality</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TemplateEditor;
