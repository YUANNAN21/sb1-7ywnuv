import React, { useState } from 'react';
import { Search, Truck, Package, MapPin } from 'lucide-react';

interface TrackingResult {
  company: string;
  trackingNumber: string;
  status: string;
  details: {
    time: string;
    location: string;
    description: string;
  }[];
}

const companies = [
  { name: '顺丰速运', code: 'SF' },
  { name: '申通快递', code: 'STO' },
  { name: '圆通速递', code: 'YTO' },
  { name: '中通快递', code: 'ZTO' },
  { name: '韵达快递', code: 'YD' },
  { name: '百世快递', code: 'HTKY' },
  { name: 'EMS', code: 'EMS' },
  { name: '京东物流', code: 'JD' },
];

const OrderTracking: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里应该是实际的API调用来获取追踪信息
    // 以下是模拟的结果
    const mockResult: TrackingResult = {
      company: companies.find(c => c.code === selectedCompany)?.name || '未知公司',
      trackingNumber: trackingNumber,
      status: '运输中',
      details: [
        { time: '2024-03-20 18:45', location: '杭州转运中心', description: '包裹已离开杭州转运中心，正在发往目的地' },
        { time: '2024-03-20 14:15', location: '杭州转运中心', description: '包裹到达杭州转运中心' },
        { time: '2024-03-20 10:30', location: '上海仓库', description: '包裹已从上海仓库发出' },
      ]
    };
    setTrackingResult(mockResult);
  };

  return (
    <div>
      <form onSubmit={handleTrack} className="mb-4">
        <div className="flex flex-col gap-2">
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">选择物流公司</option>
            {companies.map((company) => (
              <option key={company.code} value={company.code}>{company.name}</option>
            ))}
          </select>
          <div className="flex">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="输入快递单号"
              className="flex-grow border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700 transition duration-300 flex items-center justify-center">
              <Search size={16} />
            </button>
          </div>
        </div>
      </form>

      {trackingResult && (
        <div className="bg-white rounded-lg shadow-sm p-4 text-sm">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold">追踪结果</h4>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
              {trackingResult.status}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div>
              <p className="text-gray-600">物流公司</p>
              <p className="font-semibold">{trackingResult.company}</p>
            </div>
            <div>
              <p className="text-gray-600">运单号码</p>
              <p className="font-semibold">{trackingResult.trackingNumber}</p>
            </div>
          </div>
          <h5 className="font-semibold mt-4 mb-2">物流详情</h5>
          <div className="space-y-3">
            {trackingResult.details.map((detail, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    {index === 0 ? <Truck size={14} color="white" /> : <Package size={14} color="white" />}
                  </div>
                  {index !== trackingResult.details.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 mt-1"></div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-xs">{detail.time}</p>
                  <p className="text-gray-600 flex items-center text-xs mt-0.5">
                    <MapPin size={12} className="mr-1" /> {detail.location}
                  </p>
                  <p className="text-xs mt-0.5">{detail.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;