// import React from "react";
// import { Users, Store, Globe, TrendingUp } from "lucide-react";

// const AboutUs = () => {
//   const stats = [
//     {
//       icon: <Users className="w-8 h-8 text-blue-600" />,
//       value: "50,000+",
//       label: "Active Customers",
//     },
//     {
//       icon: <Store className="w-8 h-8 text-blue-600" />,
//       value: "1,000+",
//       label: "Trusted Vendors",
//     },
//     {
//       icon: <Globe className="w-8 h-8 text-blue-600" />,
//       value: "20+",
//       label: "Countries Served",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
//       value: "500K+",
//       label: "Products",
//     },
//   ];

//   const featuredVendors = [
//     {
//       name: "Artisan Crafts Co.",
//       image: "/api/placeholder/100/100",
//       description: "Handcrafted home decor",
//     },
//     {
//       name: "Tech Haven",
//       image: "/api/placeholder/100/100",
//       description: "Premium electronics",
//     },
//     {
//       name: "Fashion Forward",
//       image: "/api/placeholder/100/100",
//       description: "Trendy apparel",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="bg-blue-50 py-20">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
//             Connecting Quality Vendors with Global Customers
//           </h1>
//           <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
//             We're building the future of online shopping by bringing together
//             the best vendors and customers in a seamless marketplace experience.
//           </p>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 rounded-lg bg-gray-50"
//               >
//                 <div className="flex justify-center mb-4">{stat.icon}</div>
//                 <div className="text-3xl font-bold text-gray-900 mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Our Story Section */}
//       <div className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
//             <div className="prose lg:prose-lg mx-auto">
//               <p className="text-gray-600 mb-6">
//                 Founded in 2020, our marketplace began with a simple mission: to
//                 create a platform where quality vendors could reach customers
//                 worldwide. We believed in the power of connecting talented
//                 artisans, manufacturers, and retailers with passionate
//                 customers.
//               </p>
//               <p className="text-gray-600">
//                 Today, we've grown into a global marketplace serving customers
//                 across continents, while maintaining our commitment to quality,
//                 authenticity, and exceptional service.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Featured Vendors Section */}
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Featured Vendors
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {featuredVendors.map((vendor, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 rounded-lg bg-gray-50"
//               >
//                 <img
//                   src={vendor.image}
//                   alt={vendor.name}
//                   className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <h3 className="text-xl font-semibold mb-2">{vendor.name}</h3>
//                 <p className="text-gray-600">{vendor.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mission Section */}
//       <div className="py-16 bg-blue-50">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             To create the most trusted and innovative multivendor marketplace
//             that empowers businesses of all sizes and delivers exceptional value
//             to customers worldwide.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;




import React from "react";
import {
  Users,
  Target,
  Heart,
  Star,
  Award,
  Truck,
  Shield,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUsPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Story</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to MarketPlace, where passion meets convenience. Since 2015,
          we've been connecting quality vendors with discerning customers,
          creating a vibrant marketplace for everyone.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Trusted Vendors</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
            <div className="text-gray-600">Products</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Target className="text-blue-600 w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To create a seamless and trusted platform where vendors can grow
            their businesses and customers can discover quality products. We're
            committed to fostering a marketplace that celebrates diversity,
            innovation, and exceptional service.
          </p>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <Heart className="text-purple-600 w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To become the world's most trusted multivendor marketplace, where
            every transaction creates value and builds lasting relationships. We
            envision a future where commerce is not just about buying and
            selling, but about community and connection.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-green-600 w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Trust & Security</h3>
              <p className="text-gray-600">
                We prioritize the security of our marketplace and maintain the
                highest standards of trust in every transaction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Star className="text-yellow-600 w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We carefully vet our vendors and products to ensure only the
                best quality items are available on our platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-red-600 w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Community Focus</h3>
              <p className="text-gray-600">
                We build strong relationships with our vendors and customers,
                fostering a vibrant marketplace community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose MarketPlace?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="text-blue-600 w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                Access to thousands of products from verified vendors worldwide.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="text-green-600 w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                Every product goes through our strict quality assessment
                process.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Truck className="text-purple-600 w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable shipping options for all your purchases.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us CTA */}
      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Growing Community</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Whether you're a vendor looking to grow your business or a customer
          seeking quality products, we'd love to have you join our community.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700">
            Become a Vendor
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center gap-2 border border-blue-600 hover:bg-blue-50">
            Start Shopping
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;