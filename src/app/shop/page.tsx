import Link from 'next/link';
import Image from 'next/image';
import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer';

const Shop = () => {
  return (
    <div>
      <NavBar />

      {/* First Section */}
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: 'url(/po.png)' }}>
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Shop</h1>
          <nav className="mt-4 text-sm text-gray-600">
            <ol className="inline-flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Shop</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Grid Section */}
      <section className="bg-white py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {[
        { src: '/tui.jpg', title: 'Trenton Modular Sofa_3', price: 'Rs. 25,000.00' },
        { src: '/tag.jpg', title: 'Granite Dining Table', price: 'Rs. 25,000.00' },
        { src: '/Group 16.png', title: 'Outdoor Bar Table', price: 'Rs. 25,000.00' },
        { src: '/zub.jpg', title: 'Plain Console with Mirror', price: 'Rs. 25,000.00' },
        { src: '/gb.png', title: 'Grain Coffee Table', price: 'Rs. 15,000.00' },
        { src: '/lok.jpg', title: 'Kant Coffee Table', price: 'Rs. 225,000.00' },
        { src: '/del.jpg', title: 'Round Coffee Table', price: 'Rs. 251,000.00' },
        { src: '/uit.jpg', title: 'Reclaimed Teak Table', price: 'Rs. 25,200.00' },
        { src: '/opi.jpg', title: 'Plain Console', price: 'Rs. 258,200.00' },
        { src: '/pu.jpg', title: 'Reclaimed Teak Side Board', price: 'Rs. 20,000.00' },
        { src: '/oy.jpg', title: 'SJP_0825', price: 'Rs. 200,000.00' },
        { src: '/ki.jpg', title: 'Bella Chair and Table', price: 'Rs. 100,000.00' },
        { src: '/sto.jpg', title: 'Granite Square Side Table', price: 'Rs. 58,800.00' },
        { src: '/sw.jpg', title: 'Asgaard Sofa', price: 'Rs. 250,000.00' },
        { src: '/thr.jpg', title: 'Maya Sofa Three Seater', price: 'Rs. 115,000.00' },
        { src: '/en.jpg', title: 'Outdoor Sofa Set', price: 'Rs. 244,000.00' },
      ].map((product, index) => (
        <div key={index} className="text-center border rounded-md p-4">
          <Image
            src={product.src}
            alt={product.title}
            width={150}
            height={150}
            className="object-cover mx-auto max-w-full h-auto"
          />
          <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
          <p className="text-lg font-bold">{product.price}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Pagination */}
      <section className="py-10">
        <div className="flex justify-center gap-2">
          {['1', '2', '3', 'Next'].map((page, index) => (
            <Link key={index} href={`/shop?page=${page.toLowerCase()}`}>
              <div className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-black hover:text-white">
                {page}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {[
            { title: 'Free Delivery', description: 'For all orders over $50' },
            { title: '90 Days Return', description: 'If the product has an issue' },
            { title: 'Secure Payments', description: '100% secure payments' },
          ].map((info, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-black">{info.title}</h2>
              <p className="text-sm text-gray-700">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
