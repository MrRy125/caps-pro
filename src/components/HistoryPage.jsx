import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from "@/components/ui/button";


const HistoryPage = () => {
  return (
    <div className="p-6 space-y-6">
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white text-xl">Deleted Records History</CardTitle>
            <div className="flex gap-3">
              <div className="relative">
                <Input 
                  placeholder="Search records..." 
                  className="w-64 pl-10 bg-[#252525] border-[#333333] text-white placeholder:text-gray-500"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              </div>
              <Button variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                <i className="fas fa-filter mr-2"></i> Filter
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
                    <TableHead className="text-gray-300">Type</TableHead>
                    <TableHead className="text-gray-300">Deleted On</TableHead>
                    <TableHead className="text-gray-300">Deleted By</TableHead>
                    <TableHead className="text-gray-300">Reason</TableHead>
                    <TableHead className="text-gray-300 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: 'RS-2025-0034', name: 'Eduardo Santos', type: 'Farmer', date: '2025-05-28', by: 'John Doe', reason: 'Duplicate record' },
                    { id: 'RS-2025-0056', name: 'Maria Gonzales', type: 'Fisherfolk', date: '2025-05-26', by: 'Maria Santos', reason: 'Incorrect information' },
                    { id: 'RS-2025-0078', name: 'Roberto Cruz', type: 'Farmer', date: '2025-05-24', by: 'John Doe', reason: 'Requested by registrant' },
                    { id: 'RS-2025-0091', name: 'Ana Reyes', type: 'Fisherfolk', date: '2025-05-22', by: 'Carlos Reyes', reason: 'Moved to different region' },
                    { id: 'RS-2025-0112', name: 'Pedro Lim', type: 'Farmer', date: '2025-05-20', by: 'Maria Santos', reason: 'Duplicate record' }
                  ].map((record) => (
                    <TableRow key={record.id} className="border-t border-[#333333] hover:bg-[#252525]">
                      <TableCell className="text-gray-400">{record.id}</TableCell>
                      <TableCell>
                        <div className="font-medium text-gray-200">{record.name}</div>
                      </TableCell>
                      <TableCell>
                        <Badge className={
                          record.type === 'Farmer' ? 'bg-green-900/50 text-green-300 hover:bg-green-900/70' :
                          'bg-blue-900/50 text-blue-300 hover:bg-blue-900/70'
                        }>
                          {record.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-400">{record.date}</TableCell>
                      <TableCell className="text-gray-400">{record.by}</TableCell>
                      <TableCell className="text-gray-400">{record.reason}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" className="h-8 border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                            <i className="fas fa-eye mr-1 text-xs"></i> View
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                            <i className="fas fa-undo mr-1 text-xs"></i> Restore
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 border-[#444444] bg-transparent hover:bg-[#333333] text-red-400 hover:text-red-300 !rounded-button whitespace-nowrap">
                            <i className="fas fa-trash mr-1 text-xs"></i> Delete
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
                Showing 1-5 of 32 deleted records
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

        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-white text-lg">Deletion Activity Log</CardTitle>
            <CardDescription className="text-gray-400">Recent record deletion activities</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 rounded-md border border-[#333333] bg-[#252525] p-4">
              <div className="space-y-4">
                {[
                  { user: 'John Doe', action: 'deleted', record: 'RS-2025-0034 (Eduardo Santos)', time: '2 hours ago', reason: 'Duplicate record' },
                  { user: 'Maria Santos', action: 'deleted', record: 'RS-2025-0056 (Maria Gonzales)', time: '1 day ago', reason: 'Incorrect information' },
                  { user: 'John Doe', action: 'deleted', record: 'RS-2025-0078 (Roberto Cruz)', time: '3 days ago', reason: 'Requested by registrant' },
                  { user: 'Carlos Reyes', action: 'deleted', record: 'RS-2025-0091 (Ana Reyes)', time: '5 days ago', reason: 'Moved to different region' },
                  { user: 'Maria Santos', action: 'deleted', record: 'RS-2025-0112 (Pedro Lim)', time: '1 week ago', reason: 'Duplicate record' },
                  { user: 'Ana Lim', action: 'deleted', record: 'RS-2025-0125 (Jose Garcia)', time: '1 week ago', reason: 'Incorrect information' },
                  { user: 'Roberto Cruz', action: 'deleted', record: 'RS-2025-0143 (Elena Tan)', time: '2 weeks ago', reason: 'Requested by registrant' },
                  { user: 'John Doe', action: 'deleted', record: 'RS-2025-0156 (Miguel Santos)', time: '2 weeks ago', reason: 'Moved to different region' },
                  { user: 'Maria Santos', action: 'deleted', record: 'RS-2025-0178 (Clara Reyes)', time: '3 weeks ago', reason: 'Duplicate record' },
                  { user: 'Carlos Reyes', action: 'deleted', record: 'RS-2025-0192 (Fernando Cruz)', time: '1 month ago', reason: 'Incorrect information' }
                ].map((log, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-[#333333] flex items-center justify-center mr-3 mt-1">
                      <i className="fas fa-user text-gray-400 text-xs"></i>
                    </div>
                    <div>
                      <p className="text-gray-300">
                        <span className="font-medium text-white">{log.user}</span> {log.action} record {log.record}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        <i className="fas fa-clock mr-1"></i> {log.time} • 
                        <i className="fas fa-comment ml-2 mr-1"></i> Reason: {log.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
  );
};

export default HistoryPage;