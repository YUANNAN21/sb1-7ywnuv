import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '工业4.0：智能制造的未来',
    date: '2024-03-15',
    excerpt: '探讨工业4.0如何改变制造业格局，以及企业如何适应这一革命性变化。',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: '技术趋势'
  },
  {
    id: '2',
    title: '可持续发展：工业领域的绿色革命',
    date: '2024-03-10',
    excerpt: '分析工业领域实现可持续发展的重要性，以及企业可以采取的具体措施。',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: '可持续发展'
  },
  {
    id: '3',
    title: '工业物联网（IIoT）应用案例',
    date: '2024-03-05',
    excerpt: '通过实际案例，展示工业物联网如何提高生产效率和降低运营成本。',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: '物联网'
  },
  {
    id: '4',
    title: '工业安全：网络安全挑战与对策',
    date: '2024-02-28',
    excerpt: '探讨工业领域面临的网络安全威胁，以及如何构建强大的防御体系。',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: '安全'
  },
  {
    id: '5',
    title: '人工智能在工业质量控制中的应用',
    date: '2024-02-20',
    excerpt: '介绍AI技术如何革新工业质量控制流程，提高产品质量和一致性。',
    imageUrl: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    category: '人工智能'
  },
  {
    id: '6',
    title: '工业机器人：提高效率与灵活性',
    date: '2024-02-15',
    excerpt: '分析工业机器人的最新发展趋势，以及它们如何改变传统制造流程。',
    imageUrl: 'https://images.unsplash.com/photo-1565690875712-f02e1eb53fca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: '自动化'
  },
  {
    id: '7',
    title: '5G技术在工业领域的应用前景',
    date: '2024-02-10',
    excerpt: '探讨5G如何推动工业互联网发展，实现更高效的生产和管理。',
    imageUrl: 'https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: '通信技术'
  },
  {
    id: '8',
    title: '工业大数据分析：挖掘数据价值',
    date: '2024-02-05',
    excerpt: '讨论如何利用大数据分析技术优化生产流程，提高决策效率。',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: '数据分析'
  },
  {
    id: '9',
    title: '工业3D打印技术的创新应用',
    date: '2024-01-30',
    excerpt: '探索3D打印技术在工业制造中的应用，及其带来的革命性变化。',
    imageUrl: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: '制造技术'
  },
  {
    id: '10',
    title: '工业能源管理：提高能效降低成本',
    date: '2024-01-25',
    excerpt: '介绍先进的工业能源管理策略，助力企业实现节能减排目标。',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: '能源管理'
  }
];

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">工业科技博客</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mb-2">{post.category}</span>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-red-600 hover:text-red-800 font-semibold">
                阅读更多
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 border border-gray-300 text-sm font-medium ${
                currentPage === index + 1
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default BlogPage;