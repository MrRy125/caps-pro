import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// eslint-disable-next-line no-unused-vars
const Sidebar = ({ currentPage, setCurrentPage, handleLogout, isOpen, onClose }) => {
  return (
    <div className={`
      bg-[#1a1a1a] w-64 z-50
      transform transition-transform duration-300 ease-in-out
      fixed inset-y-0 left-0
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}  // Mobile toggle
      md:translate-x-0 md:static md:block               // Always visible on desktop
    `}>
      <div className="flex items-center justify-center h-16 border-b border-[#333333] px-4">
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20agriculture%20and%20fisheries%20logo%20design%20with%20a%20stylized%20leaf%20and%20fish%20icon%20in%20gradient%20green%20and%20blue%20colors%20on%20a%20dark%20background%2C%20professional%20and%20clean%20design%2C%20suitable%20for%20government%20agency&width=40&height=40&seq=14&orientation=squarish" 
              alt="AgriTech Logo" 
              className="h-8 w-8 mr-2"
            />
            <h1 className="text-lg font-bold text-white">AgriTech Registry</h1>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-2 space-y-1">
              {[
                { name: 'Dashboard', icon: 'fas fa-tachometer-alt', page: 'dashboard' },
                { name: 'User Management', icon: 'fas fa-users', page: 'users' },
                { name: 'RSBSA Records', icon: 'fas fa-database', page: 'records' },
                { name: 'Register', icon: 'fas fa-user-plus', page: 'register' },
                { name: 'GIS Map', icon: 'fas fa-map-marked-alt', page: 'map' },
                { name: 'Import', icon: 'fas fa-file-import', page: 'import' },
                { name: 'Export', icon: 'fas fa-file-export', page: 'export' },
                { name: 'History', icon: 'fas fa-history', page: 'history' }
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => setCurrentPage(item.page)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors ${
                    currentPage === item.page
                      ? 'bg-[#333333] text-white'
                      : 'text-gray-300 hover:bg-[#252525] hover:text-white'
                  }`}
                >
                  <i className={`${item.icon} mr-3 text-lg ${currentPage === item.page ? 'text-blue-400' : 'text-gray-400'}`}></i>
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t border-[#333333] ">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarFallback className="bg-gradient-to-br from-green-700 to-blue-700 text-white text-xs">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-gray-400">Administrator</p>
              </div>
              <button 
                onClick={handleLogout}
                className="ml-auto text-gray-400 hover:text-white cursor-pointer"
              >
                <i className="fas fa-sign-out-alt"></i>
              </button>
            </div>
          </div>
        </div>
  );
};

export default Sidebar;