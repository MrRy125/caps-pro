import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const RegisterPage = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [formData, setFormData] = useState({
    surname: '',
    firstName: '',
    middleName: '',
    extensionName: '',
    motherMaidenName: '',
    spouseName: '',
    idNumber: '',
    idType: '',
    nationality: 'Filipino',
    birthdate: '',
    placeOfBirth: '',
    mobileNumber: '',
    email: '',
    gender: '',
    religion: '',
    education: '',
    pwd: 'No',
    fourPs: 'No',
    fourPsSpecify: '',
    indigenous: 'No',
    indigenousSpecify: '',
    govId: 'No',
    govIdNumber: '',
    farmAssoc: 'No',
    farmAssocSpecify: '',
    householdHead: 'No',
    householdHeadName: '',
    householdRelationship: '',
    householdMale: '',
    householdFemale: '',
    emergencyContact: '',
    emergencyNumber: '',
    // Address
    houseNo: '',
    street: '',
    barangay: '',
    municipality: '',
    province: '',
    region: '',
    sameAddress: false,
    presentHouseNo: '',
    presentStreet: '',
    presentBarangay: '',
    presentMunicipality: '',
    presentProvince: '',
    presentRegion: '',
    // Farm/Fishery
    registryType: '',
    numFarmParcels: '1',
    crops: [],
    animals: [],
    // Additional for add buttons
    otherCrops: [],
    otherLivestock: [],
    otherPoultry: [],
    otherWork: [],
    otherFishing: [],
    farmParcels: Array(3).fill({ location: '', area: '', docNo: '', ownershipType: '', ownerName: '', arb: 'No', farmType: '', organic: 'N', commodity: '', heads: '', animalType: '' }),
    workTypes: [],
    fishingTypes: [],
    // Financial
    rsbsaReference: '',
    tinNumber: '',
    profession: '',
    grossFarmingIncome: '',
    grossNonFarmingIncome: '',
    sourceOfFunds: '',
  });
  const [showModal, setShowModal] = useState(false);

  const updateFormData = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const updateCheckboxArray = (name, value) => {
    let newArray = [...formData[name]];
    if (newArray.includes(value)) {
      newArray = newArray.filter(item => item !== value);
    } else {
      newArray.push(value);
    }
    setFormData(prev => ({ ...prev, [name]: newArray }));
  };

  const addOther = (field) => {
    setFormData(prev => ({ ...prev, [field]: [...prev[field], ''] }));
  };

  const updateOther = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const updateParcel = (index, subField, value) => {
    const newParcels = [...formData.farmParcels];
    newParcels[index][subField] = value;
    setFormData(prev => ({ ...prev, farmParcels: newParcels }));
  };

  const handleSameAddress = (checked) => {
    setFormData(prev => ({
      ...prev,
      sameAddress: checked,
      presentHouseNo: checked ? prev.houseNo : '',
      presentStreet: checked ? prev.street : '',
      presentBarangay: checked ? prev.barangay : '',
      presentMunicipality: checked ? prev.municipality : '',
      presentProvince: checked ? prev.province : '',
      presentRegion: checked ? prev.region : '',
    }));
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const confirmSubmit = () => {
    setShowModal(false);
    // Submit logic here, e.g., API call
    console.log('Submitted', formData);
  };

  return (
    <div className="p-6 space-y-6">
      <Card className="bg-[#1e1e1e] border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-white text-xl">Register New RSBSA</CardTitle>
          <CardDescription className="text-gray-400">Fill in the details to register a new farmer or fisherfolk</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 bg-[#252525] mb-6">
              <TabsTrigger value="personal" className="data-[state=active]:bg-[#333333] data-[state=active]:text-white text-gray-400">
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="address" className="data-[state=active]:bg-[#333333] data-[state=active]:text-white text-gray-400">
                Address
              </TabsTrigger>
              <TabsTrigger value="farm" className="data-[state=active]:bg-[#333333] data-[state=active]:text-white text-gray-400">
                Farm/Fishery
              </TabsTrigger>
              <TabsTrigger value="financial" className="data-[state=active]:bg-[#333333] data-[state=active]:text-white text-gray-400">
                Financial
              </TabsTrigger>
              <TabsTrigger value="review" className="data-[state=active]:bg-[#333333] data-[state=active]:text-white text-gray-400">
                Review
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Last Name / Qualifier</Label>
                    <Input name="surname" value={formData.surname} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Last Name" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">First Name</Label>
                    <Input name="firstName" value={formData.firstName} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="First Name" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Middle Name</Label>
                    <Input name="middleName" value={formData.middleName} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Middle Name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Extension Name</Label>
                    <Input name="extensionName" value={formData.extensionName} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Jr., Sr." />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Mother's Maiden Name</Label>
                    <Input name="motherMaidenName" value={formData.motherMaidenName} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Mother's Maiden Name" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Spouse Name (if married)</Label>
                    <Input name="spouseName" value={formData.spouseName} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Spouse Name" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Religion</Label>
                    <Input name="religion" value={formData.religion} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Religion" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">ID Number</Label>
                    <Input name="idNumber" value={formData.idNumber} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="ID Number" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">ID Type</Label>
                    <Select onValueChange={(value) => updateFormData({target: {name: 'idType', value}})}>
                      <SelectTrigger className="bg-[#252525] border-[#333333] text-white">
                        <SelectValue placeholder="Select ID Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="passport">Passport</SelectItem>
                        <SelectItem value="drivers_license">Driver's License</SelectItem>
                        <SelectItem value="sss">SSS ID</SelectItem>
                        <SelectItem value="philhealth">PhilHealth ID</SelectItem>
                        <SelectItem value="voters">Voter's ID</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Nationality</Label>
                    <Input name="nationality" value={formData.nationality} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Nationality" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Birthdate</Label>
                    <Input type="date" name="birthdate" value={formData.birthdate} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" />
                  </div>
                  <div className="md:col-span-2">
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Place of Birth</Label>
                    <Input name="placeOfBirth" value={formData.placeOfBirth} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Place of Birth" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Mobile Number</Label>
                    <Input name="mobileNumber" value={formData.mobileNumber} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="+63 XXX XXX XXXX" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Email Address</Label>
                    <Input name="email" value={formData.email} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="email@example.com" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Gender</Label>
                    <RadioGroup className="flex gap-4 mt-2" onValueChange={(value) => updateFormData({target: {name: 'gender', value}})}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Male" id="male" />
                        <Label htmlFor="male" className="text-gray-300">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Female" id="female" />
                        <Label htmlFor="female" className="text-gray-300">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Highest Formal Education</Label>
                    <Select onValueChange={(value) => updateFormData({target: {name: 'education', value}})}>
                      <SelectTrigger className="bg-[#252525] border-[#333333] text-white">
                        <SelectValue placeholder="Select Education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="None">None</SelectItem>
                        <SelectItem value="Elementary">Elementary</SelectItem>
                        <SelectItem value="High School">High School</SelectItem>
                        <SelectItem value="Vocational">Vocational</SelectItem>
                        <SelectItem value="College">College</SelectItem>
                        <SelectItem value="Post Graduate">Post Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Civil Status</Label>
                    <Select onValueChange={(value) => updateFormData({target: {name: 'civilStatus', value}})}>
                      <SelectTrigger className="bg-[#252525] border-[#333333] text-white">
                        <SelectValue placeholder="Select Civil Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Single">Single</SelectItem>
                        <SelectItem value="Married">Married</SelectItem>
                        <SelectItem value="Widowed">Widowed</SelectItem>
                        <SelectItem value="Separated">Separated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">PWD</Label>
                    <RadioGroup className="flex gap-4" onValueChange={(value) => updateFormData({target: {name: 'pwd', value}})}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="pwd-yes" />
                        <Label htmlFor="pwd-yes" className="text-gray-300">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="pwd-no" />
                        <Label htmlFor="pwd-no" className="text-gray-300">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">4P's Beneficiary</Label>
                    <RadioGroup className="flex gap-4" onValueChange={(value) => updateFormData({target: {name: 'fourPs', value}})}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="fourPs-yes" />
                        <Label htmlFor="fourPs-yes" className="text-gray-300">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="fourPs-no" />
                        <Label htmlFor="fourPs-no" className="text-gray-300">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Indigenous Group</Label>
                    <RadioGroup className="flex gap-4" onValueChange={(value) => updateFormData({target: {name: 'indigenous', value}})}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="indigenous-yes" />
                        <Label htmlFor="indigenous-yes" className="text-gray-300">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="indigenous-no" />
                        <Label htmlFor="indigenous-no" className="text-gray-300">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Government ID</Label>
                    <RadioGroup className="flex gap-4" onValueChange={(value) => updateFormData({target: {name: 'govId', value}})}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="govId-yes" />
                        <Label htmlFor="govId-yes" className="text-gray-300">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="govId-no" />
                        <Label htmlFor="govId-no" className="text-gray-300">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {formData.fourPs === 'Yes' && (
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">4P's Specify</Label>
                    <Input name="fourPsSpecify" value={formData.fourPsSpecify} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Specify" />
                  </div>
                )}
                {formData.indigenous === 'Yes' && (
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Indigenous Specify</Label>
                    <Input name="indigenousSpecify" value={formData.indigenousSpecify} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Specify" />
                  </div>
                )}
                {formData.govId === 'Yes' && (
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Government ID Number</Label>
                    <Input name="govIdNumber" value={formData.govIdNumber} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="ID Number" />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Farmers Association</Label>
                    <RadioGroup className="flex gap-4" onValueChange={(value) => updateFormData({target: {name: 'farmAssoc', value}})}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="farmAssoc-yes" />
                        <Label htmlFor="farmAssoc-yes" className="text-gray-300">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="farmAssoc-no" />
                        <Label htmlFor="farmAssoc-no" className="text-gray-300">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {formData.farmAssoc === 'Yes' && (
                    <div className="md:col-span-3">
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">Farm Assoc Specify</Label>
                      <Input name="farmAssocSpecify" value={formData.farmAssocSpecify} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Specify" />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Household Head</Label>
                    <RadioGroup className="flex gap-4" onValueChange={(value) => updateFormData({target: {name: 'householdHead', value}})}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="householdHead-yes" />
                        <Label htmlFor="householdHead-yes" className="text-gray-300">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="householdHead-no" />
                        <Label htmlFor="householdHead-no" className="text-gray-300">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {formData.householdHead === 'No' && (
                    <>
                      <div>
                        <Label className="text-sm font-medium text-gray-300 mb-1 block">Household Head Name</Label>
                        <Input name="householdHeadName" value={formData.householdHeadName} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Name" />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-300 mb-1 block">Relationship</Label>
                        <Input name="householdRelationship" value={formData.householdRelationship} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Relationship" />
                      </div>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">No. of Male Household Members</Label>
                    <Input type="number" name="householdMale" value={formData.householdMale} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="0" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">No. of Female Household Members</Label>
                    <Input type="number" name="householdFemale" value={formData.householdFemale} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="0" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Emergency Contact</Label>
                    <Input name="emergencyContact" value={formData.emergencyContact} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="Name" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-300 mb-1 block">Emergency Number</Label>
                    <Input name="emergencyNumber" value={formData.emergencyNumber} onChange={updateFormData} className="bg-[#252525] border-[#333333] text-white" placeholder="+63 XXX XXX XXXX" />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => setActiveTab('address')} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="address" className="p-6">
              <div className="space-y-6">
                <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                  <h3 className="text-white font-medium mb-4">Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">House/Lot/Bldg No.</Label>
                      <Input name="houseNo" value={formData.houseNo} onChange={updateFormData} className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="House No." />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">Street/Sitio/Subdv.</Label>
                      <Input name="street" value={formData.street} onChange={updateFormData} className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="Street" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">Barangay</Label>
                      <Input name="barangay" value={formData.barangay} onChange={updateFormData} className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="Barangay" />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">Municipality/City</Label>
                      <Input name="municipality" value={formData.municipality} onChange={updateFormData} className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="Municipality/City" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">Province</Label>
                      <Input name="province" value={formData.province} onChange={updateFormData} className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="Province" />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">Region</Label>
                      <Input name="region" value={formData.region} onChange={updateFormData} className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="Region" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button onClick={() => setActiveTab('personal')} variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 rounded-md">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button onClick={() => setActiveTab('farm')} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="farm" className="p-6">
              <div className="space-y-6">
                <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                  <h3 className="text-white font-medium mb-4">Registry Type</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {['Farmer', 'Fisherfolk', 'Farm Worker/Laborer', 'Agri-Youth'].map(type => (
                      <div key={type} className={`flex-1 border border-[#333333] rounded-md p-4 bg-[#2a2a2a] cursor-pointer hover:bg-[#333333] ${formData.registryType === type ? 'border-blue-600' : ''}`}>
                        <RadioGroup className="flex items-center">
                          <RadioGroupItem value={type} id={type.toLowerCase().replace(/\s/g, '')} onChange={() => updateFormData({target: {name: 'registryType', value: type}})} />
                          <Label htmlFor={type.toLowerCase().replace(/\s/g, '')} className="ml-2 text-white font-medium">{type}</Label>
                        </RadioGroup>
                        <p className="text-gray-400 text-sm mt-2">{type === 'Farmer' ? 'Register as a farmer' : type === 'Fisherfolk' ? 'Register as a fisherfolk' : type === 'Farm Worker/Laborer' ? 'Register as a farm worker' : 'Register as agri-youth'}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {formData.registryType && (
                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <h3 className="text-white font-medium mb-4"> {formData.registryType} Details</h3>
                    { (formData.registryType === 'Farmer' || formData.registryType === 'Agri-Youth' || formData.registryType === 'Farm Worker/Laborer') && (
                      <div>
                        <Label className="text-sm font-medium text-gray-300 mb-1 block">Number of Farm Parcels</Label>
                        <Input type="number" name="numFarmParcels" value={formData.numFarmParcels} onChange={updateFormData} className="bg-[#2a2a2a] border-[#333333] text-white w-32" min="1" />
                      </div>
                    )}
                    { (formData.registryType === 'Farmer' || formData.registryType === 'Agri-Youth') && (
                      <>
                        <h4 className="text-gray-300 font-medium mt-6 mb-3">Crops</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['Rice', 'Corn', 'Coconut', 'Banana', 'Coffee', 'Cacao', 'Vegetables', 'Fruits', 'Palm Oil', 'Rubber', 'Cassava', 'Sweet Potato'].map((crop) => (
                            <div key={crop} className="flex items-center">
                              <Checkbox id={crop.toLowerCase()} checked={formData.crops.includes(crop)} onCheckedChange={() => updateCheckboxArray('crops', crop)} />
                              <Label htmlFor={crop.toLowerCase()} className="ml-2 text-gray-300">{crop}</Label>
                            </div>
                          ))}
                        </div>
                        <Button onClick={() => addOther('otherCrops')} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">Add Other Crop</Button>
                        {formData.otherCrops.map((crop, index) => (
                          <div key={index} className="mt-2 flex gap-4">
                            <Input value={crop} onChange={(e) => updateOther('otherCrops', index, e.target.value)} className="bg-[#252525] border-[#333333] text-white" placeholder="Other Crop" />
                          </div>
                        ))}

                        <h4 className="text-gray-300 font-medium mt-6 mb-3">Animals</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['Carabao', 'Cattle', 'Swine', 'Chicken', 'Duck', 'Goat', 'Horse'].map((animal) => (
                            <div key={animal} className="flex items-center">
                              <Checkbox id={animal.toLowerCase()} checked={formData.animals.includes(animal)} onCheckedChange={() => updateCheckboxArray('animals', animal)} />
                              <Label htmlFor={animal.toLowerCase()} className="ml-2 text-gray-300">{animal}</Label>
                            </div>
                          ))}
                        </div>
                        <Button onClick={() => addOther('otherLivestock')} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">Add Other Livestock</Button>
                        {formData.otherLivestock.map((livestock, index) => (
                          <div key={index} className="mt-2 flex gap-4">
                            <Input value={livestock} onChange={(e) => updateOther('otherLivestock', index, e.target.value)} className="bg-[#252525] border-[#333333] text-white" placeholder="Other Livestock" />
                          </div>
                        ))}
                        <Button onClick={() => addOther('otherPoultry')} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">Add Other Poultry</Button>
                        {formData.otherPoultry.map((poultry, index) => (
                          <div key={index} className="mt-2 flex gap-4">
                            <Input value={poultry} onChange={(e) => updateOther('otherPoultry', index, e.target.value)} className="bg-[#252525] border-[#333333] text-white" placeholder="Other Poultry" />
                          </div>
                        ))}
                      </>
                    )}

                    { formData.registryType === 'Farm Worker/Laborer' && (
                      <div>
                        <h4 className="text-gray-300 font-medium mt-6 mb-3">Kind of Work</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['Land Preparation', 'Planting/Transplanting', 'Cultivation', 'Harvesting'].map((work) => (
                            <div key={work} className="flex items-center">
                              <Checkbox id={work.toLowerCase().replace(/\//g, '')} checked={formData.workTypes.includes(work)} onCheckedChange={() => updateCheckboxArray('workTypes', work)} />
                              <Label htmlFor={work.toLowerCase().replace(/\//g, '')} className="ml-2 text-gray-300">{work}</Label>
                            </div>
                          ))}
                        </div>
                        <Button onClick={() => addOther('otherWork')} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">Add Other Work</Button>
                        {formData.otherWork.map((work, index) => (
                          <div key={index} className="mt-2 flex gap-4">
                            <Input value={work} onChange={(e) => updateOther('otherWork', index, e.target.value)} className="bg-[#252525] border-[#333333] text-white" placeholder="Other Work" />
                          </div>
                        ))}
                      </div>
                    )}

                    { formData.registryType === 'Fisherfolk' && (
                      <div>
                        <h4 className="text-gray-300 font-medium mt-6 mb-3">Type of Fishing Activity</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['Fish Capture', 'Aquaculture', 'Gleaning', 'Fish Processing', 'Fish Vending'].map((fishing) => (
                            <div key={fishing} className="flex items-center">
                              <Checkbox id={fishing.toLowerCase().replace(/\s/g, '')} checked={formData.fishingTypes.includes(fishing)} onCheckedChange={() => updateCheckboxArray('fishingTypes', fishing)} />
                              <Label htmlFor={fishing.toLowerCase().replace(/\s/g, '')} className="ml-2 text-gray-300">{fishing}</Label>
                            </div>
                          ))}
                        </div>
                        <Button onClick={() => addOther('otherFishing')} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">Add Other Fishing</Button>
                        {formData.otherFishing.map((fishing, index) => (
                          <div key={index} className="mt-2 flex gap-4">
                            <Input value={fishing} onChange={(e) => updateOther('otherFishing', index, e.target.value)} className="bg-[#252525] border-[#333333] text-white" placeholder="Other Fishing" />
                          </div>
                        ))}
                      </div>
                    )}

                    { (formData.registryType !== 'Fisherfolk') && (
                      <div className="mt-6">
                        <h4 className="text-gray-300 font-medium mb-3">Farm Parcels</h4>
                        {formData.farmParcels.map((parcel, index) => (
                          <div key={index} className="bg-[#2a2a2a] p-4 rounded-md border border-[#333333] mb-4">
                            <h5 className="text-white mb-2">Parcel {index + 1}</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label className="text-sm font-medium text-gray-300 mb-1 block">Location</Label>
                                <Input value={parcel.location} onChange={(e) => updateParcel(index, 'location', e.target.value)} className="bg-[#252525] border-[#333333] text-white" placeholder="Barangay & Municipality" />
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-300 mb-1 block">Total Area (ha)</Label>
                                <Input type="number" value={parcel.area} onChange={(e) => updateParcel(index, 'area', e.target.value)} className="bg-[#252525] border-[#333333] text-white" placeholder="0.00" />
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-300 mb-1 block">Ownership Doc No</Label>
                                <Input value={parcel.docNo} onChange={(e) => updateParcel(index, 'docNo', e.target.value)} className="bg-[#252525] border-[#333333] text-white" placeholder="Document No" />
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-300 mb-1 block">Ownership Type</Label>
                                <Select onValueChange={(value) => updateParcel(index, 'ownershipType', value)}>
                                  <SelectTrigger className="bg-[#252525] border-[#333333] text-white">
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Registered Owner">Registered Owner</SelectItem>
                                    <SelectItem value="Tenant">Tenant</SelectItem>
                                    <SelectItem value="Lessee">Lessee</SelectItem>
                                    <SelectItem value="Others">Others</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-300 mb-1 block">Land Owner Name</Label>
                                <Input value={parcel.ownerName} onChange={(e) => updateParcel(index, 'ownerName', e.target.value)} className="bg-[#252525] border-[#333333] text-white" placeholder="Name" />
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-300 mb-1 block">ARB</Label>
                                <RadioGroup className="flex gap-4" onValueChange={(value) => updateParcel(index, 'arb', value)}>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Yes" id={`arb-yes-${index}`} />
                                    <Label htmlFor={`arb-yes-${index}`} className="text-gray-300">Yes</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="No" id={`arb-no-${index}`} />
                                    <Label htmlFor={`arb-no-${index}`} className="text-gray-300">No</Label>
                                  </div>
                                </RadioGroup>
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-300 mb-1 block">Farm Type</Label>
                                <Select onValueChange={(value) => updateParcel(index, 'farmType', value)}>
                                  <SelectTrigger className="bg-[#252525] border-[#333333] text-white">
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1 - Irrigated">1 - Irrigated</SelectItem>
                                    <SelectItem value="2 - Rainfed Upland">2 - Rainfed Upland</SelectItem>
                                    <SelectItem value="3 - Rainfed Lowland">3 - Rainfed Lowland</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-300 mb-1 block">Organic Practitioner</Label>
                                <RadioGroup className="flex gap-4" onValueChange={(value) => updateParcel(index, 'organic', value)}>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Y" id={`organic-y-${index}`} />
                                    <Label htmlFor={`organic-y-${index}`} className="text-gray-300">Y</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="N" id={`organic-n-${index}`} />
                                    <Label htmlFor={`organic-n-${index}`} className="text-gray-300">N</Label>
                                  </div>
                                </RadioGroup>
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-300 mb-1 block">Crop/Commodity</Label>
                                <Input value={parcel.commodity} onChange={(e) => updateParcel(index, 'commodity', e.target.value)} className="bg-[#252525] border-[#333333] text-white" placeholder="Commodity" />
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-300 mb-1 block">No. of Head</Label>
                                <Input type="number" value={parcel.heads} onChange={(e) => updateParcel(index, 'heads', e.target.value)} className="bg-[#252525] border-[#333333] text-white" placeholder="0" />
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-300 mb-1 block">Animal Type</Label>
                                <Input value={parcel.animalType} onChange={(e) => updateParcel(index, 'animalType', e.target.value)} className="bg-[#252525] border-[#333333] text-white" placeholder="Type" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button onClick={() => setActiveTab('address')} variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 rounded-md">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button onClick={() => setActiveTab('financial')} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="financial" className="p-6">
              <div className="space-y-6">
                <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                  <h3 className="text-white font-medium mb-4">Financial Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">RSBSA Reference Number</Label>
                      <Input name="rsbsaReference" value={formData.rsbsaReference} onChange={updateFormData} className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="RSBSA Reference Number" />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">TIN Number</Label>
                      <Input name="tinNumber" value={formData.tinNumber} onChange={updateFormData} className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="TIN Number" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">Profession</Label>
                      <Select onValueChange={(value) => updateFormData({target: {name: 'profession', value}})}>
                        <SelectTrigger className="bg-[#2a2a2a] border-[#333333] text-white">
                          <SelectValue placeholder="Select Profession" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Farmer">Farmer</SelectItem>
                          <SelectItem value="Fisherfolk">Fisherfolk</SelectItem>
                          <SelectItem value="Farm Laborer">Farm Laborer</SelectItem>
                          <SelectItem value="Agricultural Technician">Agricultural Technician</SelectItem>
                          <SelectItem value="Agronomist">Agronomist</SelectItem>
                          <SelectItem value="Horticulturist">Horticulturist</SelectItem>
                          <SelectItem value="Agricultural Engineer">Agricultural Engineer</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">Gross Annual Income (Farming)</Label>
                      <Input name="grossFarmingIncome" value={formData.grossFarmingIncome} onChange={updateFormData} className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="0" type="number" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">Gross Annual Income (Non-Farming)</Label>
                      <Input name="grossNonFarmingIncome" value={formData.grossNonFarmingIncome} onChange={updateFormData} className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="0" type="number" />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-300 mb-1 block">Source of Funds</Label>
                      <Select onValueChange={(value) => updateFormData({target: {name: 'sourceOfFunds', value}})}>
                        <SelectTrigger className="bg-[#2a2a2a] border-[#333333] text-white">
                          <SelectValue placeholder="Select Source of Funds" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Personal Savings">Personal Savings</SelectItem>
                          <SelectItem value="Bank Loan">Bank Loan</SelectItem>
                          <SelectItem value="Cooperative Loan">Cooperative Loan</SelectItem>
                          <SelectItem value="Government Subsidy">Government Subsidy</SelectItem>
                          <SelectItem value="Informal Lender">Informal Lender</SelectItem>
                          <SelectItem value="Microfinance NGO">Microfinance NGO</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button onClick={() => setActiveTab('farm')} variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 rounded-md">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button onClick={() => setActiveTab('review')} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="review" className="p-6">
              <div className="space-y-6">
                <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                  <h3 className="text-white font-medium mb-4">Review Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-300 font-medium mb-2">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        <p><span className="text-gray-400">Full Name:</span> {formData.surname} {formData.firstName} {formData.middleName} {formData.extensionName}</p>
                        <p><span className="text-gray-400">Mother's Maiden Name:</span> {formData.motherMaidenName}</p>
                        <p><span className="text-gray-400">Spouse Name:</span> {formData.spouseName}</p>
                        <p><span className="text-gray-400">ID Number:</span> {formData.idNumber}</p>
                        <p><span className="text-gray-400">ID Type:</span> {formData.idType}</p>
                        <p><span className="text-gray-400">Nationality:</span> {formData.nationality}</p>
                        <p><span className="text-gray-400">Birthdate:</span> {formData.birthdate}</p>
                        <p><span className="text-gray-400">Place of Birth:</span> {formData.placeOfBirth}</p>
                        <p><span className="text-gray-400">Mobile Number:</span> {formData.mobileNumber}</p>
                        <p><span className="text-gray-400">Email:</span> {formData.email}</p>
                        <p><span className="text-gray-400">Gender:</span> {formData.gender}</p>
                        <p><span className="text-gray-400">Religion:</span> {formData.religion}</p>
                        <p><span className="text-gray-400">Education:</span> {formData.education}</p>
                        <p><span className="text-gray-400">PWD:</span> {formData.pwd}</p>
                        <p><span className="text-gray-400">4P's:</span> {formData.fourPs} {formData.fourPsSpecify}</p>
                        <p><span className="text-gray-400">Indigenous:</span> {formData.indigenous} {formData.indigenousSpecify}</p>
                        <p><span className="text-gray-400">Gov ID:</span> {formData.govId} {formData.govIdNumber}</p>
                        <p><span className="text-gray-400">Farm Assoc:</span> {formData.farmAssoc} {formData.farmAssocSpecify}</p>
                        <p><span className="text-gray-400">Household Head:</span> {formData.householdHead} {formData.householdHeadName} {formData.householdRelationship}</p>
                        <p><span className="text-gray-400">Household Male:</span> {formData.householdMale}</p>
                        <p><span className="text-gray-400">Household Female:</span> {formData.householdFemale}</p>
                        <p><span className="text-gray-400">Emergency Contact:</span> {formData.emergencyContact} {formData.emergencyNumber}</p>
                      </div>
                    </div>

                    <div className="border-t border-[#333333] pt-4">
                      <h4 className="text-gray-300 font-medium mb-2">Address Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        <p><span className="text-gray-400">House No:</span> {formData.houseNo}</p>
                        <p><span className="text-gray-400">Street:</span> {formData.street}</p>
                        <p><span className="text-gray-400">Barangay:</span> {formData.barangay}</p>
                        <p><span className="text-gray-400">Municipality:</span> {formData.municipality}</p>
                        <p><span className="text-gray-400">Province:</span> {formData.province}</p>
                        <p><span className="text-gray-400">Region:</span> {formData.region}</p>
                      </div>
                    </div>

                    <div className="border-t border-[#333333] pt-4">
                      <h4 className="text-gray-300 font-medium mb-2">Farm/Fishery Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        <p><span className="text-gray-400">Registry Type:</span> {formData.registryType}</p>
                        <p><span className="text-gray-400">Farm Parcels:</span> {formData.numFarmParcels}</p>
                        <p><span className="text-gray-400">Crops:</span> {formData.crops.join(', ')}</p>
                        <p><span className="text-gray-400">Animals:</span> {formData.animals.join(', ')}</p>
                      </div>
                    </div>

                    <div className="border-t border-[#333333] pt-4">
                      <h4 className="text-gray-300 font-medium mb-2">Financial Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        <p><span className="text-gray-400">RSBSA Number:</span> {formData.rsbsaReference}</p>
                        <p><span className="text-gray-400">TIN Number:</span> {formData.tinNumber}</p>
                        <p><span className="text-gray-400">Profession:</span> {formData.profession}</p>
                        <p><span className="text-gray-400">Gross Farming Income:</span> {formData.grossFarmingIncome}</p>
                        <p><span className="text-gray-400">Gross Non-Farming Income:</span> {formData.grossNonFarmingIncome}</p>
                        <p><span className="text-gray-400">Source of Funds:</span> {formData.sourceOfFunds}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button onClick={() => setActiveTab('financial')} variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 rounded-md">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white rounded-md">
                    <Check className="mr-2 h-4 w-4" /> Submit Registration
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-[#1e1e1e] text-white">
          <DialogHeader>
            <DialogTitle>Confirm Submission</DialogTitle>
            <DialogDescription className="text-gray-400">
              Are you sure you want to submit the registration form?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowModal(false)} className="border-[#444444] text-gray-300">
              Cancel
            </Button>
            <Button onClick={confirmSubmit} className="bg-green-600 hover:bg-green-700">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterPage;
