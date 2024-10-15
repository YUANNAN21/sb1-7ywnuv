import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:info@wt-technik.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`姓名: ${name}\n邮箱: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    alert('感谢您的留言，我们会尽快回复您！');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">联系我们</h1>
      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">给我们留言</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">姓名</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">电子邮箱</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">主题</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">留言内容</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
              发送留言
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mb-4">联系方式</h2>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Mail className="mr-2 text-red-600" />
              <span className="font-semibold">电子邮箱：</span>
            </div>
            <p>info@wt-technik.com</p>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Phone className="mr-2 text-red-600" />
              <span className="font-semibold">电话：</span>
            </div>
            <p>+86 186 5071 2596</p>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 text-red-600" />
              <span className="font-semibold">地址：</span>
            </div>
            <p>厦门市思明区软件园观日路30号206</p>
          </div>
        </div>
      </div>
      
      {/* 新的独立地图 section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">在地图上找到我们</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3027079929364!2d118.17980661486877!3d24.48912498423435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3414c6e2b8b29f3d%3A0x9f3c9b8f8f8f8f8f!2s30%20Guanri%20Rd%2C%20Siming%20District%2C%20Xiamen%2C%20Fujian%2C%20China!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;