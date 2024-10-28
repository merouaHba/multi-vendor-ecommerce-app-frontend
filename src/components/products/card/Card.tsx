import { useState } from "react";
import Image from "@/assets/images/network.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Star,
  ShoppingCart,
  Check,
  Store,
  Clock,
  Share2,
  Shield,
  Truck,
  RotateCcw,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductCard = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  //   const [showQuickView, setShowQuickView] = useState(false);
  //   const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [colorVariant, setColorVariant] = useState("black");
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const product = {
    name: "Wireless Noise-Cancelling Headphones",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviews: 128,
    images: [Image, "/api/placeholder/300/300", "/api/placeholder/300/300"],
    vendor: {
      name: "AudioTech Pro",
      rating: 4.8,
      verified: true,
      deliveryTime: "2-3 days",
      returnPolicy: "30-day returns",
    },
    stock: 15,
    discount: 20,
    tags: ["Bestseller", "Free Shipping", "Limited Offer"],
    colors: ["black", "white", "blue"],
    features: ["Active Noise Cancellation", "40h Battery", "Premium Sound"],
    warranty: "2 Year Warranty",
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };

  const colorStyles = {
    black: "bg-gray-900",
    white: "bg-gray-100",
    blue: "bg-blue-500",
  };

  return (
    <TooltipProvider>
      <Card
        className="w-80 group relative transform transition-all duration-300 hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: isHovered
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        }}
      >
        {/* Sale Timer */}
        {/* {product.discount > 0 && (
          <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-xs text-center py-1 z-20">
            Sale ends in: 23:59:59
          </div>
        )} */}

        {/* Image Carousel Section */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="hidden group-hover:flex" />
            <CarouselNext className="hidden group-hover:flex" /> */}

            <div className="absolute inset-0 flex items-center justify-between px-4">
              <CarouselPrevious className="relative top-4 left-0 h-8 w-8 translate-x-0 translate-y-0 bg-white/70 hover:bg-white/90 border-0" />
              <CarouselNext className="relative top-4 right-0 h-8 w-8 translate-x-0 translate-y-0 bg-white/70 hover:bg-white/90 border-0" />
            </div>
          </Carousel>

          {/* Overlay Actions */}
          <div className="absolute top-2 right-2 flex flex-col gap-2 z-20">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <Heart
                className={`w-5 h-5 transition-colors duration-300 ${
                  isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
                }`}
              />
            </button>
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Discount Badge */}
          {product.discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-red-500 animate-pulse shadow-lg">
              -{product.discount}% OFF
            </Badge>
          )}
        </div>

        <CardContent className="p-4">
          {/* Tags Section */}
          <div className="flex gap-2 mb-3 flex-wrap">
            {product.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Product Title and Price */}
          <div className="space-y-2 mb-3">
            <h3 className="font-medium text-lg line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">
                ${product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Features List */}
          <div className="mb-3 space-y-1">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-1 text-sm text-gray-600"
              >
                <Check className="w-4 h-4 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Color Variants */}
          <div className="mb-4">
            <span className="text-sm text-gray-600 mb-2 block">Color:</span>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setColorVariant(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                    colorVariant === color
                      ? "ring-2 ring-blue-500 ring-offset-2"
                      : ""
                  } ${colorStyles[color as keyof typeof colorStyles]}`}
                />
              ))}
            </div>
          </div>

          {/* Vendor Section */}
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center justify-between mb-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <div className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {product.vendor.name}
                  </span>
                  {product.vendor.verified && (
                    <Badge variant="secondary" className="h-5 px-1.5">
                      <Check className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm ml-1">{product.vendor.rating}</span>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="p-2 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Delivers in {product.vendor.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  <span>{product.vendor.returnPolicy}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>{product.warranty}</span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="px-3 py-1 border-x">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all duration-300 ${
                isAddingToCart
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg"
              }`}
            >
              {isAddingToCart ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-3 pt-3 border-t grid grid-cols-2 gap-2 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Truck className="w-4 h-4" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>Secure Payment</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default ProductCard;
