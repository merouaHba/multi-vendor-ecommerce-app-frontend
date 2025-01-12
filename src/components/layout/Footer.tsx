import { Link } from "react-router-dom";
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
  Loader2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFooter } from "@/hooks/useFooter";
import PaymentIcons from "../common/PaymentIcons";

interface FooterLink {
  label: string;
  href: string;
}



export default function Footer() {
   const {
    email,
    isSubmitting,
    handleEmailChange,
    subscribeToNewsletter,
    customerLinks,
    companyLinks,
    policyLinks,
    isSuccess,
  } = useFooter();

  const renderLinks = (links: FooterLink[]) => {
    return links.map((link) => (
      <li key={link.label}>
        <Link
          to={link.href}
          className="text-gray-400 hover:text-white flex items-center group"
        >
          <ChevronRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
          {link.label}
        </Link>
      </li>
    ));
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,white_25%_50%,transparent_50%_75%,white_75%)] bg-[length:60px_60px] animate-slide-diagonal" />
        </div>

        <div className="container mx-auto px-4 py-12 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Content section */}
            <div className="text-white max-w-md">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="h-6 w-6 text-indigo-200" />
                <span className="text-sm font-medium text-indigo-200 uppercase tracking-wider">
                  Newsletter
                </span>
              </div>
              <h3 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                Join Our Newsletter
              </h3>
              <p className="text-indigo-100 text-lg mb-6">
                Get 10% off your first order and stay updated with exclusive
                offers!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
                  <CheckCircle className="h-5 w-5 text-indigo-200 flex-shrink-0" />
                  <span className="text-sm text-indigo-100">
                    Weekly Updates
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
                  <CheckCircle className="h-5 w-5 text-indigo-200 flex-shrink-0" />
                  <span className="text-sm text-indigo-100">No Spam</span>
                </div>
              </div>
            </div>

            {/* Form section */}
            <div className="w-full md:w-auto max-w-md">
              <form onSubmit={subscribeToNewsletter} className="space-y-4">
                <div className="relative group">
                  <div
                    className={`
                  relative 
                  rounded-md 
                  transition-all 
                  duration-200
                  ${
                    isSuccess ? "bg-green-500/20 p-0.5" : "p-0.5 bg-transparent"
                  }
                `}
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleEmailChange}
                      className={`
                      w-full md:w-96 
                      backdrop-blur-sm
                      text-white 
                      placeholder:text-white/60 
                      pr-12
                      transition-all
                      duration-200
                      ${isSubmitting ? "bg-white/20 border-white/30" : ""}
                      ${
                        isSuccess
                          ? "bg-white/20 border-green-400 focus:border-green-400"
                          : "bg-white/10 border-white/20 focus:bg-white/20 focus:border-white/40"
                      }
                    `}
                      disabled={isSubmitting || isSuccess}
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {isSubmitting ? (
                        <Loader2 className="h-5 w-5 text-white animate-spin" />
                      ) : isSuccess ? (
                        <CheckCircle className="h-5 w-5 text-green-400 animate-in fade-in" />
                      ) : (
                        <Send className="h-5 w-5 text-white/60 group-hover:translate-x-1 transition-transform duration-200" />
                      )}
                    </div>
                  </div>
                </div>
                <Button
                  type="submit"
                  className={`
                  w-full 
                  transition-all 
                  duration-200
                  font-medium
                  ${
                    isSubmitting
                      ? "bg-white/20 text-white cursor-not-allowed hover:bg-white/20"
                      : isSuccess
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-white text-indigo-600 hover:bg-indigo-50"
                  }
                `}
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Subscribing...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4" />
                      Successfully Subscribed!
                    </span>
                  ) : (
                    "Subscribe Now"
                  )}
                </Button>
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
            <Link to="/" className="flex items-center space-x-2">
              <Store className="h-8 w-8 text-indigo-500" />
              <span className="text-2xl font-bold text-white">Vendorly</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your one-stop destination for all your shopping needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-500" />
                <span>1-800-Vendorly</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-500" />
                <span>support@Vendorly.com</span>
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
            <ul className="space-y-4">{renderLinks(customerLinks)}</ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">{renderLinks(companyLinks)}</ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-4">{renderLinks(policyLinks)}</ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Vendorly. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="sm:h-5 sm:w-5 w-3 h-3" />
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="sm:h-5 sm:w-5 w-3 h-3" />
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="sm:h-5 sm:w-5 w-3 h-3" />
                </Link>
              </div>
            </div>
            <PaymentIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
