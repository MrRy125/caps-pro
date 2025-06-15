import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const UserManagementPage = () => {
  return (
    <div className="p-6 space-y-6">
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white text-xl">User Management</CardTitle>
            <Button className="bg-green-600 hover:bg-green-700 text-white !rounded-button whitespace-nowrap">
              <i className="fas fa-plus mr-2"></i> Add New User
            </Button>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-[#333333] overflow-hidden">
              <Table>
                <TableHeader className="bg-[#252525]">
                  <TableRow>
                    <TableHead className="text-gray-300 w-[80px]">ID</TableHead>
                    <TableHead className="text-gray-300">User</TableHead>
                    <TableHead className="text-gray-300">Email</TableHead>
                    <TableHead className="text-gray-300">Role</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: 1, name: 'John Doe', email: 'john.doe@agritech.gov', role: 'Admin', status: 'Active', avatar: 'JD' },
                    { id: 2, name: 'Maria Santos', email: 'maria.santos@agritech.gov', role: 'AgriTech', status: 'Active', avatar: 'MS' },
                    { id: 3, name: 'Carlos Reyes', email: 'carlos.reyes@agritech.gov', role: 'DA Staff', status: 'Inactive', avatar: 'CR' },
                    { id: 4, name: 'Ana Lim', email: 'ana.lim@agritech.gov', role: 'AgriTech', status: 'Active', avatar: 'AL' },
                    { id: 5, name: 'Roberto Cruz', email: 'roberto.cruz@agritech.gov', role: 'DA Staff', status: 'Active', avatar: 'RC' }
                  ].map((user) => (
                    <TableRow key={user.id} className="border-t border-[#333333] hover:bg-[#252525]">
                      <TableCell className="text-gray-400">{user.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback className="bg-gradient-to-br from-green-700 to-blue-700 text-white">
                              {user.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="font-medium text-gray-200">{user.name}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-400">{user.email}</TableCell>
                      <TableCell>
                        <Badge className={
                          user.role === 'Admin' ? 'bg-purple-900/50 text-purple-300 hover:bg-purple-900/70' :
                          user.role === 'AgriTech' ? 'bg-green-900/50 text-green-300 hover:bg-green-900/70' :
                          'bg-blue-900/50 text-blue-300 hover:bg-blue-900/70'
                        }>
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={user.status === 'Active' ? 
                          'bg-green-900/50 text-green-300 hover:bg-green-900/70' : 
                          'bg-gray-700/50 text-gray-300 hover:bg-gray-700/70'
                        }>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                            <i className="fas fa-edit text-xs"></i>
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                            <i className="fas fa-trash text-xs"></i>
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
  );
};

export default UserManagementPage;