import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer';

const Blog = () => {
  return (
    <div>
      <NavBar />
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-cover bg-center bg-blog-bg">
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: 'url(/po.png)' }}>
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-10 h-10  flex justify-center items-center rounded-full">
              <span className="text-white font-bold text-lg"></span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Blog</h1>
          <nav className="mt-4 text-sm text-gray-600">
            <ol className="list-reset inline-flex items-center space-x-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Blog</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
      </section>

      {/* Blog Content */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Main Blog Posts (65% on larger screens) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Blog Post */}
              {[
                {
                  src: '/gt.jpg',
                  title: 'Going all-in with millennial design',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros pellentesque...',
                  link: '/',
                },
                {
                  src: '/wr.jpg',
                  title: 'Exploring new ways of decorating',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros pellentesque...',
                  link: '/',
                },
                {
                  src: '/nj.jpg',
                  title: 'Handmade pieces that took time to make',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros pellentesque...',
                  link: '/',
                },
              ].map((post, index) => (
                <div key={index} className="space-y-4">
                  <Image
                    src={post.src}
                    alt={post.title}
                    width={700}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <h1 className="text-xl md:text-3xl font-bold">{post.title}</h1>
                  <p className="text-gray-600 text-sm md:text-base">{post.desc}</p>
                  <Link href={post.link} className="text-red-500 hover:underline">
                    Read More
                  </Link>
                </div>
              ))}
            </div>

            {/* Sidebar: Recent Posts (35% on larger screens) */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-lg md:text-2xl font-bold">Recent Posts</h1>
              {[
                { src: '/ham.jpg', title: 'Going all-in with millennial design', date: '03 Aug 2022' },
                { src: '/ma.jpg', title: 'Exploring new ways of decorating', date: '03 Aug 2022' },
                { src: '/sy.jpg', title: 'Handmade pieces that took time to make', date: '03 Aug 2022' },
                { src: '/ed.jpg', title: 'Modern home in Milan', date: '03 Aug 2022' },
                { src: '/we.jpg', title: 'Colorful office redesign', date: '03 Aug 2022' },
              ].map((recent, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Image
                    src={recent.src}
                    alt={recent.title}
                    width={80}
                    height={80}
                    className="object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-sm md:text-lg font-bold">{recent.title}</h2>
                    <p className="text-xs md:text-sm text-gray-600">{recent.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              { title: 'Free Delivery', desc: 'For all orders over $50, consectetur adipiscing elit.' },
              { title: '90 Days Return', desc: 'If the product has an issue, consectetur adipiscing elit.' },
              { title: 'Secure Payments', desc: '100% secure payments, consectetur adipiscing elit.' },
            ].map((benefit, index) => (
              <div key={index}>
                <h2 className="text-xl md:text-3xl font-bold">{benefit.title}</h2>
                <p className="text-sm md:text-lg text-gray-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
