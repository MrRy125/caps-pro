import React, { useState } from 'react';

const RsbsaForm = () => {
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
    farmParcels: Array(3).fill({ location: '', area: 0, docNo: '', ownershipType: '', ownerName: '', arb: false, farmType: '', organic: false, commodity: '', heads: 0, animalType: '' }), // for Farmer, Farm Worker, Agri-Youth
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
      farmingActivities: { ...prev.farmingActivities, otherCrops: [...prev.farmingActivities.otherCrops, { name: '', value: 0 }] }
    }));
  };

  const updateOtherCrop = (index, field, value) => {
    const newCrops = [...formData.farmingActivities.otherCrops];
    newCrops[index][field] = value;
    setFormData(prev => ({ ...prev, farmingActivities: { ...prev.farmingActivities, otherCrops: newCrops } }));
  };

  // Similar functions for addLivestock, addPoultry, addWork, addFishing, update parcel, etc.
  const addLivestock = () => {
    setFormData(prev => ({ ...prev, livestock: [...prev.livestock, { type: '', heads: 0 }] }));
  };

  const updateLivestock = (index, field, value) => {
    const newLivestock = [...formData.livestock];
    newLivestock[index][field] = value;
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

  const addWork = () => {
    setFormData(prev => ({ ...prev, otherWork: [...prev.otherWork, ''] }));
  };

  const updateWork = (index, value) => {
    const newWork = [...formData.otherWork];
    newWork[index] = value;
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

  const updateParcel = (index, field, value) => {
    const newParcels = [...formData.farmParcels];
    newParcels[index][field] = value;
    setFormData(prev => ({ ...prev, farmParcels: newParcels }));
  };

  const handleSubmit = () => {
    setShowModal(true);
    // Simulate submit
    console.log(formData);
  };

  const tabs = ['Personal Info', 'Address', 'Livelihood', 'Financial', 'Preview'];

  if (!role) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-2xl font-bold mb-4">Select Your Role</h1>
        <div className="grid grid-cols-4 gap-4">
          {roles.map(r => (
            <div key={r} className="bg-gray-800 p-4 rounded cursor-pointer" onClick={() => { setRole(r); setFormData(prev => ({ ...prev, mainLivelihood: r })); }}>
              <input type="radio" name="role" value={r} checked={role === r} readOnly />
              <label className="ml-2">{r}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const renderTab = () => {
    switch (step) {
      case 0: // Personal Info
        return (
          <div className="space-y-4">
            <label>Enrollment*: <select name="enrollment" value={formData.enrollment} onChange={updateFormData}><option>New</option><option>Existing</option></select></label>
            <label>Surname*: <input name="surname" value={formData.surname} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>First Name*: <input name="firstName" value={formData.firstName} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Middle Name: <input name="middleName" value={formData.middleName} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Extension Name: <input name="extensionName" value={formData.extensionName} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Sex*: <input type="radio" name="sex" value="Male" checked={formData.sex === 'Male'} onChange={updateFormData} /> Male <input type="radio" name="sex" value="Female" checked={formData.sex === 'Female'} onChange={updateFormData} /> Female</label>
            <label>Contact Number*: <input name="contactNumber" value={formData.contactNumber} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Date of Birth*: <input type="date" name="dob" value={formData.dob} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Place of Birth*: <input name="pob" value={formData.pob} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Religion: <input name="religion" value={formData.religion} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Highest Education*: <select name="education" value={formData.education} onChange={updateFormData}><option>None</option><option>Elementary</option><option>High School</option><option>Vocational</option><option>College</option><option>Post Graduate</option></select></label>
            <label>PWD*: <input type="checkbox" name="pwd" checked={formData.pwd} onChange={updateFormData} /></label>
            <label>Civil Status*: <select name="civilStatus" value={formData.civilStatus} onChange={updateFormData}><option>Single</option><option>Married</option><option>Widowed</option><option>Separated</option></select></label>
            {formData.civilStatus === 'Married' && <label>Spouse Name*: <input name="spouseName" value={formData.spouseName} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>}
            <label>Mother's Maiden Name*: <input name="motherMaidenName" value={formData.motherMaidenName} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>4P's Beneficiary*: <input type="checkbox" name="fourPs" checked={formData.fourPs} onChange={updateFormData} /></label>
            {formData.fourPs && <label>Specify: <input name="fourPsSpecify" value={formData.fourPsSpecify} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>}
            <label>Indigenous Group*: <input type="checkbox" name="indigenous" checked={formData.indigenous} onChange={updateFormData} /></label>
            {formData.indigenous && <label>Specify: <input name="indigenousSpecify" value={formData.indigenousSpecify} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>}
            <label>Government ID*: <input type="checkbox" name="govId" checked={formData.govId} onChange={updateFormData} /></label>
            {formData.govId && <label>ID Number: <input name="govIdNumber" value={formData.govIdNumber} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>}
            <label>Farmers Association*: <input type="checkbox" name="farmAssoc" checked={formData.farmAssoc} onChange={updateFormData} /></label>
            {formData.farmAssoc && <label>Specify: <input name="farmAssocSpecify" value={formData.farmAssocSpecify} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>}
            <label>Household Head*: <input type="checkbox" name="householdHead" checked={formData.householdHead} onChange={updateFormData} /></label>
            {!formData.householdHead && (
              <>
                <label>Head Name*: <input name="householdHeadName" value={formData.householdHeadName} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
                <label>Relationship*: <input name="householdRelationship" value={formData.householdRelationship} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
              </>
            )}
            <label>No. Male*: <input type="number" name="householdMale" value={formData.householdMale} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>No. Female*: <input type="number" name="householdFemale" value={formData.householdFemale} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Emergency Contact: <input name="emergencyContact" value={formData.emergencyContact} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Emergency Number: <input name="emergencyNumber" value={formData.emergencyNumber} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
          </div>
        );
      case 1: // Address
        return (
          <div className="space-y-4">
            <label>House No: <input name="addressHouseNo" value={formData.addressHouseNo} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Street: <input name="addressStreet" value={formData.addressStreet} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Barangay*: <input name="addressBarangay" value={formData.addressBarangay} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Municipality*: <input name="addressMunicipality" value={formData.addressMunicipality} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Province*: <input name="addressProvince" value={formData.addressProvince} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Region*: <input name="addressRegion" value={formData.addressRegion} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
          </div>
        );
      case 2: // Livelihood
        if (role === 'Farmer' || role === 'Agri-Youth') {
          return (
            <div className="space-y-4">
              <label>Rice: <input type="number" name="rice" value={formData.farmingActivities.rice} onChange={(e) => setFormData(prev => ({ ...prev, farmingActivities: { ...prev.farmingActivities, rice: e.target.value } }))} className="bg-gray-800 text-white p-2 rounded" /></label>
              <label>Corn: <input type="number" name="corn" value={formData.farmingActivities.corn} onChange={(e) => setFormData(prev => ({ ...prev, farmingActivities: { ...prev.farmingActivities, corn: e.target.value } }))} className="bg-gray-800 text-white p-2 rounded" /></label>
              <button onClick={addOtherCrop} className="bg-blue-600 p-2 rounded">Add Other Crop</button>
              {formData.farmingActivities.otherCrops.map((crop, index) => (
                <div key={index}>
                  <label>Crop Name*: <input value={crop.name} onChange={(e) => updateOtherCrop(index, 'name', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                  <label>Value*: <input type="number" value={crop.value} onChange={(e) => updateOtherCrop(index, 'value', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                </div>
              ))}
              <h3>Livestock</h3>
              <button onClick={addLivestock} className="bg-blue-600 p-2 rounded">Add Livestock</button>
              {formData.livestock.map((item, index) => (
                <div key={index}>
                  <label>Type*: <input value={item.type} onChange={(e) => updateLivestock(index, 'type', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                  <label>Heads*: <input type="number" value={item.heads} onChange={(e) => updateLivestock(index, 'heads', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                </div>
              ))}
              <h3>Poultry</h3>
              <button onClick={addPoultry} className="bg-blue-600 p-2 rounded">Add Poultry</button>
              {formData.poultry.map((item, index) => (
                <div key={index}>
                  <label>Type*: <input value={item.type} onChange={(e) => updatePoultry(index, 'type', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                  <label>Heads*: <input type="number" value={item.heads} onChange={(e) => updatePoultry(index, 'heads', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                </div>
              ))}
              <h3>Farm Parcels</h3>
              {formData.farmParcels.map((parcel, index) => (
                <div key={index} className="border p-4 rounded">
                  <label>Location*: <input value={parcel.location} onChange={(e) => updateParcel(index, 'location', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                  <label>Area (ha)*: <input type="number" value={parcel.area} onChange={(e) => updateParcel(index, 'area', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                  <label>Doc No: <input value={parcel.docNo} onChange={(e) => updateParcel(index, 'docNo', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                  <label>Ownership Type*: <select value={parcel.ownershipType} onChange={(e) => updateParcel(index, 'ownershipType', e.target.value)}><option>Registered Owner</option><option>Tenant</option><option>Lessee</option><option>Others</option></select></label>
                  <label>Owner Name: <input value={parcel.ownerName} onChange={(e) => updateParcel(index, 'ownerName', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                  <label>ARB*: <input type="checkbox" checked={parcel.arb} onChange={(e) => updateParcel(index, 'arb', e.target.checked)} /></label>
                  <label>Farm Type: <select value={parcel.farmType} onChange={(e) => updateParcel(index, 'farmType', e.target.value)}><option>1 - Irrigated</option><option>2 - Rainfed Upland</option><option>3 - Rainfed Lowland</option></select></label>
                  <label>Organic*: <input type="checkbox" checked={parcel.organic} onChange={(e) => updateParcel(index, 'organic', e.target.checked)} /></label>
                  <label>Commodity: <input value={parcel.commodity} onChange={(e) => updateParcel(index, 'commodity', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                  <label>No. Heads: <input type="number" value={parcel.heads} onChange={(e) => updateParcel(index, 'heads', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                  <label>Animal Type: <input value={parcel.animalType} onChange={(e) => updateParcel(index, 'animalType', e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                </div>
              ))}
            </div>
          );
        } else if (role === 'Farm Worker/Laborer') {
          return (
            <div className="space-y-4">
              <label><input type="checkbox" name="workTypes" value="Land Preparation" onChange={(e) => {
                let newTypes = [...formData.workTypes];
                if (e.target.checked) newTypes.push(e.target.value); else newTypes = newTypes.filter(t => t !== e.target.value);
                setFormData(prev => ({ ...prev, workTypes: newTypes }));
              }} /> Land Preparation</label>
              {/* Add other checkboxes for Planting, Cultivation, Harvesting */}
              <button onClick={addWork} className="bg-blue-600 p-2 rounded">Add Other Work</button>
              {formData.otherWork.map((work, index) => (
                <div key={index}>
                  <label>Other: <input value={work} onChange={(e) => updateWork(index, e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                </div>
              ))}
              <h3>Farm Parcels</h3>
              {/* Same as above for parcels */}
            </div>
          );
        } else if (role === 'Fisherfolk') {
          return (
            <div className="space-y-4">
              <label><input type="checkbox" name="fishingTypes" value="Fish Capture" onChange={(e) => {
                let newTypes = [...formData.fishingTypes];
                if (e.target.checked) newTypes.push(e.target.value); else newTypes = newTypes.filter(t => t !== e.target.value);
                setFormData(prev => ({ ...prev, fishingTypes: newTypes }));
              }} /> Fish Capture</label>
              {/* Add other checkboxes for Aquaculture, Gleaning, Fish Processing, Fish Vending */}
              <button onClick={addFishing} className="bg-blue-600 p-2 rounded">Add Other Fishing</button>
              {formData.otherFishing.map((fishing, index) => (
                <div key={index}>
                  <label>Other: <input value={fishing} onChange={(e) => updateFishing(index, e.target.value)} className="bg-gray-800 text-white p-2 rounded" /></label>
                </div>
              ))}
              {/* No farm parcels */}
            </div>
          );
        }
      case 3: // Financial
        return (
          <div className="space-y-4">
            <label>Gross Farming Income*: <input type="number" name="grossFarmingIncome" value={formData.grossFarmingIncome} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Gross Non-Farming Income*: <input type="number" name="grossNonFarmingIncome" value={formData.grossNonFarmingIncome} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>RSBSA Reference: <input name="rsbsaReference" value={formData.rsbsaReference} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>TIN Number: <input name="tinNumber" value={formData.tinNumber} onChange={updateFormData} className="bg-gray-800 text-white p-2 rounded" /></label>
            <label>Profession: <select name="profession" value={formData.profession} onChange={updateFormData}><option>Farmer</option><option>Fisherfolk</option><option>Farm Laborer</option><option>Other</option></select></label>
            <label>Source of Funds: <select name="sourceOfFunds" value={formData.sourceOfFunds} onChange={updateFormData}><option>Personal Savings</option><option>Bank Loan</option><option>Other</option></select></label>
          </div>
        );
      case 4: // Preview
        return (
          <div>
            <pre className="text-sm">{JSON.stringify(formData, null, 2)}</pre>
            <button onClick={handleSubmit} className="bg-green-600 p-2 rounded">Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-4">RSBSA Enrollment Form - {role}</h1>
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab, index) => (
          <button key={index} className={`p-2 rounded ${step === index ? 'bg-blue-600' : 'bg-gray-700'}`} onClick={() => setStep(index)}>
            {tab}
          </button>
        ))}
      </div>
      {renderTab()}
      <div className="mt-4">
        {step > 0 && <button onClick={() => setStep(step - 1)} className="bg-gray-600 p-2 rounded mr-2">Prev</button>}
        {step < 4 && <button onClick={() => setStep(step + 1)} className="bg-blue-600 p-2 rounded">Next</button>}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-4 rounded">
            <h2>Confirm Submit</h2>
            <p>Are you sure?</p>
            <button onClick={() => { setShowModal(false); /* submit logic */ }} className="bg-green-600 p-2 rounded">Yes</button>
            <button onClick={() => setShowModal(false)} className="bg-red-600 p-2 rounded ml-2">No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RsbsaForm;
