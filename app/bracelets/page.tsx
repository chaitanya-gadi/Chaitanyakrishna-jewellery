"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

const bracelets = [
  {
    id: 1,
    name: "Diamond Tennis Bracelet",
    price: "₹1,45,000",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
    description: "Classic diamond line bracelet",
  },
  {
    id: 2,
    name: "Gold Kada",
    price: "₹85,000",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    description: "Traditional 22K gold kada",
  },
  {
    id: 3,
    name: "Pearl Bracelet",
    price: "₹32,000",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop",
    description: "Delicate freshwater pearl bracelet",
  },
  {
    id: 4,
    name: "Charm Bracelet",
    price: "₹48,000",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    description: "Gold charm bracelet with gemstones",
  },
  {
    id: 5,
    name: "Kundan Bangle Set",
    price: "₹72,000",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
    description: "Set of 4 kundan bangles",
  },
  {
    id: 6,
    name: "Rose Gold Cuff",
    price: "₹55,000",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop",
    description: "Modern rose gold cuff bracelet",
  },
];

export default function BraceletsPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof bracelets[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: "Bracelets",
    });
  };

  return (
    <div className="category-page">
      <div className="category-banner">
        <h1>Bracelets</h1>
        <p>Adorn your wrists with our stunning bracelets</p>
      </div>
      <div className="products-container">
        <div className="products-grid">
          {bracelets.map((product) => (
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

