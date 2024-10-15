import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Download } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // 这里我们创建一个模拟的产品数据库
  const productDatabase = {
    'ZA-3-1': {
      id: 'ZA-3-1',
      name: 'ZA-3-1吊环',
      brand: 'MacGregor',
      orderCode: '1021154',
      description: 'ZA-3-1是一款高强度吊环，适用于各种重型吊装作业。它采用高强度钢制造，具有出色的承重能力和耐用性，适合船舶和海洋工程等领域的应用。',
      specifications: [
        { label: '订货代码', value: '1021154' },
        { label: '单个产品重量', value: '5.1 KG' },
        { label: '材质', value: '高强度钢' },
        { label: '表面处理', value: '喷砂+底漆' },
        { label: '安全工作负载', value: '245 KN' },
        { label: '360度旋转设计', value: '是' },
        { label: '符合标准', value: 'EN 1677-1' },
      ],
      applications: [
        '船舶和海洋工程',
        '工厂和仓库',
        '建筑工地',
        '重型机械运输'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80',
      technicalSpecsUrl: '#',
      price: '询价'
    },
    '3RT1015-1BB42': {
      id: '3RT1015-1BB42',
      name: '接触器',
      brand: '西门子',
      orderCode: '3RT1015-1BB42',
      description: '西门子3RT1015-1BB42是一款紧凑型接触器，适用于各种工业控制应用。它具有可靠的性能和长寿命，是自动化系统中不可或缺的组件。',
      specifications: [
        { label: '订货代码', value: '3RT1015-1BB42' },
        { label: '额定工作电压', value: '24V DC' },
        { label: '主触点数量', value: '3 NO' },
        { label: '辅助触点数量', value: '1 NO + 1 NC' },
        { label: '额定工作电流', value: '9 A' },
        { label: '安装方式', value: 'DIN导轨安装' },
      ],
      applications: [
        '电机控制',
        '照明控制',
        '加热设备控制',
        '自动化生产线'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      technicalSpecsUrl: '#',
      price: '询价'
    },
    // 可以继续添加其他产品...
  };

  const productData = productDatabase[id as keyof typeof productDatabase] || {
    id: id,
    name: `产品 ${id}`,
    brand: '未知',
    orderCode: id,
    description: '该产品的详细信息暂未提供。',
    specifications: [],
    applications: [],
    imageUrl: 'https://via.placeholder.com/300',
    technicalSpecsUrl: '#',
    price: '询价'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="flex items-center text-red-600 hover:text-red-800 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        返回产品列表
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img src={productData.imageUrl} alt={productData.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
          <p className="text-xl text-gray-600 mb-2">品牌：{productData.brand}</p>
          <p className="text-lg text-gray-600 mb-4">订货代码：{productData.orderCode}</p>
          <p className="text-gray-700 mb-6">{productData.description}</p>
          {productData.specifications.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">产品规格：</h2>
              <table className="w-full">
                <tbody>
                  {productData.specifications.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                      <td className="py-2 px-4 font-semibold">{spec.label}</td>
                      <td className="py-2 px-4">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {productData.applications.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">应用领域：</h2>
              <ul className="list-disc list-inside">
                {productData.applications.map((application, index) => (
                  <li key={index} className="text-gray-700">{application}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold text-red-600">{productData.price}</span>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 flex items-center">
              <ShoppingCart size={20} className="mr-2" />
              询价
            </button>
          </div>
          <a href={productData.technicalSpecsUrl} className="text-red-600 hover:text-red-800 flex items-center">
            <Download size={20} className="mr-2" />
            下载技术规格书
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;