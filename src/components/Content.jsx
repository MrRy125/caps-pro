import React from 'react';
import DashboardPage from './DashboardPage';
import UserManagementPage from './UserManagementPage';
import RsbsaRecordsPage from './RsbsaRecordsPage';
import RegisterPage from './RegisterPage';
import MapPage from './MapPage';
import ImportPage from './ImportPage';
import ExportPage from './ExportPage';
import HistoryPage from './HistoryPage';

const Content = ({ currentPage }) => {
  switch (currentPage) {
    case 'dashboard':
      return <DashboardPage />;
    case 'users':
      return <UserManagementPage />;
    case 'records':
      return <RsbsaRecordsPage />;
    case 'register':
      return <RegisterPage />;
    case 'map':
      return <MapPage />;
    case 'import':
      return <ImportPage />;
    case 'export':
      return <ExportPage />;
    case 'history':
      return <HistoryPage />;
    default:
      return <DashboardPage />;
  }
};

export default Content;