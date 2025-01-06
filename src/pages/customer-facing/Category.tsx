import React, { useState } from "react";
import {
  Filter,
  Grid,
  List,
  Star,
  ChevronDown,
  Truck,
  ArrowUpDown,
  ChevronRight,
} from "lucide-react";

const CategoryPage = () => {
  const [viewMode, setViewMode] = useState("grid");

  // Sample category data
  const categoryInfo = {
    name: "Electronics",
    description: "Explore our wide range of electronics from top vendors",
    subcategories: [
      "Smartphones",
      "Laptops",
      "Audio",
      "Cameras",
      "Accessories",
    ],
    totalProducts: 1250,
  };

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Latest Smartphone Pro",
      price: 899.99,
      rating: 4.5,
      reviews: 328,
      vendor: "TechStore",
      image: "/api/placeholder/200/200",
      freeShipping: true,
      discount: 10,
      stockStatus: "In Stock",
    },
    {
      id: 2,
      name: 'Ultra Laptop 15"',
      price: 1299.99,
      rating: 4.8,
      reviews: 156,
      vendor: "ElectroHub",
      image: "/api/placeholder/200/200",
      freeShipping: true,
      discount: null,
      stockStatus: "Few Left",
    },
    // More products would be added here
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <span>Home</span>
        <ChevronRight size={16} />
        <span className="font-semibold text-gray-900">{categoryInfo.name}</span>
      </div>

      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{categoryInfo.name}</h1>
        <p className="text-gray-600 mb-4">{categoryInfo.description}</p>
        <div className="flex flex-wrap gap-2">
          {categoryInfo.subcategories.map((sub) => (
            <button
              key={sub}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Category Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Summer Electronics Sale</h2>
        <p className="mb-4">Up to 40% off on selected items</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
          Shop Now
        </button>
      </div>

      {/* Filters and Sort Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg">
            <Filter size={20} />
            <span>Filters</span>
            <ChevronDown size={16} />
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${
                viewMode === "grid" ? "bg-blue-100" : "bg-white"
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${
                viewMode === "list" ? "bg-blue-100" : "bg-white"
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span>Sort by:</span>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg">
            <span>Featured</span>
            <ArrowUpDown size={16} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div className="hidden md:block w-64 space-y-6">
          {/* Category Tree */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2">
              {categoryInfo.subcategories.map((sub) => (
                <li
                  key={sub}
                  className="flex items-center justify-between hover:bg-gray-50 p-2 rounded"
                >
                  <span>{sub}</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Price Range</h3>
            <input type="range" className="w-full" />
            <div className="flex justify-between mt-2">
              <span>$0</span>
              <span>$2000</span>
            </div>
          </div>

          {/* Brand Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Brands</h3>
            <div className="space-y-2">
              {["Samsung", "Apple", "Sony", "LG", "Dell"].map((brand) => (
                <label key={brand} className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Availability</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>In Stock</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>On Sale</span>
              </label>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div
            className={`grid ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-3 gap-6"
                : "grid-cols-1 gap-4"
            }`}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className={`border rounded-lg p-4 ${
                  viewMode === "list" ? "flex gap-6" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={
                      viewMode === "grid"
                        ? "w-full h-48 object-cover rounded-lg mb-4"
                        : "w-48 h-48 object-cover rounded-lg"
                    }
                  />
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                      {product.discount}% OFF
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">by {product.vendor}</p>
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
                  <p className="text-xl font-bold mb-2">${product.price}</p>
                  <div className="space-y-2">
                    {product.freeShipping && (
                      <div className="flex items-center gap-1 text-green-600 text-sm">
                        <Truck size={16} />
                        <span>Free Shipping</span>
                      </div>
                    )}
                    <div
                      className={`text-sm ${
                        product.stockStatus === "In Stock"
                          ? "text-green-600"
                          : "text-orange-500"
                      }`}
                    >
                      {product.stockStatus}
                    </div>
                  </div>
                  {viewMode === "list" && (
                    <button className="mt-4 w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
