import React, { useState } from "react";
import {
  RotateCcw,
  CreditCard,
  Package,
  Clock,
  AlertTriangle,
  Truck,
  BadgeHelp,
  ChevronDown,
  ChevronUp,
  CalendarClock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ReturnRefundPolicy = () => {
  const [expandedFaq, setExpandedFaq] = useState<number|null>(null);

  const timelineSteps = [
    {
      title: "Request Return",
      description: "Log into your account and submit return request",
      icon: RotateCcw,
      status: "Step 1",
    },
    {
      title: "Approval",
      description: "Wait for return request approval (24-48 hours)",
      icon: Clock,
      status: "Step 2",
    },
    {
      title: "Ship Item",
      description: "Pack and ship item back using provided label",
      icon: Package,
      status: "Step 3",
    },
    {
      title: "Refund",
      description: "Receive refund after item inspection",
      icon: CreditCard,
      status: "Step 4",
    },
  ];

  const faqs = [
    {
      question: "How long do I have to return an item?",
      answer:
        "You have 30 days from the delivery date to initiate a return for most items. Some categories may have different timeframes.",
    },
    {
      question: "How will I receive my refund?",
      answer:
        "Refunds are processed to the original payment method. Processing time is 5-10 business days after we receive the return.",
    },
    {
      question: "Do I need to pay for return shipping?",
      answer:
        "Return shipping is free for defective items. For other returns, shipping costs may be deducted from the refund amount.",
    },
    {
      question: "What items cannot be returned?",
      answer:
        "Personalized items, perishables, intimate goods, and digital downloads cannot be returned. See full list in policy details.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Return & Refund Policy</h1>
        <p className="text-gray-600">Last updated: October 29, 2024</p>
      </div>

      {/* Quick Return Button */}
      <div className="mb-8">
        <Button className="w-full sm:w-auto flex items-center gap-2 text-lg py-6">
          <Package className="w-5 h-5" />
          Start Return Process
        </Button>
      </div>

      {/* Return Timeline */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-6">Return Process</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Eligibility Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Return Eligibility</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <CalendarClock className="w-5 h-5 text-green-600" />
                Eligible for Return
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Unused items in original packaging
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Defective or damaged products
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Wrong items received
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Items within 30-day window
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Not Eligible for Return
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Perishable goods
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Custom/personalized items
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Digital downloads
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Intimate items
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Refund Methods */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Refund Methods</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Original Payment</h3>
              <p className="text-sm text-gray-600">
                Refunded to original payment method within 5-10 business days
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Store Credit</h3>
              <p className="text-sm text-gray-600">
                Instant store credit with 10% bonus value
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Gift Card</h3>
              <p className="text-sm text-gray-600">
                Digital gift card sent via email
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shipping Guidelines */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Truck className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">
              Return Shipping Guidelines
            </h2>
          </div>
          <Alert>
            <AlertDescription>
              Please ensure items are properly packaged to prevent damage during
              transit. Use original packaging when possible.
            </AlertDescription>
          </Alert>
          <div className="mt-4 space-y-3 text-gray-600">
            <p>• Free return shipping for defective items</p>
            <p>• Prepaid return label provided after approval</p>
            <p>• Returns must be shipped within 7 days of approval</p>
            <p>• Include all original accessories and documentation</p>
          </div>
        </CardContent>
      </Card>

      {/* FAQs */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <BadgeHelp className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <span className="font-medium">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-4 py-3 bg-gray-50 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            Our customer support team is here to help with your return or refund
            questions.
          </p>
          <div className="flex gap-4">
            <Button variant="outline">Contact Support</Button>
            <Button variant="outline">Live Chat</Button>
          </div>
        </CardContent>
      </Card>

      <footer className="mt-8 text-center text-gray-600 text-sm">
        <p>This return & refund policy is effective as of October 29, 2024</p>
      </footer>
    </div>
  );
};

export default ReturnRefundPolicy;
