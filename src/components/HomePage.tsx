import React from 'react'
import ProductCard from './ProductCard'

function HomePage() {
  const products = [
    {
      name: "高效能工业泵",
      description: "适用于各种工业场景的高性能泵系统，提高生产效率。",
      imageUrl: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "智能控制系统",
      description: "先进的自动化控制系统，实现生产过程的精确管理。",
      imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "工业级传感器",
      description: "高精度、高可靠性的传感器，适用于恶劣环境。",
      imageUrl: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const clients = [
    { name: "客户A", logo: "https://via.placeholder.com/150?text=ClientA" },
    { name: "客户B", logo: "https://via.placeholder.com/150?text=ClientB" },
    { name: "客户C", logo: "https://via.placeholder.com/150?text=ClientC" },
    { name: "客户D", logo: "https://via.placeholder.com/150?text=ClientD" },
    { name: "客户E", logo: "https://via.placeholder.com/150?text=ClientE" },
  ];

  return (
    <div>
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">工业科技的未来</h1>
          <p className="text-xl mb-8">创新技术，引领工业革命</p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition duration-300">
            了解更多
          </button>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">我们的客户</h2>
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {clients.concat(clients).map((client, index) => (
                  <div key={index} className="flex-shrink-0 w-48 mx-4">
                    <img src={client.logo} alt={client.name} className="w-full h-auto" />
                  </div>
                ))}
              </div>
              <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
                {clients.concat(clients).map((client, index) => (
                  <div key={index} className="flex-shrink-0 w-48 mx-4">
                    <img src={client.logo} alt={client.name} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">我们的产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage