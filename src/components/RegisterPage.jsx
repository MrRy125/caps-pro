import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, User, MapPin, Tractor, DollarSign, FileCheck, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';

const RegisterPage = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({});
  const [additionalCrops, setAdditionalCrops] = useState([]);
  const [additionalLivestock, setAdditionalLivestock] = useState([]);
  const [additionalPoultry, setAdditionalPoultry] = useState([]);
  const [additionalWork, setAdditionalWork] = useState([]);
  const [additionalFishing, setAdditionalFishing] = useState([]);

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'address', label: 'Address', icon: MapPin },
    { id: 'farm', label: 'Farm/Fishery', icon: Tractor },
    { id: 'financial', label: 'Financial', icon: DollarSign },
    { id: 'review', label: 'Review', icon: FileCheck }
  ];

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addItem = (type, setter) => {
    setter(prev => [...prev, { id: Date.now(), name: '', value: '' }]);
  };

  const removeItem = (type, id, setter) => {
    setter(prev => prev.filter(item => item.id !== id));
  };

  const nextTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  const prevTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };

  const FormInput = ({ label, type = "text", name, placeholder, required = false, className = "", ...props }) => (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 hover:border-slate-300 ${className}`}
        value={formData[name] || ''}
        onChange={(e) => updateFormData(name, e.target.value)}
        {...props}
      />
    </div>
  );

  const FormSelect = ({ label, name, options, required = false, ...props }) => (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 hover:border-slate-300 appearance-none cursor-pointer"
        value={formData[name] || ''}
        onChange={(e) => updateFormData(name, e.target.value)}
        {...props}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );

  const RadioGroup = ({ label, name, options, required = false }) => (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex gap-4">
        {options.map(option => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={formData[name] === option.value}
              onChange={(e) => updateFormData(name, e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
            />
            <label htmlFor={`${name}-${option.value}`} className="ml-2 text-slate-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FormInput label="Surname" name="surname" placeholder="Last name" required />
        <FormInput label="First Name" name="firstName" placeholder="First name" required />
        <FormInput label="Middle Name" name="middleName" placeholder="Middle name" />
        <FormInput label="Extension Name" name="extensionName" placeholder="Jr., Sr., III" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RadioGroup 
          label="Sex" 
          name="sex" 
          options={[
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' }
          ]} 
          required 
        />
        <FormSelect 
          label="Civil Status" 
          name="civilStatus" 
          options={[
            { value: '', label: 'Select Civil Status' },
            { value: 'Single', label: 'Single' },
            { value: 'Married', label: 'Married' },
            { value: 'Widowed', label: 'Widowed' },
            { value: 'Separated', label: 'Separated' }
          ]} 
          required 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput label="Name of Spouse (if Married)" name="spouseName" placeholder="Spouse's full name" />
        <FormInput label="Mother's Maiden Name" name="motherMaidenName" placeholder="Mother's maiden name" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput label="Date of Birth" name="dob" type="date" required />
        <FormInput label="Place of Birth" name="pob" placeholder="City, Province" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput label="Religion" name="religion" placeholder="Religion" />
        <FormSelect 
          label="Highest Education" 
          name="education" 
          options={[
            { value: '', label: 'Select Education Level' },
            { value: 'None', label: 'None' },
            { value: 'Elementary', label: 'Elementary' },
            { value: 'High School', label: 'High School' },
            { value: 'Vocational', label: 'Vocational' },
            { value: 'College', label: 'College' },
            { value: 'Post Graduate', label: 'Post Graduate' }
          ]} 
        />
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RadioGroup 
              label="Person with Disability (PWD)" 
              name="pwd" 
              options={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' }
              ]} 
            />
            <RadioGroup 
              label="4P's Beneficiary" 
              name="fourPs" 
              options={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' }
              ]} 
            />
          </div>
          {formData.fourPs === 'Yes' && (
            <div className="mt-4">
              <FormInput label="If Yes, Specify" name="fourPsSpecify" placeholder="Specify 4P's details" />
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Membership & Identification</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RadioGroup 
              label="Member of Indigenous Group" 
              name="indigenous" 
              options={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' }
              ]} 
            />
            <RadioGroup 
              label="With Government ID" 
              name="govId" 
              options={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' }
              ]} 
            />
          </div>
          {formData.indigenous === 'Yes' && (
            <div className="mt-4">
              <FormInput label="If Yes, Specify Indigenous Group" name="indigenousSpecify" placeholder="Specify indigenous group" />
            </div>
          )}
          {formData.govId === 'Yes' && (
            <div className="mt-4">
              <FormInput label="Government ID Number" name="govIdNumber" placeholder="ID Number" />
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput label="Contact Number" name="contactNumber" placeholder="+63 XXX XXX XXXX" />
        <FormInput label="Emergency Contact Person" name="emergencyContact" placeholder="Full name" />
      </div>
    </div>
  );

  const renderAddress = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-2xl border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          Address Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FormInput label="House/Lot/Building No." name="houseNo" placeholder="House number" />
          <FormInput label="Street/Sitio/Subdivision" name="street" placeholder="Street name" />
          <FormInput label="Barangay" name="barangay" placeholder="Barangay" required />
          <FormInput label="Municipality/City" name="municipality" placeholder="Municipality/City" required />
          <FormInput label="Province" name="province" placeholder="Province" required />
          <FormInput label="Region" name="region" placeholder="Region" required />
        </div>
      </div>
    </div>
  );

  const renderFarmFishery = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Main Livelihood</h3>
        <FormSelect 
          label="Select Main Livelihood" 
          name="mainLivelihood" 
          options={[
            { value: '', label: 'Select Livelihood' },
            { value: 'Farmer', label: 'Farmer' },
            { value: 'Farmworker/Laborer', label: 'Farmworker/Laborer' },
            { value: 'Fisherfolk', label: 'Fisherfolk' }
          ]} 
          required 
        />
      </div>

      {formData.mainLivelihood === 'Farmer' && (
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-800 mb-6">Farming Activities</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <FormInput label="Rice Area (ha)" name="riceValue" type="number" placeholder="0.0" />
              <FormInput label="Corn Area (ha)" name="cornValue" type="number" placeholder="0.0" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h5 className="font-semibold text-slate-700">Other Crops</h5>
                <Button
                  type="button"
                  onClick={() => addItem('crops', setAdditionalCrops)}
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-2"
                  size="sm"
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Crop
                </Button>
              </div>
              {additionalCrops.map((crop) => (
                <div key={crop.id} className="flex gap-4 items-end">
                  <div className="flex-1">
                    <FormInput label="Crop Name" placeholder="Crop name" />
                  </div>
                  <div className="flex-1">
                    <FormInput label="Area (ha)" type="number" placeholder="0.0" />
                  </div>
                  <Button
                    type="button"
                    onClick={() => removeItem('crops', crop.id, setAdditionalCrops)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                    size="sm"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-semibold text-slate-700">Livestock</h5>
                <Button
                  type="button"
                  onClick={() => addItem('livestock', setAdditionalLivestock)}
                  className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-3 py-1 text-sm"
                >
                  <Plus className="h-3 w-3 mr-1" /> Add
                </Button>
              </div>
              {additionalLivestock.map((animal) => (
                <div key={animal.id} className="flex gap-2 items-end mb-3">
                  <FormInput placeholder="Type" className="text-sm" />
                  <FormInput type="number" placeholder="Heads" className="text-sm" />
                  <Button
                    type="button"
                    onClick={() => removeItem('livestock', animal.id, setAdditionalLivestock)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
                    size="sm"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-semibold text-slate-700">Poultry</h5>
                <Button
                  type="button"
                  onClick={() => addItem('poultry', setAdditionalPoultry)}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-3 py-1 text-sm"
                >
                  <Plus className="h-3 w-3 mr-1" /> Add
                </Button>
              </div>
              {additionalPoultry.map((bird) => (
                <div key={bird.id} className="flex gap-2 items-end mb-3">
                  <FormInput placeholder="Type" className="text-sm" />
                  <FormInput type="number" placeholder="Heads" className="text-sm" />
                  <Button
                    type="button"
                    onClick={() => removeItem('poultry', bird.id, setAdditionalPoultry)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
                    size="sm"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {formData.mainLivelihood === 'Farmworker/Laborer' && (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="text-lg font-semibold text-slate-800 mb-6">Kind of Work</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {['Land Preparation', 'Planting/Transplanting', 'Cultivation', 'Harvesting'].map(work => (
              <label key={work} className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                <span className="text-slate-700">{work}</span>
              </label>
            ))}
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="font-semibold text-slate-700">Other Work Types</h5>
              <Button
                type="button"
                onClick={() => addItem('work', setAdditionalWork)}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2"
                size="sm"
              >
                <Plus className="h-4 w-4 mr-1" /> Add Work
              </Button>
            </div>
            {additionalWork.map((work) => (
              <div key={work.id} className="flex gap-4 items-end">
                <div className="flex-1">
                  <FormInput placeholder="Work type" />
                </div>
                <Button
                  type="button"
                  onClick={() => removeItem('work', work.id, setAdditionalWork)}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                  size="sm"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {formData.mainLivelihood === 'Fisherfolk' && (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="text-lg font-semibold text-slate-800 mb-6">Type of Fishing Activity</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {['Fish Capture', 'Aquaculture', 'Gleaning', 'Fish Processing', 'Fish Vending'].map(activity => (
              <label key={activity} className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                <span className="text-slate-700">{activity}</span>
              </label>
            ))}
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="font-semibold text-slate-700">Other Fishing Activities</h5>
              <Button
                type="button"
                onClick={() => addItem('fishing', setAdditionalFishing)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-4 py-2"
                size="sm"
              >
                <Plus className="h-4 w-4 mr-1" /> Add Activity
              </Button>
            </div>
            {additionalFishing.map((activity) => (
              <div key={activity.id} className="flex gap-4 items-end">
                <div className="flex-1">
                  <FormInput placeholder="Fishing activity" />
                </div>
                <Button
                  type="button"
                  onClick={() => removeItem('fishing', activity.id, setAdditionalFishing)}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                  size="sm"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {(formData.mainLivelihood === 'Farmer' || formData.mainLivelihood === 'Farmworker/Laborer') && (
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-200">
          <h4 className="text-xl font-semibold text-slate-800 mb-6">Farm Parcels</h4>
          {[1, 2, 3].map(parcelNum => (
            <div key={parcelNum} className="bg-white p-6 rounded-xl border border-slate-200 mb-6 shadow-sm">
              <h5 className="text-lg font-semibold text-slate-700 mb-4">Parcel {parcelNum}</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FormInput label="Location (Barangay & Municipality)" name={`parcel${parcelNum}Location`} placeholder="Location details" />
                <FormInput label="Total Area (ha)" name={`parcel${parcelNum}Area`} type="number" placeholder="0.0" />
                <FormInput label="Ownership Document No" name={`parcel${parcelNum}DocNo`} placeholder="Document number" />
                <FormSelect 
                  label="Ownership Type" 
                  name={`parcel${parcelNum}Ownership`}
                  options={[
                    { value: '', label: 'Select Ownership Type' },
                    { value: 'Registered Owner', label: 'Registered Owner' },
                    { value: 'Tenant', label: 'Tenant' },
                    { value: 'Lessee', label: 'Lessee' },
                    { value: 'Others', label: 'Others' }
                  ]} 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput label="Land Owner Name (if Tenant/Lessee)" name={`parcel${parcelNum}OwnerName`} placeholder="Land owner name" />
                <FormSelect 
                  label="Farm Type" 
                  name={`parcel${parcelNum}FarmType`}
                  options={[
                    { value: '', label: 'Select Farm Type' },
                    { value: '1 - Irrigated', label: '1 - Irrigated' },
                    { value: '2 - Rainfed Upland', label: '2 - Rainfed Upland' },
                    { value: '3 - Rainfed Lowland', label: '3 - Rainfed Lowland' }
                  ]} 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <RadioGroup 
                  label="Agrarian Reform Beneficiary (ARB)" 
                  name={`parcel${parcelNum}ARB`}
                  options={[
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                  ]} 
                />
                <RadioGroup 
                  label="Organic Practitioner" 
                  name={`parcel${parcelNum}Organic`}
                  options={[
                    { value: 'Y', label: 'Yes' },
                    { value: 'N', label: 'No' }
                  ]} 
                />
                <FormInput label="Crop/Commodity" name={`parcel${parcelNum}Commodity`} placeholder="Main crop" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderFinancial = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-green-600" />
          Financial Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput label="RSBSA Reference Number" name="rsbsaReference" placeholder="RSBSA Reference Number" />
          <FormInput label="TIN Number" name="tinNumber" placeholder="TIN Number" />
          <FormSelect 
            label="Profession" 
            name="profession"
            options={[
              { value: '', label: 'Select Profession' },
              { value: 'Farmer', label: 'Farmer' },
              { value: 'Fisherfolk', label: 'Fisherfolk' },
              { value: 'Farm Laborer', label: 'Farm Laborer' },
              { value: 'Agricultural Technician', label: 'Agricultural Technician' },
              { value: 'Agronomist', label: 'Agronomist' },
              { value: 'Horticulturist', label: 'Horticulturist' },
              { value: 'Agricultural Engineer', label: 'Agricultural Engineer' },
              { value: 'Other', label: 'Other' }
            ]} 
          />
          <FormSelect 
            label="Source of Funds" 
            name="sourceOfFunds"
            options={[
              { value: '', label: 'Select Source of Funds' },
              { value: 'Personal Savings', label: 'Personal Savings' },
              { value: 'Bank Loan', label: 'Bank Loan' },
              { value: 'Cooperative Loan', label: 'Cooperative Loan' },
              { value: 'Government Subsidy', label: 'Government Subsidy' },
              { value: 'Informal Lender', label: 'Informal Lender' },
              { value: 'Microfinance NGO', label: 'Microfinance NGO' },
              { value: 'Other', label: 'Other' }
            ]} 
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <FormInput 
            label="Gross Annual Income Last Year (Farming)" 
            name="grossFarmingIncome" 
            type="number" 
            placeholder="0.00" 
          />
          <FormInput 
            label="Gross Annual Income Last Year (Non-Farming)" 
            name="grossNonFarmingIncome" 
            type="number" 
            placeholder="0.00" 
          />
        </div>
      </div>
    </div>
  );

  const renderReview = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
          <FileCheck className="h-5 w-5 text-green-600" />
          Review Information
        </h3>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-slate-600 text-center py-8">
            Please review all information carefully before submitting your RSBSA registration.
            Make sure all details are accurate and complete.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-700">Personal Information</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <p><strong>Name:</strong> {formData.surname || 'N/A'}, {formData.firstName || 'N/A'} {formData.middleName || ''}</p>
                <p><strong>Sex:</strong> {formData.sex || 'N/A'}</p>
                <p><strong>Civil Status:</strong> {formData.civilStatus || 'N/A'}</p>
                <p><strong>Date of Birth:</strong> {formData.dob || 'N/A'}</p>
                <p><strong>Contact:</strong> {formData.contactNumber || 'N/A'}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-700">Address</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <p><strong>Barangay:</strong> {formData.barangay || 'N/A'}</p>
                <p><strong>Municipality:</strong> {formData.municipality || 'N/A'}</p>
                <p><strong>Province:</strong> {formData.province || 'N/A'}</p>
                <p><strong>Region:</strong> {formData.region || 'N/A'}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-700">Livelihood</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <p><strong>Main Livelihood:</strong> {formData.mainLivelihood || 'N/A'}</p>
                <p><strong>Profession:</strong> {formData.profession || 'N/A'}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-700">Financial</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <p><strong>RSBSA Reference:</strong> {formData.rsbsaReference || 'N/A'}</p>
                <p><strong>TIN Number:</strong> {formData.tinNumber || 'N/A'}</p>
                <p><strong>Source of Funds:</strong> {formData.sourceOfFunds || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const getCurrentIcon = (tabId) => {
    const tab = tabs.find(t => t.id === tabId);
    return tab ? tab.icon : User;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">RSBSA Registration Form</h1>
          <p className="text-slate-600">Registry System for Basic Sectors in Agriculture</p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              {React.createElement(getCurrentIcon(activeTab), { className: "h-7 w-7" })}
              {tabs.find(t => t.id === activeTab)?.label}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            {/* Tab Navigation */}
            <div className="px-8 pt-8">
              <div className="flex justify-between items-center mb-8">
                {tabs.map((tab, index) => {
                  const Icon = tab.icon;
                  const isActive = tab.id === activeTab;
                  const isCompleted = tabs.findIndex(t => t.id === activeTab) > index;

                  return (
                    <div key={tab.id} className="flex items-center">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                        isActive 
                          ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-110' 
                          : isCompleted
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-slate-100 border-slate-300 text-slate-400'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : (
                          <Icon className="h-6 w-6" />
                        )}
                      </div>
                      {index < tabs.length - 1 && (
                        <div className={`w-16 h-0.5 mx-2 transition-colors duration-300 ${
                          isCompleted ? 'bg-green-500' : 'bg-slate-200'
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Content */}
            <div className="px-8 pb-8">
              <form className="space-y-8">
                {activeTab === 'personal' && renderPersonalInfo()}
                {activeTab === 'address' && renderAddress()}
                {activeTab === 'farm' && renderFarmFishery()}
                {activeTab === 'financial' && renderFinancial()}
                {activeTab === 'review' && renderReview()}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t border-slate-200">
                  <Button
                    type="button"
                    onClick={prevTab}
                    disabled={activeTab === 'personal'}
                    className="bg-slate-600 hover:bg-slate-700 text-white rounded-xl px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>

                  {activeTab === 'review' ? (
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Submit Registration
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={nextTab}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;

