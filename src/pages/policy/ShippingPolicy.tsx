import React, { useState } from "react";
import {
  Truck,
  Globe,
  Clock,
  Package,
  MapPin,
  // DollarSign,
  // Search,
  AlertCircle,
  Info,
  ChevronDown,
  ChevronUp,
  PackageSearch,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
type Method ={
        name: string,
        time: string,
        cost: string,
        details:string,
        benefits: string[],
      }
const ShippingPolicy = () => {
  const [selectedTab, setSelectedTab] = useState<"international" | "domestic">(
    "domestic"
  );
  const [expandedMethod, setExpandedMethod] = useState<number | null>(null);

  const shippingMethods = {
    domestic: [
      {
        name: "Standard Shipping",
        time: "3-5 business days",
        cost: "From $4.99",
        details:
          "Most economical option for non-urgent deliveries. Tracking included.",
        benefits: ["Cost-effective", "Reliable delivery", "Full tracking"],
      },
      {
        name: "Express Shipping",
        time: "1-2 business days",
        cost: "From $9.99",
        details: "Fast delivery for time-sensitive orders. Priority handling.",
        benefits: ["Faster delivery", "Priority handling", "Guaranteed timing"],
      },
      {
        name: "Same Day Delivery",
        time: "Same business day",
        cost: "From $14.99",
        details:
          "Available for select areas when ordered before 2 PM local time.",
        benefits: ["Fastest option", "Real-time tracking", "Direct delivery"],
      },
    ],
    international: [
      {
        name: "Standard International",
        time: "7-14 business days",
        cost: "From $19.99",
        details: "Economic international shipping with tracking.",
        benefits: ["Worldwide delivery", "Customs handling", "Basic tracking"],
      },
      {
        name: "Express International",
        time: "3-5 business days",
        cost: "From $39.99",
        details: "Priority international shipping with full tracking.",
        benefits: ["Priority customs", "Fast delivery", "Full tracking"],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Shipping Policy</h1>
        <p className="text-gray-600">Last updated: October 29, 2024</p>
      </div>

      {/* Quick Track Package */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <PackageSearch className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Track Your Package</h2>
          </div>
          <div className="flex gap-4">
            <Input placeholder="Enter tracking number" className="max-w-md" />
            <Button>Track</Button>
          </div>
        </CardContent>
      </Card>

      {/* Processing Times */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Order Processing</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <h3 className="font-medium">Processing Time</h3>
              </div>
              <p className="text-gray-600">1-2 business days</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-blue-600" />
                <h3 className="font-medium">Order Cutoff</h3>
              </div>
              <p className="text-gray-600">2 PM local time</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <h3 className="font-medium">Peak Times</h3>
              </div>
              <p className="text-gray-600">May experience delays</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shipping Methods */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Methods</h2>

          <div className="flex gap-4 mb-6">
            <Button
              variant={selectedTab === "domestic" ? "default" : "outline"}
              onClick={() => setSelectedTab("domestic")}
              className="flex items-center gap-2"
            >
              <Truck className="w-4 h-4" />
              Domestic Shipping
            </Button>
            <Button
              variant={selectedTab === "international" ? "default" : "outline"}
              onClick={() => setSelectedTab("international")}
              className="flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              International Shipping
            </Button>
          </div>

          <div className="space-y-4">
            {shippingMethods[selectedTab].map(
              (method: Method, index: number) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <div
                    className="p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() =>
                      setExpandedMethod(expandedMethod === index ? null : index)
                    }
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <Truck className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{method.name}</h3>
                          <p className="text-sm text-gray-600">{method.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-medium">{method.cost}</span>
                        {expandedMethod === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>
                  {expandedMethod === index && (
                    <div className="p-4 bg-gray-50 border-t">
                      <p className="text-gray-600 mb-3">{method.details}</p>
                      <div className="space-y-2">
                        {method.benefits.map((benefit: string, idx: number) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>

      {/* Delivery Areas */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Delivery Areas</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Domestic Service Areas</h3>
              <Alert>
                <AlertDescription>
                  Free shipping on orders over $50 within the continental US.
                </AlertDescription>
              </Alert>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>• All 50 US states</p>
                <p>• US territories</p>
                <p>• APO/FPO addresses</p>
                <p>• PO boxes (Standard shipping only)</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">International Coverage</h3>
              <Alert>
                <AlertDescription>
                  International shipping available to 150+ countries.
                </AlertDescription>
              </Alert>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>• Major international destinations</p>
                <p>• EU countries</p>
                <p>• Asia Pacific region</p>
                <p>• Limited restricted countries</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Additional Information</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Order Tracking</h3>
              <p className="text-sm text-gray-600">
                Track your order through your account or using the tracking
                number provided in your shipping confirmation email.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Shipping Insurance</h3>
              <p className="text-sm text-gray-600">
                All orders over $100 include complimentary shipping insurance.
                Additional coverage available for purchase.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Special Handling</h3>
              <p className="text-sm text-gray-600">
                Additional fees may apply for oversized items or special
                handling requirements.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Support</h2>
          <p className="text-gray-600 mb-4">
            Need help with your shipment? Our support team is available 24/7.
          </p>
          <div className="flex gap-4">
            <Button variant="outline">Contact Support</Button>
            <Button variant="outline">View FAQs</Button>
          </div>
        </CardContent>
      </Card>

      <footer className="mt-8 text-center text-gray-600 text-sm">
        <p>This shipping policy is effective as of October 29, 2024</p>
      </footer>
    </div>
  );
};

export default ShippingPolicy;
