import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Plus, Trash2, Check, User, MapPin, Briefcase, DollarSign, Eye } from 'lucide-react';

const RegisterPage = () => {
  const [role, setRole] = useState(null);
  const [step, setStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info (Required: *, Optional: no *)
    enrollment: 'New', // * New/Existing
    surname: '', // *
    firstName: '', // *
    middleName: '', // optional
    extensionName: '', // optional
    sex: '', // *
    addressHouseNo: '', // optional
    addressStreet: '', // optional
    addressBarangay: '', // *
    addressMunicipality: '', // *
    addressProvince: '', // *
    addressRegion: '', // *
    contactNumber: '', // *
    dob: '', // *
    pob: '', // *
    religion: '', // optional
    education: '', // *
    pwd: false, // *
    civilStatus: '', // *
    spouseName: '', // conditional if married
    motherMaidenName: '', // *
    fourPs: false, // *
    fourPsSpecify: '', // conditional
    indigenous: false, // *
    indigenousSpecify: '', // conditional
    govId: false, // *
    govIdNumber: '', // conditional
    farmAssoc: false, // *
    farmAssocSpecify: '', // conditional
    householdHead: false, // *
    householdHeadName: '', // conditional
    householdRelationship: '', // conditional
    householdMale: 0, // *
    householdFemale: 0, // *
    emergencyContact: '', // optional
    emergencyNumber: '', // optional
    // Livelihood (varies by role)
    mainLivelihood: '', // set by role
    farmingActivities: { rice: 0, corn: 0, otherCrops: [] }, // for Farmer/Agri-Youth
    livestock: [], // for Farmer/Agri-Youth
    poultry: [], // for Farmer/Agri-Youth
    workTypes: [], // for Farm Worker
    otherWork: [], // for Farm Worker
    fishingTypes: [], // for Fisherfolk
    otherFishing: [], // for Fisherfolk
    farmParcels: Array(3).fill().map(() => ({ 
      location: '', 
      area: 0, 
      docNo: '', 
      ownershipType: '', 
      ownerName: '', 
      arb: false, 
      farmType: '', 
      organic: false, 
      commodity: '', 
      heads: 0, 
      animalType: '' 
    })), // for Farmer, Farm Worker, Agri-Youth
    // Financial
    grossFarmingIncome: 0, // *
    grossNonFarmingIncome: 0, // *
    rsbsaReference: '', // optional
    tinNumber: '', // optional
    profession: '', // optional
    sourceOfFunds: '', // optional
  });

  const roles = ['Farmer', 'Fisherfolk', 'Farm Worker/Laborer', 'Agri-Youth'];

  const updateFormData = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const addOtherCrop = () => {
    setFormData(prev => ({
      ...prev,
      farmingActivities: { 
        ...prev.farmingActivities, 
        otherCrops: [...prev.farmingActivities.otherCrops, { name: '', value: 0 }] 
      }
    }));
  };

  const updateOtherCrop = (index, field, value) => {
    const newCrops = [...formData.farmingActivities.otherCrops];
    newCrops[index][field] = value;
    setFormData(prev => ({ 
      ...prev, 
      farmingActivities: { ...prev.farmingActivities, otherCrops: newCrops } 
    }));
  };

  const removeOtherCrop = (index) => {
    const newCrops = formData.farmingActivities.otherCrops.filter((_, i) => i !== index);
    setFormData(prev => ({ 
      ...prev, 
      farmingActivities: { ...prev.farmingActivities, otherCrops: newCrops } 
    }));
  };

  const addLivestock = () => {
    setFormData(prev => ({ ...prev, livestock: [...prev.livestock, { type: '', heads: 0 }] }));
  };

  const updateLivestock = (index, field, value) => {
    const newLivestock = [...formData.livestock];
    newLivestock[index][field] = value;
    setFormData(prev => ({ ...prev, livestock: newLivestock }));
  };

  const removeLivestock = (index) => {
    const newLivestock = formData.livestock.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, livestock: newLivestock }));
  };

  const addPoultry = () => {
    setFormData(prev => ({ ...prev, poultry: [...prev.poultry, { type: '', heads: 0 }] }));
  };

  const updatePoultry = (index, field, value) => {
    const newPoultry = [...formData.poultry];
    newPoultry[index][field] = value;
    setFormData(prev => ({ ...prev, poultry: newPoultry }));
  };

  const removePoultry = (index) => {
    const newPoultry = formData.poultry.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, poultry: newPoultry }));
  };

  const addWork = () => {
    setFormData(prev => ({ ...prev, otherWork: [...prev.otherWork, ''] }));
  };

  const updateWork = (index, value) => {
    const newWork = [...formData.otherWork];
    newWork[index] = value;
    setFormData(prev => ({ ...prev, otherWork: newWork }));
  };

  const removeWork = (index) => {
    const newWork = formData.otherWork.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, otherWork: newWork }));
  };

  const addFishing = () => {
    setFormData(prev => ({ ...prev, otherFishing: [...prev.otherFishing, ''] }));
  };

  const updateFishing = (index, value) => {
    const newFishing = [...formData.otherFishing];
    newFishing[index] = value;
    setFormData(prev => ({ ...prev, otherFishing: newFishing }));
  };

  const removeFishing = (index) => {
    const newFishing = formData.otherFishing.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, otherFishing: newFishing }));
  };

  const updateParcel = (index, field, value) => {
    const newParcels = [...formData.farmParcels];
    newParcels[index][field] = value;
    setFormData(prev => ({ ...prev, farmParcels: newParcels }));
  };

  const handleSubmit = () => {
    setShowModal(true);
    console.log(formData);
  };

  const tabs = ['personal', 'address', 'livelihood', 'financial', 'preview'];
  const tabTitles = ['Personal Info', 'Address', 'Livelihood', 'Financial', 'Preview'];

  if (!role) {
    return (
      <div className="min-h-screen bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#1e1e1e] border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-2xl mb-2">RSBSA Registration</CardTitle>
              <CardDescription className="text-gray-400">Select your role to begin registration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {roles.map(r => (
                  <div 
                    key={r} 
                    className="bg-[#252525] border border-[#333333] rounded-lg p-6 cursor-pointer hover:bg-[#333333] transition-colors"
                    onClick={() => { 
                      setRole(r); 
                      setFormData(prev => ({ ...prev, mainLivelihood: r })); 
                    }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-medium mb-2">{r}</h3>
                      <input 
                        type="radio" 
                        name="role" 
                        value={r} 
                        checked={role === r} 
                        readOnly 
                        className="h-4 w-4 text-blue-600" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
        <h3 className="text-white font-medium mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Enrollment Type*</label>
            <select 
              name="enrollment" 
              value={formData.enrollment} 
              onChange={updateFormData}
              className="w-full h-10 px-3 py-2 bg-[#2a2a2a] border border-[#333333] rounded-md text-white"
            >
              <option value="New">New</option>
              <option value="Existing">Existing</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Surname*</label>
            <Input 
              name="surname" 
              value={formData.surname} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="Last Name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">First Name*</label>
            <Input 
              name="firstName" 
              value={formData.firstName} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="First Name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Middle Name</label>
            <Input 
              name="middleName" 
              value={formData.middleName} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="Middle Name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Extension Name</label>
            <Input 
              name="extensionName" 
              value={formData.extensionName} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="Jr., Sr., III, etc."
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Sex*</label>
            <div className="flex gap-4 mt-2">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="male" 
                  name="sex" 
                  value="Male" 
                  checked={formData.sex === 'Male'} 
                  onChange={updateFormData} 
                  className="h-4 w-4 text-blue-600" 
                />
                <label htmlFor="male" className="ml-2 text-gray-300">Male</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="female" 
                  name="sex" 
                  value="Female" 
                  checked={formData.sex === 'Female'} 
                  onChange={updateFormData} 
                  className="h-4 w-4 text-blue-600" 
                />
                <label htmlFor="female" className="ml-2 text-gray-300">Female</label>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Contact Number*</label>
            <Input 
              name="contactNumber" 
              value={formData.contactNumber} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="+63 XXX XXX XXXX"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Date of Birth*</label>
            <Input 
              type="date" 
              name="dob" 
              value={formData.dob} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Place of Birth*</label>
            <Input 
              name="pob" 
              value={formData.pob} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="City, Province"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
        <h3 className="text-white font-medium mb-4">Additional Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Religion</label>
            <Input 
              name="religion" 
              value={formData.religion} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="Religion"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Highest Education*</label>
            <select 
              name="education" 
              value={formData.education} 
              onChange={updateFormData}
              className="w-full h-10 px-3 py-2 bg-[#2a2a2a] border border-[#333333] rounded-md text-white"
            >
              <option value="">Select Education Level</option>
              <option value="None">None</option>
              <option value="Elementary">Elementary</option>
              <option value="High School">High School</option>
              <option value="Vocational">Vocational</option>
              <option value="College">College</option>
              <option value="Post Graduate">Post Graduate</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Civil Status*</label>
            <select 
              name="civilStatus" 
              value={formData.civilStatus} 
              onChange={updateFormData}
              className="w-full h-10 px-3 py-2 bg-[#2a2a2a] border border-[#333333] rounded-md text-white"
            >
              <option value="">Select Civil Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
            </select>
          </div>
          {formData.civilStatus === 'Married' && (
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">Spouse Name*</label>
              <Input 
                name="spouseName" 
                value={formData.spouseName} 
                onChange={updateFormData} 
                className="bg-[#2a2a2a] border-[#333333] text-white" 
                placeholder="Spouse's Full Name"
              />
            </div>
          )}
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium text-gray-300 mb-1 block">Mother's Maiden Name*</label>
          <Input 
            name="motherMaidenName" 
            value={formData.motherMaidenName} 
            onChange={updateFormData} 
            className="bg-[#2a2a2a] border-[#333333] text-white" 
            placeholder="Mother's Maiden Name"
          />
        </div>
      </div>

      {/* Checkboxes Section */}
      <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
        <h3 className="text-white font-medium mb-4">Status Information</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="pwd" 
              name="pwd" 
              checked={formData.pwd} 
              onChange={updateFormData} 
              className="h-4 w-4 text-blue-600" 
            />
            <label htmlFor="pwd" className="ml-2 text-gray-300">Person with Disability (PWD)*</label>
          </div>

          <div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="fourPs" 
                name="fourPs" 
                checked={formData.fourPs} 
                onChange={updateFormData} 
                className="h-4 w-4 text-blue-600" 
              />
              <label htmlFor="fourPs" className="ml-2 text-gray-300">4P's Beneficiary*</label>
            </div>
            {formData.fourPs && (
              <Input 
                name="fourPsSpecify" 
                value={formData.fourPsSpecify} 
                onChange={updateFormData} 
                className="bg-[#2a2a2a] border-[#333333] text-white mt-2" 
                placeholder="Specify 4P's details"
              />
            )}
          </div>

          <div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="indigenous" 
                name="indigenous" 
                checked={formData.indigenous} 
                onChange={updateFormData} 
                className="h-4 w-4 text-blue-600" 
              />
              <label htmlFor="indigenous" className="ml-2 text-gray-300">Indigenous Group Member*</label>
            </div>
            {formData.indigenous && (
              <Input 
                name="indigenousSpecify" 
                value={formData.indigenousSpecify} 
                onChange={updateFormData} 
                className="bg-[#2a2a2a] border-[#333333] text-white mt-2" 
                placeholder="Specify indigenous group"
              />
            )}
          </div>

          <div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="govId" 
                name="govId" 
                checked={formData.govId} 
                onChange={updateFormData} 
                className="h-4 w-4 text-blue-600" 
              />
              <label htmlFor="govId" className="ml-2 text-gray-300">Has Government ID*</label>
            </div>
            {formData.govId && (
              <Input 
                name="govIdNumber" 
                value={formData.govIdNumber} 
                onChange={updateFormData} 
                className="bg-[#2a2a2a] border-[#333333] text-white mt-2" 
                placeholder="Government ID Number"
              />
            )}
          </div>

          <div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="farmAssoc" 
                name="farmAssoc" 
                checked={formData.farmAssoc} 
                onChange={updateFormData} 
                className="h-4 w-4 text-blue-600" 
              />
              <label htmlFor="farmAssoc" className="ml-2 text-gray-300">Member of Farmers Association*</label>
            </div>
            {formData.farmAssoc && (
              <Input 
                name="farmAssocSpecify" 
                value={formData.farmAssocSpecify} 
                onChange={updateFormData} 
                className="bg-[#2a2a2a] border-[#333333] text-white mt-2" 
                placeholder="Name of association"
              />
            )}
          </div>
        </div>
      </div>

      {/* Household Information */}
      <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
        <h3 className="text-white font-medium mb-4">Household Information</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="householdHead" 
              name="householdHead" 
              checked={formData.householdHead} 
              onChange={updateFormData} 
              className="h-4 w-4 text-blue-600" 
            />
            <label htmlFor="householdHead" className="ml-2 text-gray-300">I am the Household Head*</label>
          </div>

          {!formData.householdHead && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-1 block">Household Head Name*</label>
                <Input 
                  name="householdHeadName" 
                  value={formData.householdHeadName} 
                  onChange={updateFormData} 
                  className="bg-[#2a2a2a] border-[#333333] text-white" 
                  placeholder="Full name of household head"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-1 block">Relationship to Head*</label>
                <Input 
                  name="householdRelationship" 
                  value={formData.householdRelationship} 
                  onChange={updateFormData} 
                  className="bg-[#2a2a2a] border-[#333333] text-white" 
                  placeholder="e.g., Spouse, Child, etc."
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">Number of Males in Household*</label>
              <Input 
                type="number" 
                name="householdMale" 
                value={formData.householdMale} 
                onChange={updateFormData} 
                className="bg-[#2a2a2a] border-[#333333] text-white" 
                min="0"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">Number of Females in Household*</label>
              <Input 
                type="number" 
                name="householdFemale" 
                value={formData.householdFemale} 
                onChange={updateFormData} 
                className="bg-[#2a2a2a] border-[#333333] text-white" 
                min="0"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">Emergency Contact</label>
              <Input 
                name="emergencyContact" 
                value={formData.emergencyContact} 
                onChange={updateFormData} 
                className="bg-[#2a2a2a] border-[#333333] text-white" 
                placeholder="Emergency contact name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">Emergency Number</label>
              <Input 
                name="emergencyNumber" 
                value={formData.emergencyNumber} 
                onChange={updateFormData} 
                className="bg-[#2a2a2a] border-[#333333] text-white" 
                placeholder="Emergency contact number"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={() => setStep(1)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  const renderAddress = () => (
    <div className="space-y-6">
      <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
        <h3 className="text-white font-medium mb-4">Address Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">House Number</label>
            <Input 
              name="addressHouseNo" 
              value={formData.addressHouseNo} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="House No."
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Street</label>
            <Input 
              name="addressStreet" 
              value={formData.addressStreet} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="Street Name"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Barangay*</label>
            <Input 
              name="addressBarangay" 
              value={formData.addressBarangay} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="Barangay"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Municipality*</label>
            <Input 
              name="addressMunicipality" 
              value={formData.addressMunicipality} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="City/Municipality"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Province*</label>
            <Input 
              name="addressProvince" 
              value={formData.addressProvince} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="Province"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Region*</label>
            <Input 
              name="addressRegion" 
              value={formData.addressRegion} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="Region"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={() => setStep(0)} variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 rounded-md">
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button onClick={() => setStep(2)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  const renderLivelihood = () => (
    <div className="space-y-6">
      <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
        <h3 className="text-white font-medium mb-4">Main Livelihood</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Main Livelihood*</label>
            <select 
              name="mainLivelihood" 
              value={formData.mainLivelihood} 
              onChange={updateFormData}
              className="w-full h-10 px-3 py-2 bg-[#2a2a2a] border border-[#333333] rounded-md text-white"
            >
              <option value="">Select Livelihood</option>
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {(formData.mainLivelihood === 'Farmer' || formData.mainLivelihood === 'Agri-Youth') && (
        <div className="space-y-6">
          <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
            <h3 className="text-white font-medium mb-4">Farming Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-1 block">Rice (ha)</label>
                <Input 
                  type="number" 
                  value={formData.farmingActivities.rice} 
                  onChange={(e) => setFormData(prev => ({ ...prev, farmingActivities: { ...prev.farmingActivities, rice: parseFloat(e.target.value) || 0 } })) } 
                  className="bg-[#2a2a2a] border-[#333333] text-white" 
                  placeholder="0"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-1 block">Corn (ha)</label>
                <Input 
                  type="number" 
                  value={formData.farmingActivities.corn} 
                  onChange={(e) => setFormData(prev => ({ ...prev, farmingActivities: { ...prev.farmingActivities, corn: parseFloat(e.target.value) || 0 } })) } 
                  className="bg-[#2a2a2a] border-[#333333] text-white" 
                  placeholder="0"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-gray-300 mb-1 block">Other Crops</label>
              <Button onClick={addOtherCrop} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md mb-2">
                <Plus className="mr-2 h-4 w-4" /> Add Other Crop
              </Button>
              {formData.farmingActivities.otherCrops.map((crop, index) => (
                <div key={index} className="flex gap-4 mt-2">
                  <Input 
                    value={crop.name} 
                    onChange={(e) => updateOtherCrop(index, 'name', e.target.value)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="Crop Name"
                  />
                  <Input 
                    type="number" 
                    value={crop.value} 
                    onChange={(e) => updateOtherCrop(index, 'value', parseFloat(e.target.value) || 0)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="Value (ha)"
                  />
                  <Button onClick={() => removeOtherCrop(index)} variant="destructive" className="bg-red-600 hover:bg-red-700 text-white rounded-md">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
              <h3 className="text-white font-medium mb-4">Livestock</h3>
              <Button onClick={addLivestock} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md mb-2">
                <Plus className="mr-2 h-4 w-4" /> Add Livestock
              </Button>
              {formData.livestock.map((item, index) => (
                <div key={index} className="flex gap-4 mt-2">
                  <Input 
                    value={item.type} 
                    onChange={(e) => updateLivestock(index, 'type', e.target.value)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="Type"
                  />
                  <Input 
                    type="number" 
                    value={item.heads} 
                    onChange={(e) => updateLivestock(index, 'heads', parseInt(e.target.value) || 0)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="Heads"
                  />
                  <Button onClick={() => removeLivestock(index)} variant="destructive" className="bg-red-600 hover:bg-red-700 text-white rounded-md">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
              <h3 className="text-white font-medium mb-4">Poultry</h3>
              <Button onClick={addPoultry} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md mb-2">
                <Plus className="mr-2 h-4 w-4" /> Add Poultry
              </Button>
              {formData.poultry.map((item, index) => (
                <div key={index} className="flex gap-4 mt-2">
                  <Input 
                    value={item.type} 
                    onChange={(e) => updatePoultry(index, 'type', e.target.value)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="Type"
                  />
                  <Input 
                    type="number" 
                    value={item.heads} 
                    onChange={(e) => updatePoultry(index, 'heads', parseInt(e.target.value) || 0)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="Heads"
                  />
                  <Button onClick={() => removePoultry(index)} variant="destructive" className="bg-red-600 hover:bg-red-700 text-white rounded-md">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {(formData.mainLivelihood === 'Farm Worker/Laborer') && (
        <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
          <h3 className="text-white font-medium mb-4">Kind of Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Land Preparation', 'Planting/Transplanting', 'Cultivation', 'Harvesting'].map((work) => (
              <div key={work} className="flex items-center space-x-2">
                <Checkbox 
                  id={work.replace(/\//g, '')} 
                  checked={formData.workTypes.includes(work)} 
                  onCheckedChange={() => updateCheckboxArray('workTypes', work)} 
                />
                <Label htmlFor={work.replace(/\//g, '')} className="text-gray-300">{work}</Label>
              </div>
            ))}
          </div>
          <Button onClick={addWork} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md mt-4">
            <Plus className="mr-2 h-4 w-4" /> Add Other Work
          </Button>
          {formData.otherWork.map((work, index) => (
            <div key={index} className="flex gap-4 mt-2">
              <Input 
                value={work} 
                onChange={(e) => updateWork(index, e.target.value)} 
                className="bg-[#2a2a2a] border-[#333333] text-white" 
                placeholder="Other Work"
              />
              <Button onClick={() => removeWork(index)} variant="destructive" className="bg-red-600 hover:bg-red-700 text-white rounded-md">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {(formData.mainLivelihood === 'Fisherfolk') && (
        <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
          <h3 className="text-white font-medium mb-4">Type of Fishing Activity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Fish Capture', 'Aquaculture', 'Gleaning', 'Fish Processing', 'Fish Vending'].map((fishing) => (
              <div key={fishing} className="flex items-center space-x-2">
                <Checkbox 
                  id={fishing.replace(/\s/g, '')} 
                  checked={formData.fishingTypes.includes(fishing)} 
                  onCheckedChange={() => updateCheckboxArray('fishingTypes', fishing)} 
                />
                <Label htmlFor={fishing.replace(/\s/g, '')} className="text-gray-300">{fishing}</Label>
              </div>
            ))}
          </div>
          <Button onClick={addFishing} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md mt-4">
            <Plus className="mr-2 h-4 w-4" /> Add Other Fishing Activity
          </Button>
          {formData.otherFishing.map((fishing, index) => (
            <div key={index} className="flex gap-4 mt-2">
              <Input 
                value={fishing} 
                onChange={(e) => updateFishing(index, e.target.value)} 
                className="bg-[#2a2a2a] border-[#333333] text-white" 
                placeholder="Other Fishing Activity"
              />
              <Button onClick={() => removeFishing(index)} variant="destructive" className="bg-red-600 hover:bg-red-700 text-white rounded-md">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {(formData.mainLivelihood !== 'Fisherfolk') && (
        <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
          <h3 className="text-white font-medium mb-4">Farm Parcels</h3>
          {formData.farmParcels.map((parcel, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-gray-300 font-medium mb-2">Parcel {index + 1}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1 block">Location*</label>
                  <Input 
                    value={parcel.location} 
                    onChange={(e) => updateParcel(index, 'location', e.target.value)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="Barangay & Municipality"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1 block">Total Area (ha)*</label>
                  <Input 
                    type="number" 
                    value={parcel.area} 
                    onChange={(e) => updateParcel(index, 'area', parseFloat(e.target.value) || 0)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1 block">Ownership Document No</label>
                  <Input 
                    value={parcel.docNo} 
                    onChange={(e) => updateParcel(index, 'docNo', e.target.value)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="Document No"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1 block">Ownership Type*</label>
                  <select 
                    value={parcel.ownershipType} 
                    onChange={(e) => updateParcel(index, 'ownershipType', e.target.value)}
                    className="w-full h-10 px-3 py-2 bg-[#2a2a2a] border border-[#333333] rounded-md text-white"
                  >
                    <option value="">Select</option>
                    <option value="Registered Owner">Registered Owner</option>
                    <option value="Tenant">Tenant</option>
                    <option value="Lessee">Lessee</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1 block">Land Owner Name</label>
                  <Input 
                    value={parcel.ownerName} 
                    onChange={(e) => updateParcel(index, 'ownerName', e.target.value)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1 block">ARB*</label>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id={`arb-yes-${index}`} 
                        name={`arb-${index}`} 
                        value="true" 
                        checked={parcel.arb} 
                        onChange={() => updateParcel(index, 'arb', true)} 
                        className="h-4 w-4 text-blue-600" 
                      />
                      <label htmlFor={`arb-yes-${index}`} className="ml-2 text-gray-300">Yes</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id={`arb-no-${index}`} 
                        name={`arb-${index}`} 
                        value="false" 
                        checked={!parcel.arb} 
                        onChange={() => updateParcel(index, 'arb', false)} 
                        className="h-4 w-4 text-blue-600" 
                      />
                      <label htmlFor={`arb-no-${index}`} className="ml-2 text-gray-300">No</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1 block">Farm Type</label>
                  <select 
                    value={parcel.farmType} 
                    onChange={(e) => updateParcel(index, 'farmType', e.target.value)}
                    className="w-full h-10 px-3 py-2 bg-[#2a2a2a] border border-[#333333] rounded-md text-white"
                  >
                    <option value="">Select</option>
                    <option value="1 - Irrigated">1 - Irrigated</option>
                    <option value="2 - Rainfed Upland">2 - Rainfed Upland</option>
                    <option value="3 - Rainfed Lowland">3 - Rainfed Lowland</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1 block">Organic Practitioner*</label>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id={`organic-yes-${index}`} 
                        name={`organic-${index}`} 
                        value="true" 
                        checked={parcel.organic} 
                        onChange={() => updateParcel(index, 'organic', true)} 
                        className="h-4 w-4 text-blue-600" 
                      />
                      <label htmlFor={`organic-yes-${index}`} className="ml-2 text-gray-300">Yes</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id={`organic-no-${index}`} 
                        name={`organic-${index}`} 
                        value="false" 
                        checked={!parcel.organic} 
                        onChange={() => updateParcel(index, 'organic', false)} 
                        className="h-4 w-4 text-blue-600" 
                      />
                      <label htmlFor={`organic-no-${index}`} className="ml-2 text-gray-300">No</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1 block">Crop/Commodity</label>
                  <Input 
                    value={parcel.commodity} 
                    onChange={(e) => updateParcel(index, 'commodity', e.target.value)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="Commodity"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1 block">No. of Head</label>
                  <Input 
                    type="number" 
                    value={parcel.heads} 
                    onChange={(e) => updateParcel(index, 'heads', parseInt(e.target.value) || 0)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-1 block">Animal Type</label>
                  <Input 
                    value={parcel.animalType} 
                    onChange={(e) => updateParcel(index, 'animalType', e.target.value)} 
                    className="bg-[#2a2a2a] border-[#333333] text-white" 
                    placeholder="Type"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between">
        <Button onClick={() => setStep(1)} variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 rounded-md">
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button onClick={() => setStep(3)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  const renderFinancial = () => (
    <div className="space-y-6">
      <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
        <h3 className="text-white font-medium mb-4">Financial Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">RSBSA Reference Number</label>
            <Input 
              name="rsbsaReference" 
              value={formData.rsbsaReference} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="RSBSA Reference Number"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">TIN Number</label>
            <Input 
              name="tinNumber" 
              value={formData.tinNumber} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="TIN Number"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Profession</label>
            <select 
              name="profession" 
              value={formData.profession} 
              onChange={updateFormData}
              className="w-full h-10 px-3 py-2 bg-[#2a2a2a] border border-[#333333] rounded-md text-white"
            >
              <option value="">Select Profession</option>
              <option value="Farmer">Farmer</option>
              <option value="Fisherfolk">Fisherfolk</option>
              <option value="Farm Laborer">Farm Laborer</option>
              <option value="Agricultural Technician">Agricultural Technician</option>
              <option value="Agronomist">Agronomist</option>
              <option value="Horticulturist">Horticulturist</option>
              <option value="Agricultural Engineer">Agricultural Engineer</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Source of Funds</label>
            <select 
              name="sourceOfFunds" 
              value={formData.sourceOfFunds} 
              onChange={updateFormData}
              className="w-full h-10 px-3 py-2 bg-[#2a2a2a] border border-[#333333] rounded-md text-white"
            >
              <option value="">Select Source of Funds</option>
              <option value="Personal Savings">Personal Savings</option>
              <option value="Bank Loan">Bank Loan</option>
              <option value="Cooperative Loan">Cooperative Loan</option>
              <option value="Government Subsidy">Government Subsidy</option>
              <option value="Informal Lender">Informal Lender</option>
              <option value="Microfinance NGO">Microfinance NGO</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Gross Annual Income (Farming)*</label>
            <Input 
              type="number" 
              name="grossFarmingIncome" 
              value={formData.grossFarmingIncome} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="0"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Gross Annual Income (Non-Farming)*</label>
            <Input 
              type="number" 
              name="grossNonFarmingIncome" 
              value={formData.grossNonFarmingIncome} 
              onChange={updateFormData} 
              className="bg-[#2a2a2a] border-[#333333] text-white" 
              placeholder="0"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={() => setStep(2)} variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 rounded-md">
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button onClick={() => setStep(4)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  const renderPreview = () => (
    <div className="space-y-6">
      <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
        <h3 className="text-white font-medium mb-4">Preview Information</h3>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="text-gray-300 font-medium mb-2">Personal Information</h4>
            <p className="text-gray-400">Enrollment: {formData.enrollment}</p>
            <p className="text-gray-400">Name: {formData.surname} {formData.firstName} {formData.middleName} {formData.extensionName}</p>
            <p className="text-gray-400">Sex: {formData.sex}</p>
            <p className="text-gray-400">Contact Number: {formData.contactNumber}</p>
            <p className="text-gray-400">Date of Birth: {formData.dob}</p>
            <p className="text-gray-400">Place of Birth: {formData.pob}</p>
            <p className="text-gray-400">Religion: {formData.religion}</p>
            <p className="text-gray-400">Education: {formData.education}</p>
            <p className="text-gray-400">PWD: {formData.pwd ? 'Yes' : 'No'}</p>
            <p className="text-gray-400">Civil Status: {formData.civilStatus}</p>
            <p className="text-gray-400">Spouse Name: {formData.spouseName}</p>
            <p className="text-gray-400">Mother's Maiden Name: {formData.motherMaidenName}</p>
            <p className="text-gray-400">4P's: {formData.fourPs ? 'Yes' : 'No'} {formData.fourPsSpecify}</p>
            <p className="text-gray-400">Indigenous: {formData.indigenous ? 'Yes' : 'No'} {formData.indigenousSpecify}</p>
            <p className="text-gray-400">Gov ID: {formData.govId ? 'Yes' : 'No'} {formData.govIdNumber}</p>
            <p className="text-gray-400">Farm Assoc: {formData.farmAssoc ? 'Yes' : 'No'} {formData.farmAssocSpecify}</p>
            <p className="text-gray-400">Household Head: {formData.householdHead ? 'Yes' : 'No'} {formData.householdHeadName} {formData.householdRelationship}</p>
            <p className="text-gray-400">Household Male: {formData.householdMale}</p>
            <p className="text-gray-400">Household Female: {formData.householdFemale}</p>
            <p className="text-gray-400">Emergency Contact: {formData.emergencyContact} {formData.emergencyNumber}</p>
          </div>
          <div>
            <h4 className="text-gray-300 font-medium mb-2">Address</h4>
            <p className="text-gray-400">House No: {formData.addressHouseNo}</p>
            <p className="text-gray-400">Street: {formData.addressStreet}</p>
            <p className="text-gray-400">Barangay: {formData.addressBarangay}</p>
            <p className="text-gray-400">Municipality: {formData.addressMunicipality}</p>
            <p className="text-gray-400">Province: {formData.addressProvince}</p>
            <p className="text-gray-400">Region: {formData.addressRegion}</p>
          </div>
          <div>
            <h4 className="text-gray-300 font-medium mb-2">Livelihood</h4>
            <p className="text-gray-400">Main Livelihood: {formData.mainLivelihood}</p>
            {/* Add previews for farming activities, livestock, etc. */}
          </div>
          <div>
            <h4 className="text-gray-300 font-medium mb-2">Financial</h4>
            <p className="text-gray-400">Gross Farming Income: {formData.grossFarmingIncome}</p>
            <p className="text-gray-400">Gross Non-Farming Income: {formData.grossNonFarmingIncome}</p>
            <p className="text-gray-400">RSBSA Reference: {formData.rsbsaReference}</p>
            <p className="text-gray-400">TIN Number: {formData.tinNumber}</p>
            <p className="text-gray-400">Profession: {formData.profession}</p>
            <p className="text-gray-400">Source of Funds: {formData.sourceOfFunds}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={() => setStep(3)} variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 rounded-md">
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white rounded-md">
          Submit <Check className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-[#1e1e1e] border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl mb-2">RSBSA Registration - {role}</CardTitle>
            <CardDescription className="text-gray-400">Complete the form to register</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={tabs[step]} className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-[#252525] mb-6">
                {tabs.map((tab, index) => (
                  <TabsTrigger key={tab} value={tab} className="data-[state=active]:bg-[#333333] data-[state=active]:text-white text-gray-400">
                    {tabTitles[index]}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="personal">
                {renderPersonalInfo()}
              </TabsContent>

              <TabsContent value="address">
                {renderAddress()}
              </TabsContent>

              <TabsContent value="livelihood">
                {renderLivelihood()}
              </TabsContent>

              <TabsContent value="financial">
                {renderFinancial()}
              </TabsContent>

              <TabsContent value="preview">
                {renderPreview()}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="bg-[#1e1e1e] text-white">
            <DialogHeader>
              <DialogTitle>Confirm Submission</DialogTitle>
              <DialogDescription className="text-gray-400">
                Are you sure you want to submit the form?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowModal(false)} className="border-[#444444] text-gray-300">
                Cancel
              </Button>
              <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default RegisterPage;
