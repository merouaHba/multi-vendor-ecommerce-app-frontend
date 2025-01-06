import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TermsAndConditions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Terms &amp; Conditions</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Welcome to our multivendor ecommerce platform. By accessing or using our website, you agree to be bound by these terms and conditions and our privacy policy.
        </p>
        {/* Add detailed terms and conditions content */}
      </CardContent>
    </Card>
  );
};

const PrivacyPolicy = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Privacy Policy</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          We take the privacy of our users seriously. This policy explains how we collect, use, and protect your personal information.
        </p>
        {/* Add detailed privacy policy content */}
      </CardContent>
    </Card>
  );
};

const ReturnRefundPolicy = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Return &amp; Refund Policy</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          We want you to be satisfied with your purchases. This policy outlines our return and refund procedures.
        </p>
        {/* Add detailed return and refund policy content */}
      </CardContent>
    </Card>
  );
};

const ShippingPolicy = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Policy</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          We strive to deliver your orders as quickly and efficiently as possible. This policy explains our shipping methods and timelines.
        </p>
        {/* Add detailed shipping policy content */}
      </CardContent>
    </Card>
  );
};

const FAQ = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I place an order?</AccordionTrigger>
            <AccordionContent>
              <p>
                To place an order, simply browse our product catalog, add items to your cart, and complete the checkout process. You'll need to create an account or log in to your existing account.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What are your shipping rates and timelines?</AccordionTrigger>
            <AccordionContent>
              <p>
                Our shipping rates and timelines are outlined in our Shipping Policy. We offer several shipping options to meet your needs.
              </p>
            </AccordionContent>
          </AccordionItem>
          {/* Add more FAQ items as needed */}
        </Accordion>
      </CardContent>
    </Card>
  );
};

const PolicyPages = () => {
  return (
    <div className="space-y-8">
      <TermsAndConditions />
      <PrivacyPolicy />
      <ReturnRefundPolicy />
      <ShippingPolicy />
      <FAQ />
    </div>
  );
};

export default PolicyPages;