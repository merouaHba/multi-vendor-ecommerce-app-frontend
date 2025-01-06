import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  Share2,
  ShoppingCart,
  Trash2,
  Store,
  CircleDollarSign,
} from "lucide-react";

const WishlistPage = () => {
  const [sortBy, setSortBy] = useState("date-added");

  // Sample wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      vendor: "TechStore",
      price: 99.99,
      originalPrice: 129.99,
      image: "/api/placeholder/200/200",
      inStock: true,
      dateAdded: "2024-10-25",
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      vendor: "ElectroHub",
      price: 299.99,
      originalPrice: 349.99,
      image: "/api/placeholder/200/200",
      inStock: true,
      dateAdded: "2024-10-24",
    },
    {
      id: 3,
      name: "Laptop Stand",
      vendor: "OfficePro",
      price: 45.99,
      originalPrice: 45.99,
      image: "/api/placeholder/200/200",
      inStock: false,
      dateAdded: "2024-10-23",
    },
  ]);

  const handleRemoveItem = (itemId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
  };

  const calculateDiscount = (price, originalPrice) => {
    if (originalPrice > price) {
      return Math.round(((originalPrice - price) / originalPrice) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Heart className="w-8 h-8 text-red-500" />
              My Wishlist
              <Badge variant="secondary">{wishlistItems.length} items</Badge>
            </h1>
            <p className="text-gray-500 mt-2">
              Save items you love and come back to them later
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-added">Date Added</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share List
            </Button>
          </div>
        </div>

        {/* Wishlist Items Grid */}
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group">
                <CardContent className="p-4">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    {calculateDiscount(item.price, item.originalPrice) > 0 && (
                      <Badge className="absolute top-2 left-2 bg-red-500">
                        {calculateDiscount(item.price, item.originalPrice)}% OFF
                      </Badge>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                          <Store className="w-4 h-4" />
                          {item.vendor}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <CircleDollarSign className="w-4 h-4 text-green-600" />
                          <span className="font-bold">${item.price}</span>
                        </div>
                        {item.originalPrice > item.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {!item.inStock && (
                      <Badge variant="secondary" className="mt-2">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button className="flex-1" disabled={!item.inStock}>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <Heart className="w-16 h-16 text-gray-300" />
                <h2 className="text-xl font-semibold">
                  Your wishlist is empty
                </h2>
                <p className="text-gray-500">
                  Start adding items you love to your wishlist
                </p>
                <Button>Continue Shopping</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
