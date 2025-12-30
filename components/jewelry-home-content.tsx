"use client";

import React from "react";
import Link from "next/link";

const categories = [
  {
    name: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
    href: "/rings",
  },
  {
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    href: "/necklaces",
  },
  {
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    href: "/earrings",
  },
  {
    name: "Bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
    href: "/bracelets",
  },
  {
    name: "Chokers",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    href: "/chokers",
  },
  {
    name: "Pendants",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop",
    href: "/pendants",
  },
];

const features = [
  {
    icon: "💎",
    title: "Premium Quality",
    description: "Only the finest materials - 22K gold, certified diamonds, and precious gemstones.",
  },
  {
    icon: "✨",
    title: "Handcrafted",
    description: "Each piece is meticulously crafted by skilled artisans with decades of experience.",
  },
  {
    icon: "🎁",
    title: "Free Shipping",
    description: "Complimentary insured shipping on all orders above ₹10,000.",
  },
  {
    icon: "🔄",
    title: "Easy Returns",
    description: "30-day hassle-free returns and lifetime exchange policy.",
  },
];

const newArrivals = [
  {
    name: "Royal Kundan Set",
    price: "₹45,999",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop",
  },
  {
    name: "Diamond Studs",
    price: "₹28,500",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
  },
  {
    name: "Gold Temple Necklace",
    price: "₹1,25,000",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
  },
  {
    name: "Pearl Choker",
    price: "₹18,999",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
  },
];

export default function JewelryHomeContent() {
  return (
    <div className="jewelry-home">
      {/* Shop by Category */}
      <section className="jewelry-categories-section">
        <div className="section-container">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Explore our exquisite collections</p>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link href={category.href} key={index} className="category-card">
                <div className="category-image-wrapper">
                  <img src={category.image} alt={category.name} className="category-image" />
                  <div className="category-overlay"></div>
                </div>
                <h3 className="category-name">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="jewelry-arrivals-section">
        <div className="section-container">
          <h2 className="section-title">New Arrivals</h2>
          <p className="section-subtitle">Fresh designs just for you</p>
          <div className="arrivals-grid">
            {newArrivals.map((item, index) => (
              <div key={index} className="arrival-card">
                <div className="arrival-image-wrapper">
                  <img src={item.image} alt={item.name} className="arrival-image" />
                  <span className="new-badge">NEW</span>
                </div>
                <div className="arrival-info">
                  <h3 className="arrival-name">{item.name}</h3>
                  <p className="arrival-price">{item.price}</p>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="jewelry-features-section">
        <div className="section-container">
          <h2 className="section-title">Why Choose KRISHNA JEWELLERY</h2>
          <p className="section-subtitle">Trusted by thousands of happy customers</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="jewelry-offer-section">
        <div className="offer-content">
          <p className="offer-tagline">Limited Time Offer</p>
          <h2 className="offer-title">Get 20% Off on Your First Order</h2>
          <p className="offer-description">
            Use code <span className="offer-code">KRISHNA20</span> at checkout
          </p>
          <Link href="/necklaces" className="offer-btn">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}

