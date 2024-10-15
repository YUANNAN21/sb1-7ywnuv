import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BrandPage: React.FC = () => {
  const { brand } = useParams<{ brand: string }>();

  // 这里我们创建一个模拟的询价产品数据库
  const inquiryProducts = [
    { id: '3RT1015-1BB42', brand: '西门子', name: '接触器' },
    { id: 'A9F18240', brand: '施耐德', name: '断路器' },
    { id: '6ES7314-6CH04-0AB0', brand: '西门子', name: 'PLC模块' },
    { id: 'E3X-NA11', brand: '欧姆龙', name: '光纤放大器' },
    { id: 'FX3U-32MT/ES-A', brand: '三菱电机', name: 'PLC' },
    { id: 'LC1D09M7', brand: '施耐德', name: '接触器' },
    { id: '3RV2011-1JA10', brand: '西门子', name: '断路器' },
    { id: 'PM554-T', brand: 'ABB', name: 'PLC' },
    { id: 'CJ2M-CPU33', brand: '欧姆龙', name: 'PLC' },
    { id: '1756-L73', brand: 'AB', name: 'PLC' },
    { id: 'S7-1200', brand: '西门子', name: 'PLC' },
    { id: 'RX3i', brand: 'GE', name: 'PLC' },
    { id: 'CP1H-X40DR-A', brand: '欧姆龙', name: 'PLC' },
    { id: 'DVP14SS211R', brand: '台达', name: 'PLC' },
    { id: 'FX5U-32MT/ES', brand: '三菱电机', name: 'PLC' },
    { id: 'TM221CE40R', brand: '施耐德', name: 'PLC' },
    { id: '1769-L33ER', brand: 'AB', name: 'PLC' },
    { id: 'CX9020', brand: '倍福', name: 'PLC' },
    { id: 'XGT', brand: 'LS', name: 'PLC' },
    { id: 'Micro870', brand: 'AB', name: 'PLC' },
    { id: 'ZA-3-1', brand: 'MacGregor', name: '吊环' }
  ];

  // 获取当前品牌的产品
  const products = inquiryProducts.filter(product => product.brand.toLowerCase() === brand?.toLowerCase());

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="flex items-center text-red-600 hover:text-red-800 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        返回产品列表
      </Link>
      <h1 className="text-3xl font-bold mb-6">{brand}产品列表</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">型号: {product.id}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600">暂无该品牌的产品信息。</p>
      )}
    </div>
  );
};

export default BrandPage;