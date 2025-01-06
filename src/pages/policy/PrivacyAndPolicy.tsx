import React, { useState } from "react";
import {
  Shield,
  UserCircle,
  Share2,
  Lock,
  Cookie,
  Settings,
  ExternalLink,
  Search,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PrivacyPolicy = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    {
      id: "collection",
      icon: UserCircle,
      title: "Information We Collect",
      content: (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Types of Data Collected:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h4 className="font-medium mb-2">Personal Information</h4>
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                <li>Name and contact details</li>
                <li>Shipping and billing addresses</li>
                <li>Email address</li>
                <li>Phone number</li>
              </ul>
            </Card>
            <Card className="p-4">
              <h4 className="font-medium mb-2">Technical Data</h4>
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Usage statistics</li>
              </ul>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "usage",
      icon: Share2,
      title: "How We Use Information",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Essential Uses</h4>
              <ul className="list-disc pl-4 text-gray-600">
                <li>Process transactions</li>
                <li>Fulfill orders</li>
                <li>Customer support</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Service Improvement</h4>
              <ul className="list-disc pl-4 text-gray-600">
                <li>Analytics</li>
                <li>User experience</li>
                <li>Feature development</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Communication</h4>
              <ul className="list-disc pl-4 text-gray-600">
                <li>Order updates</li>
                <li>Marketing (with consent)</li>
                <li>Service notifications</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "sharing",
      icon: Lock,
      title: "Information Sharing",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">We share your information with:</p>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium">Vendors</h4>
              <p className="text-gray-600">
                Only for order fulfillment purposes
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium">Service Providers</h4>
              <p className="text-gray-600">
                Payment processing, shipping, analytics
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-medium">Legal Requirements</h4>
              <p className="text-gray-600">
                When required by law or court order
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "security",
      icon: Shield,
      title: "Data Security",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-blue-800">
              We implement industry-standard security measures to protect your
              data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h4 className="font-medium mb-2">Technical Measures</h4>
              <ul className="list-disc pl-4 text-gray-600">
                <li>SSL encryption</li>
                <li>Secure payment processing</li>
                <li>Regular security audits</li>
                <li>Firewalls and monitoring</li>
              </ul>
            </Card>
            <Card className="p-4">
              <h4 className="font-medium mb-2">Organizational Measures</h4>
              <ul className="list-disc pl-4 text-gray-600">
                <li>Employee training</li>
                <li>Access controls</li>
                <li>Data handling procedures</li>
                <li>Incident response plan</li>
              </ul>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "rights",
      icon: Settings,
      title: "User Rights",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {["Access", "Rectification", "Erasure", "Portability"].map(
              (right) => (
                <div key={right} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Right to {right}</h4>
                  <p className="text-gray-600">
                    You can request to {right.toLowerCase()} your personal data
                    at any time. Contact our support team to exercise this
                    right.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      ),
    },
    {
      id: "cookies",
      icon: Cookie,
      title: "Cookies",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <p className="text-yellow-800">
              We use cookies to improve your browsing experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Essential Cookies</h4>
              <p className="text-gray-600">
                Required for basic site functionality
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Analytics Cookies</h4>
              <p className="text-gray-600">Help us improve our services</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Marketing Cookies</h4>
              <p className="text-gray-600">Optional for personalized content</p>
            </div>
          </div>
          <Button variant="outline" className="mt-4">
            Manage Cookie Preferences
          </Button>
        </div>
      ),
    },
  ];

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-600">Last updated: October 29, 2024</p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Search className="w-5 h-5 text-gray-500" />
            <Input
              type="search"
              placeholder="Search privacy policy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
          </div>

          <p className="text-gray-600">
            We value your privacy and are committed to protecting your personal
            data. This privacy policy explains how we collect, use, and
            safeguard your information.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {filteredSections.map((section) => (
          <Card key={section.id}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              {section.content}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, please contact
          our Data Protection Officer:
        </p>
        <div className="mt-2">
          <a
            href="mailto:privacy@example.com"
            className="text-blue-600 hover:underline flex items-center gap-1"
          >
            privacy@example.com
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <footer className="mt-8 text-center text-gray-600 text-sm">
        <p>This privacy policy is effective as of October 29, 2024</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
