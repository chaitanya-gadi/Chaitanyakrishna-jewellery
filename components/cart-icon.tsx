"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <button className="cart-icon-btn" onClick={() => setIsCartOpen(true)}>
      <span className="cart-icon">🛒</span>
      {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
    </button>
  );
}

