import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
          了解更多
        </button>
      </div>
    </div>
  );
};

export default ProductCard;