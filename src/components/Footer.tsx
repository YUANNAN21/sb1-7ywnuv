import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">{t('companyName')}</h3>
            <p className="text-gray-400">{t('companyDescription')}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <p className="text-gray-400">{t('email')}: info@wt-technik.com</p>
            <p className="text-gray-400">{t('phone')}: +86 186 5071 2596</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">{t('followUs')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">微博</a>
              <a href="#" className="text-gray-400 hover:text-white">微信</a>
              <a href="#" className="text-gray-400 hover:text-white">领英</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;