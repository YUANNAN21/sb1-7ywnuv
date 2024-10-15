import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const SpareParts: React.FC = () => {
  const [searchType, setSearchType] = useState<'description' | 'orderCode' | 'manufacturer'>('description');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for ${searchQuery} by ${searchType}`);
    // 这里添加实际的搜索逻辑
  };

  const brands = ['西门子', 'ABB', '施耐德', '欧姆龙', '三菱电机'];
  const recentInquiries = [
    '3RT1015-1BB42', 'A9F18240', '6ES7314-6CH04-0AB0', 'E3X-NA11', 'FX3U-32MT/ES-A',
    'LC1D09M7', '3RV2011-1JA10', 'PM554-T', 'CJ2M-CPU33', '1756-L73',
    'S7-1200', 'RX3i', 'CP1H-X40DR-A', 'DVP14SS211R', 'FX5U-32MT/ES',
    'TM221CE40R', '1769-L33ER', 'CX9020', 'XGT', 'Micro870'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* 左列 */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">备件搜索</h2>
          <div className="mb-8">
            <div className="flex mb-4">
              <button
                className={`px-4 py-2 ${searchType === 'description' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setSearchType('description')}
              >
                按描述搜索
              </button>
              <button
                className={`px-4 py-2 ${searchType === 'orderCode' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setSearchType('orderCode')}
              >
                按订货代码搜索
              </button>
              <button
                className={`px-4 py-2 ${searchType === 'manufacturer' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setSearchType('manufacturer')}
              >
                按制造商/品牌搜索
              </button>
            </div>
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow border border-gray-300 rounded-l px-4 py-2"
                placeholder="输入搜索关键词"
              />
              <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-r">
                <Search size={20} />
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-2">
              {searchType === 'description' && '通过输入描述来搜索文章。例如：电机、开关、电缆...请输入文章描述的一个或多个字母，然后按"搜索"'}
              {searchType === 'orderCode' && '通过输入订货代码来搜索产品。例如：3tb...此外，知道订货代码，选择另一种语言，您就可以得到描述的翻译...请输入订货代码描述的一个或多个字母，然后按"搜索"'}
              {searchType === 'manufacturer' && '通过输入制造商/品牌名称或其一部分来搜索文章。例如，如果您正在搜索 Siemens，则可以键入以下关键字之一：S（第一个字母或多个字母）； Siemens（全名）.....请输入文章描述的一个或多个字母，然后按"搜索"'}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">品牌库</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {brands.map((brand, index) => (
                <Link key={index} to={`/brand/${brand}`} className="bg-gray-100 p-4 text-center rounded hover:bg-gray-200">
                  {brand}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">最新询价</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {recentInquiries.map((inquiry, index) => (
                <Link key={index} to={`/product/${inquiry}`} className="bg-white border border-gray-200 p-2 text-center rounded hover:bg-gray-50">
                  {inquiry}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 右列 */}
        <div className="w-full md:w-1/3">
          <div className="bg-gray-100 p-4 rounded mb-4">
            <h3 className="text-lg font-semibold mb-2">品牌及制造商索引</h3>
            <Link to="/brands" className="text-red-600 hover:underline">查看所有品牌</Link>
          </div>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <h3 className="text-lg font-semibold mb-2">品牌一览</h3>
            <Link to="/brand-overview" className="text-red-600 hover:underline">浏览品牌列表</Link>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">货运追踪</h3>
            <Link to="/order-tracking" className="text-red-600 hover:underline">追踪您的订单</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpareParts;