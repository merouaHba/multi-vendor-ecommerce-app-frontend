// import React, { useState } from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   MessageCircle,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Alert, AlertDescription } from "@/components/ui/alert";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [activeQuestion, setActiveQuestion] = useState(null);

//   const contactInfo = [
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: "Phone",
//       details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
//       description: "Mon-Fri from 8am to 6pm",
//     },
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: "Email",
//       details: ["support@marketplace.com", "vendors@marketplace.com"],
//       description: "We'll respond within 24 hours",
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: "Office",
//       details: ["123 Market Street", "San Francisco, CA 94105"],
//       description: "Visit our headquarters",
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       title: "Working Hours",
//       details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 3pm"],
//       description: "Closed on Sundays",
//     },
//   ];

//   const faqs = [
//     {
//       question: "How do I become a vendor?",
//       answer:
//         "To become a vendor, create an account and complete our vendor application form. Our team will review your application within 48 hours.",
//     },
//     {
//       question: "What are your shipping policies?",
//       answer:
//         "Shipping policies vary by vendor. Each product page displays specific shipping information and estimated delivery times.",
//     },
//     {
//       question: "How can I track my order?",
//       answer:
//         "Once your order ships, you'll receive a tracking number via email. You can also track orders in your account dashboard.",
//     },
//     {
//       question: "What is your return policy?",
//       answer:
//         "We offer a 30-day return policy for most items. Some restrictions apply to certain products. Please check individual product pages for specific return information.",
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     setSubmitted(true);
//     setFormData({ name: "", email: "", subject: "", message: "" });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="bg-blue-600 text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
//           <p className="text-xl opacity-90">
//             We're here to help! Send us a message and we'll respond as soon as
//             possible.
//           </p>
//         </div>
//       </div>

//       {/* Contact Information Cards */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20">
//           {contactInfo.map((info, index) => (
//             <Card key={index} className="bg-white">
//               <CardContent className="p-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     {info.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg">{info.title}</h3>
//                     <div className="text-sm text-gray-600 mt-1">
//                       {info.details.map((detail, idx) => (
//                         <div key={idx}>{detail}</div>
//                       ))}
//                     </div>
//                     <p className="text-sm text-gray-500 mt-2">
//                       {info.description}
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Contact Form and Map Section */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-white p-8 rounded-lg shadow-sm">
//             <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
//             {submitted ? (
//               <Alert className="mb-6">
//                 <AlertDescription>
//                   Thanks for reaching out! We'll get back to you soon.
//                 </AlertDescription>
//               </Alert>
//             ) : (
//               <form onSubmit={handleSubmit}>
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows="4"
//                       className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                       required
//                     ></textarea>
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             )}
//           </div>

//           {/* Map */}
//           <div className="bg-white p-8 rounded-lg shadow-sm">
//             <h2 className="text-2xl font-bold mb-6">Our Location</h2>
//             {/* Placeholder for map - in real implementation, integrate with Google Maps or similar */}
//             <div className="bg-gray-200 w-full h-[400px] rounded-lg flex items-center justify-center">
//               <MapPin className="w-12 h-12 text-gray-400" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-2xl font-bold mb-8 text-center">
//             Frequently Asked Questions
//           </h2>
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-sm overflow-hidden"
//               >
//                 <button
//                   className="w-full px-6 py-4 text-left flex justify-between items-center"
//                   onClick={() =>
//                     setActiveQuestion(activeQuestion === index ? null : index)
//                   }
//                 >
//                   <span className="font-medium">{faq.question}</span>
//                   {activeQuestion === index ? (
//                     <ChevronUp className="w-5 h-5" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5" />
//                   )}
//                 </button>
//                 {activeQuestion === index && (
//                   <div className="px-6 py-4 bg-gray-50">
//                     <p className="text-gray-600">{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Chat Support Button */}
//       <button className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-200">
//         <MessageCircle className="w-6 h-6" />
//       </button>
//     </div>
//   );
// };

// export default ContactUs;



import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a question or need assistance? We're here to help! Choose your
          preferred way to reach us.
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-green-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">support@example.com</p>
              <p className="text-sm text-gray-500">24/7 Response</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Office Address</h3>
              <p className="text-gray-600">123 Business Street</p>
              <p className="text-sm text-gray-500">New York, NY 10001</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-orange-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
              <p className="text-sm text-gray-500">Sat-Sun: Closed</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form Section */}
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border rounded-lg resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                What are your shipping rates?
              </h3>
              <p className="text-gray-600">
                We offer free shipping on orders over $50. Standard shipping
                rates apply for orders under $50.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                How can I track my order?
              </h3>
              <p className="text-gray-600">
                Once your order ships, you'll receive a tracking number via
                email to monitor your delivery.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                What's your return policy?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day return policy for most items. Please check our
                returns page for detailed information.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                Do you ship internationally?
              </h3>
              <p className="text-gray-600">
                Yes, we ship to most countries worldwide. Shipping rates and
                delivery times vary by location.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <MapPin className="w-8 h-8 text-gray-400" />
          <span className="ml-2 text-gray-500">Map placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;