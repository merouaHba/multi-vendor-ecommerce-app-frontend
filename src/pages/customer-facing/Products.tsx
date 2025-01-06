import React, { useState } from "react";
import {
  Filter,
  Grid,
  List,
  Star,
  ChevronDown,
  Truck,
  ArrowUpDown,
  Heart,
  ShoppingCart,
  Tag,
  Check,
} from "lucide-react";

const ProductListingPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedFilters, setSelectedFilters] = useState(["In Stock"]);

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Premium Leather Wallet",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.5,
      reviews: 128,
      vendor: "LeatherCraft",
      image: "/api/placeholder/200/200",
      freeShipping: true,
      discount: 28,
      stockStatus: "In Stock",
      badges: ["Best Seller", "Premium"],
      colors: ["Brown", "Black", "Tan"],
      soldCount: 1500,
    },
    {
      id: 2,
      name: "Handmade Ceramic Mug",
      price: 24.99,
      rating: 4.8,
      reviews: 256,
      vendor: "ArtisanCrafts",
      image: "/api/placeholder/200/200",
      freeShipping: true,
      stockStatus: "Few Left",
      badges: ["Handmade"],
      colors: ["White", "Blue", "Green"],
      soldCount: 890,
    },
    // More products would be added here
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Active Filters */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {selectedFilters.map((filter) => (
            <span
              key={filter}
              className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {filter}
              <button className="hover:text-blue-600">×</button>
            </span>
          ))}
          {selectedFilters.length > 0 && (
            <button className="text-sm text-gray-600 hover:text-gray-900">
              Clear all filters
            </button>
          )}
        </div>
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

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            Showing 1-24 of 248 products
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg">
            <span>Sort by: Featured</span>
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
              {["LeatherCraft", "ArtisanCrafts", "HandmadeGoods"].map(
                (vendor) => (
                  <label key={vendor} className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>{vendor}</span>
                    <span className="text-gray-500 text-sm">(45)</span>
                  </label>
                )
              )}
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

          {/* Shipping Options */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Shipping</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Free Shipping</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Same Day Delivery</span>
              </label>
            </div>
          </div>

          {/* Product Status */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Product Status</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked />
                <span>In Stock</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>On Sale</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>New Arrivals</span>
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
                className={`border rounded-lg p-4 hover:shadow-lg transition-shadow ${
                  viewMode === "list" ? "flex gap-6" : ""
                }`}
              >
                <div className="relative group">
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
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart
                      size={20}
                      className="text-gray-600 hover:text-red-500"
                    />
                  </button>
                </div>

                <div className="flex-1">
                  <div className="flex gap-2 mb-2">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

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

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xl font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    {product.freeShipping && (
                      <div className="flex items-center gap-1 text-green-600 text-sm">
                        <Truck size={16} />
                        <span>Free Shipping</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Tag size={16} />
                      <span>{product.soldCount}+ sold</span>
                    </div>
                    <div
                      className={`flex items-center gap-1 text-sm ${
                        product.stockStatus === "In Stock"
                          ? "text-green-600"
                          : "text-orange-500"
                      }`}
                    >
                      <Check size={16} />
                      <span>{product.stockStatus}</span>
                    </div>
                  </div>

                  {product.colors && (
                    <div className="flex gap-2 mb-4">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-blue-500"
                          style={{ backgroundColor: color.toLowerCase() }}
                        />
                      ))}
                    </div>
                  )}

                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
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

export default ProductListingPage;
