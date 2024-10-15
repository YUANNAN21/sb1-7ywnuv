import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  category: string;
  content: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '工业4.0：智能制造的未来',
    date: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: '技术趋势',
    content: '',
    tags: ['工业4.0', '智能制造', '自动化', 'IoT']
  },
  // ... 其他博客文章数据 ...
];

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/src/content/blog-post-${id}.md`);
        const content = await response.text();
        const currentPost = blogPosts.find(p => p.id === id);
        if (currentPost) {
          setPost({ ...currentPost, content });
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setPost(null);
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    let filtered = blogPosts;
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory]);

  if (!post) {
    return <div className="container mx-auto px-4 py-8">文章加载失败或不存在</div>;
  }

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const tags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const currentIndex = blogPosts.findIndex(p => p.id === id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/blog" className="text-red-600 hover:text-red-800 mb-4 inline-block">&larr; 返回博客列表</Link>
      <div className="flex flex-col md:flex-row gap-8">
        <article className="w-full md:w-2/3 bg-white rounded-lg shadow-md overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-600 mb-4">发布日期：{post.date}</p>
            <hr className="my-4 border-t border-gray-300" />
            <div className="prose lg:prose-xl">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </article>
        <aside className="w-full md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">搜索文章</h2>
            <input
              type="text"
              placeholder="搜索文章或分类..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">分类</h2>
            <ul>
              {categories.map((category) => (
                <li key={category} className="mb-2">
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left w-full ${selectedCategory === category ? 'text-red-600 font-semibold' : 'text-gray-600 hover:text-red-600'}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              {searchQuery || selectedCategory ? '搜索结果' : '最新文章'}
            </h2>
            <ul>
              {filteredPosts.map((p) => (
                <li key={p.id} className="mb-2">
                  <Link to={`/blog/${p.id}`} className="text-red-600 hover:text-red-800">
                    {p.title}
                  </Link>
                  <p className="text-sm text-gray-600">{p.date}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">标签云</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
      
      {/* 上一页和下一页导航 */}
      <div className="mt-8 flex justify-between items-center">
        {prevPost ? (
          <Link to={`/blog/${prevPost.id}`} className="flex items-center text-red-600 hover:text-red-800">
            <ArrowLeft size={20} className="mr-2" />
            <div>
              <p className="text-sm">上一篇</p>
              <p className="font-semibold">{prevPost.title}</p>
            </div>
          </Link>
        ) : (
          <div></div> // 占位，保持布局平衡
        )}
        {nextPost ? (
          <Link to={`/blog/${nextPost.id}`} className="flex items-center text-right text-red-600 hover:text-red-800">
            <div>
              <p className="text-sm">下一篇</p>
              <p className="font-semibold">{nextPost.title}</p>
            </div>
            <ArrowRight size={20} className="ml-2" />
          </Link>
        ) : (
          <div></div> // 占位，保持布局平衡
        )}
      </div>
    </div>
  );
};

export default BlogPostPage;