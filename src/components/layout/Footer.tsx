// import React, { useState } from "react";
import {
//   Search,
//   ShoppingCart,
//   User,
//   Menu,
//   X,
//   Mail,
//   Phone,
//   MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const categories = ["Electronics", "Fashion", "Home", "Beauty", "Sports"];

//   return (
//     <div className="w-full">
//       {/* Top Bar */}
//       <div className="bg-blue-600 text-white py-2">
//         <div className="container mx-auto px-4 flex justify-between items-center text-sm">
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <Phone size={14} />
//               <span>+1 234 567 890</span>
//             </div>
//             <div className="hidden md:flex items-center gap-2">
//               <Mail size={14} />
//               <span>support@multimart.com</span>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <a href="#" className="hover:text-blue-200">
//               Track Order
//             </a>
//             <a href="#" className="hover:text-blue-200">
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="bg-white shadow-md">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <div className="text-2xl font-bold text-blue-600">MultiMart</div>

//             {/* Search Bar */}
//             <div className="hidden md:flex flex-1 max-w-xl mx-6">
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   className="w-full pl-4 pr-10 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
//                 />
//                 <button className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-600">
//                   <Search size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Right Icons */}
//             <div className="flex items-center gap-6">
//               <button className="hidden md:flex items-center gap-2 hover:text-blue-600">
//                 <User size={24} />
//                 <span className="text-sm">Account</span>
//               </button>

//               <button className="relative hover:text-blue-600">
//                 <ShoppingCart size={24} />
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   3
//                 </span>
//               </button>

//               <button
//                 className="md:hidden"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>

//           {/* Categories */}
//           <nav className="hidden md:block border-t">
//             <ul className="flex gap-8 py-4">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <a href="#" className="hover:text-blue-600 font-medium">
//                     {category}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t shadow-lg">
//           <div className="container mx-auto px-4 py-4">
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="w-full pl-4 pr-10 py-2 border-2 border-gray-200 rounded-lg"
//               />
//             </div>
//             <ul className="space-y-4">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <a href="#" className="block py-2 hover:text-blue-600">
//                     {category}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">MultiMart</h2>
            <p className="text-gray-400 leading-relaxed">
              Your one-stop destination for all your shopping needs. Quality
              products, trusted sellers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Contact Us",
                "Privacy Policy",
                "Terms of Service",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3">
              {["Help Center", "Returns", "Shipping Info", "Track Order"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers, free giveaways, and updates.
            </p>
            <div className="space-y-3">
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} MultiMart. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <img
                src="/api/placeholder/40/25"
                alt="Payment Method"
                className="h-6"
              />
              <img
                src="/api/placeholder/40/25"
                alt="Payment Method"
                className="h-6"
              />
              <img
                src="/api/placeholder/40/25"
                alt="Payment Method"
                className="h-6"
              />
              <img
                src="/api/placeholder/40/25"
                alt="Payment Method"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// export default function Layout() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow bg-gray-50">
//         {/* Your page content goes here */}
//         <div className="container mx-auto px-4 py-8">
//           <div className="h-96 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400">
//             Page Content
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }
