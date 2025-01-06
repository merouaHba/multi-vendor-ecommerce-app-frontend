// import { useState } from "react";
// import Image from "@/assets/images/network.jpeg";

// import {
//   Star,
//   Heart,
//   Share2,
//   Truck,
// //   Shield,
//   Package,
//   ChevronRight,
// //   MessageSquare,
// } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// const Product = () => {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   // Sample product data
//   const product = {
//     name: "Premium Wireless Headphones",
//     price: 299.99,
//     originalPrice: 349.99,
//     rating: 4.8,
//     reviews: 256,
//     stock: 15,
//     vendor: {
//       name: "TechStore",
//       rating: 4.9,
//       responseTime: "< 24 hours",
//       joinedDate: "2022",
//       totalSales: "10k+",
//     },
//     images: [Image, Image, Image, Image],
//     sizes: ["S", "M", "L"],
//     colors: ["Black", "White", "Blue"],
//     description:
//       "Experience premium sound quality with our latest wireless headphones. Features active noise cancellation, 30-hour battery life, and premium comfort.",
//     features: [
//       "Active Noise Cancellation",
//       "30-hour battery life",
//       "Bluetooth 5.0",
//       "Quick charging",
//       "Voice assistant support",
//     ],
//     specifications: {
//       Brand: "TechBrand",
//       Model: "WH-2024",
//       "Battery Life": "30 hours",
//       "Charging Time": "2 hours",
//       Connectivity: "Bluetooth 5.0",
//       Weight: "250g",
//     },
//   };

//   // Sample reviews data
//   const reviews = [
//     {
//       user: "John D.",
//       rating: 5,
//       date: "2024-03-15",
//       comment: "Excellent sound quality and battery life is amazing!",
//       images: ["/api/placeholder/100/100"],
//     },
//     {
//       user: "Sarah M.",
//       rating: 4,
//       date: "2024-03-10",
//       comment:
//         "Very comfortable, but takes some time to get used to the controls.",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* Breadcrumb */}
//       <div className="flex items-center gap-2 text-sm mb-6">
//         <span>Home</span>
//         <ChevronRight className="h-4 w-4" />
//         <span>Electronics</span>
//         <ChevronRight className="h-4 w-4" />
//         <span>Headphones</span>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Product Images */}
//         <div>
//           <div className="mb-4">
//             <img
//               src={product.images[selectedImage]}
//               alt={product.name}
//               className="w-full rounded-lg"
//             />
//           </div>
//           <div className="grid grid-cols-4 gap-4">
//             {product.images.map((img, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`border rounded-lg p-1 ${
//                   selectedImage === index
//                     ? "border-blue-500"
//                     : "border-gray-200"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   alt={`${product.name} ${index + 1}`}
//                   className="w-full"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div>
//           <div className="mb-6">
//             <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//             <div className="flex items-center gap-4 mb-4">
//               <div className="flex items-center gap-1">
//                 <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                 <span className="font-bold">{product.rating}</span>
//                 <span className="text-gray-600">
//                   ({product.reviews} reviews)
//                 </span>
//               </div>
//               <span className="text-gray-600">|</span>
//               <span className="text-green-600">{product.stock} in stock</span>
//             </div>

//             <div className="mb-4">
//               <span className="text-3xl font-bold">${product.price}</span>
//               {product.originalPrice && (
//                 <span className="ml-2 text-gray-500 line-through">
//                   ${product.originalPrice}
//                 </span>
//               )}
//             </div>

//             {/* Vendor Info */}
//             <Card className="mb-6">
//               <CardHeader>
//                 <CardTitle className="text-lg">
//                   Sold by {product.vendor.name}
//                 </CardTitle>
//                 <CardDescription>
//                   <div className="flex items-center gap-2">
//                     <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                     <span>{product.vendor.rating}</span>
//                     <span>•</span>
//                     <span>{product.vendor.totalSales} sales</span>
//                   </div>
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="grid grid-cols-2 gap-4 text-sm">
//                 <div>Response Time: {product.vendor.responseTime}</div>
//                 <div>Joined: {product.vendor.joinedDate}</div>
//               </CardContent>
//             </Card>

//             {/* Size Selection */}
//             {product.sizes && (
//               <div className="mb-6">
//                 <h3 className="font-medium mb-2">Select Size</h3>
//                 <div className="flex gap-2">
//                   {product.sizes.map((size) => (
//                     <button
//                       key={size}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-4 py-2 border rounded-lg ${
//                         selectedSize === size
//                           ? "border-blue-500 bg-blue-50"
//                           : "border-gray-200"
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Quantity */}
//             <div className="mb-6">
//               <h3 className="font-medium mb-2">Quantity</h3>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="px-3 py-1 border rounded-lg"
//                 >
//                   -
//                 </button>
//                 <span className="w-12 text-center">{quantity}</span>
//                 <button
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="px-3 py-1 border rounded-lg"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex gap-4 mb-6">
//               <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
//                 Add to Cart
//               </button>
//               <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50">
//                 Buy Now
//               </button>
//               <button className="p-3 border rounded-lg hover:bg-gray-50">
//                 <Heart className="h-6 w-6" />
//               </button>
//               <button className="p-3 border rounded-lg hover:bg-gray-50">
//                 <Share2 className="h-6 w-6" />
//               </button>
//             </div>

//             {/* Delivery & Returns */}
//             <div className="grid grid-cols-2 gap-4 mb-6">
//               <Alert>
//                 <Truck className="h-4 w-4" />
//                 <AlertTitle>Free Delivery</AlertTitle>
//                 <AlertDescription>Orders over $50</AlertDescription>
//               </Alert>
//               <Alert>
//                 <Package className="h-4 w-4" />
//                 <AlertTitle>Free Returns</AlertTitle>
//                 <AlertDescription>Within 30 days</AlertDescription>
//               </Alert>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product Details Tabs */}
//       <Tabs defaultValue="description" className="mt-12">
//         <TabsList>
//           <TabsTrigger value="description">Description</TabsTrigger>
//           <TabsTrigger value="specifications">Specifications</TabsTrigger>
//           <TabsTrigger value="reviews">Reviews</TabsTrigger>
//         </TabsList>

//         <TabsContent value="description">
//           <Card>
//             <CardHeader>
//               <CardTitle>Product Description</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="mb-4">{product.description}</p>
//               <h3 className="font-medium mb-2">Key Features:</h3>
//               <ul className="list-disc pl-6">
//                 {product.features.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="specifications">
//           <Card>
//             <CardHeader>
//               <CardTitle>Technical Specifications</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-2 gap-4">
//                 {Object.entries(product.specifications).map(([key, value]) => (
//                   <div key={key} className="flex justify-between border-b py-2">
//                     <span className="font-medium">{key}</span>
//                     <span>{value}</span>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="reviews">
//           <Card>
//             <CardHeader>
//               <CardTitle>Customer Reviews</CardTitle>
//               <CardDescription>
//                 <div className="flex items-center gap-2">
//                   <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                   <span className="font-bold">{product.rating}</span>
//                   <span>out of 5</span>
//                   <span className="text-gray-600">
//                     ({product.reviews} reviews)
//                   </span>
//                 </div>
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               {reviews.map((review, index) => (
//                 <div key={index} className="border-b last:border-0 py-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center gap-2">
//                       <span className="font-medium">{review.user}</span>
//                       <div className="flex">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`h-4 w-4 ${
//                               i < review.rating
//                                 ? "fill-yellow-400 text-yellow-400"
//                                 : "text-gray-300"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                     <span className="text-gray-500">{review.date}</span>
//                   </div>
//                   <p className="mb-2">{review.comment}</p>
//                   {review.images && (
//                     <div className="flex gap-2">
//                       {review.images.map((img, i) => (
//                         <img
//                           key={i}
//                           src={img}
//                           alt={`Review ${i + 1}`}
//                           className="w-16 h-16 rounded-lg object-cover"
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               <button className="w-full mt-4 py-2 border rounded-lg hover:bg-gray-50">
//                 Load More Reviews
//               </button>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default Product;





import React, { useState } from "react";
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  Shield,
  RefreshCcw,
  ChevronRight,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Blue");

  // Sample product data
  const product = {
    name: "Premium Wireless Headphones",
    brand: "TechPro",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 1250,
    sku: "TP-WH-001",
    stockStatus: "In Stock",
    description:
      "Experience premium sound quality with our latest wireless headphones. Features active noise cancellation, 30-hour battery life, and premium comfort.",
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
    ],
    colors: ["Blue", "Black", "Silver"],
    sizes: ["S", "M", "L"],
    features: [
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "Bluetooth 5.0",
      "Quick Charge",
      "Voice Assistant Support",
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz-20kHz",
      Impedance: "32 Ohm",
      Weight: "250g",
      Warranty: "2 Years",
    },
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 149.99,
      rating: 4.5,
      image: "/api/placeholder/200/200",
    },
    {
      id: 2,
      name: "Gaming Headset",
      price: 199.99,
      rating: 4.7,
      image: "/api/placeholder/200/200",
    },
    {
      id: 3,
      name: "Sports Headphones",
      price: 129.99,
      rating: 4.6,
      image: "/api/placeholder/200/200",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <a href="#" className="text-gray-600 hover:text-blue-600">
          Home
        </a>
        <ChevronRight className="h-4 w-4 mx-2" />
        <a href="#" className="text-gray-600 hover:text-blue-600">
          Electronics
        </a>
        <ChevronRight className="h-4 w-4 mx-2" />
        <a href="#" className="text-gray-600 hover:text-blue-600">
          Headphones
        </a>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900">{product.name}</span>
      </div>

      {/* Product Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`border rounded-lg overflow-hidden ${
                  selectedImage === index ? "ring-2 ring-blue-600" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">By {product.brand}</p>

            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                <span className="ml-2">{product.rating}</span>
              </div>
              <a href="#reviews" className="text-blue-600 hover:text-blue-800">
                {product.reviews} Reviews
              </a>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="ml-3 text-lg text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Color</h3>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedColor === color
                      ? "border-blue-600 bg-blue-50"
                      : "hover:border-gray-400"
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Size</h3>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`w-12 h-12 border rounded-lg flex items-center justify-center ${
                    selectedSize === size
                      ? "border-blue-600 bg-blue-50"
                      : "hover:border-gray-400"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Quantity</h3>
            <div className="flex items-center w-32 border rounded-lg">
              <button
                className="p-2"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-full text-center border-x"
              />
              <button className="p-2" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-50">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-50">
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          {/* Product Benefits */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-blue-600" />
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm">2 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCcw className="h-5 w-5 text-blue-600" />
              <span className="text-sm">30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="features">
          <TabsList className="w-full">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b py-2">
                  <span className="font-medium">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            {/* Reviews content would go here */}
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
              <p className="text-gray-600">Reviews section coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="font-bold">${product.price}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1">{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


// // import React, { useState } from "react";
// // import {
// //   Star,
// //   Heart,
// //   Share2,
// //   ShoppingCart,
// //   Shield,
// //   Truck,
// //   ArrowLeft,
// //   ArrowRight,
// // } from "lucide-react";
// // import { Card, CardContent } from "@/components/ui/card";

// // const Product = () => {
// //   const [selectedImage, setSelectedImage] = useState(0);
// //   const [selectedVariant, setSelectedVariant] = useState("small");
// //   const [quantity, setQuantity] = useState(1);

// //   // Sample product data
// //   const product = {
// //     name: "Premium Cotton T-Shirt",
// //     vendor: "Fashion Studio Inc.",
// //     price: 29.99,
// //     rating: 4.5,
// //     reviews: 128,
// //     description:
// //       "High-quality cotton t-shirt with modern fit. Perfect for everyday wear.",
// //     images: [
// //       "/api/placeholder/500/600",
// //       "/api/placeholder/500/600",
// //       "/api/placeholder/500/600",
// //     ],
// //     variants: ["small", "medium", "large"],
// //     specifications: [
// //       { label: "Material", value: "100% Cotton" },
// //       { label: "Care", value: "Machine wash cold" },
// //       { label: "Origin", value: "Made in USA" },
// //     ],
// //   };

// //   return (
// //     <div className="max-w-7xl mx-auto p-4">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //         {/* Left Column - Images */}
// //         <div className="space-y-4">
// //           <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
// //             <img
// //               src={product.images[selectedImage]}
// //               alt={`Product view ${selectedImage + 1}`}
// //               className="w-full h-full object-cover"
// //             />
// //             <button
// //               className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
// //               onClick={() =>
// //                 setSelectedImage((prev) =>
// //                   prev > 0 ? prev - 1 : product.images.length - 1
// //                 )
// //               }
// //             >
// //               <ArrowLeft className="h-5 w-5" />
// //             </button>
// //             <button
// //               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
// //               onClick={() =>
// //                 setSelectedImage((prev) =>
// //                   prev < product.images.length - 1 ? prev + 1 : 0
// //                 )
// //               }
// //             >
// //               <ArrowRight className="h-5 w-5" />
// //             </button>
// //           </div>
// //           <div className="flex gap-2">
// //             {product.images.map((img, idx) => (
// //               <button
// //                 key={idx}
// //                 className={`h-20 w-20 rounded-lg overflow-hidden border-2 ${
// //                   selectedImage === idx
// //                     ? "border-blue-500"
// //                     : "border-transparent"
// //                 }`}
// //                 onClick={() => setSelectedImage(idx)}
// //               >
// //                 <img
// //                   src={img}
// //                   alt={`Thumbnail ${idx + 1}`}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Right Column - Product Info */}
// //         <div className="space-y-6">
// //           <div>
// //             <div className="flex items-center justify-between">
// //               <h1 className="text-3xl font-bold">{product.name}</h1>
// //               <div className="flex gap-2">
// //                 <button className="p-2 hover:bg-gray-100 rounded-full">
// //                   <Heart className="h-6 w-6" />
// //                 </button>
// //                 <button className="p-2 hover:bg-gray-100 rounded-full">
// //                   <Share2 className="h-6 w-6" />
// //                 </button>
// //               </div>
// //             </div>
// //             <p className="text-gray-600">by {product.vendor}</p>
// //           </div>

// //           <div className="flex items-center gap-4">
// //             <div className="flex items-center">
// //               {[...Array(5)].map((_, idx) => (
// //                 <Star
// //                   key={idx}
// //                   className={`h-5 w-5 ${
// //                     idx < Math.floor(product.rating)
// //                       ? "fill-yellow-400 text-yellow-400"
// //                       : "text-gray-300"
// //                   }`}
// //                 />
// //               ))}
// //             </div>
// //             <span className="text-gray-600">{product.reviews} reviews</span>
// //           </div>

// //           <div className="text-3xl font-bold">${product.price}</div>

// //           <div className="space-y-4">
// //             <div>
// //               <label className="block text-sm font-medium mb-2">Size</label>
// //               <div className="flex gap-2">
// //                 {product.variants.map((variant) => (
// //                   <button
// //                     key={variant}
// //                     className={`px-4 py-2 border rounded-lg ${
// //                       selectedVariant === variant
// //                         ? "border-blue-500 bg-blue-50"
// //                         : "border-gray-300"
// //                     }`}
// //                     onClick={() => setSelectedVariant(variant)}
// //                   >
// //                     {variant.charAt(0).toUpperCase() + variant.slice(1)}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium mb-2">Quantity</label>
// //               <div className="flex items-center gap-2">
// //                 <button
// //                   className="px-3 py-1 border rounded-lg"
// //                   onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
// //                 >
// //                   -
// //                 </button>
// //                 <span className="w-12 text-center">{quantity}</span>
// //                 <button
// //                   className="px-3 py-1 border rounded-lg"
// //                   onClick={() => setQuantity((prev) => prev + 1)}
// //                 >
// //                   +
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           <button className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700">
// //             <ShoppingCart className="h-5 w-5" />
// //             Add to Cart
// //           </button>

// //           <div className="grid grid-cols-2 gap-4">
// //             <Card>
// //               <CardContent className="p-4 flex items-center gap-2">
// //                 <Shield className="h-5 w-5 text-green-600" />
// //                 <div className="text-sm">Secure Payment</div>
// //               </CardContent>
// //             </Card>
// //             <Card>
// //               <CardContent className="p-4 flex items-center gap-2">
// //                 <Truck className="h-5 w-5 text-blue-600" />
// //                 <div className="text-sm">Free Shipping</div>
// //               </CardContent>
// //             </Card>
// //           </div>

// //           <div className="border-t pt-6">
// //             <h2 className="font-semibold mb-4">Product Details</h2>
// //             <p className="text-gray-600 mb-4">{product.description}</p>
// //             <div className="space-y-2">
// //               {product.specifications.map((spec, idx) => (
// //                 <div key={idx} className="flex">
// //                   <span className="font-medium w-24">{spec.label}:</span>
// //                   <span className="text-gray-600">{spec.value}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Product;