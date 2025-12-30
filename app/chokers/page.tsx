"use client";

import React from "react";

const chokers = [
  {
    id: 1,
    name: "Pearl Choker",
    price: "₹38,000",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    description: "Classic pearl choker with gold clasp",
  },
  {
    id: 2,
    name: "Diamond Choker",
    price: "₹1,85,000",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    description: "Stunning diamond studded choker",
  },
  {
    id: 3,
    name: "Kundan Choker Set",
    price: "₹95,000",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
    description: "Bridal kundan choker with earrings",
  },
  {
    id: 4,
    name: "Gold Mesh Choker",
    price: "₹68,000",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    description: "Modern gold mesh design choker",
  },
  {
    id: 5,
    name: "Ruby Choker",
    price: "₹1,25,000",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
    description: "Elegant ruby studded choker",
  },
  {
    id: 6,
    name: "Temple Choker",
    price: "₹1,45,000",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop",
    description: "Traditional temple design choker",
  },
];

export default function ChokersPage() {
  return (
    <div className="category-page">
      <div className="category-banner">
        <h1>Chokers</h1>
        <p>Statement chokers for a bold look</p>
      </div>
      <div className="products-container">
        <div className="products-grid">
          {chokers.map((product) => (
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

