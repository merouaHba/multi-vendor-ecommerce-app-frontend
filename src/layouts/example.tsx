// RootLayout.jsx - Main layout wrapper
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
};

// CustomerLayout.jsx - Layout for customer-facing pages
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { ShoppingCart, Heart, User, Menu, X, Search } from "lucide-react";
import { useState } from "react";

const CustomerLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Living",
    "Beauty",
    "Books",
    "Sports",
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Free shipping on orders over $50</span>
          <div className="space-x-4">
            <Link to="/seller/login" className="hover:text-indigo-600">
              Sell on Marketplace
            </Link>
            <Link to="/contact" className="hover:text-indigo-600">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              Marketplace
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Navigation Icons */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/wishlist"
                className="flex items-center hover:text-indigo-600"
              >
                <Heart className="h-6 w-6" />
              </Link>
              <Link
                to="/cart"
                className="flex items-center hover:text-indigo-600"
              >
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <Link
                to="/account"
                className="flex items-center hover:text-indigo-600"
              >
                <User className="h-6 w-6" />
              </Link>
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
          <nav className="hidden md:flex items-center space-x-6 mt-4">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/products/${category.toLowerCase()}`}
                className="text-gray-600 hover:text-indigo-600"
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <nav className="px-4 py-2">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/products/${category.toLowerCase()}`}
                className="block py-2 text-gray-600"
              >
                {category}
              </Link>
            ))}
            <div className="border-t my-2"></div>
            <Link to="/wishlist" className="block py-2 text-gray-600">
              Wishlist
            </Link>
            <Link to="/cart" className="block py-2 text-gray-600">
              Cart
            </Link>
            <Link to="/account" className="block py-2 text-gray-600">
              Account
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300 text-sm">
                Your trusted marketplace for quality products from verified
                sellers.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/seller/register"
                    className="text-gray-300 hover:text-white"
                  >
                    Become a Seller
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Policies</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-300 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund-policy"
                    className="text-gray-300 hover:text-white"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping-policy"
                    className="text-gray-300 hover:text-white"
                  >
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-gray-900 rounded"
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-300">
            <p>© 2024 Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// SellerLayout.jsx - Layout for seller dashboard
import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  BarChart,
  CreditCard,
  UserCircle,
  Settings,
  LogOut,
  ChevronDown,
  Bell,
} from "lucide-react";

const SellerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    {
      path: "/seller/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Dashboard",
    },
    {
      path: "/seller/products",
      icon: <Package className="h-5 w-5" />,
      label: "Products",
    },
    {
      path: "/seller/orders",
      icon: <ShoppingBag className="h-5 w-5" />,
      label: "Orders",
    },
    {
      path: "/seller/analytics",
      icon: <BarChart className="h-5 w-5" />,
      label: "Analytics",
    },
    {
      path: "/seller/payments",
      icon: <CreditCard className="h-5 w-5" />,
      label: "Payments",
    },
    {
      path: "/seller/profile",
      icon: <UserCircle className="h-5 w-5" />,
      label: "Profile",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg transition-width duration-300 ease-in-out`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-4 border-b">
            <Link
              to="/seller/dashboard"
              className="flex items-center space-x-2"
            >
              <span className="text-xl font-bold text-indigo-600">
                {isSidebarOpen ? "Seller Center" : "SC"}
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.icon}
                    {isSidebarOpen && <span>{item.label}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t">
            <button className="w-full flex items-center space-x-2 p-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <LogOut className="h-5 w-5" />
              {isSidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="flex items-center space-x-4">
              <button className="relative text-gray-600 hover:text-gray-900">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="/api/placeholder/32/32"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">
                  John Doe
                </span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

// AuthLayout.jsx - Layout for authentication pages
import React from "react";
import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Simple Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Marketplace
          </Link>
        </div>
      </header>

      {/* Auth Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-4 text-center text-sm text-gray-600">
        <div className="space-x-4">
          <Link to="/privacy" className="hover:text-indigo-600">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-indigo-600">
            Terms & Conditions
          </Link>
          <Link to="/contact" className="hover:text-indigo-600">
            Contact Us
          </Link>
        </div>
      </footer>
    </div>
  );
};

export { RootLayout, CustomerLayout, SellerLayout, AuthLayout };
