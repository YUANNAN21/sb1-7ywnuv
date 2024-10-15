import React from 'react';

const equipmentData = [
  {
    name: "30KW中试吸粉分散设备",
    description: "自制，产能45吨/小时",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "75KW量产型吸粉分散设备",
    description: "德国原装，产能90吨/小时",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "立式湿法离心分级机",
    description: "德国原装，产能1000L/小时",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "FUNAC负载300KG机械手",
    description: "日本原装，高精度自动化操作",
    imageUrl: "https://images.unsplash.com/photo-1565690875712-f02e1eb53fca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    name: "机械臂末端工具",
    description: "瑞典原装，适配多种工业场景",
    imageUrl: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
  }
];

const OEMServices: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-operating-a-control-panel-9749-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
        <div className="z-30 text-center text-white relative">
          <h1 className="text-5xl font-bold mb-4">OEM 服务</h1>
          <p className="text-xl mb-8">专业设备，精准配方，为您提供亚微米级浆料调配代工服务</p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition duration-300">
            联系我们
          </button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">我们的设备</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentData.map((equipment, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={equipment.imageUrl} alt={equipment.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{equipment.name}</h3>
                <p className="text-gray-600">{equipment.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">为什么选择我们的OEM服务？</h2>
          <p className="text-xl text-gray-600 mb-8">
            凭借先进的设备和经验，我们能提供高品质的亚微米级浆料调配代工服务。
            从小批量试产到大规模生产，我们都能满足您的需求。
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition duration-300">
            联系我们
          </button>
        </div>
      </div>
    </div>
  );
};

export default OEMServices;