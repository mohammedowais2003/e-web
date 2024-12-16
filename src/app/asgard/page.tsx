import Image from 'next/image';
import Link from 'next/link';
import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer';

const AsgaardSofaPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4">
        {/* Breadcrumb Bar */}
        <div className="text-gray-500 text-sm my-4">
          <Link href="/" className="hover:text-black">Home</Link> &gt; 
          <Link href="/shop" className="hover:text-black">Shop</Link> &gt; 
          <span className="font-semibold">Asgaard Sofa</span>
        </div>

        {/* 1st Section with Three Columns */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Column: Four Images */}
          <div className="flex flex-wrap gap-4">
            <Image
              src="/ri.jpg"
              alt="Product 1"
              width={150}
              height={150}
              className="object-contain mx-auto w-full sm:w-32"
            />
            <Image
              src="/hy.jpg"
              alt="Product 2"
              width={150}
              height={150}
              className="object-contain mx-auto w-full sm:w-32"
            />
            <Image
              src="/bb.jpg"
              alt="Product 3"
              width={150}
              height={150}
              className="object-contain mx-auto w-full sm:w-32"
            />
            <Image
              src="/io.jpg"
              alt="Product 4"
              width={150}
              height={150}
              className="object-contain mx-auto w-full sm:w-32"
            />
          </div>

          {/* Second Column: Large Image */}
          <div>
            <Image
              src="/sw.jpg"
              alt="Asgaard Sofa Large Image"
              width={1000}
              height={1000}
              className="object-contain w-full"
            />
          </div>

          {/* Third Column: Product Details */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">Asgaard Sofa</h1>
            <p className="text-lg md:text-xl text-gray-500">Rs. 250,000.00</p>
            <div className="flex items-center">
              {[...Array(4)].map((_, index) => (
                <span key={index} className="text-yellow-500">&#9733;</span>
              ))}
              <span className="text-gray-300">&#9733;</span>
              <span className="ml-2 text-sm text-gray-500">5 Customer Review</span>
            </div>
            <p className="text-sm md:text-base text-gray-600">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.
            </p>
            <div className="flex items-center gap-2">
              <span className="font-bold">Size:</span>
              <button className="px-4 py-2 border rounded">XS</button>
              <button className="px-4 py-2 border rounded">L</button>
              <button className="px-4 py-2 border rounded">XL</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Color:</span>
              <button className="w-8 h-8 rounded-full border bg-blue-500"></button>
              <button className="w-8 h-8 rounded-full border bg-black"></button>
              <button className="w-8 h-8 rounded-full border bg-beige-500"></button>
            </div>
            <div className="flex gap-4">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 border rounded text-center"
              />
              <button className="bg-black text-white px-4 py-2 rounded">
                <Link href="http://localhost:3000/cart">Add to Cart</Link>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <ul>
                <li className="text-sm text-gray-600">SKU: SS001</li>
                <li className="text-sm text-gray-600">Category: Sofa</li>
                <li className="text-sm text-gray-600">Tags: Sofa, Chair, Home, Shop</li>
                <li className="text-sm text-gray-600 flex gap-3">
                  Share: 
                  <Link href="#" className="social-btn facebook">f</Link>
                  <Link href="#" className="social-btn linkedin">in</Link>
                  <Link href="#" className="social-btn twi">t</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2nd Section */}
        <section className="bg-white py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 border rounded text-center">
              <h3 className="text-lg md:text-xl font-bold">Description</h3>
            </div>
            <div className="p-4 border rounded text-center">
              <h3 className="text-lg md:text-xl font-bold">Additional Information</h3>
            </div>
            <div className="p-4 border rounded text-center">
              <h3 className="text-lg md:text-xl font-bold">Reviews [5]</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/liu.png"
              alt="Second Row Image 1"
              width={600}
              height={400}
              className="object-cover w-full rounded"
            />
            <Image
              src="/ji.png"
              alt="Second Row Image 2"
              width={600}
              height={400}
              className="object-cover w-full rounded"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <p className="text-gray-600">
              Embodying the row, wayward spirit of rock n roll, the Kilburn portable active stereo speaker...
            </p>
            <p className="text-gray-600">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering...
            </p>
          </div>
        </section>

        {/* 3rd Section: Related Products */}
        <section className="bg-white py-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold">Related Products</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Related Products */}
            {[
              { src: '/tui.jpg', name: 'Trenton Modular Sofa_3', price: 'Rs. 25,000.00' },
              { src: '/tag.jpg', name: 'Granite Dining Table', price: 'Rs. 25,000.00' },
              { src: '/hb.png', name: 'Outdoor Bar Table', price: 'Rs. 25,000.00' },
              { src: '/zub.jpg', name: 'Plain Console', price: 'Rs. 25,000.00' },
            ].map((product, index) => (
              <div key={index} className="text-center">
                <Image
                  src={product.src}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="object-contain mx-auto"
                />
                <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
                <p className="text-lg font-bold">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="#" className="underline text-sm">View More</Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AsgaardSofaPage;
