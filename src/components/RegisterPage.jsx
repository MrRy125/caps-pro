import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs";
import { Input } from "components/ui/input";
import { Button } from "components/ui/button";
import { Badge } from "components/ui/badge";

const RegisterPage = () => {
  return (
    <div className="p-6 space-y-6">
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-white text-xl">Register New RSBSA</CardTitle>
            <CardDescription className="text-gray-400">Fill in the details to register a new farmer or fisherfolk</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal" className="w-full">
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

              <TabsContent value="personal" className="mt-0">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-1 block">Last Name / Qualifier</label>
                      <Input className="bg-[#252525] border-[#333333] text-white" placeholder="Last Name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-1 block">First Name</label>
                      <Input className="bg-[#252525] border-[#333333] text-white" placeholder="First Name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-1 block">Middle Name</label>
                      <Input className="bg-[#252525] border-[#333333] text-white" placeholder="Middle Name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-1 block">Mother's Maiden Name</label>
                      <Input className="bg-[#252525] border-[#333333] text-white" placeholder="Mother's Maiden Name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-1 block">Name of Spouse</label>
                      <Input className="bg-[#252525] border-[#333333] text-white" placeholder="Name of Spouse" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-1 block">ID Number</label>
                      <Input className="bg-[#252525] border-[#333333] text-white" placeholder="ID Number" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-1 block">ID Type</label>
                      <div className="relative">
                        <select className="w-full h-10 px-3 py-2 bg-[#252525] border border-[#333333] rounded-md text-white appearance-none cursor-pointer">
                          <option value="">Select ID Type</option>
                          <option value="passport">Passport</option>
                          <option value="drivers_license">Driver's License</option>
                          <option value="sss">SSS ID</option>
                          <option value="philhealth">PhilHealth ID</option>
                          <option value="voters">Voter's ID</option>
                        </select>
                        <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-1 block">Nationality</label>
                      <Input className="bg-[#252525] border-[#333333] text-white" placeholder="Nationality" defaultValue="Filipino" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-1 block">Birthdate</label>
                      <Input type="date" className="bg-[#252525] border-[#333333] text-white" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium text-gray-300 mb-1 block">Place of Birth</label>
                      <Input className="bg-[#252525] border-[#333333] text-white" placeholder="Place of Birth" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-1 block">Mobile Number</label>
                      <Input className="bg-[#252525] border-[#333333] text-white" placeholder="+63 XXX XXX XXXX" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-1 block">Email Address</label>
                      <Input className="bg-[#252525] border-[#333333] text-white" placeholder="email@example.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-1 block">Gender</label>
                      <div className="flex gap-4 mt-2">
                        <div className="flex items-center">
                          <input type="radio" id="male" name="gender" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="male" className="ml-2 text-gray-300">Male</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="female" name="gender" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="female" className="ml-2 text-gray-300">Female</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap">
                      Next <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="address" className="mt-0">
                <div className="space-y-6">
                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <h3 className="text-white font-medium mb-4">Permanent Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">Street Address</label>
                        <Input className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="House No., Street" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">Barangay/Village</label>
                        <Input className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="Barangay/Village" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">City/Municipality</label>
                        <Input className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="City/Municipality" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">Province</label>
                        <Input className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="Province" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-medium">Present Address</h3>
                      <div className="flex items-center">
                        <input type="checkbox" id="sameAddress" className="h-4 w-4 text-blue-600" />
                        <label htmlFor="sameAddress" className="ml-2 text-gray-300 text-sm">Same as Permanent Address</label>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">Street Address</label>
                        <Input className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="House No., Street" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">Barangay/Village</label>
                        <Input className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="Barangay/Village" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">City/Municipality</label>
                        <Input className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="City/Municipality" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">Province</label>
                        <Input className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="Province" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                      <i className="fas fa-arrow-left mr-2"></i> Previous
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap">
                      Next <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="farm" className="mt-0">
                <div className="space-y-6">
                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-medium">Registry Type</h3>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1 border border-[#333333] rounded-md p-4 bg-[#2a2a2a] cursor-pointer hover:bg-[#333333]">
                        <div className="flex items-center">
                          <input type="radio" id="farmer" name="registryType" className="h-4 w-4 text-green-600" />
                          <label htmlFor="farmer" className="ml-2 text-white font-medium">Farmer</label>
                        </div>
                        <p className="text-gray-400 text-sm mt-2">Register as a farmer with crop and animal production details</p>
                      </div>
                      <div className="flex-1 border border-[#333333] rounded-md p-4 bg-[#2a2a2a] cursor-pointer hover:bg-[#333333]">
                        <div className="flex items-center">
                          <input type="radio" id="fisherfolk" name="registryType" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="fisherfolk" className="ml-2 text-white font-medium">Fisherfolk</label>
                        </div>
                        <p className="text-gray-400 text-sm mt-2">Register as a fisherfolk with fishing vessel and boundary details</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <h3 className="text-white font-medium mb-4">Farm Details</h3>
                    <div className="mb-4">
                      <label className="text-sm font-medium text-gray-300 mb-1 block">Number of Farm Parcels</label>
                      <Input type="number" className="bg-[#2a2a2a] border-[#333333] text-white w-32" min="1" defaultValue="1" />
                    </div>

                    <h4 className="text-gray-300 font-medium mt-6 mb-3">Crops</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Rice', 'Corn', 'Coconut', 'Banana', 'Coffee', 'Cacao', 'Vegetables', 'Fruits', 'Palm Oil', 'Rubber', 'Cassava', 'Sweet Potato'].map((crop) => (
                        <div key={crop} className="flex items-center">
                          <input type="checkbox" id={crop.toLowerCase()} className="h-4 w-4 text-green-600" />
                          <label htmlFor={crop.toLowerCase()} className="ml-2 text-gray-300">{crop}</label>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-gray-300 font-medium mt-6 mb-3">Animals</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Carabao', 'Cattle', 'Swine', 'Chicken', 'Duck', 'Goat', 'Horse'].map((animal) => (
                        <div key={animal} className="flex items-center">
                          <input type="checkbox" id={animal.toLowerCase()} className="h-4 w-4 text-green-600" />
                          <label htmlFor={animal.toLowerCase()} className="ml-2 text-gray-300">{animal}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                      <i className="fas fa-arrow-left mr-2"></i> Previous
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap">
                      Next <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="financial" className="mt-0">
                <div className="space-y-6">
                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <h3 className="text-white font-medium mb-4">Financial Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">RSBSA Reference Number</label>
                        <Input className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="RSBSA Reference Number" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">TIN Number</label>
                        <Input className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="TIN Number" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">Profession</label>
                        <div className="relative">
                          <select className="w-full h-10 px-3 py-2 bg-[#2a2a2a] border border-[#333333] rounded-md text-white appearance-none cursor-pointer">
                            <option value="">Select Profession</option>
                            <option value="farmer">Farmer</option>
                            <option value="fisherfolk">Fisherfolk</option>
                            <option value="farm_worker">Farm Worker</option>
                            <option value="agri_youth">Agri-Youth</option>
                            <option value="other">Other</option>
                          </select>
                          <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">Gross Salary</label>
                        <Input className="bg-[#2a2a2a] border-[#333333] text-white" placeholder="Gross Salary" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="text-sm font-medium text-gray-300 mb-1 block">Source of Funds</label>
                      <div className="relative">
                        <select className="w-full h-10 px-3 py-2 bg-[#2a2a2a] border border-[#333333] rounded-md text-white appearance-none cursor-pointer">
                          <option value="">Select Source of Funds</option>
                          <option value="salary">Salary</option>
                          <option value="business">Business</option>
                          <option value="remittance">Remittance</option>
                          <option value="pension">Pension</option>
                          <option value="investment">Investment</option>
                          <option value="other">Other</option>
                        </select>
                        <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                      <i className="fas fa-arrow-left mr-2"></i> Previous
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap">
                      Next <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="review" className="mt-0">
                <div className="space-y-6">
                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <h3 className="text-white font-medium mb-4">Review Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-gray-300 font-medium mb-2">Personal Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                          <div className="flex">
                            <span className="text-gray-400 w-36">Full Name:</span>
                            <span className="text-white">Juan Dela Cruz</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-400 w-36">Mother's Name:</span>
                            <span className="text-white">Maria Dela Cruz</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-400 w-36">ID Number:</span>
                            <span className="text-white">1234-5678-9012-3456</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-400 w-36">ID Type:</span>
                            <span className="text-white">PhilSys ID</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-400 w-36">Birthdate:</span>
                            <span className="text-white">January 15, 1985</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-400 w-36">Gender:</span>
                            <span className="text-white">Male</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-400 w-36">Mobile Number:</span>
                            <span className="text-white">+63 912 345 6789</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-400 w-36">Email:</span>
                            <span className="text-white">juan.delacruz@example.com</span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#333333] pt-4">
                        <h4 className="text-gray-300 font-medium mb-2">Address Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                          <div>
                            <h5 className="text-gray-400 text-sm mb-1">Permanent Address</h5>
                            <p className="text-white">123 Main St., Brgy. San Isidro, Tacloban City, Leyte</p>
                          </div>
                          <div>
                            <h5 className="text-gray-400 text-sm mb-1">Present Address</h5>
                            <p className="text-white">123 Main St., Brgy. San Isidro, Tacloban City, Leyte</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#333333] pt-4">
                        <h4 className="text-gray-300 font-medium mb-2">Farm/Fishery Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                          <div className="flex">
                            <span className="text-gray-400 w-36">Registry Type:</span>
                            <span className="text-white">Farmer</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-400 w-36">Farm Parcels:</span>
                            <span className="text-white">2</span>
                          </div>
                          <div className="flex flex-col md:col-span-2">
                            <span className="text-gray-400 mb-1">Crops:</span>
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-green-900/50 text-green-300">Rice</Badge>
                              <Badge className="bg-green-900/50 text-green-300">Corn</Badge>
                              <Badge className="bg-green-900/50 text-green-300">Vegetables</Badge>
                            </div>
                          </div>
                          <div className="flex flex-col md:col-span-2 mt-2">
                            <span className="text-gray-400 mb-1">Animals:</span>
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-green-900/50 text-green-300">Carabao</Badge>
                              <Badge className="bg-green-900/50 text-green-300">Chicken</Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#333333] pt-4">
                        <h4 className="text-gray-300 font-medium mb-2">Financial Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                          <div className="flex">
                            <span className="text-gray-400 w-36">RSBSA Number:</span>
                            <span className="text-white">RS-2025-0006</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-400 w-36">TIN Number:</span>
                            <span className="text-white">123-456-789-000</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-400 w-36">Profession:</span>
                            <span className="text-white">Farmer</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-400 w-36">Source of Funds:</span>
                            <span className="text-white">Farming</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                      <i className="fas fa-arrow-left mr-2"></i> Previous
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700 text-white !rounded-button whitespace-nowrap">
                      <i className="fas fa-check mr-2"></i> Submit Registration
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
  );
};

export default RegisterPage;
