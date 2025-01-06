import  React,{ useState } from "react";
import { Search, Package, Truck, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OrderTrackingPage = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [showTracking, setShowTracking] = useState(false);

  // Mock order status data
  const orderStatus = {
    orderNumber: "ORD-2024-1234",
    orderDate: "2024-10-28",
    estimatedDelivery: "2024-11-05",
    status: "in_transit",
    currentLocation: "Distribution Center, New York",
    items: [
      { name: "Wireless Headphones", quantity: 1, price: "$129.99" },
      { name: "Phone Case", quantity: 2, price: "$24.99" },
    ],
    trackingSteps: [
      { status: "Order Placed", date: "Oct 28, 2024", completed: true },
      { status: "Processing", date: "Oct 29, 2024", completed: true },
      { status: "In Transit", date: "Oct 30, 2024", completed: true },
      { status: "Out for Delivery", date: "Nov 1, 2024", completed: false },
      { status: "Delivered", date: "Est. Nov 5, 2024", completed: false },
    ],
  };

  const handleTrackOrder = (e:React.FormEvent) => {
    e.preventDefault();
    setShowTracking(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>

      {/* Search Form */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <form onSubmit={handleTrackOrder} className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter your order number"
                className="w-full p-3 border rounded-lg"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700"
            >
              <Search size={20} />
              Track Order
            </button>
          </form>
        </CardContent>
      </Card>

      {showTracking && (
        <div className="space-y-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Order Number</p>
                  <p className="font-medium">{orderStatus.orderNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Order Date</p>
                  <p className="font-medium">{orderStatus.orderDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Estimated Delivery</p>
                  <p className="font-medium">{orderStatus.estimatedDelivery}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Current Location</p>
                  <p className="font-medium">{orderStatus.currentLocation}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tracking Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Tracking Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200" />
                {orderStatus.trackingSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex items-center mb-8 last:mb-0"
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        step.completed ? "bg-green-100" : "bg-gray-100"
                      }`}
                    >
                      {index === 0 && (
                        <Package
                          size={24}
                          className={
                            step.completed ? "text-green-600" : "text-gray-400"
                          }
                        />
                      )}
                      {index === 1 && (
                        <Clock
                          size={24}
                          className={
                            step.completed ? "text-green-600" : "text-gray-400"
                          }
                        />
                      )}
                      {index === 2 && (
                        <Truck
                          size={24}
                          className={
                            step.completed ? "text-green-600" : "text-gray-400"
                          }
                        />
                      )}
                      {index === 3 && (
                        <Truck
                          size={24}
                          className={
                            step.completed ? "text-green-600" : "text-gray-400"
                          }
                        />
                      )}
                      {index === 4 && (
                        <CheckCircle
                          size={24}
                          className={
                            step.completed ? "text-green-600" : "text-gray-400"
                          }
                        />
                      )}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">{step.status}</p>
                      <p className="text-sm text-gray-500">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {orderStatus.items.map((item, index) => (
                  <div
                    key={index}
                    className="py-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">{item.price}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default OrderTrackingPage;
