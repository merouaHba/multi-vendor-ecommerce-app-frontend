// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Minus, Plus, Trash2 } from "lucide-react";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   // Sample initial cart data grouped by vendor
//   const [cartItems, setCartItems] = useState({
//     "Electronics Hub": [
//       {
//         id: 1,
//         name: "Wireless Earbuds",
//         price: 79.99,
//         quantity: 1,
//         image: "/api/placeholder/80/80",
//       },
//       {
//         id: 2,
//         name: "Smart Watch",
//         price: 199.99,
//         quantity: 1,
//         image: "/api/placeholder/80/80",
//       },
//     ],
//     "Fashion Store": [
//       {
//         id: 3,
//         name: "Running Shoes",
//         price: 89.99,
//         quantity: 1,
//         image: "/api/placeholder/80/80",
//       },
//     ],
//   });

//   // Update quantity
//   const updateQuantity = (vendorName:string, itemId:number, change) => {
//     setCartItems((prev) => {
//       const newCart = { ...prev };
//       const vendorItems = [...newCart[vendorName]];
//       const itemIndex = vendorItems.findIndex((item) => item.id === itemId);

//       if (itemIndex !== -1) {
//         const newQuantity = vendorItems[itemIndex].quantity + change;
//         if (newQuantity > 0) {
//           vendorItems[itemIndex] = {
//             ...vendorItems[itemIndex],
//             quantity: newQuantity,
//           };
//           newCart[vendorName] = vendorItems;
//         }
//       }
//       return newCart;
//     });
//   };

//   // Remove item
//   const removeItem = (vendorName, itemId) => {
//     setCartItems((prev) => {
//       const newCart = { ...prev };
//       newCart[vendorName] = newCart[vendorName].filter(
//         (item) => item.id !== itemId
//       );
//       if (newCart[vendorName].length === 0) {
//         delete newCart[vendorName];
//       }
//       return newCart;
//     });
//   };

//   // Calculate subtotal for a vendor
//   const calculateVendorSubtotal = (items) => {
//     return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   };

//   // Calculate cart total
//   const calculateTotal = () => {
//     return Object.values(cartItems).reduce(
//       (sum, vendorItems) => sum + calculateVendorSubtotal(vendorItems),
//       0
//     );
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4 space-y-6">
//       <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

//       {/* Vendor sections */}
//       {Object.entries(cartItems).map(([vendorName, items]) => (
//         <Card key={vendorName} className="mb-6">
//           <CardContent className="p-6">
//             <h2 className="text-xl font-semibold mb-4">{vendorName}</h2>

//             {/* Items */}
//             <div className="space-y-4">
//               {items.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center gap-4 border-b pb-4"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-20 h-20 object-cover rounded"
//                   />

//                   <div className="flex-grow">
//                     <h3 className="font-medium">{item.name}</h3>
//                     <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                   </div>

//                   {/* Quantity controls */}
//                   <div className="flex items-center gap-2">
//                     <Button
//                       variant="outline"
//                       size="icon"
//                       onClick={() => updateQuantity(vendorName, item.id, -1)}
//                     >
//                       <Minus className="h-4 w-4" />
//                     </Button>

//                     <span className="w-8 text-center">{item.quantity}</span>

//                     <Button
//                       variant="outline"
//                       size="icon"
//                       onClick={() => updateQuantity(vendorName, item.id, 1)}
//                     >
//                       <Plus className="h-4 w-4" />
//                     </Button>
//                   </div>

//                   {/* Subtotal and remove */}
//                   <div className="text-right min-w-[120px]">
//                     <p className="font-medium">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </p>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       className="text-red-600"
//                       onClick={() => removeItem(vendorName, item.id)}
//                     >
//                       <Trash2 className="h-4 w-4 mr-1" />
//                       Remove
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Vendor subtotal */}
//             <div className="mt-4 text-right">
//               <p className="text-gray-600">
//                 Subtotal from {vendorName}: $
//                 {calculateVendorSubtotal(items).toFixed(2)}
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       ))}

//       {/* Cart summary */}
//       <Card className="bg-gray-50">
//         <CardContent className="p-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-xl font-semibold">Total</p>
//               <p className="text-gray-600">Including all items</p>
//             </div>
//             <p className="text-2xl font-bold">${calculateTotal().toFixed(2)}</p>
//           </div>

//           <Link to="/checkout" >
//           <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
//             Proceed to Checkout
//           </Button>
//           </Link>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Cart;



import React, { useState } from "react";
import {
  Trash2,
  Heart,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Truck,
  RefreshCw,
  Plus,
  Minus,
  AlertCircle,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 299.99,
      image: "/api/placeholder/120/120",
      color: "Black",
      size: "Standard",
      quantity: 1,
      vendor: "TechPro Audio",
      stock: 5,
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      price: 399.99,
      image: "/api/placeholder/120/120",
      color: "Silver",
      size: "44mm",
      quantity: 2,
      vendor: "GadgetHub",
      stock: 3,
    },
    {
      id: 3,
      name: "Premium Laptop Backpack",
      price: 79.99,
      image: "/api/placeholder/120/120",
      color: "Navy Blue",
      size: "Large",
      quantity: 1,
      vendor: "TravelGear",
      stock: 8,
    },
  ]);

  // Sample coupon codes
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const discount = couponApplied ? subtotal * 0.1 : 0; // 10% discount if coupon applied
  const tax = (subtotal - discount) * 0.08; // 8% tax
  const total = subtotal - discount + tax + shipping;

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.min(Math.max(1, newQuantity), item.stock),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const moveToWishlist = (id) => {
    // Implementation would go here
    console.log("Moved to wishlist:", id);
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "save10") {
      setCouponApplied(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart ({cartItems.length} items)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          {cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 p-4 border rounded-lg">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-30 h-30 object-cover rounded-lg"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <span className="font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-2">
                      Sold by {item.vendor}
                    </p>

                    <div className="text-sm text-gray-600 mb-4">
                      <p>Color: {item.color}</p>
                      <p>Size: {item.size}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-3">
                          Quantity:
                        </span>
                        <div className="flex items-center border rounded-lg">
                          <button
                            className="p-2 hover:bg-gray-100"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                parseInt(e.target.value) || 1
                              )
                            }
                            className="w-12 text-center border-x"
                          />
                          <button
                            className="p-2 hover:bg-gray-100"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Item Actions */}
                      <div className="flex gap-4">
                        <button
                          onClick={() => moveToWishlist(item.id)}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Heart className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-600 hover:text-red-600"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* Stock Warning */}
                    {item.stock <= 3 && (
                      <p className="text-orange-600 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        Only {item.stock} left in stock
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Add items to start shopping</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Continue Shopping
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}

          {/* Shopping Benefits */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
              <Truck className="h-5 w-5 text-blue-600" />
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
              <RefreshCw className="h-5 w-5 text-blue-600" />
              <span className="text-sm">30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
              <span className="text-sm">Secure Checkout</span>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            {/* Coupon Code */}
            <div className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 border rounded-lg px-3 py-2"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                >
                  Apply
                </button>
              </div>
              {couponApplied && (
                <Alert className="mt-2">
                  <AlertDescription className="text-green-600 text-sm">
                    10% discount applied successfully!
                  </AlertDescription>
                </Alert>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 mb-4">
              <CreditCard className="h-5 w-5" />
              Proceed to Checkout
            </button>

            {/* Accepted Payment Methods */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">We Accept:</p>
              <div className="flex justify-center gap-2">
                {/* Payment icons would go here */}
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;