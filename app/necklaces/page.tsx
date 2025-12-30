"use client";

import React from "react";

const necklaces = [
  {
    id: 1,
    name: "Gold Temple Necklace",
    price: "₹1,85,000",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    description: "Traditional temple design in pure 22K gold",
  },
  {
    id: 2,
    name: "Diamond Pendant Necklace",
    price: "₹95,000",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    description: "Sparkling diamond pendant on delicate chain",
  },
  {
    id: 3,
    name: "Kundan Bridal Set",
    price: "₹2,45,000",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
    description: "Magnificent bridal kundan necklace set",
  },
  {
    id: 4,
    name: "Pearl String Necklace",
    price: "₹42,000",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop",
    description: "Classic freshwater pearl string",
  },
  {
    id: 5,
    name: "Layered Gold Chain",
    price: "₹68,000",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop",
    description: "Modern layered chain in 18K gold",
  },
  {
    id: 6,
    name: "Antique Mango Mala",
    price: "₹3,25,000",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    description: "Heritage mango design with rubies",
  },
];

export default function NecklacesPage() {
  return (
    <div className="category-page">
      <div className="category-banner">
        <h1>Necklaces</h1>
        <p>Elegant necklaces for every occasion</p>
      </div>
      <div className="products-container">
        <div className="products-grid">
          {necklaces.map((product) => (
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

