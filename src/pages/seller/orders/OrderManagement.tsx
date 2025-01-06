// types.ts
interface OrderItem {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
  sku: string;
}

interface OrderAddress {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  orderDate: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  paymentStatus: "paid" | "pending" | "failed";
  items: OrderItem[];
  shippingAddress: OrderAddress;
  billingAddress: OrderAddress;
  shippingMethod: string;
  trackingNumber?: string;
}

// OrderManagement.tsx
import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  ChevronDown,
  Package,
  Truck,
  Check,
  X,
} from "lucide-react";

const OrderManagement: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: "",
    end: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Orders Management</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export Orders
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full pl-4 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Date Range */}
          <div>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) =>
                setDateRange((prev) => ({ ...prev, start: e.target.value }))
              }
              className="w-full py-2 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) =>
                setDateRange((prev) => ({ ...prev, end: e.target.value }))
              }
              className="w-full py-2 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Order Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-xl font-semibold">1,234</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Package className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-xl font-semibold">45</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Truck className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Shipped</p>
              <p className="text-xl font-semibold">89</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Check className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Delivered</p>
              <p className="text-xl font-semibold">892</p>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Sample Order Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">
                  #ORD-2024-1234
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">John Doe</td>
                <td className="px-6 py-4 text-sm text-gray-900">2024-02-15</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">$299.99</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-3 border-t">
          <div className="flex items-center">
            <span className="text-sm text-gray-700">
              Showing 1 to 10 of 100 entries
            </span>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border rounded bg-blue-500 text-white">
              1
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  Order #{selectedOrder.orderNumber}
                </h2>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Order Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-2">Customer Information</h3>
                  <p>Name: {selectedOrder.customerName}</p>
                  <p>Order Date: {selectedOrder.orderDate}</p>
                  <p>Status: {selectedOrder.status}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Shipping Information</h3>
                  <p>Method: {selectedOrder.shippingMethod}</p>
                  <p>
                    Tracking: {selectedOrder.trackingNumber || "Not available"}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Order Items</h3>
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">Product</th>
                      <th className="px-4 py-2 text-left">SKU</th>
                      <th className="px-4 py-2 text-right">Qty</th>
                      <th className="px-4 py-2 text-right">Price</th>
                      <th className="px-4 py-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item) => (
                      <tr key={item.id} className="border-t">
                        <td className="px-4 py-2">{item.productName}</td>
                        <td className="px-4 py-2">{item.sku}</td>
                        <td className="px-4 py-2 text-right">
                          {item.quantity}
                        </td>
                        <td className="px-4 py-2 text-right">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="px-4 py-2 text-right">
                          ${item.total.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  onClick={() => setSelectedOrder(null)}
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Update Status
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// OrderStatusBadge.tsx
const OrderStatusBadge: React.FC<{ status: Order["status"] }> = ({
  status,
}) => {
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800",
    shipped: "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default OrderManagement;
