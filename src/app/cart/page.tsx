import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer';

const Cart = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />

      {/* First Section with Tailwind Background */}
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: 'url(/po.png)' }}>
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-10 h-10  flex justify-center items-center rounded-full">
              <span className="text-white font-bold text-lg"></span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Cart</h1>
          <nav className="mt-4 text-sm text-gray-600">
            <ol className="list-reset inline-flex items-center space-x-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Cart</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
      {/* 2nd Section: Cart Items and Product Details */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* First Column (Cart Items) */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {/* Buttons: Product, Price, Quantity, Subtotal */}
                {['Product', 'Price', 'Quantity', 'Subtotal'].map((item) => (
                  <button
                    key={item}
                    className="px-4 py-2 border border-transparent hover:bg-amber-100 transition text-sm md:text-base"
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Product Details (Grid for Items) */}
              <div className="grid grid-cols-5 gap-4 mt-6 items-center">
                {/* First Column: Product Image */}
                <div className="col-span-1 flex justify-center">
                  <Image
                    src="/gh.png"
                    alt="Asgaard Sofa"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>

                {/* Remaining Columns for Product Details */}
                <div className="col-span-4 grid grid-cols-4 items-center gap-4">
                  {/* Product Name */}
                  <h2 className="text-sm md:text-lg font-semibold text-gray-700">
                    Asgaard Sofa
                  </h2>

                  {/* Price */}
                  <p className="text-sm md:text-base text-gray-500">
                    Rs. 250,000.00
                  </p>

                  {/* Quantity */}
                  <input
                    type="number"
                    defaultValue="1"
                    className="w-full p-2 border border-gray-300 rounded-md text-center"
                  />

                  {/* Subtotal */}
                  <p className="font-semibold text-gray-800">Rs. 250,000.00</p>
                </div>
              </div>
            </div>

            {/* Second Column for Cart Totals */}
            <div className="space-y-6">
              <h1 className="text-xl md:text-2xl font-bold text-center">Cart Totals</h1>

              <div className="space-y-2">
                {/* Subtotal */}
                <div className="flex justify-between py-2 border-b">
                  <span className="text-sm md:text-lg font-medium">Subtotal</span>
                  <span className="text-sm md:text-lg font-medium">Rs. 250,000.00</span>
                </div>

                {/* Total with Golden Color */}
                <div className="flex justify-between py-2 border-b">
                  <span className="text-lg md:text-xl font-semibold">Total</span>
                  <span className="text-lg md:text-xl font-semibold text-yellow-500">
                    Rs. 250,000.00
                  </span>
                </div>
              </div>

              <Link href="/check">
                <button className="w-full py-2 bg-transparent border border-black rounded-md text-black text-sm md:text-lg hover:bg-black hover:text-white transition mt-4">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: Benefits */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              {
                title: 'Free Delivery',
                desc: 'For all orders over $50, consectetur adipim scing elit.',
              },
              {
                title: '90 Days Return',
                desc: 'If the product has an issue, consectetur adipim scing elit.',
              },
              {
                title: 'Secure Payments',
                desc: '100% secure payments, consectetur adipim scing elit.',
              },
            ].map(({ title, desc }, index) => (
              <div key={index}>
                <h2 className="text-lg md:text-3xl font-bold">{title}</h2>
                <p className="text-sm md:text-lg text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
