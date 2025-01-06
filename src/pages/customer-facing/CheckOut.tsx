// // import React, { useState } from "react";
// // import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Separator } from "@/components/ui/separator";
// // import { CreditCard, Truck, Store } from "lucide-react";

// // const CheckOut = () => {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     firstName: "",
// //     lastName: "",
// //     address: "",
// //     city: "",
// //     zipCode: "",
// //     cardNumber: "",
// //     expiryDate: "",
// //     cvv: "",
// //   });

// //   // Sample cart data grouped by vendor
// //   const cartItems = {
// //     "Vendor 1": [
// //       { id: 1, name: "Product 1", price: 29.99, quantity: 2 },
// //       { id: 2, name: "Product 2", price: 19.99, quantity: 1 },
// //     ],
// //     "Vendor 2": [{ id: 3, name: "Product 3", price: 39.99, quantity: 1 }],
// //   };

// //   const calculateSubtotal = (items) => {
// //     return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
// //   };

// //   const calculateTotal = () => {
// //     return Object.values(cartItems).reduce((total, vendorItems) => {
// //       return total + calculateSubtotal(vendorItems);
// //     }, 0);
// //   };

// //   const handleInputChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   return (
// //     <div className="max-w-6xl mx-auto p-4">
// //       <h1 className="text-3xl font-bold mb-6">Checkout</h1>

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //         {/* Left Column - Cart Summary */}
// //         <div className="lg:col-span-2">
// //           <Card>
// //             <CardHeader>
// //               <CardTitle className="flex items-center gap-2">
// //                 <Store className="h-5 w-5" />
// //                 Order Summary
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               {Object.entries(cartItems).map(([vendor, items]) => (
// //                 <div key={vendor} className="mb-6">
// //                   <h3 className="font-semibold mb-2">{vendor}</h3>
// //                   {items.map((item) => (
// //                     <div
// //                       key={item.id}
// //                       className="flex justify-between items-center mb-2"
// //                     >
// //                       <div>
// //                         <p className="font-medium">{item.name}</p>
// //                         <p className="text-sm text-gray-500">
// //                           Quantity: {item.quantity}
// //                         </p>
// //                       </div>
// //                       <p className="font-medium">
// //                         ${(item.price * item.quantity).toFixed(2)}
// //                       </p>
// //                     </div>
// //                   ))}
// //                   <div className="text-right text-sm mt-2">
// //                     Subtotal: ${calculateSubtotal(items).toFixed(2)}
// //                   </div>
// //                   <Separator className="my-4" />
// //                 </div>
// //               ))}
// //               <div className="text-right font-bold text-lg">
// //                 Total: ${calculateTotal().toFixed(2)}
// //               </div>
// //             </CardContent>
// //           </Card>

// //           {/* Shipping Information */}
// //           <Card className="mt-6">
// //             <CardHeader>
// //               <CardTitle className="flex items-center gap-2">
// //                 <Truck className="h-5 w-5" />
// //                 Shipping Information
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="grid grid-cols-2 gap-4">
// //                 <div>
// //                   <Label htmlFor="firstName">First Name</Label>
// //                   <Input
// //                     id="firstName"
// //                     name="firstName"
// //                     value={formData.firstName}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //                 <div>
// //                   <Label htmlFor="lastName">Last Name</Label>
// //                   <Input
// //                     id="lastName"
// //                     name="lastName"
// //                     value={formData.lastName}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //                 <div className="col-span-2">
// //                   <Label htmlFor="email">Email</Label>
// //                   <Input
// //                     id="email"
// //                     name="email"
// //                     type="email"
// //                     value={formData.email}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //                 <div className="col-span-2">
// //                   <Label htmlFor="address">Address</Label>
// //                   <Input
// //                     id="address"
// //                     name="address"
// //                     value={formData.address}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //                 <div>
// //                   <Label htmlFor="city">City</Label>
// //                   <Input
// //                     id="city"
// //                     name="city"
// //                     value={formData.city}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //                 <div>
// //                   <Label htmlFor="zipCode">ZIP Code</Label>
// //                   <Input
// //                     id="zipCode"
// //                     name="zipCode"
// //                     value={formData.zipCode}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>

// //         {/* Right Column - Payment */}
// //         <div>
// //           <Card>
// //             <CardHeader>
// //               <CardTitle className="flex items-center gap-2">
// //                 <CreditCard className="h-5 w-5" />
// //                 Payment Details
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="space-y-4">
// //                 <div>
// //                   <Label htmlFor="cardNumber">Card Number</Label>
// //                   <Input
// //                     id="cardNumber"
// //                     name="cardNumber"
// //                     value={formData.cardNumber}
// //                     onChange={handleInputChange}
// //                     placeholder="**** **** **** ****"
// //                   />
// //                 </div>
// //                 <div className="grid grid-cols-2 gap-4">
// //                   <div>
// //                     <Label htmlFor="expiryDate">Expiry Date</Label>
// //                     <Input
// //                       id="expiryDate"
// //                       name="expiryDate"
// //                       value={formData.expiryDate}
// //                       onChange={handleInputChange}
// //                       placeholder="MM/YY"
// //                     />
// //                   </div>
// //                   <div>
// //                     <Label htmlFor="cvv">CVV</Label>
// //                     <Input
// //                       id="cvv"
// //                       name="cvv"
// //                       value={formData.cvv}
// //                       onChange={handleInputChange}
// //                       placeholder="***"
// //                     />
// //                   </div>
// //                 </div>
// //                 <Button className="w-full">Place Order</Button>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CheckOut;




// import React, { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Separator } from '@/components/ui/separator';
// import { CreditCard, Truck, Store, ShieldCheck, Clock, ChevronLeft } from 'lucide-react';

// const CheckOut = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: '',
//     zipCode: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: ''
//   });

//   const cartItems = {
//     'TechZone': [
//       { id: 1, name: 'Wireless Headphones', price: 129.99, quantity: 2 },
//       { id: 2, name: 'Smart Watch', price: 199.99, quantity: 1 }
//     ],
//     'BeautyHub': [
//       { id: 3, name: 'Skincare Set', price: 89.99, quantity: 1 }
//     ]
//   };

//   const calculateSubtotal = (items) => {
//     return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   };

//   const calculateTotal = () => {
//     return Object.values(cartItems).reduce((total, vendorItems) => {
//       return total + calculateSubtotal(vendorItems);
//     }, 0);
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Top Banner */}
//       <div className="bg-indigo-900 text-white py-4">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center gap-4">
//             <button className="flex items-center gap-2 text-indigo-200 hover:text-white transition-colors">
//               <ChevronLeft size={20} />
//               Back to Cart
//             </button>
//             <h1 className="text-2xl font-bold">Checkout</h1>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Forms */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Progress Steps */}
//             <div className="flex justify-between mb-8">
//               {['Shipping', 'Payment', 'Review'].map((step, index) => (
//                 <div key={step} className="flex items-center">
//                   <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index === 0 ? 'bg-indigo-900 text-white' : 'bg-gray-200 text-gray-600'}`}>
//                     {index + 1}
//                   </div>
//                   {index < 2 && <div className="h-1 w-full bg-gray-200 mx-2" />}
//                 </div>
//               ))}
//             </div>

//             {/* Shipping Information */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2 text-indigo-900">
//                   <Truck className="h-5 w-5" />
//                   Shipping Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="firstName">First Name</Label>
//                     <Input
//                       id="firstName"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className="mt-1"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="lastName">Last Name</Label>
//                     <Input
//                       id="lastName"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className="mt-1"
//                     />
//                   </div>
//                   <div className="col-span-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="mt-1"
//                     />
//                   </div>
//                   <div className="col-span-2">
//                     <Label htmlFor="address">Address</Label>
//                     <Input
//                       id="address"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       className="mt-1"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="city">City</Label>
//                     <Input
//                       id="city"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleInputChange}
//                       className="mt-1"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="zipCode">ZIP Code</Label>
//                     <Input
//                       id="zipCode"
//                       name="zipCode"
//                       value={formData.zipCode}
//                       onChange={handleInputChange}
//                       className="mt-1"
//                     />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Payment Details */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2 text-indigo-900">
//                   <CreditCard className="h-5 w-5" />
//                   Payment Details
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <div>
//                     <Label htmlFor="cardNumber">Card Number</Label>
//                     <Input
//                       id="cardNumber"
//                       name="cardNumber"
//                       value={formData.cardNumber}
//                       onChange={handleInputChange}
//                       placeholder="**** **** **** ****"
//                       className="mt-1"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="expiryDate">Expiry Date</Label>
//                       <Input
//                         id="expiryDate"
//                         name="expiryDate"
//                         value={formData.expiryDate}
//                         onChange={handleInputChange}
//                         placeholder="MM/YY"
//                         className="mt-1"
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="cvv">CVV</Label>
//                       <Input
//                         id="cvv"
//                         name="cvv"
//                         value={formData.cvv}
//                         onChange={handleInputChange}
//                         placeholder="***"
//                         className="mt-1"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Column - Order Summary */}
//           <div>
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2 text-indigo-900">
//                   <Store className="h-5 w-5" />
//                   Order Summary
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {Object.entries(cartItems).map(([vendor, items]) => (
//                   <div key={vendor} className="mb-6">
//                     <h3 className="font-semibold text-indigo-900 mb-3">{vendor}</h3>
//                     {items.map((item) => (
//                       <div key={item.id} className="flex justify-between items-center mb-2">
//                         <div>
//                           <p className="font-medium">{item.name}</p>
//                           <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
//                         </div>
//                         <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
//                       </div>
//                     ))}
//                     <Separator className="my-4" />
//                   </div>
//                 ))}

//                 <div className="space-y-2 mb-6">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span>${calculateTotal().toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Shipping</span>
//                     <span>Free</span>
//                   </div>
//                   <Separator className="my-2" />
//                   <div className="flex justify-between font-bold text-lg">
//                     <span>Total</span>
//                     <span className="text-indigo-900">${calculateTotal().toFixed(2)}</span>
//                   </div>
//                 </div>

//                 <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
//                   Place Order
//                 </Button>

//                 <div className="mt-6 space-y-3">
//                   <div className="flex items-center gap-2 text-sm text-gray-600">
//                     <ShieldCheck size={16} className="text-green-500" />
//                     <span>Secure Payment</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-gray-600">
//                     <Clock size={16} className="text-blue-500" />
//                     <span>24/7 Customer Support</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckOut;




import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Truck, ShoppingBag } from "lucide-react";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);

  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      vendor: "TechStore",
      price: 99.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Watch",
      vendor: "ElectroHub",
      price: 199.99,
      quantity: 1,
    },
  ];

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateShipping = () => 10.0;
  const calculateTax = () => calculateSubtotal() * 0.08;
  const calculateTotal = () =>
    calculateSubtotal() + calculateShipping() + calculateTax();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8 max-w-2xl mx-auto">
          <div
            className={`flex flex-col items-center ${
              step >= 1 ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2">
              1
            </div>
            <span className="text-sm">Shipping</span>
          </div>
          <div
            className={`flex flex-col items-center ${
              step >= 2 ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2">
              2
            </div>
            <span className="text-sm">Payment</span>
          </div>
          <div
            className={`flex flex-col items-center ${
              step >= 3 ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2">
              3
            </div>
            <span className="text-sm">Review</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <Truck className="w-5 h-5" />
                      Shipping Information
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="123 Main St" />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="State" />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" placeholder="12345" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="(123) 456-7890" />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Method
                    </h2>

                    <RadioGroup defaultValue="card">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card">Credit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                    </RadioGroup>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5" />
                      Order Review
                    </h2>

                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center"
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            Sold by: {item.vendor}
                          </p>
                        </div>
                        <p>
                          ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <Button variant="outline" onClick={() => setStep(step - 1)}>
                      Back
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      if (step < 3) setStep(step + 1);
                      else console.log("Place order");
                    }}
                  >
                    {step === 3 ? "Place Order" : "Continue"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${calculateShipping().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${calculateTax().toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;