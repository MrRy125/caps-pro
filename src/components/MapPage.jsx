import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import ClientOnly from '@/components/ClientOnly';
import PolygonMap from '@/components/PolygonMap';

const MapPage = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">

        {/* Left Column – Map */}
        <Card className="bg-[#1e1e1e] border-0 shadow-md h-full">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white text-xl">GIS Map</CardTitle>
            <div className="flex gap-3">
              <Button variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                <i className="fas fa-layer-group mr-2"></i> Layers
              </Button>
              <Button variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                <i className="fas fa-filter mr-2"></i> Filter
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white !rounded-button whitespace-nowrap">
                <i className="fas fa-map-marker-alt mr-2"></i> Add Pinmark
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative h-[600px] w-full rounded-b-md overflow-hidden z-0">
              <ClientOnly>
                <PolygonMap />
              </ClientOnly>
              {/* Optional: overlay, but allow map clicks */}
              <div className="absolute inset-0 bg-[#121212]/20 pointer-events-none" />
            </div>
          </CardContent>
        </Card>


        {/* Right Column – Details */}
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-white text-lg">Location Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">Purok 2, Upper Jasaan</h3>
                <Badge className="bg-green-900/50 text-green-300">5 Farmers</Badge>
              </div>

              <div className="border-t border-[#333333] pt-4 mt-4">
                <h4 className="text-gray-300 font-medium mb-3">Registered Farmers</h4>
                <div className="rounded-md border border-[#333333] overflow-hidden">
                  <Table>
                    <TableHeader className="bg-[#252525]">
                      <TableRow>
                        <TableHead className="text-gray-300 w-[80px]">RSBSA No.</TableHead>
                        <TableHead className="text-gray-300">Name</TableHead>
                        <TableHead className="text-gray-300">Crops</TableHead>
                        <TableHead className="text-gray-300 text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { id: 'RS-2025-0001', name: 'Juan Dela Cruz', size: '2.5 ha', crops: ['Rice', 'Corn'] },
                        { id: 'RS-2025-0012', name: 'Maria Santos', size: '1.8 ha', crops: ['Coconut', 'Banana'] },
                        { id: 'RS-2025-0023', name: 'Pedro Reyes', size: '3.2 ha', crops: ['Rice', 'Vegetables'] },
                        { id: 'RS-2025-0045', name: 'Ana Lim', size: '1.5 ha', crops: ['Corn', 'Cassava'] },
                        { id: 'RS-2025-0067', name: 'Roberto Cruz', size: '2.1 ha', crops: ['Rice', 'Fruit Trees'] }
                      ].map((farmer) => (
                        <TableRow key={farmer.id} className="border-t border-[#333333] hover:bg-[#252525]">
                          <TableCell className="text-gray-400">{farmer.id}</TableCell>
                          <TableCell>
                            <div className="font-medium text-gray-200">{farmer.name}</div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {farmer.crops.map((crop, index) => (
                                <Badge key={index} className="bg-green-900/50 text-green-300 text-xs">
                                  {crop}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" className="h-8 border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                              <i className="fas fa-eye mr-1 text-xs"></i> View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

  );
};

export default MapPage;