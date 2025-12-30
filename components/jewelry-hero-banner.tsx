"use client";

import React from "react";
import Link from "next/link";

export default function JewelryHeroBanner() {
  return (
    <section className="jewelry-hero">
      <div className="jewelry-hero-overlay"></div>
      <div className="jewelry-hero-content">
        <p className="jewelry-hero-tagline">Exquisite Craftsmanship</p>
        <h1 className="jewelry-hero-title">
          Timeless Elegance,
          <br />
          <span className="gold-text">Crafted for You</span>
        </h1>
        <p className="jewelry-hero-description">
          Discover our handcrafted collection of fine jewelry. Each piece tells
          a story of tradition, artistry, and unparalleled beauty.
        </p>
        <div className="jewelry-hero-buttons">
          <Link href="/necklaces" className="btn jewelry-btn-primary">
            Shop Collection
          </Link>
          <Link href="/rings" className="btn jewelry-btn-secondary">
            View New Arrivals
          </Link>
        </div>
        <div className="jewelry-hero-features">
          <div className="feature-item">
            <span className="feature-icon">✦</span>
            <span>Certified Gold</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✦</span>
            <span>Handcrafted</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✦</span>
            <span>Lifetime Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}
