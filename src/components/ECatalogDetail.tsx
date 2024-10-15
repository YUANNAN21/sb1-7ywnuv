import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

interface Catalog {
  id: string;
  title: string;
  imageUrl: string;
  pdfUrl: string;
}

const catalogs: Catalog[] = [
  {
    id: '1',
    title: '工业自动化产品目录',
    imageUrl: 'https://www.unitecd.com/wp-content/uploads/2023/03/工业自动化产品目录-1-300x424.png',
    pdfUrl: 'https://www.unitecd.com/wp-content/uploads/2023/03/工业自动化产品目录.pdf'
  },
  {
    id: '2',
    title: '工业自动化产品目录（英文版）',
    imageUrl: 'https://www.unitecd.com/wp-content/uploads/2023/03/工业自动化产品目录（英文版）-1-300x424.png',
    pdfUrl: 'https://www.unitecd.com/wp-content/uploads/2023/03/工业自动化产品目录（英文版）.pdf'
  },
  {
    id: '3',
    title: '工业自动化产品目录（德文版）',
    imageUrl: 'https://www.unitecd.com/wp-content/uploads/2023/03/工业自动化产品目录（德文版）-1-300x424.png',
    pdfUrl: 'https://www.unitecd.com/wp-content/uploads/2023/03/工业自动化产品目录（德文版）.pdf'
  },
  {
    id: '4',
    title: '工业自动化产品目录（法文版）',
    imageUrl: 'https://www.unitecd.com/wp-content/uploads/2023/03/工业自动化产品目录（法文版）-1-300x424.png',
    pdfUrl: 'https://www.unitecd.com/wp-content/uploads/2023/03/工业自动化产品目录（法文版）.pdf'
  },
  {
    id: '5',
    title: '工业自动化产品目录（西班牙文版）',
    imageUrl: 'https://www.unitecd.com/wp-content/uploads/2023/03/工业自动化产品目录（西班牙文版）-1-300x424.png',
    pdfUrl: 'https://www.unitecd.com/wp-content/uploads/2023/03/工业自动化产品目录（西班牙文版）.pdf'
  },
  {
    id: '6',
    title: '工业自动化产品目录（意大利文版）',
    imageUrl: 'https://www.unitecd.com/wp-content/uploads/2023/03/工业自动化产品目录（意大利文版）-1-300x424.png',
    pdfUrl: 'https://www.unitecd.com/wp-content/uploads/2023/03/工业自动化产品目录（意大利文版）.pdf'
  }
];

const ECatalogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const catalog = catalogs.find(c => c.id === id);

  if (!catalog) {
    return <div className="container mx-auto px-4 py-8">目录不存在</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/ecatalog" className="flex items-center text-red-600 hover:text-red-800 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        返回目录列表
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <img src={catalog.imageUrl} alt={catalog.title} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{catalog.title}</h1>
          <p className="text-gray-700 mb-6">
            这份全面的工业自动化产品目录涵盖了我们最新的自动化解决方案，包括PLC、HMI、伺服系统等。
            无论您是在寻找单个组件还是完整的自动化系统，本目录都能为您提供详细的产品信息和技术规格。
          </p>
          <h2 className="text-2xl font-semibold mb-4">目录内容：</h2>
          <ul className="list-disc list-inside mb-6">
            <li className="text-gray-700 mb-2">PLC系列</li>
            <li className="text-gray-700 mb-2">HMI触摸屏</li>
            <li className="text-gray-700 mb-2">伺服系统</li>
            <li className="text-gray-700 mb-2">变频器</li>
            <li className="text-gray-700 mb-2">工业传感器</li>
            <li className="text-gray-700 mb-2">工业网络设备</li>
            <li className="text-gray-700 mb-2">运动控制系统</li>
            <li className="text-gray-700 mb-2">机器视觉系统</li>
          </ul>
          <a 
            href={catalog.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 inline-flex items-center"
          >
            <Download size={20} className="mr-2" />
            下载 PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default ECatalogDetail;