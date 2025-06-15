import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from '@/components/ui/badge';

const ImportPage = () => {
  return (
    <div className="p-6 space-y-6">
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-white text-xl">Import Data</CardTitle>
            <CardDescription className="text-gray-400">Upload CSV files to import farmer and fisherfolk records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-2 border-dashed border-[#333333] rounded-lg p-8 text-center bg-[#252525]">
                <div className="mx-auto h-16 w-16 rounded-full bg-[#333333] flex items-center justify-center mb-4">
                  <i className="fas fa-file-upload text-gray-400 text-2xl"></i>
                </div>
                <h3 className="text-white font-medium mb-2">Upload CSV File</h3>
                <p className="text-gray-400 text-sm mb-4">Drag and drop your file here, or click to browse</p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap">
                  <i className="fas fa-folder-open mr-2"></i> Browse Files
                </Button>
                <p className="text-gray-500 text-xs mt-4">Supported formats: .CSV, .XLS, .XLSX (max 10MB)</p>
              </div>

              <div className="bg-[#252525] rounded-lg p-4 border border-[#333333]">
                <h3 className="text-white font-medium mb-4">Data Preview</h3>
                <div className="rounded-md border border-[#333333] overflow-hidden">
                  <Table>
                    <TableHeader className="bg-[#2a2a2a]">
                      <TableRow>
                        <TableHead className="text-gray-300">RSBSA No.</TableHead>
                        <TableHead className="text-gray-300">Last Name</TableHead>
                        <TableHead className="text-gray-300">First Name</TableHead>
                        <TableHead className="text-gray-300">Middle Name</TableHead>
                        <TableHead className="text-gray-300">Barangay</TableHead>
                        <TableHead className="text-gray-300">Type</TableHead>
                        <TableHead className="text-gray-300">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { id: 'RS-2025-0101', last: 'Dela Cruz', first: 'Juan', middle: 'Santos', barangay: 'San Isidro', type: 'Farmer', status: 'Valid' },
                        { id: 'RS-2025-0102', last: 'Santos', first: 'Maria', middle: 'Reyes', barangay: 'Mabuhay', type: 'Farmer', status: 'Valid' },
                        { id: 'RS-2025-0103', last: 'Reyes', first: 'Pedro', middle: 'Cruz', barangay: 'Bagong Silang', type: 'Fisherfolk', status: 'Error' },
                        { id: 'RS-2025-0104', last: 'Lim', first: 'Ana', middle: 'Go', barangay: 'Malaya', type: 'Farmer', status: 'Valid' },
                        { id: 'RS-2025-0105', last: 'Cruz', first: 'Roberto', middle: 'Santos', barangay: 'Matahimik', type: 'Fisherfolk', status: 'Warning' }
                      ].map((record, index) => (
                        <TableRow key={index} className="border-t border-[#333333] hover:bg-[#2a2a2a]">
                          <TableCell className="text-gray-400">{record.id}</TableCell>
                          <TableCell className="text-gray-300">{record.last}</TableCell>
                          <TableCell className="text-gray-300">{record.first}</TableCell>
                          <TableCell className="text-gray-300">{record.middle}</TableCell>
                          <TableCell className="text-gray-300">{record.barangay}</TableCell>
                          <TableCell>
                            <Badge className={
                              record.type === 'Farmer' ? 'bg-green-900/50 text-green-300' :
                              'bg-blue-900/50 text-blue-300'
                            }>
                              {record.type}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={
                              record.status === 'Valid' ? 'bg-green-900/50 text-green-300' :
                              record.status === 'Warning' ? 'bg-yellow-900/50 text-yellow-300' :
                              'bg-red-900/50 text-red-300'
                            }>
                              {record.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="bg-[#252525] rounded-lg p-4 border border-[#333333]">
                <h3 className="text-white font-medium mb-4">Import Log</h3>
                <ScrollArea className="h-40 rounded-md border border-[#333333] bg-[#2a2a2a] p-4">
                  <div className="space-y-2 text-sm">
                    <div className="text-green-400"><i className="fas fa-check-circle mr-2"></i> Row 1: Successfully validated</div>
                    <div className="text-green-400"><i className="fas fa-check-circle mr-2"></i> Row 2: Successfully validated</div>
                    <div className="text-red-400"><i className="fas fa-times-circle mr-2"></i> Row 3: Error - Missing required field 'Birthdate'</div>
                    <div className="text-green-400"><i className="fas fa-check-circle mr-2"></i> Row 4: Successfully validated</div>
                    <div className="text-yellow-400"><i className="fas fa-exclamation-circle mr-2"></i> Row 5: Warning - Possible duplicate RSBSA number</div>
                    <div className="text-green-400"><i className="fas fa-check-circle mr-2"></i> Row 6: Successfully validated</div>
                    <div className="text-green-400"><i className="fas fa-check-circle mr-2"></i> Row 7: Successfully validated</div>
                    <div className="text-green-400"><i className="fas fa-check-circle mr-2"></i> Row 8: Successfully validated</div>
                    <div className="text-red-400"><i className="fas fa-times-circle mr-2"></i> Row 9: Error - Invalid mobile number format</div>
                    <div className="text-green-400"><i className="fas fa-check-circle mr-2"></i> Row 10: Successfully validated</div>
                  </div>
                </ScrollArea>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="text-gray-400">
                    <span className="text-green-400 font-medium">8</span> Valid • 
                    <span className="text-yellow-400 font-medium ml-1">1</span> Warning • 
                    <span className="text-red-400 font-medium ml-1">2</span> Error
                  </div>
                  <div>
                    <Button variant="outline" size="sm" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                      <i className="fas fa-download mr-1"></i> Export Log
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                  Cancel
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white !rounded-button whitespace-nowrap">
                  <i className="fas fa-file-import mr-2"></i> Import Data
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  );
};

export default ImportPage;