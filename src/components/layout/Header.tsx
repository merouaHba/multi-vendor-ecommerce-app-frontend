// import { useState } from "react";
// import {
//   Search,
//   ShoppingCart,
//   Heart,
//   Menu,
//   ChevronDown,
//   User,
//   TrendingUp,
//   Clock,
//   Tag,
//   Store,
// } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";

// // SearchDialog component from your code
// const SearchDialog = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [recentSearches] = useState([
//     { text: "Wireless Headphones", count: "2.5k products" },
//     { text: "Summer Dresses", count: "1.8k products" },
//     { text: "Smart Watch", count: "3.2k products" },
//     { text: "Running Shoes", count: "1.5k products" },
//   ]);

//   const trendingSearches = [
//     { text: "Mechanical Keyboard", count: "+250% searches" },
//     { text: "Sustainable Fashion", count: "+180% searches" },
//     { text: "Smart Home Devices", count: "+150% searches" },
//     { text: "Yoga Equipment", count: "+120% searches" },
//   ];

//   const popularCategories = [
//     { name: "Electronics", icon: <Tag className="h-4 w-4" /> },
//     { name: "Fashion", icon: <Tag className="h-4 w-4" /> },
//     { name: "Home & Garden", icon: <Tag className="h-4 w-4" /> },
//     { name: "Beauty", icon: <Tag className="h-4 w-4" /> },
//   ];

//   const featuredStores = [
//     { name: "TechHub", products: "5.2k products" },
//     { name: "Fashion Nova", products: "3.8k products" },
//     { name: "Home Essentials", products: "2.9k products" },
//     { name: "Beauty Box", products: "1.7k products" },
//   ];

//   const quickLinks = [
//     "Best Sellers",
//     "New Arrivals",
//     "Special Offers",
//     "Free Shipping",
//     "Same Day Delivery",
//   ];

//   return (
//     <div className="space-y-6 -mt-4 -mx-4 px-6 py-4">
//       <div className="relative">
//         <div className="relative">
//           <Input
//             autoFocus
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search products, brands, and categories..."
//             className="w-full pl-12 pr-4 py-6 text-lg border-2 focus:border-indigo-600"
//           />
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
//         </div>
//         <div className="flex gap-2 mt-2 overflow-x-auto pb-2 scrollbar-hide">
//           {quickLinks.map((link) => (
//             <Badge
//               key={link}
//               variant="secondary"
//               className="px-3 py-1 cursor-pointer hover:bg-gray-200 whitespace-nowrap"
//             >
//               {link}
//             </Badge>
//           ))}
//         </div>
//       </div>

//       {!searchQuery ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="space-y-6">
//             <div>
//               <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-3">
//                 <TrendingUp className="h-4 w-4" />
//                 <span>Trending Searches</span>
//               </div>
//               <div className="space-y-3">
//                 {trendingSearches.map((search) => (
//                   <button
//                     key={search.text}
//                     className="flex items-center justify-between w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg group"
//                   >
//                     <span className="text-gray-700 group-hover:text-indigo-600">
//                       {search.text}
//                     </span>
//                     <span className="text-sm text-green-600">
//                       {search.count}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-3">
//                 <Clock className="h-4 w-4" />
//                 <span>Recent Searches</span>
//               </div>
//               <div className="space-y-3">
//                 {recentSearches.map((search) => (
//                   <button
//                     key={search.text}
//                     className="flex items-center justify-between w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg group"
//                   >
//                     <span className="text-gray-700 group-hover:text-indigo-600">
//                       {search.text}
//                     </span>
//                     <span className="text-sm text-gray-400">
//                       {search.count}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div>
//               <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-3">
//                 <Tag className="h-4 w-4" />
//                 <span>Popular Categories</span>
//               </div>
//               <div className="grid grid-cols-2 gap-2">
//                 {popularCategories.map((category) => (
//                   <Button
//                     key={category.name}
//                     variant="outline"
//                     className="justify-start gap-2 h-12"
//                   >
//                     {category.icon}
//                     {category.name}
//                   </Button>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-3">
//                 <Store className="h-4 w-4" />
//                 <span>Featured Stores</span>
//               </div>
//               <div className="space-y-3">
//                 {featuredStores.map((store) => (
//                   <button
//                     key={store.name}
//                     className="flex items-center justify-between w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg group"
//                   >
//                     <span className="text-gray-700 group-hover:text-indigo-600">
//                       {store.name}
//                     </span>
//                     <span className="text-sm text-gray-400">
//                       {store.products}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           <div>
//             <h3 className="text-sm font-medium text-gray-500 mb-3">Products</h3>
//             <div className="space-y-4">
//               {[1, 2, 3].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
//                 >
//                   <div className="w-16 h-16 bg-gray-100 rounded-lg animate-pulse" />
//                   <div className="flex-1 space-y-2">
//                     <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
//                     <div className="h-4 bg-gray-100 rounded w-1/2 animate-pulse" />
//                   </div>
//                   <div className="h-4 bg-gray-100 rounded w-20 animate-pulse" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-sm font-medium text-gray-500 mb-3">
//               Categories
//             </h3>
//             <div className="grid grid-cols-2 gap-2">
//               {[1, 2, 3, 4].map((item) => (
//                 <div
//                   key={item}
//                   className="h-12 bg-gray-100 rounded-lg animate-pulse"
//                 />
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-sm font-medium text-gray-500 mb-3">Stores</h3>
//             <div className="grid grid-cols-2 gap-2">
//               {[1, 2].map((item) => (
//                 <div
//                   key={item}
//                   className="h-12 bg-gray-100 rounded-lg animate-pulse"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Main Header Component
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const categories = [
//     "Electronics",
//     "Fashion",
//     "Home & Garden",
//     "Beauty",
//     "Sports",
//     "Books",
//     "Toys",
//     "Automotive",
//   ];

//   return (
//     <header className="border-b">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Mobile Menu */}
//           <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="md:hidden">
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="w-80">
//               <nav className="space-y-4">
//                 {categories.map((category) => (
//                   <a
//                     key={category}
//                     href="#"
//                     className="block px-2 py-1 text-lg hover:text-indigo-600"
//                   >
//                     {category}
//                   </a>
//                 ))}
//               </nav>
//             </SheetContent>
//           </Sheet>

//           {/* Logo */}
//           <a href="/" className="text-xl font-bold">
//             Store
//           </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-6">
//             {categories.slice(0, 5).map((category) => (
//               <DropdownMenu key={category}>
//                 <DropdownMenuTrigger className="flex items-center gap-1 hover:text-indigo-600">
//                   {category}
//                   <ChevronDown className="h-4 w-4" />
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem>All {category}</DropdownMenuItem>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem>Featured</DropdownMenuItem>
//                   <DropdownMenuItem>New Arrivals</DropdownMenuItem>
//                   <DropdownMenuItem>Best Sellers</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             ))}
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center gap-4">
//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Search className="h-5 w-5" />
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="sm:max-w-[800px]">
//                 <SearchDialog />
//               </DialogContent>
//             </Dialog>

//             <Button variant="ghost" size="icon">
//               <Heart className="h-5 w-5" />
//             </Button>

//             <Button variant="ghost" size="icon">
//               <ShoppingCart className="h-5 w-5" />
//             </Button>

//             <Button variant="ghost" size="icon">
//               <User className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };







import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  // X,
  Mail,
  Phone,
  ChevronDown,
  Heart,
  //   MapPin,
  // Facebook,
  // Twitter,
  // Instagram,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const categories = ["Electronics", "Fashion", "Home", "Beauty", "Sports"];
 const [isSearchOpen, setIsSearchOpen] = useState(false);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [searchQuery, setSearchQuery] = useState("");

 // Sample search suggestions
 const searchSuggestions = [
   { type: "category", name: "Electronics" },
   { type: "product", name: "Wireless Headphones" },
   { type: "vendor", name: "TechZone" },
   { type: "product", name: "Smart Watch" },
 ];

 // Navigation links
 const navLinks = [
   { name: "Home", href: "#" },
   { name: "Shop", href: "#", subMenu: true },
   { name: "Brands", href: "#" },
   { name: "Deals", href: "#" },
   { name: "New Arrivals", href: "#" },
   { name: "Contact", href: "#" },
 ];



  return (
    <>
      <header className="bg-indigo-900 text-white  ">
        {/* Top Bar */}
        {/* <div className=""> */}
        <div className="container mx-auto px-4 border-b border-indigo-800 py-2 ">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+1 234 567 890</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Mail size={14} />
                <span>support@multimart.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-blue-200">
                Track Order
              </a>
              <a href="#" className="hover:text-blue-200">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        {/* <div className=" shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
        {/* <div className="text-2xl font-bold text-blue-600">MultiMart</div> */}

        {/* Search Bar */}
        {/* <div className="hidden md:flex flex-1 max-w-xl mx-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-4 pr-10 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <button className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-600">
                  <Search size={20} />
                </button>
              </div>
            </div> */}

        {/* Right Icons */}
        {/* <div className="flex items-center gap-6">
              <button className="hidden md:flex items-center gap-2 hover:text-blue-600">
                <User size={24} />
                <span className="text-sm">Account</span>
              </button>

              <button className="relative hover:text-blue-600">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div> */}

        {/* Categories */}
        {/* <nav className="hidden md:block border-t">
            <ul className="flex gap-8 py-4">
              {categories.map((category) => (
                <li key={category}>
                  <a href="#" className="hover:text-blue-600 font-medium">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div> */}
        {/* </div> */}

        {/* Mobile Menu */}
        {/* {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-2 border-2 border-gray-200 rounded-lg"
              />
            </div>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category}>
                  <a href="#" className="block py-2 hover:text-blue-600">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )} */}

        {/* Main Header */}
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center gap-8 md:w-1/5">
            <h1 className="text-2xl font-bold ">MultiMart</h1>

            {/* Desktop Navigation */}
            {/* <nav className="hidden lg:flex items-center gap-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group">
                    <a
                      href={link.href}
                      className="flex items-center gap-1 hover:text-indigo-200 transition-colors"
                    >
                      {link.name}
                      {link.subMenu && <ChevronDown size={16} />}
                    </a>
                  </div>
                ))}
              </nav> */}
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div
              className="relative cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
            >
              <input
                type="text"
                placeholder="Search products, brands and categories..."
                className="w-full py-2 px-4 rounded-lg text-gray-800 focus:outline-none cursor-pointer"
                readOnly
              />
              <Search
                className="absolute right-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center justify-end gap-6 md:w-1/5">
            <button className="hidden md:flex items-center gap-1 hover:text-indigo-200 transition-colors">
              <Heart size={24} />
              {/* <span className="hidden lg:inline">Wishlist</span> */}
            </button>
            <button className="relative  hover:text-indigo-200 transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
              {/* <span className="hidden lg:inline">Cart</span> */}
            </button>
            <button className=" hover:text-indigo-200 transition-colors">
              <User size={24} />
              {/* <span className="hidden lg:inline">Account</span> */}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`container mx-auto px-4  lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="py-4 border-t border-indigo-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 hover:bg-indigo-800 px-4 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        {/* </div> */}

        {/* NavLinks */}
        <div className="container mx-auto px-4  bg-indigo-800 border-y border-indigo-800 shadow-md sticky top-0 z-50">
          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-6  container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center gap-1 hover:text-indigo-200 transition-colors"
                >
                  {link.name}
                  {link.subMenu && <ChevronDown size={16} />}
                </a>
              </div>
            ))}
          </nav>
        </div>
        {/* <nav className="hidden md:block border-t shadow-md">
          <ul className="flex gap-8 py-4">
            {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <a
                  href={navLink.href}
                  className="hover:text-blue-600 font-medium"
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
        </nav> */}
      </header>
      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-2xl">
          <div className="p-4">
            <div className="flex items-center gap-4 mb-6">
              <input
                type="text"
                placeholder="Search products, brands and categories..."
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {/* <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button> */}
            </div>

            <div className="space-y-4">
              {searchSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <div className="p-2 bg-indigo-100 rounded-full">
                    <Search size={16} className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium">{suggestion.name}</p>
                    <p className="text-sm text-gray-500 capitalize">
                      {suggestion.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;









