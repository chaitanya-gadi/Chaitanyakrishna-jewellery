"use client";

import React from "react";
import Link from "next/link";

const rings = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: "₹85,000",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
    description: "Elegant single diamond set in 18K white gold",
  },
  {
    id: 2,
    name: "Gold Band Ring",
    price: "₹32,500",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
    description: "Classic 22K gold band with intricate design",
  },
  {
    id: 3,
    name: "Ruby Studded Ring",
    price: "₹58,000",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
    description: "Beautiful ruby surrounded by small diamonds",
  },
  {
    id: 4,
    name: "Emerald Statement Ring",
    price: "₹72,000",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop",
    description: "Stunning emerald in vintage gold setting",
  },
  {
    id: 5,
    name: "Pearl Cluster Ring",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop",
    description: "Delicate freshwater pearls in rose gold",
  },
  {
    id: 6,
    name: "Engagement Ring Set",
    price: "₹1,25,000",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop",
    description: "Diamond engagement ring with matching band",
  },
];

export default function RingsPage() {
  return (
    <div className="category-page">
      <div className="category-banner">
        <h1>Rings</h1>
        <p>Discover our exquisite collection of handcrafted rings</p>
      </div>
      <div className="products-container">
        <div className="products-grid">
          {rings.map((product) => (
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

