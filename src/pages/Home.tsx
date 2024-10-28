import {
  Heart,
  ChevronRight,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
 

  // Sample categories and products (same as before)
  const categories = [
    { name: "Electronics", count: "1.2k items" },
    { name: "Fashion", count: "2.3k items" },
    { name: "Home & Living", count: "890 items" },
    { name: "Beauty", count: "1.5k items" },
  ];

  const products = [
    {
      name: "Wireless Headphones",
      price: "$129.99",
      rating: 4.5,
      vendor: "TechZone",
    },
    { name: "Smart Watch", price: "$199.99", rating: 4.8, vendor: "GadgetPro" },
    {
      name: "Laptop Backpack",
      price: "$59.99",
      rating: 4.3,
      vendor: "BagMaster",
    },
    { name: "Skincare Set", price: "$89.99", rating: 4.7, vendor: "BeautyHub" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* bg-gradient-to-r from-indigo-900 to-indigo-700 */}
      <section className=" bg-white py-16 ">
        <div className="container mx-auto px-4 min-h-[64vh]">
          <div className="max-w-2xl">
            <h2 className="text-transparent bg-gradient-to-r from-indigo-900 to-indigo-700 bg-clip-text text-4xl md:text-5xl font-bold mb-6">
              Discover Amazing Products from Top Vendors
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Shop with confidence from thousands of verified sellers
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              Start Shopping <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Trending Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.name}
                className="hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardContent className="p-4">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{product.name}</h3>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Heart size={20} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    by {product.vendor}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{product.price}</span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About MultiMart</h3>
              <p className="text-gray-400">Your trusted destination for quality products from verified vendors worldwide.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Become a Seller</li>
                <li className="hover:text-white transition-colors cursor-pointer">Shipping Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
                <li className="hover:text-white transition-colors cursor-pointer">Returns</li>
                <li className="hover:text-white transition-colors cursor-pointer">Track Order</li>
                <li className="hover:text-white transition-colors cursor-pointer">Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to get special offers and updates</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-gray-800 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg w-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
