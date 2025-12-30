"use client";

import React from "react";

const pendants = [
  {
    id: 1,
    name: "Diamond Heart Pendant",
    price: "₹52,000",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop",
    description: "Romantic heart-shaped diamond pendant",
  },
  {
    id: 2,
    name: "Gold Om Pendant",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    description: "Spiritual Om symbol in 22K gold",
  },
  {
    id: 3,
    name: "Pearl Drop Pendant",
    price: "₹35,000",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    description: "Elegant pearl drop with diamonds",
  },
  {
    id: 4,
    name: "Emerald Pendant",
    price: "₹78,000",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop",
    description: "Stunning emerald in gold setting",
  },
  {
    id: 5,
    name: "Ruby Teardrop Pendant",
    price: "₹65,000",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
    description: "Beautiful ruby teardrop design",
  },
  {
    id: 6,
    name: "Ganesh Pendant",
    price: "₹42,000",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
    description: "Auspicious Lord Ganesh pendant",
  },
];

export default function PendantsPage() {
  return (
    <div className="category-page">
      <div className="category-banner">
        <h1>Pendants</h1>
        <p>Meaningful pendants for every moment</p>
      </div>
      <div className="products-container">
        <div className="products-grid">
          {pendants.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <button className="quick-view-btn">Quick View</button>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

