import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";

const TopNavigation = ({ toggleSidebar, currentPage, currentTime, showCalendar, setShowCalendar, date, setDate, showNotifications, setShowNotifications, unreadNotifications, handleLogout }) => {
  
  return (
    <header className="h-16 bg-[#1a1a1a] border-b border-[#333333] flex items-center justify-between px-4">
            <div className="flex items-center md:hidden">
              <button onClick={toggleSidebar} className="md:hidden text-white text-xl">
                <i className="fas fa-bars"></i>
              </button>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20agriculture%20and%20fisheries%20logo%20design%20with%20a%20stylized%20leaf%20and%20fish%20icon%20in%20gradient%20green%20and%20blue%20colors%20on%20a%20dark%20background%2C%20professional%20and%20clean%20design%2C%20suitable%20for%20government%20agency&width=32&height=32&seq=15&orientation=squarish" 
                alt="AgriTech Logo" 
                className="h-8 w-8 ml-3"
              />
            </div>
            <div className="hidden md:flex items-center">
              <h2 className="text-xl font-bold text-white">
                {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="h-8 w-8 rounded-full bg-[#252525] flex items-center justify-center text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fas fa-calendar-alt"></i>
                </button>
                {showCalendar && (
                  <div className="absolute right-0 mt-2 z-10 bg-[#252525] border border-[#333333] rounded-md shadow-lg">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="bg-[#252525] text-white border-[#333333]"
                    />
                  </div>
                )}
              </div>
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="h-8 w-8 rounded-full bg-[#252525] flex items-center justify-center text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fas fa-bell"></i>
                  {unreadNotifications > 0 && (
                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                      {unreadNotifications}
                    </span>
                  )}
                </button>
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 z-10 bg-[#252525] border border-[#333333] rounded-md shadow-lg">
                    <div className="p-3 border-b border-[#333333] flex items-center justify-between">
                      <h3 className="font-medium text-white">Notifications</h3>
                      <button className="text-xs text-blue-400 hover:text-blue-300">Mark all as read</button>
                    </div>
                    <ScrollArea className="h-64">
                      <div className="p-2">
                        {[
                          { title: 'Unset Pinmark', message: '5 farmers in Brgy. San Isidro need location pinmarks', time: '2 hours ago', read: false },
                          { title: 'New Registration', message: 'Juan Dela Cruz registered as a farmer', time: '5 hours ago', read: false },
                          { title: 'Export Completed', message: 'Your data export is ready for download', time: '1 day ago', read: false },
                          { title: 'System Update', message: 'The system will undergo maintenance tonight', time: '1 day ago', read: false },
                          { title: 'Import Completed', message: 'Successfully imported 120 records', time: '2 days ago', read: true },
                          { title: 'User Created', message: 'New user Maria Santos was created', time: '3 days ago', read: true },
                          { title: 'Report Generated', message: 'Monthly report has been generated', time: '4 days ago', read: true }
                        ].map((notification, index) => (
                          <div 
                            key={index} 
                            className={`p-2 hover:bg-[#333333] rounded-md mb-1 cursor-pointer ${notification.read ? '' : 'bg-[#1e293b]/30'}`}
                          >
                            <div className="flex items-start">
                              <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 ${notification.read ? 'bg-[#333333]' : 'bg-blue-900/50'}`}>
                                <i className={`fas ${notification.title.includes('Pinmark') ? 'fa-map-marker-alt text-orange-400' : 
                                  notification.title.includes('Registration') ? 'fa-user-plus text-green-400' :
                                  notification.title.includes('Export') ? 'fa-file-export text-blue-400' :
                                  notification.title.includes('Import') ? 'fa-file-import text-purple-400' :
                                  notification.title.includes('System') ? 'fa-cog text-gray-400' :
                                  notification.title.includes('User') ? 'fa-user text-yellow-400' :
                                  'fa-chart-bar text-red-400'
                                }`}></i>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-white">{notification.title}</p>
                                <p className="text-xs text-gray-400">{notification.message}</p>
                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="p-2 border-t border-[#333333] text-center">
                      <button className="text-sm text-blue-400 hover:text-blue-300">View all notifications</button>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-gray-400 text-sm hidden md:block">
                <span className="mr-2">{currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="cursor-pointer">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-purple-900/30 text-white text-xs">
                        JD
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-[#252525] border-[#333333] text-white">
                  <div className="p-2 border-b border-[#333333]">
                    <p className="font-medium">John Doe</p>
                    <p className="text-xs text-gray-400">john.doe@agritech.gov</p>
                  </div>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#333333]">
                    <i className="fas fa-user mr-2 text-gray-400"></i>
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#333333]">
                    <i className="fas fa-cog mr-2 text-gray-400"></i>
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#333333]">
                    <i className="fas fa-question-circle mr-2 text-gray-400"></i>
                    <span>Help</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#333333]" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt mr-2 text-gray-400"></i>
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
  );
};

export default TopNavigation;
