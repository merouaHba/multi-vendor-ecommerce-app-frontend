import React from "react";
import {
  Search,
  Phone,
  Mail,
  MessageSquare,
  ShoppingBag,
  Truck,
  RefreshCcw,
  HelpCircle,
} from "lucide-react";

const CustomerServicePage = () => {
  const faqCategories = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Orders & Payments",
      topics: [
        "Track Order",
        "Payment Methods",
        "Cancellations",
        "Invoice Issues",
      ],
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Shipping & Delivery",
      topics: [
        "Delivery Times",
        "Shipping Costs",
        "International Shipping",
        "Track Package",
      ],
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: "Returns & Refunds",
      topics: [
        "Return Policy",
        "Return Process",
        "Refund Status",
        "Exchange Items",
      ],
    },
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      desc: "24/7 Customer Service",
      value: "1-800-123-4567",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      desc: "Response within 24 hours",
      value: "support@example.com",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      desc: "Available 9 AM - 6 PM",
      value: "Start Chat",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Customer Service</h1>
          <p className="mt-2 text-gray-600">How can we help you today?</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                {method.icon}
                <h3 className="ml-3 text-lg font-semibold">{method.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">{method.desc}</p>
              <p className="text-blue-600 font-medium">{method.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Help Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {faqCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="ml-3 text-lg font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.topics.map((topic, topicIndex) => (
                  <li
                    key={topicIndex}
                    className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer"
                  >
                    <HelpCircle className="w-4 h-4 mr-2" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Vendor Support Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Seller/Vendor Support</h2>
          <p className="text-gray-600 mb-4">
            Are you a seller looking for support? Access dedicated vendor
            support services and resources.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Access Vendor Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
