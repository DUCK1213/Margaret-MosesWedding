import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Car, User, Users, Plus, Trash2 } from 'lucide-react';
import { PDFDownloadButton, PDFPreview } from '@/utils/pdfUtils';
import ParkingPass from './pdf/ParkingPass';
import VolunteerTag from './pdf/VolunteerTag';

const EventPasses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'parking' | 'volunteer'>('parking');
  
  // Sample data - in a real app, this would come from your backend or state management
  const [parkingPasses, setParkingPasses] = useState([
    { id: 1, name: 'John Doe', plateNumber: 'KAA 123A', passNumber: 'P001' },
  ]);

  const [volunteerTags, setVolunteerTags] = useState([
    { id: 1, name: 'Jane Smith', role: 'Usher', idNumber: 'V001', emergencyContact: 'John (555-0123)' },
  ]);

  const addParkingPass = () => {
    const newId = Math.max(0, ...parkingPasses.map(p => p.id)) + 1;
    setParkingPasses([
      ...parkingPasses,
      { 
        id: newId, 
        name: '', 
        plateNumber: '', 
        passNumber: `P${String(newId).padStart(3, '0')}` 
      }
    ]);
  };

  const addVolunteerTag = () => {
    const newId = Math.max(0, ...volunteerTags.map(v => parseInt(v.idNumber.substring(1)))) + 1;
    setVolunteerTags([
      ...volunteerTags,
      { 
        id: newId, 
        name: '', 
        role: 'Volunteer', 
        idNumber: `V${String(newId).padStart(3, '0')}`, 
        emergencyContact: '' 
      }
    ]);
  };

  const updateParkingPass = (id: number, field: string, value: string) => {
    setParkingPasses(parkingPasses.map(pass => 
      pass.id === id ? { ...pass, [field]: value } : pass
    ));
  };

  const updateVolunteerTag = (id: number, field: string, value: string) => {
    setVolunteerTags(volunteerTags.map(tag => 
      tag.id === id ? { ...tag, [field]: value } : tag
    ));
  };

  const removeParkingPass = (id: number) => {
    if (window.confirm('Are you sure you want to remove this parking pass?')) {
      setParkingPasses(parkingPasses.filter(pass => pass.id !== id));
    }
  };

  const removeVolunteerTag = (id: number) => {
    if (window.confirm('Are you sure you want to remove this volunteer tag?')) {
      setVolunteerTags(volunteerTags.filter(tag => tag.id !== id));
    }
  };

  const downloadAllParkingPasses = () => {
    // In a real app, you would implement batch PDF generation
    alert('Batch download would be implemented here');
  };

  const downloadAllVolunteerTags = () => {
    // In a real app, you would implement batch PDF generation
    alert('Batch download would be implemented here');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-emerald-800 mb-6">Event Passes & Tags</h1>
      
      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'parking' ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('parking')}
        >
          <Car className="inline mr-2 h-4 w-4" />
          Parking Passes
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'volunteer' ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('volunteer')}
        >
          <Users className="inline mr-2 h-4 w-4" />
          Volunteer Tags
        </button>
      </div>

      {activeTab === 'parking' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-emerald-800">Parking Passes</h2>
            <div className="space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={addParkingPass}
                className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200"
              >
                <Plus className="h-4 w-4 mr-1" /> Add Pass
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={downloadAllParkingPasses}
                className="border-emerald-200"
              >
                <Download className="h-4 w-4 mr-1" /> Download All
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {parkingPasses.map((pass) => (
              <div key={pass.id} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-gray-800">Parking Pass #{pass.passNumber}</h3>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-red-500 hover:bg-red-50"
                    onClick={() => removeParkingPass(pass.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      value={pass.name}
                      onChange={(e) => updateParkingPass(pass.id, 'name', e.target.value)}
                      placeholder="Pass holder's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Plate Number</label>
                    <input
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      value={pass.plateNumber}
                      onChange={(e) => updateParkingPass(pass.id, 'plateNumber', e.target.value)}
                      placeholder="e.g. KAA 123A"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <PDFDownloadButton
                    pdfDocument={
                      <ParkingPass
                        name={pass.name || 'Guest'}
                        plateNumber={pass.plateNumber || 'Not Specified'}
                        passNumber={pass.passNumber}
                        eventDate="December 12, 2025"
                        eventLocation="Homeland Ruiru Resort"
                      />
                    }
                    fileName={`Parking_Pass_${pass.passNumber}`}
                    buttonText="Download Pass"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'volunteer' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-emerald-800">Volunteer Tags</h2>
            <div className="space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={addVolunteerTag}
                className="bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200"
              >
                <Plus className="h-4 w-4 mr-1" /> Add Volunteer
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={downloadAllVolunteerTags}
                className="border-amber-200"
              >
                <Download className="h-4 w-4 mr-1" /> Download All
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {volunteerTags.map((tag) => (
              <div key={tag.id} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-gray-800">Volunteer ID: {tag.idNumber}</h3>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-red-500 hover:bg-red-50"
                    onClick={() => removeVolunteerTag(tag.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                      value={tag.name}
                      onChange={(e) => updateVolunteerTag(tag.id, 'name', e.target.value)}
                      placeholder="Volunteer's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <select
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                      value={tag.role}
                      onChange={(e) => updateVolunteerTag(tag.id, 'role', e.target.value)}
                    >
                      <option value="Usher">Usher</option>
                      <option value="Greeter">Greeter</option>
                      <option value="Coordinator">Coordinator</option>
                      <option value="Photographer">Photographer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact</label>
                    <input
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                      value={tag.emergencyContact}
                      onChange={(e) => updateVolunteerTag(tag.id, 'emergencyContact', e.target.value)}
                      placeholder="Name & phone number"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <PDFDownloadButton
                    pdfDocument={
                      <VolunteerTag
                        name={tag.name || 'Volunteer'}
                        role={tag.role}
                        idNumber={tag.idNumber}
                        eventName="Margaret & Moses Wedding"
                        eventDate="December 12, 2025"
                        emergencyContact={tag.emergencyContact || 'Not specified'}
                      />
                    }
                    fileName={`Volunteer_Tag_${tag.idNumber}`}
                    buttonText="Download Tag"
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPasses;
