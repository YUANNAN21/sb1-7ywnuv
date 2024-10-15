import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations/translations';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('搜索:', searchQuery);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header className="bg-red-700 text-white p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* 左侧语言切换 */}
        <div className="relative">
          <button 
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="flex items-center hover:text-red-200"
          >
            <Globe size={20} className="mr-2" />
            {t('language')}
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white text-black shadow-md rounded-md">
              <button 
                onClick={() => handleLanguageChange('zh')}
                className="flex items-center w-full text-left px-4 py-2 hover:bg-red-100 whitespace-nowrap"
              >
                <span className="mr-2">🇨🇳</span> 中文
              </button>
              <button 
                onClick={() => handleLanguageChange('en')}
                className="flex items-center w-full text-left px-4 py-2 hover:bg-red-100 whitespace-nowrap"
              >
                <span className="mr-2">🇺🇸</span> English
              </button>
              <button 
                onClick={() => handleLanguageChange('ru')}
                className="flex items-center w-full text-left px-4 py-2 hover:bg-red-100 whitespace-nowrap"
              >
                <span className="mr-2">🇷🇺</span> Русский
              </button>
              <button 
                onClick={() => handleLanguageChange('pt-BR')}
                className="flex items-center w-full text-left px-4 py-2 hover:bg-red-100 whitespace-nowrap"
              >
                <span className="mr-2">🇧🇷</span> Português (BR)
              </button>
            </div>
          )}
        </div>

        {/* 中间导航和Logo */}
        <nav className="flex items-center space-x-6">
          <Link to="/products" className="hover:text-red-200 relative after:w-0 hover:after:w-full after:h-0.5 after:bg-red-200 after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300">{t('products')}</Link>
          <Link to="/oem-services" className="hover:text-red-200 relative after:w-0 hover:after:w-full after:h-0.5 after:bg-red-200 after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300">{t('oemServices')}</Link>
          <Link to="/field-service" className="hover:text-red-200 relative after:w-0 hover:after:w-full after:h-0.5 after:bg-red-200 after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300">{t('fieldService')}</Link>
          <Link to="/" className="flex items-center mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-black">
              <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
              <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
              <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
            </svg>
            <h1 className="text-2xl font-bold ml-2">{t('companyName')}</h1>
          </Link>
          <Link to="/blog" className="hover:text-red-200 relative after:w-0 hover:after:w-full after:h-0.5 after:bg-red-200 after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300">{t('blog')}</Link>
          <Link to="/downloads" className="hover:text-red-200 relative after:w-0 hover:after:w-full after:h-0.5 after:bg-red-200 after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300">{t('downloads')}</Link>
          <Link to="/contact" className="hover:text-red-200 relative after:w-0 hover:after:w-full after:h-0.5 after:bg-red-200 after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300">{t('contact')}</Link>
        </nav>

        {/* 右侧搜索框 */}
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder={t('search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-red-600 text-white placeholder-red-300 rounded-full py-1 px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Search size={18} />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;