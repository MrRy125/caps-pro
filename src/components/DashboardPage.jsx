import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-[#1e1e1e] border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Farmers</p>
                  <h3 className="text-2xl font-bold text-white mt-1">4,289</h3>
                  <p className="text-xs text-green-500 mt-1">+12% from last month</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-900/30 flex items-center justify-center">
                  <i className="fas fa-seedling text-green-500 text-xl"></i>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1e1e] border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Fisherfolks</p>
                  <h3 className="text-2xl font-bold text-white mt-1">2,157</h3>
                  <p className="text-xs text-blue-500 mt-1">+8% from last month</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-900/30 flex items-center justify-center">
                  <i className="fas fa-fish text-blue-500 text-xl"></i>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1e1e] border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Unset Pinmarks</p>
                  <h3 className="text-2xl font-bold text-white mt-1">342</h3>
                  <p className="text-xs text-orange-500 mt-1">Action needed</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-orange-900/30 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-orange-500 text-xl"></i>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1e1e] border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Crops/Animals</p>
                  <h3 className="text-2xl font-bold text-white mt-1">12,845</h3>
                  <p className="text-xs text-purple-500 mt-1">+5% from last month</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center">
                  <i className="fas fa-leaf text-purple-500 text-xl"></i>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-[#1e1e1e] border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-white text-lg">Registry Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div id="donutChart" className="h-80 w-full"></div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1e1e] border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-white text-lg">Production by Area</CardTitle>
            </CardHeader>
            <CardContent>
              <div id="barChart" className="h-80 w-full"></div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Row 1: Monthly Registration Chart */}
          <Card className="bg-[#1e1e1e] border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-white text-lg">Monthly Registration Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div id="lineChart" className="h-80 w-full"></div>
            </CardContent>
          </Card>

          {/* Row 2: 3 Columns for Top Puroks, Crops, Animals */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Top Puroks */}
            <Card className="bg-[#1e1e1e] border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-white text-lg">Top Puroks</CardTitle>
              </CardHeader>
              <CardContent>
              <div className="space-y-3">
                      {[
                        { name: 'Purok 1', count: 428, percent: 92 },
                        { name: 'Purok 2', count: 356, percent: 78 },
                        { name: 'Purok 3', count: 312, percent: 65 },
                        { name: 'Purok 4', count: 287, percent: 59 },
                        { name: 'Purok 5', count: 243, percent: 52 }
                      ].map((barangay, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">{barangay.name}</span>
                            <span className="text-gray-400">{barangay.count}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${barangay.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
              </CardContent>
            </Card>

            {/* Top Crops */}
            <Card className="bg-[#1e1e1e] border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-white text-lg">Top Crops</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Rice', count: 1245, percent: 85 },
                    { name: 'Corn', count: 987, percent: 68 },
                    { name: 'Coconut', count: 756, percent: 52 },
                    { name: 'Banana', count: 543, percent: 37 },
                    { name: 'Vegetables', count: 432, percent: 30 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm text-gray-300">
                        <span>{item.name}</span>
                        <span className="text-gray-400">{item.count}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${item.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Animals */}
            <Card className="bg-[#1e1e1e] border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-white text-lg">Top Animals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Chicken', count: 3245, percent: 90 },
                    { name: 'Swine', count: 1876, percent: 52 },
                    { name: 'Carabao', count: 1243, percent: 35 },
                    { name: 'Goat', count: 987, percent: 27 },
                    { name: 'Cattle', count: 765, percent: 21 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm text-gray-300">
                        <span>{item.name}</span>
                        <span className="text-gray-400">{item.count}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${item.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
                
        <div className="rounded-md border border-[#333333] overflow-hidden mt-6">
                  <Table>
                    <TableHeader className="bg-[#252525]">
                      <TableRow>
                        <TableHead className="text-gray-300">Crop Type</TableHead>
                        <TableHead className="text-gray-300">Total Area (ha)</TableHead>
                        <TableHead className="text-gray-300">Farmers</TableHead>
                        <TableHead className="text-gray-300">Avg. Yield (mt/ha)</TableHead>
                        <TableHead className="text-gray-300">Total Production (mt)</TableHead>
                        <TableHead className="text-gray-300">Est. Value (₱)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { crop: 'Rice', area: '1,245.5', farmers: 1245, yield: '4.2', production: '5,231.1', value: '104,622,000' },
                        { crop: 'Corn', area: '987.3', farmers: 987, yield: '3.8', production: '3,751.7', value: '56,275,500' },
                        { crop: 'Coconut', area: '756.8', farmers: 756, yield: '5.2', production: '3,935.4', value: '39,354,000' },
                        { crop: 'Banana', area: '543.2', farmers: 543, yield: '12.5', production: '6,790.0', value: '33,950,000' },
                        { crop: 'Vegetables', area: '432.1', farmers: 432, yield: '8.7', production: '3,759.3', value: '75,186,000' }
                      ].map((record, index) => (
                        <TableRow key={index} className="border-t border-[#333333] hover:bg-[#252525]">
                          <TableCell className="font-medium text-gray-300">{record.crop}</TableCell>
                          <TableCell className="text-gray-400">{record.area}</TableCell>
                          <TableCell className="text-gray-400">{record.farmers}</TableCell>
                          <TableCell className="text-gray-400">{record.yield}</TableCell>
                          <TableCell className="text-gray-400">{record.production}</TableCell>
                          <TableCell className="text-gray-400">₱{record.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
      </div>
  );
};

export default DashboardPage;