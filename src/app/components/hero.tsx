import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      {/* First Section: Hero Section */}
       {/* Hero Section */}
       <section className="bg-amber-100 flex flex-col md:flex-row items-center justify-center h-screen md:h-[100vh] px-4 md:px-10">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Rocket Single <br /> Seater
          </h1>
          {/* Shop Now Button for Desktop */}
          <a
            href="http://localhost:3000/shop"
            className="hidden md:inline-block text-black underline text-sm hover:text-gray-700 transition mt-4"
          >
            Shop Now
          </a>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center mt-6 md:mt-0">
          <Image
            src="/h.png.png"
            alt="Rocket Single Seater"
            width={500}
            height={500}
            className="object-contain"
          />
          {/* Shop Now Button for Mobile */}
          <a
            href="http://localhost:3000/shop"
            className="inline-block md:hidden text-black underline text-sm hover:text-gray-700 transition mt-4"
          >
            Shop Now
          </a>
        </div>
      </section>
    

      {/* Second Section: Top Pick */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full md:w-1/2">
              <Image
                src="/zz.png"
                alt="Side Table"
                width={400}
                height={400}
                className="object-contain mx-auto"
              />
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
                Modern Side Table
              </h3>
              <a href="#" className="underline text-sm text-center block">
                View More
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/bh.png"
                alt="Elegant Side Table"
                width={400}
                height={400}
                className="object-contain mx-auto"
              />
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
                Elegant Side Table
              </h3>
              <a href="#" className="underline text-sm text-center block">
                View More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Product Grid */}
      <section className="bg-white text-black py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Top Picks For You
          </h2>
          <p className="text-gray-500 text-center text-sm md:text-lg mb-8">
            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Image
                src="/Group 18.png"
                alt="Trenton modular sofa"
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm md:text-base font-semibold mt-2">
                Trenton Modular Sofa
              </h3>
              <p className="text-sm md:text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/tag.jpg"
                alt="Granite Dining Table"
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm md:text-base font-semibold mt-2">
                Granite Dining Table
              </h3>
              <p className="text-sm md:text-lg font-bold">Rs. 30,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/group 16.png"
                alt="Outdoor Bar Table"
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm md:text-base font-semibold mt-2">
                Outdoor Bar Table
              </h3>
              <p className="text-sm md:text-lg font-bold">Rs. 20,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/zub.jpg"
                alt="Plain Console"
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm md:text-base font-semibold mt-2">
                Plain Console
              </h3>
              <p className="text-sm md:text-lg font-bold">Rs. 15,000.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section: Asgaard Sofa */}
      <section className="bg-amber-100 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="w-full md:w-1/2">
            <Image
              src="/Asgaard sofa 1.png"
              alt="Asgaard Sofa"
              width={500}
              height={500}
              className="object-contain mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">New Arrivals</h3>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Asgaard Sofa</h2>
            <a
              href="http://localhost:3000/asgard"
              className="inline-block border-2 border-black text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* Fifth Section: Blog Posts */}
      <section className="bg-white text-black py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl mb-6 text-center">Our Blog</h2>
          <p className="text-gray-500 text-center text-sm md:text-lg mb-8">
            Find a bright idea to suit your taste with our great selection.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Image
                src="/Rectangle 13.png"
                alt="Millennial Design Blog"
                width={300}
                height={300}
                className="object-contain mx-auto"
              />
              <p className="text-lg">Going All-In with Millennial Design</p>
              <a
                href="#"
                className="underline font-bold text-lg md:text-xl"
              >
                Read More
              </a>
            </div>
            <div className="text-center">
              <Image
                src="/Rectangle 14.png"
                alt="Sustainability in Furniture"
                width={300}
                height={300}
                className="object-contain mx-auto"
              />
              <p className="text-lg">Sustainability in Furniture Design</p>
              <a
                href="#"
                className="underline font-bold text-lg md:text-xl"
              >
                Read More
              </a>
            </div>
            <div className="text-center">
              <Image
                src="/Rectangle 15.png"
                alt="Maximizing Space in Homes"
                width={300}
                height={300}
                className="object-contain mx-auto"
              />
              <p className="text-lg">Maximizing Space in Compact Homes</p>
              <a
                href="#"
                className="underline font-bold text-lg md:text-xl"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/blog" className="underline text-sm md:text-base font-semibold">
              View All Posts
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="relative w-full h-[450px]">
        <Image
          src="/jio.jpg"
          alt="Instagram Background"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Our Instagram</h1>
          <p className="opacity-80 max-w-lg text-base md:text-lg mt-2">
            Follow our store on Instagram
          </p>
          <button className="mt-5 px-8 py-3 rounded-full shadow-lg bg-white text-black font-semibold hover:bg-gray-200 transition">
            Follow Us
          </button>
        </div>
      </section>
    </>
  );
};
