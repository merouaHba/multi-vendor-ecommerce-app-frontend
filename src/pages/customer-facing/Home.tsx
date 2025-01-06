// import {
//   Heart,
//   ChevronRight,
//   Star,
// } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// const Home = () => {
 

//   // Sample categories and products (same as before)
//   const categories = [
//     { name: "Electronics", count: "1.2k items" },
//     { name: "Fashion", count: "2.3k items" },
//     { name: "Home & Living", count: "890 items" },
//     { name: "Beauty", count: "1.5k items" },
//   ];

//   const products = [
//     {
//       name: "Wireless Headphones",
//       price: "$129.99",
//       rating: 4.5,
//       vendor: "TechZone",
//     },
//     { name: "Smart Watch", price: "$199.99", rating: 4.8, vendor: "GadgetPro" },
//     {
//       name: "Laptop Backpack",
//       price: "$59.99",
//       rating: 4.3,
//       vendor: "BagMaster",
//     },
//     { name: "Skincare Set", price: "$89.99", rating: 4.7, vendor: "BeautyHub" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       {/* bg-gradient-to-r from-indigo-900 to-indigo-700 */}
//       <section className=" bg-white py-16 ">
//         <div className="container mx-auto px-4 min-h-[64vh]">
//           <div className="max-w-2xl">
//             <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-indigo-700  text-4xl md:text-5xl font-bold mb-6">
//               Discover Amazing Products from Top Vendors
//             </h2>
//             <p className="text-lg md:text-xl mb-8">
//               Shop with confidence from thousands of verified sellers
//             </p>
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
//               Start Shopping <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* Featured Categories */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((category) => (
//               <Card
//                 key={category.name}
//                 className="hover:shadow-lg transition-all hover:-translate-y-1"
//               >
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">
//                     {category.name}
//                   </h3>
//                   <p className="text-gray-600">{category.count}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Featured Products */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8">Trending Products</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <Card
//                 key={product.name}
//                 className="hover:shadow-lg transition-all hover:-translate-y-1"
//               >
//                 <CardContent className="p-4">
//                   <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="font-semibold">{product.name}</h3>
//                     <button className="text-gray-400 hover:text-red-500 transition-colors">
//                       <Heart size={20} />
//                     </button>
//                   </div>
//                   <p className="text-sm text-gray-600 mb-2">
//                     by {product.vendor}
//                   </p>
//                   <div className="flex items-center gap-2 mb-3">
//                     <Star className="text-yellow-400 fill-current" size={16} />
//                     <span className="text-sm text-gray-600">
//                       {product.rating}
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="font-bold text-lg">{product.price}</span>
//                     <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
//                       Add to Cart
//                     </button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
//       {/* <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-lg font-bold mb-4">About MultiMart</h3>
//               <p className="text-gray-400">Your trusted destination for quality products from verified vendors worldwide.</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
//                 <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
//                 <li className="hover:text-white transition-colors cursor-pointer">Become a Seller</li>
//                 <li className="hover:text-white transition-colors cursor-pointer">Shipping Policy</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Customer Service</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
//                 <li className="hover:text-white transition-colors cursor-pointer">Returns</li>
//                 <li className="hover:text-white transition-colors cursor-pointer">Track Order</li>
//                 <li className="hover:text-white transition-colors cursor-pointer">Support</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Newsletter</h3>
//               <p className="text-gray-400 mb-4">Subscribe to get special offers and updates</p>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 rounded-lg text-gray-800 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg w-full transition-colors">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </footer> */}
//     </div>
//   );
// };

// export default Home;


import React from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  ChevronRight,
  Star,
  Truck,
  Timer,
  Shield,
  ArrowRight,
} from "lucide-react";
import ProductCard from "@/components/products/card/Card";

const Homepage = () => {
  // Sample featured categories
  const categories = [
    {
      name: "Electronics",
      image: "/api/placeholder/120/120",
      count: "1.2k products",
    },
    {
      name: "Fashion",
      image: "/api/placeholder/120/120",
      count: "2.5k products",
    },
    {
      name: "Home & Living",
      image: "/api/placeholder/120/120",
      count: "1.8k products",
    },
    {
      name: "Beauty",
      image: "/api/placeholder/120/120",
      count: "950 products",
    },
  ];

  // Sample trending products
  const trendingProducts = [
    {
      id: 1,
      name: "Wireless Earbuds Pro",
      price: 129.99,
      rating: 4.8,
      reviews: 2456,
      image: "/api/placeholder/200/200",
      vendor: "TechStore",
      discount: 20,
    },
    // More products...
  ];

  // Sample featured vendors
  const featuredVendors = [
    {
      name: "TechStore",
      rating: 4.9,
      products: 250,
      image: "/api/placeholder/80/80",
      featured: ["Phones", "Laptops", "Accessories"],
    },
    // More vendors...
  ];

  return (
    <div className="min-h-screen">

      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16"> */}
            {/* Logo */}
            {/* <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold">Store</h1>
              <button className="flex items-center gap-2 text-gray-600">
              <Menu size={20} />
              Categories
              </button>
            </div> */}

            {/* Search */}
            {/* <div className="flex-1 max-w-2xl px-8">
              <div className="relative">
              <input
              type="text"
              placeholder="Search products, brands and categories..."
              className="w-full px-4 py-2 border rounded-lg"
              />
              <Search
              className="absolute right-3 top-2.5 text-gray-400"
              size={20}
              />
              </div>
            </div> */}

            {/* Actions */}
            {/* <div className="flex items-center gap-6">
              <button className="flex items-center gap-1">
                <Heart size={20} />
                <span className="text-sm">Wishlist</span>
              </button>
              <button className="flex items-center gap-1">
                <ShoppingBag size={20} />
                <span className="text-sm">Cart</span>
              </button>
              <button className="flex items-center gap-1">
                <User size={20} />
                <span className="text-sm">Account</span>
              </button>
            </div> */}
          {/* </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
            <div>
              <h2 className="text-4xl font-bold mb-4">Summer Sale Special</h2>
              <p className="text-lg mb-6">
                Get up to 70% off on selected items
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Shop Now
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="/api/placeholder/500/300"
                alt="Summer sale"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                desc: "On orders over $50",
              },
              { icon: Timer, title: "Quick Delivery", desc: "Within 24 hours" },
              {
                icon: Shield,
                title: "Secure Payment",
                desc: "100% secure checkout",
              },
              { icon: Star, title: "Best Quality", desc: "Certified products" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm"
              >
                <feature.icon size={24} className="text-blue-600" />
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Categories</h2>
            <button className="flex items-center gap-2 text-blue-600">
              View All <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 text-white">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm text-gray-200">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deals of the Day */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">Deals of the Day</h2>
              <p className="text-gray-600">Ends in: 10:45:37</p>
            </div>
            <button className="flex items-center gap-2 text-blue-600">
              View All <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array(4)
              .fill(trendingProducts[0])
              .map((product, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-4">
                  <div className="relative mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    {product.discount && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                        {product.discount}% OFF
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    by {product.vendor}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>
                  <p className="text-lg font-bold">${product.price}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Vendors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array(3)
              .fill(featuredVendors[0])
              .map((vendor, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={vendor.image}
                      alt={vendor.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{vendor.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        <span>{vendor.rating}</span>
                        <span className="text-gray-600">
                          • {vendor.products} products
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {vendor.featured.map((category, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest updates on new products and upcoming sales
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                Your trusted marketplace for quality products from verified
                vendors worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Vendors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Deals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">
                Customer Service
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {/* Social media icons would go here */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2024 Your Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;