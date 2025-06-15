import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const RsbsaRecordsPage = () => {
  return (
    <div className="p-6 space-y-6">
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white text-xl">RSBSA Records</CardTitle>
            <div className="flex gap-3">
              <div className="relative">
                <Input 
                  placeholder="Search records..." 
                  className="w-64 pl-10 bg-[#252525] border-[#333333] text-white placeholder:text-gray-500"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white !rounded-button whitespace-nowrap">
                <i className="fas fa-plus mr-2"></i> Register New
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-[#333333] overflow-hidden">
              <Table>
                <TableHeader className="bg-[#252525]">
                  <TableRow>
                    <TableHead className="text-gray-300 w-[80px]">RSBSA No.</TableHead>
                    <TableHead className="text-gray-300">Name</TableHead>
                    <TableHead className="text-gray-300">Address</TableHead>
                    <TableHead className="text-gray-300">Type</TableHead>
                    <TableHead className="text-gray-300">Registered On</TableHead>
                    <TableHead className="text-gray-300 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: 'RS-2025-0001', name: 'Juan Dela Cruz', address: 'Brgy. San Isidro, Tacloban City', type: 'Farmer', date: '2025-05-12', crops: ['Rice', 'Corn'] },
                    { id: 'RS-2025-0002', name: 'Maria Reyes', address: 'Brgy. Mabuhay, Tacloban City', type: 'Fisherfolk', date: '2025-05-15', fishing: ['Municipal'] },
                    { id: 'RS-2025-0003', name: 'Pedro Santos', address: 'Brgy. Bagong Silang, Tacloban City', type: 'Farmer', date: '2025-05-18', crops: ['Coconut', 'Banana'] },
                    { id: 'RS-2025-0004', name: 'Ana Gonzales', address: 'Brgy. Malaya, Tacloban City', type: 'Fisherfolk', date: '2025-05-20', fishing: ['Commercial'] },
                    { id: 'RS-2025-0005', name: 'Roberto Lim', address: 'Brgy. Matahimik, Tacloban City', type: 'Farmer', date: '2025-05-22', crops: ['Vegetables', 'Fruits'] }
                  ].map((record) => (
                    <TableRow key={record.id} className="border-t border-[#333333] hover:bg-[#252525]">
                      <TableCell className="text-gray-400">{record.id}</TableCell>
                      <TableCell>
                        <div className="font-medium text-gray-200">{record.name}</div>
                      </TableCell>
                      <TableCell className="text-gray-400">{record.address}</TableCell>
                      <TableCell>
                        <Badge className={
                          record.type === 'Farmer' ? 'bg-green-900/50 text-green-300 hover:bg-green-900/70' :
                          'bg-blue-900/50 text-blue-300 hover:bg-blue-900/70'
                        }>
                          {record.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-400">{record.date}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          
                          <Button variant="outline" size="sm" className="h-8 border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                            <i className="fas fa-eye mr-1 text-xs"></i> View
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                            <i className="fas fa-edit mr-1 text-xs"></i> Edit
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                          <i className="fas fa-trash text-xs"></i> Delete
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                            <i className="fas fa-map-marker-alt mr-1 text-xs"></i> Location
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-400">
                Showing 1-5 of 1,245 records
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8 border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                  <i className="fas fa-chevron-left mr-1 text-xs"></i> Previous
                </Button>
                <Button variant="outline" size="sm" className="h-8 border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                  Next <i className="fas fa-chevron-right ml-1 text-xs"></i>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  );
};

export default RsbsaRecordsPage;