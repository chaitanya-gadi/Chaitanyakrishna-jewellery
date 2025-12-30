"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

const earrings = [
  {
    id: 1,
    name: "Diamond Studs",
    price: "₹45,000",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    description: "Classic solitaire diamond studs",
  },
  {
    id: 2,
    name: "Gold Jhumkas",
    price: "₹38,000",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    description: "Traditional South Indian jhumkas",
  },
  {
    id: 3,
    name: "Chandbali Earrings",
    price: "₹52,000",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
    description: "Elegant moon-shaped chandbalis",
  },
  {
    id: 4,
    name: "Pearl Drop Earrings",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop",
    description: "Graceful pearl drops with diamonds",
  },
  {
    id: 5,
    name: "Ruby Hoops",
    price: "₹62,000",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
    description: "Gold hoops studded with rubies",
  },
  {
    id: 6,
    name: "Emerald Danglers",
    price: "₹78,000",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop",
    description: "Stunning emerald drop earrings",
  },
];

export default function EarringsPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof earrings[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: "Earrings",
    });
  };

  return (
    <div className="category-page">
      <div className="category-banner">
        <h1>Earrings</h1>
        <p>Beautiful earrings to complement your style</p>
      </div>
      <div className="products-container">
        <div className="products-grid">
          {earrings.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <button className="quick-view-btn">Quick View</button>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

