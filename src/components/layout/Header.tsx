
// // import { useState } from "react";
// // import {
// //   Search,
// //   ShoppingCart,
// //   User,
// //   Menu,
// //   // X,
// //   Mail,
// //   Phone,
// //   ChevronDown,
// //   Heart,
// //   //   MapPin,
// //   // Facebook,
// //   // Twitter,
// //   // Instagram,
// // } from "lucide-react";
// // import { Dialog, DialogContent } from "@/components/ui/dialog";

// // const Header = () => {
// //   // const categories = ["Electronics", "Fashion", "Home", "Beauty", "Sports"];
// //  const [isSearchOpen, setIsSearchOpen] = useState(false);
// //  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //  const [searchQuery, setSearchQuery] = useState("");

// //  // Sample search suggestions
// //  const searchSuggestions = [
// //    { type: "category", name: "Electronics" },
// //    { type: "product", name: "Wireless Headphones" },
// //    { type: "vendor", name: "TechZone" },
// //    { type: "product", name: "Smart Watch" },
// //  ];

// //  // Navigation links
// //  const navLinks = [
// //    { name: "Home", href: "#" },
// //    { name: "Shop", href: "#", subMenu: true },
// //    { name: "Brands", href: "#" },
// //    { name: "Deals", href: "#" },
// //    { name: "New Arrivals", href: "#" },
// //    { name: "Contact", href: "#" },
// //  ];



// //   return (
// //     <>
// //       {/* Top Bar */}
// //       <div className="bg-indigo-900 text-white">
// //         <div className="container mx-auto px-4  ">
// //           <div className="flex justify-between items-center text-sm py-2  border-b border-indigo-800">
// //             <div className="flex items-center gap-6">
// //               <div className="flex items-center gap-2">
// //                 <Phone size={14} />
// //                 <span>+1 234 567 890</span>
// //               </div>
// //               <div className="hidden md:flex items-center gap-2">
// //                 <Mail size={14} />
// //                 <span>support@multimart.com</span>
// //               </div>
// //             </div>
// //             <div className="flex items-center gap-4">
// //               <a href="#" className="hover:text-blue-200">
// //                 Track Order
// //               </a>
// //               <a href="#" className="hover:text-blue-200">
// //                 Contact
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Main Header */}
// //       <div className="sticky top-0 z-50 bg-indigo-900 text-white">
// //         <div className="container mx-auto px-4 py-6 flex items-center justify-between">
// //           {/* Mobile Menu Button */}
// //           <button
// //             className="lg:hidden"
// //             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //           >
// //             <Menu size={24} />
// //           </button>

// //           <div className="flex items-center gap-8 md:w-1/5">
// //             <h1 className="text-2xl font-bold ">MultiMart</h1>
// //           </div>

// //           {/* Search Bar */}
// //           <div className="flex-1 max-w-2xl mx-8 hidden md:block">
// //             <div
// //               className="relative cursor-pointer"
// //               onClick={() => setIsSearchOpen(true)}
// //             >
// //               <input
// //                 type="text"
// //                 placeholder="Search products, brands and categories..."
// //                 className="w-full py-2 px-4 rounded-lg text-gray-800 focus:outline-none cursor-pointer"
// //                 readOnly
// //               />
// //               <Search
// //                 className="absolute right-3 top-2.5 text-gray-400"
// //                 size={20}
// //               />
// //             </div>
// //           </div>

// //           {/* Navigation Icons */}
// //           <div className="flex items-center justify-end gap-6 md:w-1/5">
// //             <button className="hidden md:flex items-center gap-1 hover:text-indigo-200 transition-colors">
// //               <Heart size={24} />
// //             </button>
// //             <button className="relative  hover:text-indigo-200 transition-colors">
// //               <ShoppingCart size={24} />
// //               <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
// //                 3
// //               </span>
// //             </button>
// //             <button className=" hover:text-indigo-200 transition-colors">
// //               <User size={24} />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         <div
// //           className={`container mx-auto px-4  lg:hidden ${
// //             isMobileMenuOpen ? "block" : "hidden"
// //           }`}
// //         >
// //           <nav className="py-4 border-t border-indigo-800">
// //             {navLinks.map((link) => (
// //               <a
// //                 key={link.name}
// //                 href={link.href}
// //                 className="block py-2 hover:bg-indigo-800 px-4 transition-colors"
// //               >
// //                 {link.name}
// //               </a>
// //             ))}
// //           </nav>
// //         </div>
// //       </div>

// //       <div className=" bg-indigo-900 text-white">
// //         {/* NavLinks */}
// //         <div className="container mx-auto px-4  bg-indigo-800 border-y border-indigo-800 shadow-md ">
// //           {/* Nav Links */}
// //           <nav className="hidden lg:flex items-center gap-6  container mx-auto px-4 py-2">
// //             {navLinks.map((link) => (
// //               <div key={link.name} className="relative group">
// //                 <a
// //                   href={link.href}
// //                   className="flex items-center gap-1 hover:text-indigo-200 transition-colors"
// //                 >
// //                   {link.name}
// //                   {link.subMenu && <ChevronDown size={16} />}
// //                 </a>
// //               </div>
// //             ))}
// //           </nav>
// //         </div>
// //       </div>

// //       {/* Search Dialog */}
// //       <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
// //         <DialogContent className="sm:max-w-2xl">
// //           <div className="p-4">
// //             <div className="flex items-center gap-4 mb-6">
// //               <input
// //                 type="text"
// //                 placeholder="Search products, brands and categories..."
// //                 className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 autoFocus
// //               />
// //               {/* <button
// //                 onClick={() => setIsSearchOpen(false)}
// //                 className="text-gray-500 hover:text-gray-700"
// //               >
// //                 <X size={24} />
// //               </button> */}
// //             </div>

// //             <div className="space-y-4">
// //               {searchSuggestions.map((suggestion, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
// //                 >
// //                   <div className="p-2 bg-indigo-100 rounded-full">
// //                     <Search size={16} className="text-indigo-600" />
// //                   </div>
// //                   <div>
// //                     <p className="font-medium">{suggestion.name}</p>
// //                     <p className="text-sm text-gray-500 capitalize">
// //                       {suggestion.type}
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </DialogContent>
// //       </Dialog>
// //     </>
// //   );
// // };

// // export default Header;










// import {
//   Search,
//   ShoppingCart,
//   Heart,
//   User,
//   Bell,
//   ChevronDown,
//   Menu,
//   X,
//   Store,
//   Package,
//   LogIn,
//   UserPlus,
//   MapPin,
// } from "lucide-react";
// import { useState, useEffect } from "react";



// // function GetUserLocation() {
// //   const [position, setPosition] = useState(null);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const handleGeolocation = () => {
// //       navigator.geolocation.getCurrentPosition(
// //         (pos) => {
// //           setPosition({
// //             latitude: pos.coords.latitude,
// //             longitude: pos.coords.longitude,
// //           });
// //         },
// //         (err) => {
// //           setError(err.message);
// //         }
// //       );
// //     };

// //     handleGeolocation();
// //   }, []);

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   if (!position) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <p>Latitude: {position.latitude}</p>
// //       <p>Longitude: {position.longitude}</p>
// //     </div>
// //   );
// // }

// // export default GetUserLocation;
// type Location = {
//     latitude: number;
//     longitude: number
//   }




// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
//   const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
// //  const [position, setPosition] = useState<Location | null>(null);
//  const [city, setCity] = useState(null);
//  const [country, setCountry] = useState(null);
//  const [error, setError] = useState("");
// console.log(error)
//  useEffect(() => {
//    const handleGeolocation = () => {
//      navigator.geolocation.getCurrentPosition(
//        (pos) => {
//         //  setPosition({
//         //    latitude: pos.coords.latitude,
//         //    longitude: pos.coords.longitude,
//         //  });
//          fetchLocationData({
//            latitude: pos.coords.latitude,
//            longitude: pos.coords.longitude,
//          });
//        },
//        (err) => {
//          setError(err.message);
//        }
//      );
//    };

//    const fetchLocationData = async ({ latitude, longitude }: Location) => {
//      try {
//        const response = await fetch(
//          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
//        );
//        const data = await response.json();
//        setCity(data.address.city || data.address.town || data.address.village);
//        setCountry(data.address.country);
//      } catch (error: { message: string } | unknown) {
//        if (error instanceof Error) {
//          setError(error.message);
//        } else {
//          setError("An unknown error occurred");
//        }
//      }
//    };

//    handleGeolocation();
//  }, []);

//   const categories = [
//     {
//       name: "Electronics",
//       subcategories: ["Phones", "Laptops", "Accessories"],
//     },
//     { name: "Fashion", subcategories: ["Men", "Women", "Kids"] },
//     { name: "Home & Living", subcategories: ["Furniture", "Decor", "Kitchen"] },
//     { name: "Beauty", subcategories: ["Skincare", "Makeup", "Haircare"] },
//     { name: "Sports", subcategories: ["Equipment", "Clothing", "Shoes"] },
//   ];

//   return (
//     <header className="bg-white shadow-md">
//       {/* Top Bar */}
//       <div className="bg-gray-100 py-2">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between text-sm">
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-1">
//                 <MapPin size={16} className="text-gray-600" />
//                 <span>Deliver to: {country}, {city}</span>
//               </div>
//               <div className="hidden md:block">|</div>
//               <a href="#" className="hidden md:block hover:text-blue-600">
//                 Track Order
//               </a>
//               <a href="#" className="hidden md:block hover:text-blue-600">
//                 Customer Support
//               </a>
//             </div>
//             <div className="flex items-center space-x-4">
//               <a href="#" className="hover:text-blue-600">
//                 Sell on Marketplace
//               </a>
//               <a href="#" className="hidden md:block hover:text-blue-600">
//                 Download App
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="border-b">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo & Mobile Menu Button */}
//             <div className="flex items-center">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="md:hidden p-2 hover:bg-gray-100 rounded-md"
//               >
//                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//               <a href="/" className="flex items-center">
//                 <span className="text-2xl font-bold text-blue-600">
//                   MarketPlace
//                 </span>
//               </a>
//             </div>

//             {/* Search Bar */}
//             <div className="hidden md:flex flex-1 max-w-2xl mx-6">
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="Search products, brands, and vendors..."
//                   className="w-full pl-4 pr-10 py-2 border rounded-l-md focus:outline-none focus:border-blue-500"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <button className="absolute right-0 top-0 bottom-0 px-3">
//                   <Search className="text-gray-400" size={20} />
//                 </button>
//               </div>
//               <button className="px-6 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
//                 Search
//               </button>
//             </div>

//             {/* Right Navigation */}
//             <div className="flex items-center space-x-4">
//               <a
//                 href="#"
//                 className="hidden md:flex items-center space-x-1 hover:text-blue-600"
//               >
//                 <Store size={20} />
//                 <span>Vendors</span>
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center space-x-1 hover:text-blue-600"
//               >
//                 <Heart size={20} />
//                 <span className="hidden md:inline">Wishlist</span>
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center space-x-1 hover:text-blue-600"
//               >
//                 <ShoppingCart size={20} />
//                 <span className="hidden md:inline">Cart</span>
//                 <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
//                   3
//                 </span>
//               </a>
//               <div className="relative">
//                 <button
//                   onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
//                   className="flex items-center space-x-1 hover:text-blue-600"
//                 >
//                   <User size={20} />
//                   <span className="hidden md:inline">Account</span>
//                   <ChevronDown size={16} />
//                 </button>

//                 {isUserDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <User size={16} className="mr-2" /> My Account
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <Package size={16} className="mr-2" /> My Orders
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <Bell size={16} className="mr-2" /> Notifications
//                     </a>
//                     <hr className="my-1" />
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <LogIn size={16} className="mr-2" /> Sign In
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <UserPlus size={16} className="mr-2" /> Register
//                     </a>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Categories Navigation */}
//       <div className="border-b">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center h-12">
//             <div className="relative group">
//               <button
//                 onClick={() =>
//                   setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
//                 }
//                 className="flex items-center space-x-2 h-12 px-4 hover:bg-gray-100"
//               >
//                 <Menu size={20} />
//                 <span>All Categories</span>
//                 <ChevronDown size={16} />
//               </button>

//               {isCategoryDropdownOpen && (
//                 <div className="absolute left-0 w-64 bg-white shadow-lg z-50">
//                   {categories.map((category, index) => (
//                     <div key={index} className="group/item relative">
//                       <a
//                         href="#"
//                         className="flex items-center justify-between px-4 py-3 hover:bg-gray-100"
//                       >
//                         <span>{category.name}</span>
//                         <ChevronDown size={16} />
//                       </a>
//                       <div className="hidden group-hover/item:block absolute left-full top-0 w-48 bg-white shadow-lg">
//                         {category.subcategories.map((sub, subIndex) => (
//                           <a
//                             key={subIndex}
//                             href="#"
//                             className="block px-4 py-2 hover:bg-gray-100"
//                           >
//                             {sub}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Desktop Category Links */}
//             <nav className="hidden md:flex space-x-6 ml-6">
//               {categories.slice(0, 4).map((category, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="flex items-center h-12 hover:text-blue-600"
//                 >
//                   {category.name}
//                 </a>
//               ))}
//               <a
//                 href="#"
//                 className="flex items-center h-12 hover:text-blue-600"
//               >
//                 More <ChevronDown size={16} className="ml-1" />
//               </a>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-4 py-3 space-y-1">
//             <input
//               type="text"
//               placeholder="Search products, brands, and vendors..."
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {categories.map((category, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//               >
//                 {category.name}
//               </a>
//             ))}
//           </div>
//           <div className="border-t border-gray-200 pt-4 pb-3">
//             <div className="px-4 space-y-1">
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//               >
//                 Sign In
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//               >
//                 Register
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//               >
//                 Track Order
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//               >
//                 Customer Support
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//               >
//                 Sell on Marketplace
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// components/common/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Heart, 
  User, 
  Menu, 
  X, 
  Search, 
  ChevronDown,
  Bell
} from 'lucide-react';
// import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  // const { isAuthenticated, user, logout } = useAuth();
  const isAuthenticated = true;

  const categories = [
    { name: 'Electronics', subcategories: ['Phones', 'Laptops', 'Accessories'] },
    { name: 'Fashion', subcategories: ['Men', 'Women', 'Kids'] },
    { name: 'Home & Living', subcategories: ['Furniture', 'Decor', 'Kitchen'] },
    { name: 'Beauty', subcategories: ['Skincare', 'Makeup', 'Fragrances'] },
    { name: 'Books', subcategories: ['Fiction', 'Non-Fiction', 'Academic'] },
    { name: 'Sports', subcategories: ['Equipment', 'Clothing', 'Accessories'] }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Free shipping on orders over $50</span>
          <div className="space-x-4">
            <Link to="/seller/login" className="hover:text-indigo-600">
              Sell on Marketplace
            </Link>
            <Link to="/help" className="hover:text-indigo-600">
              Customer Service
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-indigo-600">
                Marketplace
              </span>
            </Link>

            {/* Search Bar */}
            <form 
              onSubmit={handleSearch}
              className="hidden md:flex flex-1 max-w-2xl mx-6"
            >
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>

            {/* Navigation Icons */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                to="/wishlist" 
                className="flex items-center hover:text-indigo-600 relative"
              >
                <Heart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                  3
                </span>
              </Link>
              
              <Link 
                to="/cart" 
                className="flex items-center hover:text-indigo-600 relative"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                  2
                </span>
              </Link>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-1 hover:text-indigo-600"
                >
                  <User className="h-6 w-6" />
                  <ChevronDown className="h-4 w-4" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {isAuthenticated ? (
                      <>
                        <Link
                          to="/account"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          My Account
                        </Link>
                        <Link
                          to="/orders"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          My Orders
                        </Link>
                        <Link
                          to="/settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Settings
                        </Link>
                        <button
                          // onClick={logout}
                          // onClick={logout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Categories Menu */}
          <nav className="hidden md:flex items-center space-x-8 mt-4">
            {categories.map((category) => (
              <div key={category.name} className="relative group">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                  <span>{category.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory}
                      to={`/products/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-2">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          
          <nav className="px-4 py-2">
            {categories.map((category) => (
              <div key={category.name}>
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-600"
                  onClick={() => {/* Toggle subcategories */}}
                >
                  <span>{category.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="pl-4">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory}
                      to={`/products/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`}
                      className="block py-2 text-sm text-gray-600"
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="border-t my-2"></div>
            
            <Link to="/wishlist" className="flex items-center justify-between py-2 text-gray-600">
              <span>Wishlist</span>
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
            </Link>
            
            <Link to="/cart" className="flex items-center justify-between py-2 text-gray-600">
              <span>Cart</span>
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/account" className="block py-2 text-gray-600">My Account</Link>
                <Link to="/orders" className="block py-2 text-gray-600">My Orders</Link>
                <Link to="/settings" className="block py-2 text-gray-600">Settings</Link>
                <button
                  // onClick={logout}
                  className="block w-full text-left py-2 text-gray-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2 text-gray-600">Login</Link>
                <Link to="/register" className="block py-2 text-gray-600">Register</Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
export default Header;






// import React, { useState } from "react";
// import {
//   Search,
//   ShoppingCart,
//   Heart,
//   User,
//   Bell,
//   ChevronDown,
//   Menu,
//   X,
//   Store,
//   Package,
//   LogIn,
//   UserPlus,
//   MapPin,
// } from "lucide-react";
// import {
//   Card,
//   // CardHeader, CardTitle, CardContent
// } from "@/components/ui/card";

// const Header = () => {
//   // State management for mobile menu and user dropdown
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

//   // Sample category data
//   const categories = [
//     {
//       name: "Electronics",
//       subcategories: ["Phones", "Laptops", "Accessories"],
//     },
//     { name: "Fashion", subcategories: ["Men", "Women", "Kids"] },
//     { name: "Home & Living", subcategories: ["Furniture", "Decor", "Kitchen"] },
//     { name: "Beauty", subcategories: ["Skincare", "Makeup", "Haircare"] },
//     { name: "Sports", subcategories: ["Equipment", "Clothing", "Shoes"] },
//   ];

//   return (
//     <Card className="shadow-md">
//       {/* Top Bar */}
//       <div className="bg-gray-100 py-2">
//         <div className="flex items-center justify-between text-sm px-4 max-w-7xl mx-auto">
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-1">
//               <MapPin size={16} className="text-gray-600" />
//               <span>Deliver to: New York, NY</span>
//             </div>
//             <a href="#" className="hover:text-blue-600">
//               Track Order
//             </a>
//             <a href="#" className="hover:text-blue-600">
//               Customer Support
//             </a>
//           </div>
//           <div className="flex items-center space-x-4">
//             <a href="#" className="hover:text-blue-600">
//               Sell on Marketplace
//             </a>
//             <a href="#" className="hover:text-blue-600">
//               Download App
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div>
//         <div className="flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">
//           {/* Logo & Mobile Menu Button */}
//           <div className="flex items-center">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden p-2 hover:bg-gray-100 rounded-md"
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//             <a href="/" className="flex items-center">
//               <span className="text-2xl font-bold text-blue-600">
//                 MarketPlace
//               </span>
//             </a>
//           </div>

//           {/* Search Bar */}
//           <div className="hidden md:flex flex-1 max-w-2xl mx-6">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search products, brands, and vendors..."
//                 className="w-full pl-4 pr-10 py-2 border rounded-l-md focus:outline-none focus:border-blue-500"
//               />
//               <button className="absolute right-0 top-0 bottom-0 px-3">
//                 <Search className="text-gray-400" size={20} />
//               </button>
//             </div>
//             <button className="px-6 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
//               Search
//             </button>
//           </div>

//           {/* Right Navigation */}
//           <div className="flex items-center space-x-4">
//             <a
//               href="#"
//               className="hidden md:flex items-center space-x-1 hover:text-blue-600"
//             >
//               <Store size={20} />
//               <span>Vendors</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center space-x-1 hover:text-blue-600"
//             >
//               <Heart size={20} />
//               <span className="hidden md:inline">Wishlist</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center space-x-1 hover:text-blue-600"
//             >
//               <ShoppingCart size={20} />
//               <span className="hidden md:inline">Cart</span>
//               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
//                 3
//               </span>
//             </a>
//             <div className="relative">
//               <button
//                 onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
//                 className="flex items-center space-x-1 hover:text-blue-600"
//               >
//                 <User size={20} />
//                 <span className="hidden md:inline">Account</span>
//                 <ChevronDown size={16} />
//               </button>

//               {isUserDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//                   <a
//                     href="#"
//                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <User size={16} className="mr-2" /> My Account
//                   </a>
//                   <a
//                     href="#"
//                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <Package size={16} className="mr-2" /> My Orders
//                   </a>
//                   <a
//                     href="#"
//                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <Bell size={16} className="mr-2" /> Notifications
//                   </a>
//                   <hr className="my-1" />
//                   <a
//                     href="#"
//                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <LogIn size={16} className="mr-2" /> Sign In
//                   </a>
//                   <a
//                     href="#"
//                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     <UserPlus size={16} className="mr-2" /> Register
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-4 py-3 space-y-1">
//             <input
//               type="text"
//               placeholder="Search products, brands, and vendors..."
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {categories.map((category, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//               >
//                 {category.name}
//               </a>
//             ))}
//           </div>
//           <div className="border-t border-gray-200 pt-4 pb-3">
//             <div className="px-4 space-y-1">
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//               >
//                 Sign In
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//               >
//                 Register
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//               >
//                 Track Order
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//               >
//                 Customer Support
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//               >
//                 Sell on Marketplace
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </Card>
//   );
// };

// export default Header;