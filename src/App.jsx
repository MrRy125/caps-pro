'use client';

import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import LoginPage from '@/components/LogInPage';
import Sidebar from '@/components/SideBar';
import TopNavigation from '@/components/TopNavigation';
import Content from '@/components/Content';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('admin@agritech.gov');
  const [password, setPassword] = useState('password');
  const [loginError, setLoginError] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [unreadNotifications, setUnreadNotifications] = useState(5);
  const [date, setDate] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // safe to use window here
      console.log(window.innerWidth);
    }
  }, []);
  


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn && currentPage === 'dashboard') {
      setTimeout(() => {
        initCharts();
      }, 100);
    }
  }, [isLoggedIn, currentPage]);

  const initCharts = () => {
    // Donut Chart
    const donutChart = echarts.init(document.getElementById('donutChart'));
    const donutOption = {
      animation: false,
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center',
        textStyle: {
          color: '#e2e8f0'
        }
      },
      series: [
        {
          name: 'Registry Distribution',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#121212',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#e2e8f0'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Farmers', itemStyle: { color: '#10b981' } },
            { value: 735, name: 'Fisherfolks', itemStyle: { color: '#3b82f6' } }
          ]
        }
      ],
      backgroundColor: 'transparent'
    };
    donutChart.setOption(donutOption);

    // Bar Chart
    const barChart = echarts.init(document.getElementById('barChart'));
    const barOption = {
      animation: false,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Crops', 'Animals'],
        textStyle: {
          color: '#e2e8f0'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Upper Jasaan', 'Lower Jasaan'],
          axisLabel: {
            color: '#e2e8f0'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            color: '#e2e8f0'
          }
        }
      ],
      series: [
        {
          name: 'Crops',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [320, 332],
          itemStyle: {
            color: '#10b981'
          }
        },
        {
          name: 'Animals',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [220, 182],
          itemStyle: {
            color: '#f59e0b'
          }
        }
      ],
      backgroundColor: 'transparent'
    };
    barChart.setOption(barOption);

    // Line Chart
    const lineChart = echarts.init(document.getElementById('lineChart'));
    const lineOption = {
      animation: false,
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Farmers', 'Fisherfolks'],
        textStyle: {
          color: '#e2e8f0'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
          color: '#e2e8f0'
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#e2e8f0'
        }
      },
      series: [
        {
          name: 'Farmers',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 120, 132, 101, 134, 90, 230],
          itemStyle: {
            color: '#10b981'
          }
        },
        {
          name: 'Fisherfolks',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 220, 182, 191, 234, 290, 330],
          itemStyle: {
            color: '#3b82f6'
          }
        }
      ],
      backgroundColor: 'transparent'
    };
    lineChart.setOption(lineOption);

    window.addEventListener('resize', () => {
      donutChart.resize();
      barChart.resize();
      lineChart.resize();
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@agritech.gov' && password === 'password') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
  };

  if (!isLoggedIn) {
    return <LoginPage 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      loginError={loginError}
      handleLogin={handleLogin}
    />;
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="flex h-screen overflow-hidden">
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={closeSidebar}
          />
        )}
        <Sidebar 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleLogout={handleLogout}
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNavigation 
            toggleSidebar={toggleSidebar}
            currentPage={currentPage}
            currentTime={currentTime}
            showCalendar={showCalendar}
            setShowCalendar={setShowCalendar}
            date={date}
            setDate={setDate}
            showNotifications={showNotifications}
            setShowNotifications={setShowNotifications}
            unreadNotifications={unreadNotifications}
            handleLogout={handleLogout}
          />
          <main className="flex-1 overflow-y-auto bg-[#121212]">
            <Content 
              currentPage={currentPage}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;