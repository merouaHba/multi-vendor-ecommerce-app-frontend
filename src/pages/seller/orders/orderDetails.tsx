// types.ts
interface OrderStatus {
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  timestamp: string;
  note?: string;
}

interface OrderTimeline {
  id: string;
  status: OrderStatus;
  updatedBy: string;
}

interface Order {
  id: string;
  orderNumber: string;
  orderDate: string;
  customerName: string;
  customerEmail: string;
  status: OrderStatus["status"];
  paymentStatus: "paid" | "pending" | "failed";
  paymentMethod: string;
  total: number;
  subtotal: number;
  tax: number;
  shippingCost: number;
  items: OrderItem[];
  shippingAddress: OrderAddress;
  billingAddress: OrderAddress;
  timeline: OrderTimeline[];
  notes: string[];
}

// OrderDetails.tsx
import React, { useState } from "react";
import {
  ArrowLeft,
  Printer,
  Download,
  Clock,
  Package,
  Truck,
  Check,
  X,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

const OrderDetails: React.FC = () => {
  const [order, setOrder] = useState<Order>({
    id: "1",
    orderNumber: "ORD-2024-1234",
    orderDate: "2024-02-15T10:30:00",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    status: "processing",
    paymentStatus: "paid",
    paymentMethod: "Credit Card",
    total: 299.99,
    subtotal: 279.99,
    tax: 10.0,
    shippingCost: 10.0,
    items: [
      {
        id: "1",
        productName: "Wireless Headphones",
        sku: "WH-001",
        quantity: 1,
        price: 279.99,
        total: 279.99,
      },
    ],
    shippingAddress: {
      fullName: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
      phone: "+1 234-567-8900",
    },
    billingAddress: {
      fullName: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
      phone: "+1 234-567-8900",
    },
    timeline: [
      {
        id: "1",
        status: {
          status: "processing",
          timestamp: "2024-02-15T10:30:00",
          note: "Order confirmed and processing started",
        },
        updatedBy: "System",
      },
    ],
    notes: ["Customer requested express shipping"],
  });

  const [newNote, setNewNote] = useState("");
  const [updateStatus, setUpdateStatus] = useState<OrderStatus["status"]>(
    order.status
  );

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-800">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Order #{order.orderNumber}
            </h1>
            <p className="text-gray-500">
              Placed on {new Date(order.orderDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Printer className="h-4 w-4" />
            Print
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Download className="h-4 w-4" />
            Export
          </button>
          <select
            value={updateStatus}
            onChange={(e) =>
              setUpdateStatus(e.target.value as OrderStatus["status"])
            }
            className="px-4 py-2 border rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            <option value="pending">Set as Pending</option>
            <option value="processing">Set as Processing</option>
            <option value="shipped">Set as Shipped</option>
            <option value="delivered">Set as Delivered</option>
            <option value="cancelled">Cancel Order</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="col-span-2 space-y-6">
          {/* Order Status */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Order Status</h2>
            <div className="flex justify-between mb-8">
              <div className="flex items-center gap-2">
                {order.status === "pending" && (
                  <Clock className="h-5 w-5 text-yellow-500" />
                )}
                {order.status === "processing" && (
                  <Package className="h-5 w-5 text-blue-500" />
                )}
                {order.status === "shipped" && (
                  <Truck className="h-5 w-5 text-purple-500" />
                )}
                {order.status === "delivered" && (
                  <Check className="h-5 w-5 text-green-500" />
                )}
                {order.status === "cancelled" && (
                  <X className="h-5 w-5 text-red-500" />
                )}
                <span className="font-medium">
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    order.paymentStatus === "paid"
                      ? "bg-green-100 text-green-800"
                      : order.paymentStatus === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  Payment:{" "}
                  {order.paymentStatus.charAt(0).toUpperCase() +
                    order.paymentStatus.slice(1)}
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div className="border-t pt-4">
              <h3 className="font-medium mb-4">Order Timeline</h3>
              <div className="space-y-4">
                {order.timeline.map((event, index) => (
                  <div key={event.id} className="flex gap-4">
                    <div className="relative">
                      <div className="h-4 w-4 rounded-full bg-blue-500" />
                      {index !== order.timeline.length - 1 && (
                        <div className="absolute top-4 left-2 -ml-px h-full w-0.5 bg-gray-200" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">
                        {event.status.status.charAt(0).toUpperCase() +
                          event.status.status.slice(1)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(event.status.timestamp).toLocaleString()}
                      </p>
                      {event.status.note && (
                        <p className="text-sm text-gray-600 mt-1">
                          {event.status.note}
                        </p>
                      )}
                      <p className="text-sm text-gray-500">
                        Updated by: {event.updatedBy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-4 border-b"
                >
                  <div className="bg-gray-100 rounded-lg p-2">
                    <img
                      src="/api/placeholder/80/80"
                      alt={item.productName}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.productName}</h3>
                    <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${item.total.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="mt-6 border-t pt-4">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>${order.shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-medium text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">{order.customerName}</p>
                <p className="text-gray-500">{order.customerEmail}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Shipping Address</h3>
                <address className="text-gray-600 not-italic">
                  {order.shippingAddress.fullName}
                  <br />
                  {order.shippingAddress.address}
                  <br />
                  {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                  {order.shippingAddress.zipCode}
                  <br />
                  {order.shippingAddress.country}
                  <br />
                  {order.shippingAddress.phone}
                </address>
              </div>
              <div>
                <h3 className="font-medium mb-2">Billing Address</h3>
                <address className="text-gray-600 not-italic">
                  {order.billingAddress.fullName}
                  <br />
                  {order.billingAddress.address}
                  <br />
                  {order.billingAddress.city}, {order.billingAddress.state}{" "}
                  {order.billingAddress.zipCode}
                  <br />
                  {order.billingAddress.country}
                  <br />
                  {order.billingAddress.phone}
                </address>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Method</span>
                <span>{order.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    order.paymentStatus === "paid"
                      ? "bg-green-100 text-green-800"
                      : order.paymentStatus === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {order.paymentStatus.charAt(0).toUpperCase() +
                    order.paymentStatus.slice(1)}
                </span>
              </div>
            </div>
          </div>

          {/* Order Notes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Order Notes</h2>
            <div className="space-y-4">
              {order.notes.map((note, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">{note}</p>
                </div>
              ))}
              <div>
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Add a note..."
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => {
                    if (newNote.trim()) {
                      setOrder((prev) => ({
                        ...prev,
                        notes: [...prev.notes, newNote.trim()],
                      }));
                      setNewNote("");
                    }
                  }}
                >
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
