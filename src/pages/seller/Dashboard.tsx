// import React, { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   LayoutGrid,
//   Package,
//   ShoppingCart,
//   BarChart3,
//   Wallet,
//   User,
//   Settings,
// } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const mockData = {
//   salesData: [
//     { month: "Jan", sales: 4000 },
//     { month: "Feb", sales: 3000 },
//     { month: "Mar", sales: 5000 },
//     { month: "Apr", sales: 4500 },
//     { month: "May", sales: 6000 },
//     { month: "Jun", sales: 5500 },
//   ],
//   recentOrders: [
//     {
//       id: "1",
//       product: "Gaming Mouse",
//       customer: "John Doe",
//       status: "Pending",
//       amount: 59.99,
//     },
//     {
//       id: "2",
//       product: "Mechanical Keyboard",
//       customer: "Jane Smith",
//       status: "Shipped",
//       amount: 129.99,
//     },
//     {
//       id: "3",
//       product: "USB Cable",
//       customer: "Mike Johnson",
//       status: "Delivered",
//       amount: 9.99,
//     },
//   ],
//   stats: {
//     totalProducts: 45,
//     pendingOrders: 12,
//     totalSales: 15789.5,
//     monthlyRevenue: 3421.75,
//   },
// };

// const SellerDashboard = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pending":
//         return "text-yellow-600";
//       case "Shipped":
//         return "text-blue-600";
//       case "Delivered":
//         return "text-green-600";
//       default:
//         return "text-gray-600";
//     }
//   };

//   const navigationItems = [
//     { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
//     { id: "products", label: "Products", icon: Package },
//     { id: "orders", label: "Orders", icon: ShoppingCart },
//     { id: "analytics", label: "Analytics", icon: BarChart3 },
//     { id: "payments", label: "Payments", icon: Wallet },
//     { id: "profile", label: "Profile", icon: User },
//     { id: "settings", label: "Settings", icon: Settings },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-lg">
//         <div className="p-4">
//           <h2 className="text-xl font-bold text-gray-800">Seller Portal</h2>
//         </div>
//         <nav className="mt-4">
//           {navigationItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`w-full flex items-center px-4 py-3 text-left
//                 ${
//                   activeTab === item.id
//                     ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
//                     : "text-gray-600 hover:bg-gray-50"
//                 }`}
//             >
//               <item.icon className="w-5 h-5 mr-3" />
//               {item.label}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Welcome back, Seller!
//           </h1>
//           <p className="text-gray-600">
//             Here's what's happening with your store today.
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between pb-2">
//               <CardTitle className="text-sm font-medium text-gray-600">
//                 Total Products
//               </CardTitle>
//               <Package className="w-4 h-4 text-gray-600" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">
//                 {mockData.stats.totalProducts}
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between pb-2">
//               <CardTitle className="text-sm font-medium text-gray-600">
//                 Pending Orders
//               </CardTitle>
//               <ShoppingCart className="w-4 h-4 text-gray-600" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">
//                 {mockData.stats.pendingOrders}
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between pb-2">
//               <CardTitle className="text-sm font-medium text-gray-600">
//                 Total Sales
//               </CardTitle>
//               <BarChart3 className="w-4 h-4 text-gray-600" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">
//                 ${mockData.stats.totalSales.toLocaleString()}
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between pb-2">
//               <CardTitle className="text-sm font-medium text-gray-600">
//                 Monthly Revenue
//               </CardTitle>
//               <Wallet className="w-4 h-4 text-gray-600" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">
//                 ${mockData.stats.monthlyRevenue.toLocaleString()}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <Card>
//             <CardHeader>
//               <CardTitle>Sales Overview</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="h-[300px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={mockData.salesData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Recent Orders</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="text-left text-sm text-gray-600">
//                       <th className="pb-3">Order ID</th>
//                       <th className="pb-3">Product</th>
//                       <th className="pb-3">Customer</th>
//                       <th className="pb-3">Status</th>
//                       <th className="pb-3 text-right">Amount</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {mockData.recentOrders.map((order) => (
//                       <tr key={order.id} className="border-t">
//                         <td className="py-3">{order.id}</td>
//                         <td className="py-3">{order.product}</td>
//                         <td className="py-3">{order.customer}</td>
//                         <td className="py-3">
//                           <span className={`${getStatusColor(order.status)}`}>
//                             {order.status}
//                           </span>
//                         </td>
//                         <td className="py-3 text-right">${order.amount}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;


import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import {
  LayoutGrid,
  Package,
  ShoppingCart,
  BarChart3,
  Wallet,
  User,
  Settings,
  LogOut,
  Bell,
  Search,
  Plus,
  Filter,
  Edit,
  Trash2,
  Download,
  Upload,
  DollarSign,
  CheckCircle,
  XCircle,
  Star,
} from "lucide-react";
import { 
  Card, CardContent, CardHeader, CardTitle,
  Alert, AlertDescription
} from "@/components/ui/card";

// Mock data for different sections
const mockData = {
  products: [
    { id: 1, name: 'Gaming Mouse', price: 59.99, stock: 45, category: 'Electronics', status: 'Active' },
    { id: 2, name: 'Mechanical Keyboard', price: 129.99, stock: 30, category: 'Electronics', status: 'Active' },
    { id: 3, name: 'USB Cable', price: 9.99, stock: 100, category: 'Accessories', status: 'Inactive' },
  ],
  orders: [
    { id: 'ORD001', customer: 'John Doe', items: 2, total: 189.98, status: 'Pending', date: '2024-03-01' },
    { id: 'ORD002', customer: 'Jane Smith', items: 1, total: 129.99, status: 'Shipped', date: '2024-03-02' },
    { id: 'ORD003', customer: 'Mike Johnson', items: 3, total: 79.97, status: 'Delivered', date: '2024-03-03' },
  ],
  analytics: {
    salesByCategory: [
      { name: 'Electronics', value: 12000 },
      { name: 'Accessories', value: 8000 },
      { name: 'Clothing', value: 5000 },
    ],
    monthlyRevenue: [
      { month: 'Jan', revenue: 4000 },
      { month: 'Feb', revenue: 3000 },
      { month: 'Mar', revenue: 5000 },
    ],
    metrics: {
      conversionRate: '3.2%',
      averageOrderValue: '$85.50',
      customerRetentionRate: '68%',
    }
  },
  payments: [
    { id: 'PAY001', amount: 1289.99, status: 'Completed', date: '2024-03-01', method: 'Bank Transfer' },
    { id: 'PAY002', amount: 759.50, status: 'Pending', date: '2024-03-02', method: 'PayPal' },
    { id: 'PAY003', amount: 459.97, status: 'Completed', date: '2024-03-03', method: 'Stripe' },
  ],
  notifications: [
    { id: 1, type: 'order', message: 'New order received #ORD001', time: '5 min ago' },
    { id: 2, type: 'stock', message: 'Low stock alert: Gaming Mouse', time: '1 hour ago' },
    { id: 3, type: 'payment', message: 'Payment received #PAY001', time: '2 hours ago' },
  ]
};

// const SellerDashboard = () => {
//   const [activeSection, setActiveSection] = useState('dashboard');
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [profileData, setProfileData] = useState({
//     name: 'John Seller',
//     email: 'john@seller.com',
//     phone: '+1 234 567 8900',
//     address: '123 Seller Street',
//     storeName: 'John\'s Electronics',
//     storeDescription: 'Best electronics store in town'
//   });



  // Products Section
  const ProductsSection = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Products Management</h2>
        <div className="flex gap-4">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
            <Plus className="w-4 h-4 mr-2" /> Add Product
          </button>
          <button className="flex items-center px-4 py-2 border rounded-lg">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>
        </div>
      </div>
      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Product</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockData.products.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="px-4 py-3">{product.name}</td>
                  <td className="px-4 py-3">${product.price}</td>
                  <td className="px-4 py-3">{product.stock}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );

  // Orders Section
  const OrdersSection = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Order Management</h2>
        <div className="flex gap-4">
          <button className="flex items-center px-4 py-2 border rounded-lg">
            <Download className="w-4 h-4 mr-2" /> Export
          </button>
          <button className="flex items-center px-4 py-2 border rounded-lg">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>
        </div>
      </div>
      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Order ID</th>
                <th className="px-4 py-3 text-left">Customer</th>
                <th className="px-4 py-3 text-left">Items</th>
                <th className="px-4 py-3 text-left">Total</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {mockData.orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="px-4 py-3">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.items}</td>
                  <td className="px-4 py-3">${order.total}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );

  // Analytics Section
  const AnalyticsSection = () => (
    <div>
      <h2 className="text-2xl font-bold mb-6">Analytics & Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {Object.entries(mockData.analytics.metrics).map(([key, value]) => (
          <Card key={key}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData.analytics.monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mockData.analytics.salesByCategory}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                  >
                    {mockData.analytics.salesByCategory.map((entry, index) => (
                      <Cell key={index} fill={['#3b82f6', '#60a5fa', '#93c5fd'][index % 3]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Payments Section
  const PaymentsSection = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Payment History</h2>
        <button className="flex items-center px-4 py-2 border rounded-lg">
          <Download className="w-4 h-4 mr-2" /> Export
        </button>
      </div>
      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Payment ID</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Method</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {mockData.payments.map((payment) => (
                <tr key={payment.id} className="border-t">
                  <td className="px-4 py-3">{payment.id}</td>
                  <td className="px-4 py-3">${payment.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      payment.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{payment.method}</td>
                  <td className="px-4 py-3">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );



// Profile Section
const ProfileSection = ({profileData}) => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={profileData.name}
              onChange={(e) => setProfileData({...profileData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              className="w-full p-2 border rounded-lg"
              value={profileData.phone}
              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={profileData.address}
              onChange={(e) => setProfileData({...profileData, address: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Store Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={profileData.storeName}
              onChange={(e) => setProfileData({...profileData, storeName: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Store Description
            </label>
            <textarea
              className="w-full p-2 border rounded-lg"
              rows="3"
              value={profileData.storeDescription}
              onChange={(e) => setProfileData({...profileData, storeDescription: e.target.value})}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Save Changes
          </button>
        </div>
      </CardContent>
    </Card>
  </div>
);

// Settings Section
const SettingsSection = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
    <div className="grid grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span>SMS Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg"
                placeholder="Confirm new password"
              />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Update Password
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

// Notifications Panel
const NotificationsPanel = ({ notifications, onClose }) => (
  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border">
    <div className="p-4 border-b">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Notifications</h3>
        <button onClick={onClose}>
          <XCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div className="max-h-96 overflow-y-auto">
      {notifications.map((notification) => (
        <div key={notification.id} className="p-4 border-b hover:bg-gray-50">
          <div className="flex items-start">
            <div className="flex-1">
              <p className="text-sm">{notification.message}</p>
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DashboardSection = () => {
  const stats = {
    totalSales: {
      value: "$15,789.50",
      change: "+12.5%",
      trending: "up",
    },
    totalOrders: {
      value: "156",
      change: "+8.2%",
      trending: "up",
    },
    avgOrderValue: {
      value: "$101.21",
      change: "+4.3%",
      trending: "up",
    },
    pendingOrders: {
      value: "23",
      change: "-2.1%",
      trending: "down",
    },
  };

  const recentActivity = [
    {
      id: 1,
      type: "order",
      title: "New Order #ORD001",
      time: "5 min ago",
      amount: "$259.99",
      status: "Pending",
    },
    {
      id: 2,
      type: "payment",
      title: "Payment Received",
      time: "2 hours ago",
      amount: "$1,289.50",
      status: "Completed",
    },
    {
      id: 3,
      type: "stock",
      title: "Low Stock Alert",
      time: "3 hours ago",
      product: "Gaming Mouse",
      quantity: "5 left",
    },
    {
      id: 4,
      type: "review",
      title: "New Review",
      time: "5 hours ago",
      rating: "4.5",
      product: "Mechanical Keyboard",
    },
  ];

  const salesData = [
    { name: "Mon", sales: 2400 },
    { name: "Tue", sales: 1398 },
    { name: "Wed", sales: 9800 },
    { name: "Thu", sales: 3908 },
    { name: "Fri", sales: 4800 },
    { name: "Sat", sales: 3800 },
    { name: "Sun", sales: 4300 },
  ];

  const topProducts = [
    { name: "Gaming Mouse", sales: 145, revenue: 8674.55, trend: "+12%" },
    { name: "Mechanical Keyboard", sales: 125, revenue: 16237.5, trend: "+8%" },
    { name: "USB Cable", sales: 234, revenue: 2336.66, trend: "+15%" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(stats).map(([key, stat]) => (
          <Card key={key}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">
                  {key.split(/(?=[A-Z])/).join(" ")}
                </p>
                <span
                  className={`text-sm ${
                    stat.trending === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    {activity.type === "order" && (
                      <ShoppingCart className="w-4 h-4 text-blue-600" />
                    )}
                    {activity.type === "payment" && (
                      <DollarSign className="w-4 h-4 text-green-600" />
                    )}
                    {activity.type === "stock" && (
                      <Package className="w-4 h-4 text-red-600" />
                    )}
                    {activity.type === "review" && (
                      <Star className="w-4 h-4 text-yellow-600" />
                    )}
                    <div>
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                  {activity.amount && (
                    <span
                      className={`text-sm font-medium ${
                        activity.status === "Completed"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {activity.amount}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Products */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-600">
                  <th className="pb-3 px-4">Product Name</th>
                  <th className="pb-3 px-4">Sales</th>
                  <th className="pb-3 px-4">Revenue</th>
                  <th className="pb-3 px-4">Trend</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-3 px-4">{product.name}</td>
                    <td className="py-3 px-4">{product.sales}</td>
                    <td className="py-3 px-4">
                      $
                      {product.revenue.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="py-3 px-4 text-green-600">
                      {product.trend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <button className="w-full flex items-center justify-center space-x-2 py-4 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
              <Plus className="w-5 h-5" />
              <span>Add New Product</span>
            </button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <button className="w-full flex items-center justify-center space-x-2 py-4 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
              <Download className="w-5 h-5" />
              <span>Download Reports</span>
            </button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <button className="w-full flex items-center justify-center space-x-2 py-4 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
              <Settings className="w-5 h-5" />
              <span>Update Settings</span>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


// Main Dashboard Component
const SellerDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showNotifications, setShowNotifications] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Seller",
    email: "john@seller.com",
    phone: "+1 234 567 8900",
    address: "123 Seller Street",
    storeName: "John's Electronics",
    storeDescription: "Best electronics store in town",
  });
  //   // Navigation items
    const navigationItems = [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
      { id: 'products', label: 'Products', icon: Package },
      { id: 'orders', label: 'Orders', icon: ShoppingCart },
      { id: 'analytics', label: 'Analytics', icon: BarChart3 },
      { id: 'payments', label: 'Payments', icon: Wallet },
      { id: 'profile', label: 'Profile', icon: User },
      { id: 'settings', label: 'Settings', icon: Settings },
    ];
  const renderSection = () => {
    switch (activeSection) {
      case "products":
        return <ProductsSection />;
      case "orders":
        return <OrdersSection />;
      case "analytics":
        return <AnalyticsSection />;
      case "payments":
        return <PaymentsSection />;
      case "profile":
        return <ProfileSection profileData={profileData}/>;
      case "settings":
        return <SettingsSection />;
      default:
        return <DashboardSection />;
    }
  };

  // Main layout
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Seller Portal</h2>
        </div>
        <nav className="mt-4">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left
                ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              /* Handle logout */
            }}
            className="w-full flex items-center px-4 py-3 text-left text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {navigationItems.find((item) => item.id === activeSection)
                ?.label || "Dashboard"}
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-gray-100 rounded-full relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                {showNotifications && (
                  <NotificationsPanel
                    notifications={mockData.notifications}
                    onClose={() => setShowNotifications(false)}
                  />
                )}
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                {profileData.name.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-8">{renderSection()}</main>
      </div>
    </div>
  );
};

export default SellerDashboard;