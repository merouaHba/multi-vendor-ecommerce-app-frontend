import React from "react";
import {
  ShoppingBag,
  Tv,
  Shirt,
  Home,
  Car,
  Baby,
  Book,
  Laptop,
  Pizza,
  Dumbbell,
} from "lucide-react";

const CategoriesPage = () => {
  const categories = [
    {
      name: "Electronics",
      icon: <Tv className="w-8 h-8" />,
      subcategories: ["Smartphones", "Laptops", "Audio", "Gaming", "Cameras"],
      featured: ["Latest Phones", "Gaming Laptops", "Wireless Earbuds"],
      image: "/api/placeholder/400/300",
    },
    {
      name: "Fashion",
      icon: <Shirt className="w-8 h-8" />,
      subcategories: [
        "Men's Wear",
        "Women's Wear",
        "Kids' Fashion",
        "Footwear",
        "Accessories",
      ],
      featured: ["Summer Collection", "Designer Bags", "Sport Shoes"],
      image: "/api/placeholder/400/300",
    },
    {
      name: "Home & Living",
      icon: <Home className="w-8 h-8" />,
      subcategories: ["Furniture", "Decor", "Kitchen", "Bedding", "Lighting"],
      featured: ["Living Room Sets", "Kitchen Essentials", "Smart Home"],
      image: "/api/placeholder/400/300",
    },
    {
      name: "Automotive",
      icon: <Car className="w-8 h-8" />,
      subcategories: [
        "Car Parts",
        "Accessories",
        "Tools",
        "Car Care",
        "Electronics",
      ],
      featured: ["New Arrivals", "Best Sellers", "Deals"],
      image: "/api/placeholder/400/300",
    },
    {
      name: "Baby & Kids",
      icon: <Baby className="w-8 h-8" />,
      subcategories: [
        "Toys",
        "Baby Care",
        "Kids Clothing",
        "School Supplies",
        "Baby Gear",
      ],
      featured: ["Educational Toys", "Baby Essentials", "Kids Fashion"],
      image: "/api/placeholder/400/300",
    },
    {
      name: "Books & Media",
      icon: <Book className="w-8 h-8" />,
      subcategories: [
        "Fiction",
        "Non-Fiction",
        "Educational",
        "Comics",
        "Magazines",
      ],
      featured: ["Bestsellers", "New Releases", "Children's Books"],
      image: "/api/placeholder/400/300",
    },
    {
      name: "Computers",
      icon: <Laptop className="w-8 h-8" />,
      subcategories: [
        "Desktops",
        "Laptops",
        "Components",
        "Accessories",
        "Software",
      ],
      featured: ["Gaming PCs", "Business Laptops", "Computer Parts"],
      image: "/api/placeholder/400/300",
    },
    {
      name: "Food & Grocery",
      icon: <Pizza className="w-8 h-8" />,
      subcategories: ["Fresh Food", "Pantry", "Beverages", "Snacks", "Organic"],
      featured: ["Fresh Produce", "Healthy Snacks", "International Foods"],
      image: "/api/placeholder/400/300",
    },
    {
      name: "Sports & Fitness",
      icon: <Dumbbell className="w-8 h-8" />,
      subcategories: [
        "Exercise Equipment",
        "Sports Gear",
        "Outdoor",
        "Supplements",
        "Clothing",
      ],
      featured: ["Home Gym", "Yoga Essentials", "Protein Supplements"],
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
        <p className="text-gray-600">
          Explore our wide range of products across various categories
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Category Header */}
            <div className="relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 mb-2 mx-auto w-fit">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                </div>
              </div>
            </div>

            {/* Category Content */}
            <div className="p-6">
              {/* Subcategories */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  SUBCATEGORIES
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.subcategories.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="text-sm bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </div>

              {/* Featured Collections */}
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  FEATURED
                </h3>
                <ul className="space-y-2">
                  {category.featured.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        {item} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category Footer */}
            <div className="border-t p-4">
              <a
                href="#"
                className="text-center block text-blue-600 hover:text-blue-800 font-semibold"
              >
                View All {category.name} →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Can't find what you're looking for?
        </h2>
        <p className="text-gray-600 mb-4">
          Our customer service team is here to help you find the perfect
          product.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default CategoriesPage;
