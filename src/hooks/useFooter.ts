import { isAxiosError } from "axios";
import axios from "@/services/api/axios.config";
import { useState } from "react";
import { toast } from "react-toastify";
import { axiosErrorHandler } from "@/utils";

interface FooterLink {
  label: string;
  href: string;
}

export const useFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const subscribeToNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post("/news_letter/subscribe", { email });

      toast.success("Thanks for subscribing!", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
      setIsSuccess(true);
      setEmail("");
    } catch (error) {
      toast.error(
        isAxiosError(error)
          ? axiosErrorHandler(error)
          : "Failed to subscribe. Please try again later.",
        {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        }
      );
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    isSubmitting,
    handleEmailChange,
    subscribeToNewsletter,
    customerLinks,
    companyLinks,
    policyLinks,
    isSuccess,
  };
};
