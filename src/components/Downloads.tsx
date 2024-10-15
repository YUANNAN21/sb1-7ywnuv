import React from 'react';
import { FileDown } from 'lucide-react';

const pdfFiles = [
  { name: '产品目录2024.pdf', size: '5.2 MB' },
  { name: '技术规格书-工业泵系列.pdf', size: '3.7 MB' },
  { name: '安全操作手册.pdf', size: '2.1 MB' },
  { name: '维护保养指南.pdf', size: '4.5 MB' },
  { name: '行业解决方案白皮书.pdf', size: '6.3 MB' },
  { name: '案例研究：提高生产效率.pdf', size: '3.9 MB' },
  { name: '新产品发布说明.pdf', size: '1.8 MB' },
  { name: '质量认证文件.pdf', size: '2.6 MB' },
  { name: '环境影响报告.pdf', size: '5.7 MB' },
  { name: '客户服务政策.pdf', size: '1.5 MB' },
];

const Downloads: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">文档下载</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfFiles.map((file, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <FileDown size={24} className="text-red-600 mr-4" />
            <div>
              <h2 className="text-lg font-semibold mb-1">{file.name}</h2>
              <p className="text-sm text-gray-600">文件大小: {file.size}</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`下载 ${file.name}`);
                }}
                className="text-red-600 hover:text-red-800 text-sm font-medium mt-2 inline-block"
              >
                下载文件
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Downloads;