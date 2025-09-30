import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "components/ui/table";
import * as echarts from 'echarts';

const DashboardPage = () => {
  const [selectedPurok, setSelectedPurok] = useState(null);

  const modalData = {
    'Purok 1': { barangay: 'Lower Jasaan', crops: 15, animals: 8, farmers: 85, fisherfolks: 12 },
    'Purok 2': { barangay: 'Lower Jasaan', crops: 12, animals: 6, farmers: 67, fisherfolks: 18 },
    'Purok 3': { barangay: 'Lower Jasaan', crops: 18, animals: 10, farmers: 92, fisherfolks: 8 },
    'Purok 5': { barangay: 'Upper Jasaan', crops: 22, animals: 14, farmers: 78, fisherfolks: 25 },
    'Purok 6': { barangay: 'Upper Jasaan', crops: 19, animals: 11, farmers: 88, fisherfolks: 15 }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      initCharts();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const initCharts = () => {
    // Gender Distribution Donut Chart
    const genderChart = echarts.init(document.getElementById('genderChart'));
    const genderOption = {
      animation: true,
      tooltip: {
        trigger: 'item',
        backgroundColor: '#1e1e1e',
        borderColor: '#333',
        textStyle: { color: '#e2e8f0' }
      },
      legend: {
        top: '5%',
        left: 'center',
        textStyle: { color: '#e2e8f0' }
      },
      series: [
        {
          name: 'Gender Distribution',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '60%'],
          data: [
            { value: 773, name: 'Male Farmers', itemStyle: { color: '#3b82f6' } },
            { value: 474, name: 'Female Farmers', itemStyle: { color: '#06b6d4' } },
            { value: 223, name: 'Male Fisherfolks', itemStyle: { color: '#10b981' } },
            { value: 162, name: 'Female Fisherfolks', itemStyle: { color: '#34d399' } }
          ],
          label: {
            show: true,
            color: '#e2e8f0',           // label text color
            fontSize: 16,
            fontWeight: 'bold',
            textBorderColor: 'transparent', // remove border stroke
            textBorderWidth: 0              // disable border thickness
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
      backgroundColor: 'transparent'
    };
    genderChart.setOption(genderOption);

    // Production by Area Bar Chart
    const productionChart = echarts.init(document.getElementById('productionChart'));
    const productionOption = {
      animation: true,
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#1e1e1e',
        borderColor: '#333',
        textStyle: { color: '#e2e8f0' }
      },
      legend: {
        data: ['Crops (tons)', 'Animals (heads)'],
        textStyle: { color: '#e2e8f0' },
        top: '5%'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Purok 1\n(Lower)', 'Purok 2\n(Lower)', 'Purok 3\n(Lower)', 'Purok 5\n(Upper)', 'Purok 6\n(Upper)'],
        axisLabel: { color: '#e2e8f0', fontSize: 10 }
      },
      yAxis: [
        {
          type: 'value',
          name: 'Production (tons)',
          position: 'left',
          axisLabel: { color: '#e2e8f0' },
          nameTextStyle: { color: '#e2e8f0' }
        },
        {
          type: 'value',
          name: 'Animals (heads)',
          position: 'right',
          axisLabel: { color: '#e2e8f0' },
          nameTextStyle: { color: '#e2e8f0' }
        }
      ],
      series: [
        {
          name: 'Crops (tons)',
          type: 'bar',
          yAxisIndex: 0,
          data: [145, 128, 167, 189, 156],
          itemStyle: { color: '#10b981' }
        },
        {
          name: 'Animals (heads)',
          type: 'bar',
          yAxisIndex: 1,
          data: [1200, 980, 1450, 1650, 1320],
          itemStyle: { color: '#f59e0b' }
        }
      ],
      backgroundColor: 'transparent'
    };
    productionChart.setOption(productionOption);

    // Monthly Registration Line Chart
    const registrationChart = echarts.init(document.getElementById('registrationChart'));
    const registrationOption = {
      animation: true,
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#1e1e1e',
        borderColor: '#333',
        textStyle: { color: '#e2e8f0' }
      },
      legend: {
        data: ['Farmers', 'Fisherfolks'],
        textStyle: { color: '#e2e8f0' },
        top: '5%'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: { color: '#e2e8f0' }
      },
      yAxis: {
        type: 'value',
        axisLabel: { color: '#e2e8f0' }
      },
      series: [
        {
          name: 'Farmers',
          type: 'line',
          data: [45, 52, 38, 67, 71, 85, 92, 78, 65, 58, 49, 43],
          smooth: true,
          itemStyle: { color: '#10b981' },
          lineStyle: { color: '#10b981', width: 3 }
        },
        {
          name: 'Fisherfolks',
          type: 'line',
          data: [12, 8, 15, 18, 22, 28, 25, 19, 16, 14, 11, 9],
          smooth: true,
          itemStyle: { color: '#3b82f6' },
          lineStyle: { color: '#3b82f6', width: 3 }
        }
      ],
      backgroundColor: 'transparent'
    };
    registrationChart.setOption(registrationOption);

    // Top Crops Horizontal Bar Chart
    const cropsChart = echarts.init(document.getElementById('cropsChart'));
    const cropsOption = {
      animation: true,
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#1e1e1e',
        borderColor: '#333',
        textStyle: { color: '#e2e8f0' }
      },
      grid: {
        left: '15%',
        right: '10%',
        top: '10%',
        bottom: '10%',
        containLabel: false
      },
      xAxis: {
        type: 'value',
        axisLabel: { color: '#e2e8f0' }
      },
      yAxis: {
        type: 'category',
        data: ['Vegetables', 'Banana', 'Coconut', 'Corn', 'Rice'],
        axisLabel: { color: '#e2e8f0' }
      },
      series: [
        {
          type: 'bar',
          data: [298, 423, 567, 723, 856],
          itemStyle: { color: '#10b981' },
          label: {
            show: true,
            position: 'right',
            color: '#e2e8f0'
          }
        }
      ],
      backgroundColor: 'transparent'
    };
    cropsChart.setOption(cropsOption);

    // Top Animals Horizontal Bar Chart
    const animalsChart = echarts.init(document.getElementById('animalsChart'));
    const animalsOption = {
      animation: true,
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#1e1e1e',
        borderColor: '#333',
        textStyle: { color: '#e2e8f0' }
      },
      grid: {
        left: '15%',
        right: '10%',
        top: '10%',
        bottom: '10%',
        containLabel: false
      },
      xAxis: {
        type: 'value',
        axisLabel: { color: '#e2e8f0' }
      },
      yAxis: {
        type: 'category',
        data: ['Goat', 'Cattle', 'Carabao', 'Swine', 'Chicken'],
        axisLabel: { color: '#e2e8f0' }
      },
      series: [
        {
          type: 'bar',
          data: [567, 892, 1243, 1876, 3245],
          itemStyle: { color: '#f59e0b' },
          label: {
            show: true,
            position: 'right',
            color: '#e2e8f0'
          }
        }
      ],
      backgroundColor: 'transparent'
    };
    animalsChart.setOption(animalsOption);

    // Resize handler
    const handleResize = () => {
      genderChart.resize();
      productionChart.resize();
      registrationChart.resize();
      cropsChart.resize();
      animalsChart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      genderChart.dispose();
      productionChart.dispose();
      registrationChart.dispose();
      cropsChart.dispose();
      animalsChart.dispose();
    };
  };

  return (
    <div className="p-6 space-y-6">
      {/* 4 Column Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-[#1e1e1e] border-0 shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Total Farmers</p>
                <h3 className="text-2xl font-bold text-white mt-1">1,247</h3>
                <p className="text-xs text-green-500 mt-1">+15% from last month</p>
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
                <h3 className="text-2xl font-bold text-white mt-1">385</h3>
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
                <p className="text-sm font-medium text-gray-400">Total Crops</p>
                <h3 className="text-2xl font-bold text-white mt-1">2,847</h3>
                <p className="text-xs text-orange-500 mt-1">+12% from last season</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-orange-900/30 flex items-center justify-center">
                <i className="fas fa-leaf text-orange-500 text-xl"></i>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1e1e1e] border-0 shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Total Animals</p>
                <h3 className="text-2xl font-bold text-white mt-1">8,459</h3>
                <p className="text-xs text-yellow-500 mt-1">+7% from last month</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-yellow-900/30 flex items-center justify-center">
                <i className="fas fa-paw text-yellow-500 text-xl"></i>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 2 Column Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-white text-lg">Registry Distribution by Gender</CardTitle>
          </CardHeader>
          <CardContent>
            <div id="genderChart" className="h-80 w-full"></div>
          </CardContent>
        </Card>

        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-white text-lg">Production by Area</CardTitle>
          </CardHeader>
          <CardContent>
            <div id="productionChart" className="h-80 w-full"></div>
          </CardContent>
        </Card>
      </div>

      {/* Line Chart - Monthly Registration Trend */}
      <Card className="bg-[#1e1e1e] border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-white text-lg">Monthly Registration Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div id="registrationChart" className="h-80 w-full"></div>
        </CardContent>
      </Card>

      {/* 3 Column Charts and Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top 5 Puroks */}
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-white text-lg">Top 5 Puroks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Purok 5 (Upper Jasaan)', count: 189, percent: 92 },
                { name: 'Purok 3 (Lower Jasaan)', count: 167, percent: 81 },
                { name: 'Purok 6 (Upper Jasaan)', count: 156, percent: 76 },
                { name: 'Purok 1 (Lower Jasaan)', count: 145, percent: 71 },
                { name: 'Purok 2 (Lower Jasaan)', count: 128, percent: 62 }
              ].map((purok, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{purok.name}</span>
                    <span className="text-gray-400">{purok.count}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${purok.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Crops Chart */}
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-white text-lg">Top Crops Production</CardTitle>
          </CardHeader>
          <CardContent>
            <div id="cropsChart" className="h-80 w-full"></div>
          </CardContent>
        </Card>

        {/* Top Animals Chart */}
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-white text-lg">Top Animals Population</CardTitle>
          </CardHeader>
          <CardContent>
            <div id="animalsChart" className="h-80 w-full"></div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Tables by Barangay */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lower Jasaan Summary */}
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-white text-lg">Lower Jasaan Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-gray-300 font-medium mb-3">Crops Production</h4>
              <div className="rounded-md border border-[#333333] overflow-hidden">
                <Table>
                  <TableHeader className="bg-[#252525]">
                    <TableRow>
                      <TableHead className="text-gray-300">Crop Type</TableHead>
                      <TableHead className="text-gray-300">Area (ha)</TableHead>
                      <TableHead className="text-gray-300">Production (mt)</TableHead>
                      <TableHead className="text-gray-300">Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { crop: 'Rice', area: '245.5', production: '982.1', type: 'Irrigated' },
                      { crop: 'Rice', area: '156.8', production: '548.2', type: 'Rainfed' },
                      { crop: 'Corn', area: '189.3', production: '456.7', type: 'Rainfed' },
                      { crop: 'Coconut', area: '234.2', production: '298.5', type: 'Rainfed' }
                    ].map((record, index) => (
                      <TableRow key={index} className="border-t border-[#333333] hover:bg-[#252525] transition-colors">
                        <TableCell className="text-gray-300">{record.crop}</TableCell>
                        <TableCell className="text-gray-400">{record.area}</TableCell>
                        <TableCell className="text-gray-400">{record.production}</TableCell>
                        <TableCell className="text-gray-400">{record.type}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="border-t-2 border-blue-500 bg-[#252525]">
                      <TableCell className="text-white font-bold">TOTAL</TableCell>
                      <TableCell className="text-white font-bold">825.8 ha</TableCell>
                      <TableCell className="text-white font-bold">2,285.5 mt</TableCell>
                      <TableCell className="text-gray-400">-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-300 font-medium mb-3">Livestock & Poultry</h4>
              <div className="rounded-md border border-[#333333] overflow-hidden">
                <Table>
                  <TableHeader className="bg-[#252525]">
                    <TableRow>
                      <TableHead className="text-gray-300">Animal Type</TableHead>
                      <TableHead className="text-gray-300">Total Heads</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { animal: 'Chicken', heads: '1,764' },
                      { animal: 'Swine', heads: '1,091' },
                      { animal: 'Carabao', heads: '332' },
                      { animal: 'Goat', heads: '245' }
                    ].map((record, index) => (
                      <TableRow key={index} className="border-t border-[#333333] hover:bg-[#252525] transition-colors">
                        <TableCell className="text-gray-300">{record.animal}</TableCell>
                        <TableCell className="text-gray-400">{record.heads}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="border-t-2 border-orange-500 bg-[#252525]">
                      <TableCell className="text-white font-bold">TOTAL</TableCell>
                      <TableCell className="text-white font-bold">3,432 heads</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upper Jasaan Summary */}
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-white text-lg">Upper Jasaan Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-gray-300 font-medium mb-3">Crops Production</h4>
              <div className="rounded-md border border-[#333333] overflow-hidden">
                <Table>
                  <TableHeader className="bg-[#252525]">
                    <TableRow>
                      <TableHead className="text-gray-300">Crop Type</TableHead>
                      <TableHead className="text-gray-300">Area (ha)</TableHead>
                      <TableHead className="text-gray-300">Production (mt)</TableHead>
                      <TableHead className="text-gray-300">Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { crop: 'Rice', area: '312.7', production: '1,234.8', type: 'Irrigated' },
                      { crop: 'Rice', area: '189.4', production: '678.9', type: 'Rainfed' },
                      { crop: 'Corn', area: '267.8', production: '612.3', type: 'Rainfed' },
                      { crop: 'Coconut', area: '298.1', production: '387.6', type: 'Rainfed' }
                    ].map((record, index) => (
                      <TableRow key={index} className="border-t border-[#333333] hover:bg-[#252525] transition-colors">
                        <TableCell className="text-gray-300">{record.crop}</TableCell>
                        <TableCell className="text-gray-400">{record.area}</TableCell>
                        <TableCell className="text-gray-400">{record.production}</TableCell>
                        <TableCell className="text-gray-400">{record.type}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="border-t-2 border-blue-500 bg-[#252525]">
                      <TableCell className="text-white font-bold">TOTAL</TableCell>
                      <TableCell className="text-white font-bold">1,068.0 ha</TableCell>
                      <TableCell className="text-white font-bold">2,913.6 mt</TableCell>
                      <TableCell className="text-gray-400">-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-300 font-medium mb-3">Livestock & Poultry</h4>
              <div className="rounded-md border border-[#333333] overflow-hidden">
                <Table>
                  <TableHeader className="bg-[#252525]">
                    <TableRow>
                      <TableHead className="text-gray-300">Animal Type</TableHead>
                      <TableHead className="text-gray-300">Total Heads</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { animal: 'Chicken', heads: '1,481' },
                      { animal: 'Swine', heads: '785' },
                      { animal: 'Carabao', heads: '235' },
                      { animal: 'Goat', heads: '198' }
                    ].map((record, index) => (
                      <TableRow key={index} className="border-t border-[#333333] hover:bg-[#252525] transition-colors">
                        <TableCell className="text-gray-300">{record.animal}</TableCell>
                        <TableCell className="text-gray-400">{record.heads}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="border-t-2 border-orange-500 bg-[#252525]">
                      <TableCell className="text-white font-bold">TOTAL</TableCell>
                      <TableCell className="text-white font-bold">2,699 heads</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;