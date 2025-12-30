import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TestimonialsBanner from "@/components/testimonials-banner";
import JewelryHeroBanner from "@/components/jewelry-hero-banner";
import CartSidebar from "@/components/cart-sidebar";
import { CartProvider } from "@/context/CartContext";

import 'react-loading-skeleton/dist/skeleton.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KRISHNA JEWELLERY - Fine Handcrafted Jewelry",
  applicationName: "KRISHNA JEWELLERY",
};

export const viewport: Viewport = {
  themeColor: '#d4af37',
  initialScale: 1,
  minimumScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css?family=Inter&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
          integrity='sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
          crossOrigin='anonymous'
        />
        <link rel='stylesheet' href="/styles/globals.css" />
        <link rel='stylesheet' href="/styles/style.css" />
        <link rel='stylesheet' href="/styles/third-party.css" />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <JewelryHeroBanner />
          <main className='mainClass'>
            {children}
          </main>
          <TestimonialsBanner />
          <Footer />
          <CartSidebar />
        </CartProvider>
        <Script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
          crossOrigin='anonymous'
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
