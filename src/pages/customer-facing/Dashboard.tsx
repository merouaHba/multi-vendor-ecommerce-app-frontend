// // import React, { useState } from 'react';
// // import {
// //   User,
// //   Package,
// //   Heart,
// //   MapPin,
// //   CreditCard,
// //   Bell,
// //   Settings,
// //   LogOut,
// //   ChevronRight,
// //   Edit
// // } from 'lucide-react';

// // const UserDashboard = () => {
// //   const [activeTab, setActiveTab] = useState('overview');
  
// //   const recentOrders = [
// //     { id: '#12345', date: '2024-10-25', status: 'Delivered', amount: 129.99 },
// //     { id: '#12344', date: '2024-10-20', status: 'In Transit', amount: 79.50 },
// //     { id: '#12343', date: '2024-10-15', status: 'Processing', amount: 199.99 }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Header */}
// //       <div className="bg-white shadow">
// //         <div className="max-w-7xl mx-auto px-4 py-6">
// //           <div className="flex items-center space-x-4">
// //             <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
// //               <User size={32} className="text-gray-600" />
// //             </div>
// //             <div>
// //               <h1 className="text-2xl font-bold text-gray-900">Welcome back, John</h1>
// //               <p className="text-gray-600">Member since October 2024</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 py-8">
// //         <div className="grid grid-cols-12 gap-6">
// //           {/* Sidebar */}
// //           <div className="col-span-12 md:col-span-3">
// //             <div className="bg-white rounded-lg shadow p-4">
// //               <nav className="space-y-2">
// //                 <button
// //                   onClick={() => setActiveTab('overview')}
// //                   className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md ${
// //                     activeTab === 'overview' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
// //                   }`}
// //                 >
// //                   <Package size={20} />
// //                   <span>Orders</span>
// //                 </button>
// //                 <button
// //                   onClick={() => setActiveTab('wishlist')}
// //                   className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md ${
// //                     activeTab === 'wishlist' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
// //                   }`}
// //                 >
// //                   <Heart size={20} />
// //                   <span>Wishlist</span>
// //                 </button>
// //                 <button
// //                   onClick={() => setActiveTab('addresses')}
// //                   className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md ${
// //                     activeTab === 'addresses' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
// //                   }`}
// //                 >
// //                   <MapPin size={20} />
// //                   <span>Addresses</span>
// //                 </button>
// //                 <button
// //                   onClick={() => setActiveTab('payments')}
// //                   className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md ${
// //                     activeTab === 'payments' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
// //                   }`}
// //                 >
// //                   <CreditCard size={20} />
// //                   <span>Payment Methods</span>
// //                 </button>
// //                 <button
// //                   onClick={() => setActiveTab('notifications')}
// //                   className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md ${
// //                     activeTab === 'notifications' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
// //                   }`}
// //                 >
// //                   <Bell size={20} />
// //                   <span>Notifications</span>
// //                 </button>
// //                 <button
// //                   onClick={() => setActiveTab('settings')}
// //                   className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md ${
// //                     activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
// //                   }`}
// //                 >
// //                   <Settings size={20} />
// //                   <span>Settings</span>
// //                 </button>
// //                 <button
// //                   className="w-full flex items-center space-x-3 px-4 py-2 rounded-md text-red-600 hover:bg-red-50"
// //                 >
// //                   <LogOut size={20} />
// //                   <span>Logout</span>
// //                 </button>
// //               </nav>
// //             </div>
// //           </div>

// //           {/* Main Content Area */}
// //           <div className="col-span-12 md:col-span-9 space-y-6">
// //             {/* Overview Stats */}
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <div className="flex items-center justify-between">
// //                   <h3 className="text-lg font-semibold text-gray-900">Total Orders</h3>
// //                   <Package className="text-blue-600" size={24} />
// //                 </div>
// //                 <p className="text-3xl font-bold text-gray-900 mt-4">24</p>
// //                 <p className="text-sm text-gray-600 mt-2">Last order was 2 days ago</p>
// //               </div>
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <div className="flex items-center justify-between">
// //                   <h3 className="text-lg font-semibold text-gray-900">Wishlist Items</h3>
// //                   <Heart className="text-red-600" size={24} />
// //                 </div>
// //                 <p className="text-3xl font-bold text-gray-900 mt-4">12</p>
// //                 <p className="text-sm text-gray-600 mt-2">2 items on sale</p>
// //               </div>
// //               <div className="bg-white rounded-lg shadow p-6">
// //                 <div className="flex items-center justify-between">
// //                   <h3 className="text-lg font-semibold text-gray-900">Saved Addresses</h3>
// //                   <MapPin className="text-green-600" size={24} />
// //                 </div>
// //                 <p className="text-3xl font-bold text-gray-900 mt-4">3</p>
// //                 <p className="text-sm text-gray-600 mt-2">Home, Office, Other</p>
// //               </div>
// //             </div>

// //             {/* Recent Orders */}
// //             <div className="bg-white rounded-lg shadow">
// //               <div className="p-6 border-b">
// //                 <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
// //               </div>
// //               <div className="divide-y">
// //                 {recentOrders.map(order => (
// //                   <div key={order.id} className="p-6 flex items-center justify-between">
// //                     <div>
// //                       <p className="font-semibold text-gray-900">{order.id}</p>
// //                       <p className="text-sm text-gray-600">Ordered on {order.date}</p>
// //                     </div>
// //                     <div className="text-right">
// //                       <p className="font-semibold text-gray-900">${order.amount}</p>
// //                       <p className="text-sm text-gray-600">{order.status}</p>
// //                     </div>
// //                     <ChevronRight className="text-gray-400" size={20} />
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="p-6 border-t">
// //                 <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium">
// //                   View All Orders
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Account Details */}
// //             <div className="bg-white rounded-lg shadow">
// //               <div className="p-6 border-b">
// //                 <h2 className="text-xl font-semibold text-gray-900">Account Details</h2>
// //               </div>
// //               <div className="p-6 space-y-4">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <p className="text-sm text-gray-600">Email</p>
// //                     <p className="font-medium text-gray-900">john.doe@example.com</p>
// //                   </div>
// //                   <button className="text-blue-600 hover:text-blue-700">
// //                     <Edit size={20} />
// //                   </button>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <p className="text-sm text-gray-600">Phone</p>
// //                     <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
// //                   </div>
// //                   <button className="text-blue-600 hover:text-blue-700">
// //                     <Edit size={20} />
// //                   </button>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <p className="text-sm text-gray-600">Password</p>
// //                     <p className="font-medium text-gray-900">••••••••</p>
// //                   </div>
// //                   <button className="text-blue-600 hover:text-blue-700">
// //                     <Edit size={20} />
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserDashboard;




// import React, { useState } from "react";
// import {
//   User,
//   Package,
//   Heart,
//   MapPin,
//   CreditCard,
//   Bell,
//   Settings,
//   LogOut,
// //   ChevronRight,
// //   Edit,
//   Store,
//   ShoppingBag,
//   Star,
//   Filter,
//   Calendar,
// } from "lucide-react";

// const MultiVendorDashboard = () => {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [selectedOrderFilter, setSelectedOrderFilter] = useState("all");

//   const recentOrders = [
//     {
//       id: "#12345",
//       date: "2024-10-25",
//       status: "Delivered",
//       amount: 129.99,
//       vendor: "Electronics Store",
//       items: [
//         { name: "Wireless Earbuds", quantity: 1, price: 79.99 },
//         { name: "Phone Case", quantity: 1, price: 49.99 },
//       ],
//     },
//     {
//       id: "#12344",
//       date: "2024-10-20",
//       status: "In Transit",
//       amount: 79.5,
//       vendor: "Fashion Boutique",
//       items: [{ name: "Summer Dress", quantity: 1, price: 79.5 }],
//     },
//     {
//       id: "#12343",
//       date: "2024-10-15",
//       status: "Processing",
//       amount: 199.99,
//       vendor: "Home Decor Plus",
//       items: [{ name: "Table Lamp", quantity: 2, price: 99.99 }],
//     },
//   ];

//   const savedVendors = [
//     { name: "Electronics Store", rating: 4.8, ordersCount: 5 },
//     { name: "Fashion Boutique", rating: 4.6, ordersCount: 3 },
//     { name: "Home Decor Plus", rating: 4.9, ordersCount: 2 },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header with User Info */}
//       <div className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
//                 <User size={32} className="text-gray-600" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900">
//                   Welcome back, John
//                 </h1>
//                 <p className="text-gray-600">Member since October 2024</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
//                 <Bell size={24} />
//               </button>
//               <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
//                 <Settings size={24} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-12 gap-6">
//           {/* Sidebar Navigation */}
//           <div className="col-span-12 md:col-span-3">
//             <div className="bg-white rounded-lg shadow p-4">
//               <nav className="space-y-2">
//                 <button
//                   onClick={() => setActiveTab("overview")}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md ${
//                     activeTab === "overview"
//                       ? "bg-blue-50 text-blue-600"
//                       : "text-gray-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   <ShoppingBag size={20} />
//                   <span>Overview</span>
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("orders")}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md ${
//                     activeTab === "orders"
//                       ? "bg-blue-50 text-blue-600"
//                       : "text-gray-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   <Package size={20} />
//                   <span>My Orders</span>
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("vendors")}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md ${
//                     activeTab === "vendors"
//                       ? "bg-blue-50 text-blue-600"
//                       : "text-gray-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   <Store size={20} />
//                   <span>Saved Vendors</span>
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("wishlist")}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md ${
//                     activeTab === "wishlist"
//                       ? "bg-blue-50 text-blue-600"
//                       : "text-gray-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   <Heart size={20} />
//                   <span>Wishlist</span>
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("addresses")}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md ${
//                     activeTab === "addresses"
//                       ? "bg-blue-50 text-blue-600"
//                       : "text-gray-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   <MapPin size={20} />
//                   <span>Addresses</span>
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("payments")}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md ${
//                     activeTab === "payments"
//                       ? "bg-blue-50 text-blue-600"
//                       : "text-gray-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   <CreditCard size={20} />
//                   <span>Payment Methods</span>
//                 </button>
//                 <hr className="my-4" />
//                 <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-md text-red-600 hover:bg-red-50">
//                   <LogOut size={20} />
//                   <span>Logout</span>
//                 </button>
//               </nav>
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="col-span-12 md:col-span-9 space-y-6">
//             {/* Quick Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//               <div className="bg-white rounded-lg shadow p-6">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     Total Orders
//                   </h3>
//                   <Package className="text-blue-600" size={24} />
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900 mt-4">24</p>
//                 <p className="text-sm text-gray-600 mt-2">Across 8 vendors</p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-6">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     Active Orders
//                   </h3>
//                   <ShoppingBag className="text-green-600" size={24} />
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900 mt-4">3</p>
//                 <p className="text-sm text-gray-600 mt-2">
//                   In transit & processing
//                 </p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-6">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     Saved Vendors
//                   </h3>
//                   <Store className="text-purple-600" size={24} />
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900 mt-4">12</p>
//                 <p className="text-sm text-gray-600 mt-2">
//                   4 with recent orders
//                 </p>
//               </div>
//               <div className="bg-white rounded-lg shadow p-6">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     Wishlist Items
//                   </h3>
//                   <Heart className="text-red-600" size={24} />
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900 mt-4">18</p>
//                 <p className="text-sm text-gray-600 mt-2">3 items on sale</p>
//               </div>
//             </div>

//             {/* Recent Orders */}
//             <div className="bg-white rounded-lg shadow">
//               <div className="p-6 border-b flex items-center justify-between">
//                 <h2 className="text-xl font-semibold text-gray-900">
//                   Recent Orders
//                 </h2>
//                 <div className="flex items-center space-x-4">
//                   <div className="flex items-center space-x-2">
//                     <Filter size={20} className="text-gray-400" />
//                     <select
//                       className="text-sm text-gray-600 border rounded-md px-2 py-1"
//                       value={selectedOrderFilter}
//                       onChange={(e) => setSelectedOrderFilter(e.target.value)}
//                     >
//                       <option value="all">All Orders</option>
//                       <option value="processing">Processing</option>
//                       <option value="shipped">Shipped</option>
//                       <option value="delivered">Delivered</option>
//                     </select>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Calendar size={20} className="text-gray-400" />
//                     <select className="text-sm text-gray-600 border rounded-md px-2 py-1">
//                       <option>Last 30 days</option>
//                       <option>Last 3 months</option>
//                       <option>Last 6 months</option>
//                       <option>Last year</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//               <div className="divide-y">
//                 {recentOrders.map((order) => (
//                   <div key={order.id} className="p-6">
//                     <div className="flex items-center justify-between mb-4">
//                       <div>
//                         <div className="flex items-center space-x-2">
//                           <Store size={16} className="text-gray-400" />
//                           <p className="text-sm font-medium text-gray-600">
//                             {order.vendor}
//                           </p>
//                         </div>
//                         <p className="font-semibold text-gray-900 mt-1">
//                           {order.id}
//                         </p>
//                       </div>
//                       <div className="text-right">
//                         <p className="font-semibold text-gray-900">
//                           ${order.amount}
//                         </p>
//                         <p className="text-sm text-gray-600">{order.date}</p>
//                       </div>
//                     </div>
//                     <div className="bg-gray-50 rounded-lg p-4">
//                       {order.items.map((item, index) => (
//                         <div
//                           key={index}
//                           className="flex justify-between items-center mb-2 last:mb-0"
//                         >
//                           <p className="text-sm text-gray-600">
//                             {item.quantity}x {item.name}
//                           </p>
//                           <p className="text-sm font-medium text-gray-900">
//                             ${item.price}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                     <div className="flex items-center justify-between mt-4">
//                       <span
//                         className={`px-3 py-1 rounded-full text-sm font-medium ${
//                           order.status === "Delivered"
//                             ? "bg-green-100 text-green-800"
//                             : order.status === "In Transit"
//                             ? "bg-blue-100 text-blue-800"
//                             : "bg-yellow-100 text-yellow-800"
//                         }`}
//                       >
//                         {order.status}
//                       </span>
//                       <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="p-6 border-t">
//                 <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium">
//                   View All Orders
//                 </button>
//               </div>
//             </div>

//             {/* Saved Vendors */}
//             <div className="bg-white rounded-lg shadow">
//               <div className="p-6 border-b">
//                 <h2 className="text-xl font-semibold text-gray-900">
//                   Favorite Vendors
//                 </h2>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
//                 {savedVendors.map((vendor, index) => (
//                   <div
//                     key={index}
//                     className="border rounded-lg p-4 hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex items-center justify-between mb-2">
//                       <h3 className="font-medium text-gray-900">
//                         {vendor.name}
//                       </h3>
//                       <div className="flex items-center space-x-1">
//                         <Star
//                           size={16}
//                           className="text-yellow-400 fill-current"
//                         />
//                         <span className="text-sm text-gray-600">
//                           {vendor.rating}
//                         </span>
//                       </div>
//                     </div>
//                     <p className="text-sm text-gray-600">
//                       {vendor.ordersCount} orders placed
//                     </p>
//                     <button className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium">
//                       Visit Store
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiVendorDashboard;


import React, { useState } from "react";
import {
  Home,
  Package,
  Heart,
  ShoppingCart,
  User,
  Settings,
  CreditCard,
  MapPin,
  Bell,
  LogOut,
  ChevronRight,
  Plus,
  Search,
  Star,
  MessageSquare,
  Box,
  TrendingUp,
  ThumbsUp,
  CheckCircle,
  AlertCircle,
  Info,
  MoreVertical,
  Lock,
  Mail,
  Moon,
  Shield,
  Smartphone,
} from "lucide-react";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  const NavItem = ({ icon: Icon, label, id, badge }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center justify-between p-3 rounded-lg w-full transition-all duration-200 ${
        activeTab === id
          ? "bg-blue-50 text-blue-600 font-medium"
          : "hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center space-x-3">
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </div>
      {badge && (
        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );

  const SearchBar = () => (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search orders, products..."
        className="w-full p-3 pl-10 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "orders":
        return <OrdersSection />;
      case "wishlist":
        return <WishlistSection />;
      case "profile":
        return <ProfileSection />;
      case "addresses":
        return <AddressesSection />;
      case "payments":
        return <PaymentsSection />;
      case "notifications":
        return <NotificationsSection />;
      case "reviews":
        return <ReviewsSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 space-y-6">
            {/* User Profile Card */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 p-3 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      JD
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-gray-500">
                      john.doe@example.com
                    </p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1">4.8 (24 reviews)</span>
                    </div>
                  </div>
                </div>

                <nav className="space-y-2">
                  <NavItem icon={Home} label="Dashboard" id="dashboard" badge={undefined} />
                  <NavItem
                    icon={Package}
                    label="My Orders"
                    id="orders"
                    badge="2"
                  />
                  <NavItem
                    icon={Heart}
                    label="Wishlist"
                    id="wishlist"
                    badge="5"
                  />
                  <NavItem icon={User} label="Profile" id="profile" badge={undefined} />
                  <NavItem icon={MapPin} label="Addresses" id="addresses" badge={undefined} />
                  <NavItem
                                      icon={CreditCard}
                                      label="Payment Methods"
                                      id="payments" badge={undefined}                  />
                  <NavItem
                    icon={Bell}
                    label="Notifications"
                    id="notifications"
                    badge="3"
                  />
                                  <NavItem icon={MessageSquare} label="Reviews" id="reviews" badge={undefined} />
                  <NavItem icon={Settings} label="Settings" id="settings" badge={undefined} />
                  <button className="flex items-center space-x-2 p-3 rounded-lg w-full text-red-600 hover:bg-red-50 transition-all duration-200">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </nav>
              </CardContent>
            </Card>

            {/* Quick Stats Card */}
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium mb-4">Quick Stats</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Box className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Total Orders</span>
                    </div>
                    <span className="font-medium">28</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Total Spent</span>
                    </div>
                    <span className="font-medium">$2,890</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-12 md:col-span-9">
            <SearchBar />
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardOverview = () => (
  <div className="space-y-6">
    {/* Welcome Banner */}
    <Card className="bg-gradient-to-r from-blue-500 to-blue-600">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
            <p className="opacity-90">
              Track your orders, manage your profile, and explore our latest
              offers.
            </p>
          </div>
          <div className="hidden md:block">
            <ShoppingCart className="w-16 h-16 text-white opacity-20" />
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <StatsCard
        title="Total Orders"
        value="28"
        icon={Package}
        change="+12.5%"
        color="blue"
      />
      <StatsCard
        title="Wishlist Items"
        value="12"
        icon={Heart}
        change="+5.0%"
        color="red"
      />
      <StatsCard
        title="Cart Items"
        value="3"
        icon={ShoppingCart}
        change="+2.0%"
        color="green"
      />
      <StatsCard
        title="Reviews Given"
        value="8"
        icon={Star}
        change="+8.1%"
        color="yellow"
      />
    </div>

    {/* Recent Orders */}
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Orders</CardTitle>
          <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3].map((order) => (
            <div
              key={order}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <p className="font-medium">Order #{order}23456</p>
                  <p className="text-sm text-gray-500">
                    October {order + 10}, 2024
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$149.99</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Delivered
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Recent Activity */}
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
          <div className="space-y-6 relative">
            {[
              {
                icon: Package,
                text: "Order #123456 has been delivered",
                time: "2 hours ago",
              },
              {
                icon: Heart,
                text: "Added 2 items to wishlist",
                time: "5 hours ago",
              },
              {
                icon: Star,
                text: "Left a review for Blue Sneakers",
                time: "1 day ago",
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-start ml-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center -ml-4 z-10">
                  <activity.icon className="w-4 h-4 text-blue-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const StatsCard = ({ title, value, icon: Icon, change, color }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    red: "bg-red-100 text-red-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            <span className="text-xs text-green-600 mt-1 inline-block">
              {change} from last month
            </span>
          </div>
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${colors[color]}`}
          >
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Other sections (OrdersSection, WishlistSection, etc.) remain the same as in your original code
// but can be enhanced with similar styling patterns and functionality

export default UserDashboard;



// import React, { useState } from 'react';
// import {
//   Home,
//   Package,
//   Heart,
//   ShoppingCart,
//   User,
//   Settings,
//   CreditCard,
//   MapPin,
//   Bell,
//   LogOut,
//   ChevronRight,
//   Plus
// } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');

//   const NavItem = ({ icon: Icon, label, id }) => (
//     <button
//       onClick={() => setActiveTab(id)}
//       className={`flex items-center space-x-2 p-3 rounded-lg w-full ${
//         activeTab === id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
//       }`}
//     >
//       <Icon className="w-5 h-5" />
//       <span>{label}</span>
//     </button>
//   );

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'dashboard':
//         return <DashboardOverview />;
//       case 'orders':
//         return <OrdersSection />;
//       case 'wishlist':
//         return <WishlistSection />;
//       case 'profile':
//         return <ProfileSection />;
//       case 'addresses':
//         return <AddressesSection />;
//       case 'payments':
//         return <PaymentsSection />;
//       case 'notifications':
//         return <NotificationsSection />;
//       default:
//         return <DashboardOverview />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto py-6 px-4">
//         <div className="grid grid-cols-12 gap-6">
//           {/* Sidebar */}
//           <div className="col-span-12 md:col-span-3">
//             <Card>
//               <CardContent className="p-4">
//                 <div className="flex items-center space-x-3 p-3 mb-6">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <User className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">John Doe</h3>
//                     <p className="text-sm text-gray-500">john.doe@example.com</p>
//                   </div>
//                 </div>

//                 <nav className="space-y-2">
//                   <NavItem icon={Home} label="Dashboard" id="dashboard" />
//                   <NavItem icon={Package} label="My Orders" id="orders" />
//                   <NavItem icon={Heart} label="Wishlist" id="wishlist" />
//                   <NavItem icon={User} label="Profile" id="profile" />
//                   <NavItem icon={MapPin} label="Addresses" id="addresses" />
//                   <NavItem icon={CreditCard} label="Payment Methods" id="payments" />
//                   <NavItem icon={Bell} label="Notifications" id="notifications" />
//                   <button className="flex items-center space-x-2 p-3 rounded-lg w-full text-red-600 hover:bg-red-50">
//                     <LogOut className="w-5 h-5" />
//                     <span>Logout</span>
//                   </button>
//                 </nav>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Main Content */}
//           <div className="col-span-12 md:col-span-9">
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DashboardOverview = () => (
//   <div className="space-y-6">
//     {/* Welcome Card */}
//     <Card>
//       <CardContent className="p-6">
//         <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
//         <p className="text-gray-600">Here's what's happening with your account today.</p>
//       </CardContent>
//     </Card>

//     {/* Stats Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <Card>
//         <CardContent className="p-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500">Total Orders</p>
//               <h3 className="text-2xl font-bold">28</h3>
//             </div>
//             <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//               <Package className="w-6 h-6 text-blue-600" />
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardContent className="p-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500">Wishlist Items</p>
//               <h3 className="text-2xl font-bold">12</h3>
//             </div>
//             <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
//               <Heart className="w-6 h-6 text-red-600" />
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardContent className="p-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500">Cart Items</p>
//               <h3 className="text-2xl font-bold">3</h3>
//             </div>
//             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//               <ShoppingCart className="w-6 h-6 text-green-600" />
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>

//     {/* Recent Orders */}
//     <Card>
//       <CardHeader>
//         <CardTitle>Recent Orders</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           {[1, 2, 3].map((order) => (
//             <div key={order} className="flex items-center justify-between p-4 border rounded-lg">
//               <div>
//                 <p className="font-medium">Order #{order}23456</p>
//                 <p className="text-sm text-gray-500">October {order + 10}, 2024</p>
//               </div>
//               <div className="text-right">
//                 <p className="font-medium">$149.99</p>
//                 <span className="text-sm text-green-600">Delivered</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   </div>
// );

const OrdersSection = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>My Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((order) => (
            <div key={order} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-medium">Order #{order}23456</p>
                  <p className="text-sm text-gray-500">October {order + 10}, 2024</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  Delivered
                </span>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                    <Package className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Product Name</p>
                    <p className="text-sm text-gray-500">Quantity: 1</p>
                  </div>
                </div>
                <p className="font-medium">$149.99</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const WishlistSection = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>My Wishlist</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                  <Package className="w-8 h-8 text-gray-400" />
                </div>
                <div className="ml-4">
                  <p className="font-medium">Product Name</p>
                  <p className="text-blue-600">$149.99</p>
                </div>
              </div>
              <button className="text-red-600 hover:text-red-700">
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const ProfileSection = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <input type="text" className="w-full p-3 border rounded-lg" defaultValue="John" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <input type="text" className="w-full p-3 border rounded-lg" defaultValue="Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full p-3 border rounded-lg" defaultValue="john.doe@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input type="tel" className="w-full p-3 border rounded-lg" defaultValue="+1 234 567 8900" />
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </form>
      </CardContent>
    </Card>
  </div>
);

const AddressesSection = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>My Addresses</CardTitle>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <Plus className="w-5 h-5" />
            <span>Add New Address</span>
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((address) => (
            <div key={address} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium">Home Address {address}</h3>
                <button className="text-gray-500 hover:text-gray-700">Edit</button>
              </div>
              <p className="text-gray-600">123 Main Street, Apt 4B</p>
              <p className="text-gray-600">New York, NY 10001</p>
              <p className="text-gray-600">United States</p>
              <p className="text-gray-600">Phone: +1 234 567 8900</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const PaymentsSection = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Payment Methods</CardTitle>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <Plus className="w-5 h-5" />
            <span>Add New Card</span>
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2].map((card) => (
            <div key={card} className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="font-medium">**** **** **** 4242</p>
                  <p className="text-sm text-gray-500">Expires 12/24</p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-700">Edit</button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);



const NotificationsSection = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const notificationTypes = {
    order: { icon: Package, color: 'blue' },
    alert: { icon: AlertCircle, color: 'red' },
    info: { icon: Info, color: 'yellow' },
    success: { icon: CheckCircle, color: 'green' }
  };

  const notifications = [
    {
      id: 1,
      type: 'order',
      title: 'Order #123456 has been delivered',
      message: 'Your package has been delivered successfully. Rate your experience!',
      time: '2 hours ago',
      isRead: false
    },
    {
      id: 2,
      type: 'alert',
      title: 'Price Drop Alert',
      message: 'An item in your wishlist is now on sale! Check it out before it ends.',
      time: '5 hours ago',
      isRead: false
    },
    {
      id: 3,
      type: 'success',
      title: 'Payment Successful',
      message: 'Your payment for order #123457 has been processed successfully.',
      time: '1 day ago',
      isRead: true
    },
    {
      id: 4,
      type: 'info',
      title: 'New Feature Available',
      message: 'Try our new AI-powered product recommendations!',
      time: '2 days ago',
      isRead: true
    }
  ];

  const filteredNotifications = notifications
    .filter(notif => filter === 'all' || 
      (filter === 'unread' && !notif.isRead) || 
      (filter === 'read' && notif.isRead))
    .filter(notif => 
      notif.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notif.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle>Notifications</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search notifications..."
                  className="w-full md:w-64 p-2 pl-8 border rounded-lg text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="w-4 h-4 absolute left-2 top-3 text-gray-400" />
              </div>
              <select
                className="p-2 border rounded-lg text-sm"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredNotifications.map((notification) => {
              const NotifIcon = notificationTypes[notification.type].icon;
              const color = notificationTypes[notification.type].color;
              const bgColor = `bg-${color}-100`;
              const textColor = `text-${color}-600`;

              return (
                <div
                  key={notification.id}
                  className={`border rounded-lg p-4 transition-all duration-200 ${
                    notification.isRead ? 'bg-white' : 'bg-blue-50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <NotifIcon className={`w-5 h-5 ${textColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ReviewsSection = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const reviews = [
    {
      id: 1,
      productName: "Wireless Headphones",
      productImage: "/api/placeholder/80/80",
      rating: 4,
      comment: "Great sound quality and comfortable for long sessions. Battery life could be better though.",
      date: "2024-02-15",
      likes: 12,
      status: 'published',
      helpful: 8
    },
    {
      id: 2,
      productName: "Smart Watch Pro",
      productImage: "/api/placeholder/80/80",
      rating: 5,
      comment: "Absolutely love this watch! The fitness tracking features are amazing and the battery life exceeds expectations.",
      date: "2024-02-10",
      likes: 24,
      status: 'published',
      helpful: 15
    },
    {
      id: 3,
      productName: "Laptop Stand",
      productImage: "/api/placeholder/80/80",
      rating: 3,
      comment: "Does the job but the build quality could be better. It's a bit wobbly with heavier laptops.",
      date: "2024-01-28",
      likes: 5,
      status: 'pending',
      helpful: 3
    }
  ];

  const StarRating = ({ rating }) => (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating 
              ? 'text-yellow-400 fill-current' 
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  const filteredReviews = reviews.filter(review => 
    filter === 'all' || review.status === filter
  );

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.date) - new Date(a.date);
      case 'rating-high':
        return b.rating - a.rating;
      case 'rating-low':
        return a.rating - b.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle>My Reviews</CardTitle>
            <div className="flex items-center space-x-4">
              <select
                className="p-2 border rounded-lg text-sm"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Reviews</option>
                <option value="published">Published</option>
                <option value="pending">Pending</option>
              </select>
              <select
                className="p-2 border rounded-lg text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recent">Most Recent</option>
                <option value="rating-high">Highest Rating</option>
                <option value="rating-low">Lowest Rating</option>
                <option value="helpful">Most Helpful</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {sortedReviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={review.productImage}
                    alt={review.productName}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{review.productName}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <StarRating rating={review.rating} />
                          <span className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          review.status === 'published' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                        </span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{review.comment}</p>
                    <div className="flex items-center space-x-4 mt-4">
                      <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{review.likes} Likes</span>
                      </button>
                      <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600">
                        <Star className="w-4 h-4" />
                        <span>{review.helpful} Found Helpful</span>
                      </button>
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        Edit Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};





const SettingsSection = () => {
  const SettingItem = ({ icon: Icon, title, description, children }) => (
    <div className="flex items-start space-x-4 p-4 border-b last:border-b-0">
      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
      <div className="flex-grow">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex-shrink-0">
        {children}
      </div>
    </div>
  );

  const Toggle = () => (
    <button className="w-11 h-6 bg-gray-200 rounded-full relative">
      <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <SettingItem
            icon={Mail}
            title="Email Notifications"
            description="Receive email updates about your account activity"
          >
            <Toggle />
          </SettingItem>
          
          <SettingItem
            icon={Smartphone}
            title="SMS Notifications"
            description="Get important updates via text message"
          >
            <Toggle />
          </SettingItem>

          <SettingItem
            icon={Bell}
            title="Push Notifications"
            description="Receive push notifications on your devices"
          >
            <Toggle />
          </SettingItem>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy & Security</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <SettingItem
            icon={Lock}
            title="Two-Factor Authentication"
            description="Add an extra layer of security to your account"
          >
            <Toggle />
          </SettingItem>

          <SettingItem
            icon={Shield}
            title="Login History"
            description="Monitor devices that have logged into your account"
          >
            <button className="text-blue-600 hover:text-blue-700">
              View History
              <ChevronRight className="w-4 h-4 inline ml-1" />
            </button>
          </SettingItem>
        </CardContent>
      </Card>

      {/* Appearance */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <SettingItem
            icon={Moon}
            title="Dark Mode"
            description="Switch between light and dark theme"
          >
            <Toggle />
          </SettingItem>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200">
              Delete Account
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};