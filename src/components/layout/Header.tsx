

import { useState } from "react";
import { Link } from "react-router-dom";
import {
   Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  Store,
  User,
  Menu,
  X,
  Bell,
  ChevronRight,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useHeader from "@/hooks/useHeader";


// Interface for subcategories containing items
interface Subcategory {
  name: string;
  items: string[];
}

// Main category interface
interface Category {
  name: string;
  subcategories: Subcategory[];
}

// Type for the entire categories array
type Categories = Category[];
// Categories data structure
const categories:Categories = [
  {
    name: "Electronics",
    subcategories: [
      {
        name: "Computers",
        items: ["Laptops", "Desktops", "Tablets", "Accessories"],
      },
      {
        name: "Phones & Tablets",
        items: ["Smartphones", "Tablets", "Accessories", "Wearables"],
      },
      {
        name: "TV & Audio",
        items: ["TVs", "Home Theater", "Headphones", "Speakers"],
      },
      {
        name: "Gaming",
        items: ["Consoles", "Games", "Accessories", "PC Gaming"],
      },
    ],
  },
  {
    name: "Fashion",
    subcategories: [
      {
        name: "Men's Clothing",
        items: ["T-Shirts", "Shirts", "Pants", "Suits", "Activewear"],
      },
      {
        name: "Women's Clothing",
        items: ["Dresses", "Tops", "Pants", "Skirts", "Activewear"],
      },
      {
        name: "Accessories",
        items: ["Watches", "Bags", "Jewelry", "Sunglasses"],
      },
      {
        name: "Shoes",
        items: ["Men", "Women", "Kids", "Sports"],
      },
    ],
  },
  {
    name: "Home & Garden",
    subcategories: [
      {
        name: "Furniture",
        items: ["Living Room", "Bedroom", "Dining Room", "Office"],
      },
      {
        name: "Home Decor",
        items: ["Wall Art", "Lighting", "Rugs", "Mirrors"],
      },
      {
        name: "Garden",
        items: ["Plants", "Tools", "Outdoor Furniture", "BBQ"],
      },
      {
        name: "Kitchen",
        items: ["Appliances", "Cookware", "Utensils", "Storage"],
      },
    ],
  },
  // ... rest of the header component remains the same until the categories section
];

const CategoryDropdown = ({ category }:{category:Category}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button className="text-gray-600 hover:text-indigo-600 transition-colors whitespace-nowrap text-sm font-medium flex items-center space-x-1 py-3">
        <span>{category.name}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-60">
      {category.subcategories.map((subcategory:Subcategory) => (
        <DropdownMenuSub key={subcategory.name}>
          <DropdownMenuSubTrigger className="flex items-center justify-between">
            {subcategory.name}
            <ChevronRight className="h-4 w-4" />
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {subcategory.items.map((item) => (
              <DropdownMenuItem key={item}>
                <Link
                  to={`/category/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}/${item.toLowerCase()}`}
                  className="w-full"
                >
                  {item}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

const MobileCategoryAccordion = ({ category }:{category:Category}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubcategory, setOpenSubcategory] = useState("");

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 px-3"
      >
        <span className="font-medium">{category.name}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="pl-4 pb-2">
          {category.subcategories.map((subcategory:Subcategory) => (
            <div key={subcategory.name}>
              <button
                onClick={() =>
                  setOpenSubcategory(
                    openSubcategory === subcategory.name ? "" : subcategory.name
                  )
                }
                className="flex items-center justify-between w-full py-2 px-3 text-sm"
              >
                <span>{subcategory.name}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openSubcategory === subcategory.name ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSubcategory === subcategory.name && (
                <div className="pl-4">
                  {subcategory.items.map((item) => (
                    <Link
                      key={item}
                      to={`/category/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}/${item.toLowerCase()}`}
                      className="block py-1 px-3 text-sm text-gray-600 hover:text-indigo-600"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const Header = () => {
  const {
  isAuthenticated,
    user,
    logout,
    isMenuOpen,
    setIsMenuOpen,
    searchQuery,
    setSearchQuery,
  } = useHeader()

  const AuthenticatedDropdown = () => (
    <DropdownMenuContent align="end" className="w-56">
      <div className="px-4 py-3 border-b">
        <p className="text-sm font-medium">Welcome, {user?.name}!</p>
        <p className="text-xs text-gray-500">{user?.email}</p>
      </div>
      <DropdownMenuItem>
        <Link to="/dashboard/profile" className="w-full">
          Profile
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link to="/dashboard/orders" className="w-full">
          Orders
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link to="/dashboard/wishlist" className="w-full">
          Wishlist
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={logout} className="text-red-600">
        <LogOut className="h-4 w-4 mr-2" />
        Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  );

  const UnauthenticatedDropdown = () => (
    <DropdownMenuContent align="end" className="w-48">
      <DropdownMenuItem>
        <Link to="/login" className="w-full">
          Login
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link to="/register" className="w-full">
          Register
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );

  return (
    <header className="bg-white fixed w-full top-0 z-50">
      {/* Top promotional bar */}
      <div className="bg-indigo-600 text-white text-center text-sm py-2">
        <p>Free shipping on orders over $50! Shop now</p>
      </div>

      {/* Main header */}
      <div className="border-b shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <Store className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-indigo-600 hidden sm:block">
                MultiMart
              </span>
            </Link>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-6">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search products, brands and categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 h-10 rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Become a Seller Link - Show only if authenticated */}
              {isAuthenticated && (
                <Link
                  to="/seller/register"
                  className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors flex items-center space-x-1"
                >
                  <Store className="h-4 w-4" />
                  <span>Become a Seller</span>
                </Link>
              )}

              {/* User Auth Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-1"
                  >
                    <User className="h-4 w-4" />
                    <span>{isAuthenticated ? user?.name : "Account"}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                {isAuthenticated ? (
                  <AuthenticatedDropdown />
                ) : (
                  <UnauthenticatedDropdown />
                )}
              </DropdownMenu>

              {/* Show these items only if authenticated */}
              {isAuthenticated && (
                <>
                  {/* Notifications */}
                  <Button variant="ghost" className="relative p-2">
                    <Bell className="h-5 w-5" />
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-red-500">
                      3
                    </Badge>
                  </Button>

                  {/* Favorites */}
                  <Link to="/favorites" className="relative">
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-1"
                    >
                      <Heart className="h-5 w-5" />
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-indigo-500">
                        2
                      </Badge>
                    </Button>
                  </Link>
                </>
              )}

              {/* Cart - Always visible */}
              <Link to="/cart">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 relative"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="hidden sm:block">Cart</span>
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-indigo-500">
                    4
                  </Badge>
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-6 w-6" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-indigo-500">
                  4
                </Badge>
              </Link>
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="hidden md:block border-t bg-gray-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {categories.map((category) => (
                <CategoryDropdown key={category.name} category={category} />
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-b shadow-xl">
          <div className="px-4 pt-2 pb-3 space-y-3">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 h-10 rounded-full border-2"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            {/* Mobile Navigation Links */}
            {isAuthenticated ? (
              <>
                <div className="px-3 py-2">
                  <p className="text-sm font-medium">Welcome, {user?.name}!</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
                >
                  Profile
                </Link>
                <Link
                  to="/orders"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
                >
                  Orders
                </Link>
                <Link
                  to="/seller/register"
                  className="block px-3 py-2 text-base font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Become a Seller
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:text-red-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
                >
                  Register
                </Link>
              </>
            )}
            <div className="py-2">
              <span className="px-3 text-sm font-semibold text-gray-500">
                Categories
              </span>
              <div className="mt-2">
                {categories.map((category) => (
                  <MobileCategoryAccordion
                    key={category.name}
                    category={category}
                  />
                ))}
              </div>
            </div>
            {/* Show these only if authenticated */}
            {isAuthenticated && (
              <>
                <Link
                  to="/favorites"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
                >
                  Favorites (2)
                </Link>
                <Link
                  to="/notifications"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
                >
                  Notifications (3)
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");


//   return (
//     <header className="bg-white fixed w-full top-0 z-50">
//       {/* Top promotional bar */}
//       <div className="bg-indigo-600 text-white text-center text-sm py-2">
//         <p>Free shipping on orders over $50! Shop now</p>
//       </div>

//       {/* Main header */}
//       <div className="border-b shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
//               <Store className="h-8 w-8 text-indigo-600" />
//               <span className="text-xl font-bold text-indigo-600 hidden sm:block">
//                 MultiMart
//               </span>
//             </Link>

//             {/* Search Bar - Hidden on mobile */}
//             <div className="hidden md:flex flex-1 max-w-2xl mx-6">
//               <div className="relative w-full">
//                 <Input
//                   type="text"
//                   placeholder="Search products, brands and categories..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-4 h-10 rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
//                 />
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-6">
//               {/* Become a Seller Link */}
//               <Link
//                 to="/seller/register"
//                 className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors flex items-center space-x-1"
//               >
//                 <Store className="h-4 w-4" />
//                 <span>Become a Seller</span>
//               </Link>

//               {/* User Auth */}
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     className="flex items-center space-x-1"
//                   >
//                     <User className="h-4 w-4" />
//                     <span>Account</span>
//                     <ChevronDown className="h-4 w-4" />
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end" className="w-48">
//                   <div className="px-4 py-3 border-b">
//                     <p className="text-sm font-medium">Welcome!</p>
//                     <p className="text-xs text-gray-500">
//                       Access account & manage orders
//                     </p>
//                   </div>
//                   <DropdownMenuItem>
//                     <Link to="/login" className="w-full">
//                       Login
//                     </Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Link to="/register" className="w-full">
//                       Register
//                     </Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem>
//                     <Link to="/orders" className="w-full">
//                       Orders
//                     </Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Link to="/profile" className="w-full">
//                       Profile
//                     </Link>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>

//               {/* Notifications */}
//               <Button variant="ghost" className="relative p-2">
//                 <Bell className="h-5 w-5" />
//                 <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-red-500">
//                   3
//                 </Badge>
//               </Button>

//               {/* Favorites */}
//               <Link to="/favorites" className="relative">
//                 <Button variant="ghost" className="flex items-center space-x-1">
//                   <Heart className="h-5 w-5" />
//                   <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-indigo-500">
//                     2
//                   </Badge>
//                 </Button>
//               </Link>

//               {/* Cart */}
//               <Link to="/cart">
//                 <Button
//                   variant="ghost"
//                   className="flex items-center space-x-2 relative"
//                 >
//                   <ShoppingCart className="h-5 w-5" />
//                   <span className="hidden sm:block">Cart</span>
//                   <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-indigo-500">
//                     4
//                   </Badge>
//                 </Button>
//               </Link>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden flex items-center space-x-4">
//               <Link to="/cart" className="relative">
//                 <ShoppingCart className="h-6 w-6" />
//                 <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-indigo-500">
//                   4
//                 </Badge>
//               </Link>
//               <Button
//                 variant="ghost"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2"
//               >
//                 {isMenuOpen ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Categories Bar */}
//      <div className="hidden md:block border-t bg-gray-50">
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex space-x-8 overflow-x-auto">
//             {categories.map((category) => (
//               <CategoryDropdown key={category.name} category={category} />
//             ))}
//           </div>
//         </nav>
//       </div>
// </div>
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute w-full bg-white border-b shadow-xl">
//           <div className="px-4 pt-2 pb-3 space-y-3">
//             {/* Mobile Search */}
//             <div className="relative mb-4">
//               <Input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 h-10 rounded-full border-2"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//             </div>

//             {/* Mobile Navigation Links */}
//             <Link
//               to="/seller/register"
//               className="block px-3 py-2 text-base font-medium text-indigo-600 hover:text-indigo-800 border-b"
//             >
//               Become a Seller
//             </Link>
//   <div className="py-2">
//             <span className="px-3 text-sm font-semibold text-gray-500">Categories</span>
//             <div className="mt-2">
//               {categories.map((category) => (
//                 <MobileCategoryAccordion key={category.name} category={category} />
//               ))}
//             </div>
//           </div>

//             <Link
//               to="/login"
//               className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
//             >
//               Register
//             </Link>
//             <Link
//               to="/favorites"
//               className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
//             >
//               Favorites (2)
//             </Link>
//             <Link
//               to="/notifications"
//               className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
//             >
//               Notifications (3)
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

export default Header;
