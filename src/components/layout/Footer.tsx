import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Store,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Footer link interface and links data remain the same...
interface FooterLink {
  label: string;
  href: string;
}

const customerLinks: FooterLink[] = [
  { label: "Help Center", href: "/help" },
  { label: "Track Order", href: "/track-order" },
  { label: "Returns & Refunds", href: "/returns" },
  { label: "Shipping Info", href: "/shipping" },
  { label: "Payment Methods", href: "/payment" },
];

const companyLinks: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Press Center", href: "/press" },
];

const policyLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Seller Policy", href: "/seller-policy" },
];

export default function Footer() {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = React.useState<
    "success" | "error" | null
  >(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setSubscriptionStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubscriptionStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubscriptionStatus("success");
      setEmail("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubscriptionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Enhanced Newsletter Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-md">
              <h3 className="text-3xl font-bold mb-3">Join Our Newsletter</h3>
              <p className="text-indigo-100 text-lg">
                Get 10% off your first order and stay updated with exclusive
                offers, new arrivals, and insider-only discounts!
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-indigo-200" />
                  <span className="text-sm text-indigo-100">
                    Weekly Updates
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-indigo-200" />
                  <span className="text-sm text-indigo-100">No Spam</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto max-w-md">
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full md:w-96 bg-white/10 border-white/20 text-white placeholder:text-white/60 pr-12"
                    disabled={isSubmitting}
                    required
                  />
                  <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                </Button>
                {subscriptionStatus === "success" && (
                  <Alert className="bg-green-500/10 text-green-200 border-green-500/20">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Thanks for subscribing! Check your email for confirmation.
                    </AlertDescription>
                  </Alert>
                )}
                {subscriptionStatus === "error" && (
                  <Alert className="bg-red-500/10 text-red-200 border-red-500/20">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Please enter a valid email address.
                    </AlertDescription>
                  </Alert>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <Store className="h-8 w-8 text-indigo-500" />
              <span className="text-2xl font-bold text-white">MultiMart</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your one-stop destination for all your shopping needs. We connect
              millions of buyers and sellers around the world, empowering people
              & creating economic opportunity.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-500" />
                <span>1-800-MULTIMART</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-500" />
                <span>support@multimart.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-indigo-500" />
                <span>123 Commerce St, Market City, MC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links Sections */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Customer Service
            </h3>
            <ul className="space-y-4">
              {customerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-400">
                © {new Date().getFullYear()} MultiMart. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/api/placeholder/40/25" alt="Visa" className="h-8" />
              <img
                src="/api/placeholder/40/25"
                alt="Mastercard"
                className="h-8"
              />
              <img src="/api/placeholder/40/25" alt="PayPal" className="h-8" />
              <img
                src="/api/placeholder/40/25"
                alt="Apple Pay"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
