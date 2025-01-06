import React, { useState } from "react";
import {
  Filter,
  Grid,
  List,
  Star,
  ChevronDown,
  Truck,
  ArrowUpDown,
} from "lucide-react";

const SearchResultsPage = () => {
  const [viewMode, setViewMode] = useState("grid");

  // Sample search results data
  const results = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      rating: 4.5,
      reviews: 128,
      vendor: "TechStore",
      image: "/api/placeholder/200/200",
      freeShipping: true,
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      price: 199.99,
      rating: 4.8,
      reviews: 256,
      vendor: "ElectroHub",
      image: "/api/placeholder/200/200",
      freeShipping: true,
    },
    // More products would be added here
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Search Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">
          Search Results for "wireless headphones"
        </h1>
        <p className="text-gray-600">Showing 245 results</p>
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
            <span>Best Match</span>
            <ArrowUpDown size={16} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div className="hidden md:block w-64 space-y-6">
          {/* Price Range */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Price Range</h3>
            <input type="range" className="w-full" />
            <div className="flex justify-between mt-2">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>

          {/* Vendor Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Vendors</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>TechStore (45)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>ElectroHub (32)</span>
              </label>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Rating</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center gap-2">
                  <input type="checkbox" />
                  <div className="flex items-center">
                    {[...Array(rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="ml-1">& up</span>
                  </div>
                </label>
              ))}
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
            {results.map((product) => (
              <div
                key={product.id}
                className={`border rounded-lg p-4 ${
                  viewMode === "list" ? "flex gap-6" : ""
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={
                    viewMode === "grid"
                      ? "w-full h-48 object-cover rounded-lg mb-4"
                      : "w-48 h-48 object-cover rounded-lg"
                  }
                />
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
                  {product.freeShipping && (
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <Truck size={16} />
                      <span>Free Shipping</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
