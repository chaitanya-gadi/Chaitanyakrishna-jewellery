'use client';

import React from 'react';

const testimonials = [
  {
    quote: "I have been your customer from more than a year all your jewellery is so finely crafted.",
    author: "Kalpana"
  },
  {
    quote: "Its fantabulous!! I just loved it as i opened the box. I was delighted as it was exactly what i was looking for!! and exceeded my expectation. For those looking for traditional wear just go for it!!",
    author: "Happy Customer"
  }
];

export default function TestimonialsBanner() {
  return (
    <section className="testimonials-banner">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">Our Customers Love Us</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

