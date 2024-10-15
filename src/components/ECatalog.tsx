import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';

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

const ECatalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCatalogs, setFilteredCatalogs] = useState(catalogs);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = catalogs.filter(catalog =>
      catalog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCatalogs(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">电子目录</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索目录..."
            className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700 transition duration-300">
            <Search size={20} />
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCatalogs.map((catalog) => (
          <div key={catalog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={catalog.imageUrl} alt={catalog.title} className="w-full h-auto object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{catalog.title}</h2>
              <div className="flex justify-between items-center">
                <Link to={`/ecatalog/${catalog.id}`} className="text-red-600 hover:text-red-800 flex items-center">
                  查看详情
                  <ChevronRight size={20} className="ml-1" />
                </Link>
                <a href={catalog.pdfUrl} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
                  下载 PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ECatalog;