import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// layouts
const MainLayout = lazy(() => import("@/layouts/MainLayout"));
// const ProfileLayout = lazy(
//   () => import("@/layouts/ProfileLayout")
// );
// components
import { LottieHandler, PageSuspenseFallback } from "@/components/feedback";
// pages
const Home = lazy(() => import("@/pages/customer-facing/Home"));
const Wishlist = lazy(() => import("@/pages/customer-facing/Wishlist"));
const Categories = lazy(() => import("@/pages/customer-facing/Categories"));
const Cart = lazy(() => import("@/pages/customer-facing/Cart"));
const Products = lazy(() => import("@/pages/customer-facing/Products"));
const Product = lazy(() => import("@/pages/customer-facing/Product"));
const Policy = lazy(() => import("@/pages/policy/Policy"));
const PrivacyPolicy = lazy(() => import("@/pages/policy/PrivacyAndPolicy"));
const TermsAndConditions = lazy(() => import("@/pages/policy/TermsAndConditions"));
const ReturnRefundPolicy = lazy(() => import("@/pages/policy/ReturnAndRefundPolicy"));
const ShippingPolicy = lazy(() => import("@/pages/policy/ShippingPolicy"));
const FAQ = lazy(() => import("@/pages/policy/Faq"));
const AboutUs = lazy(() => import("@/pages/customer-facing/AboutUs"));
const ContactUs = lazy(() => import("@/pages/customer-facing/ContactUs"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Register"));
const ForgetPassword = lazy(() => import("@/pages/auth/ForgetPassword"));
const ResetPassword = lazy(() => import("@/pages/auth/ResetPassword"));
const EmailVerification = lazy(() => import("@/pages/auth/EmailVerification"));
const ResendVerification = lazy(() => import("@/pages/auth/ResendVerificationEmail"));
const CheckOut = lazy(() => import("@/pages/customer-facing/CheckOut"));
const SearchResults = lazy(() =>  import("@/pages/customer-facing/SearchResults"));
const Category = lazy(() =>  import( "@/pages/customer-facing/Category"));
const OrderTracking = lazy(() =>  import( "@/pages/customer-facing/OrderTracking"));
// const Account = lazy(() => import("@/pages/Account"));
const UserDashboard = lazy(() => import("@/pages/customer-facing/Dashboard"));
const SellerRegistration = lazy(() => import("@/pages/seller/auth/Register"));
const SellerDashboard = lazy(() => import( "@/pages/seller/Dashboard"));
// const Orders = lazy(() => import("@/pages/Orders"));
import Error from "@/pages/Error";
import ProductForm from "@/pages/seller/product/Update";
import OrderManagement from "@/pages/seller/orders/OrderManagement";
import OrderDetails from "@/pages/seller/orders/orderDetails";
import SellerLogin from "@/pages/seller/auth/Login";
import CustomerServicePage from "@/pages/policy/help";

// protect route
// import ProtectedRoute from "@/components/Auth/ProtectedRoute";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div style={{ marginTop: "10%" }}>
              <LottieHandler type="loading" message="Loading please wait..." />
            </div>
          }
        >
          <MainLayout />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <Home />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/cart",
          element: (
            <PageSuspenseFallback>
              <Cart />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/wishlist",
          element: (
            // <ProtectedRoute>
            <PageSuspenseFallback>
              <Wishlist />
            </PageSuspenseFallback>
            // </ProtectedRoute>
          ),
        },
        {
          path: "/checkout",
          element: (
            <PageSuspenseFallback>
              <CheckOut />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/search",
          element: (
            <PageSuspenseFallback>
              <SearchResults />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/categories",
          element: (
            <PageSuspenseFallback>
              <Categories />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/categories/:prefix",
          element: (
            <PageSuspenseFallback>
              <Category />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/products/:prefix",
          element: (
            <PageSuspenseFallback>
              <Product />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/products",
          element: (
            <PageSuspenseFallback>
              <Products />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/policy",
          element: (
            <PageSuspenseFallback>
              <Policy />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/privacy-policy",
          element: (
            <PageSuspenseFallback>
              <PrivacyPolicy />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/terms-conditions",
          element: (
            <PageSuspenseFallback>
              <TermsAndConditions />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/return-refund-policy",
          element: (
            <PageSuspenseFallback>
              <ReturnRefundPolicy />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/shipping-policy",
          element: (
            <PageSuspenseFallback>
              <ShippingPolicy />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/faq",
          element: (
            <PageSuspenseFallback>
              <FAQ />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/help",
          element: (
            <PageSuspenseFallback>
              <CustomerServicePage />
            </PageSuspenseFallback>
          ),
        },
        // {
        //   path: "/categories/products/:prefix",
        //   element: (
        //     <PageSuspenseFallback>
        //       <Products />
        //     </PageSuspenseFallback>
        //   ),
        //   loader: ({ params }) => {
        //     typeof params.prefix
        //     if (
        //       typeof params.prefix !== "string" ||
        //       !/^[a-z]+$/i.test(params.prefix)
        //     ) {
        //       throw new Response("Bad Request", {
        //         statusText: "Category not found",
        //         status: 400,
        //       });
        //     }
        //     return true;
        //   },
        // },
        {
          path: "about-us",
          element: (
            <PageSuspenseFallback>
              <AboutUs />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "contact-us",
          element: (
            <PageSuspenseFallback>
              <ContactUs />
            </PageSuspenseFallback>
          ),
        },

        {
          path: "order-tracking",
          element: (
            <PageSuspenseFallback>
              <OrderTracking />
            </PageSuspenseFallback>
          ),
        },
        // {
        //   path: "profile",
        //   element: (
        //     <ProtectedRoute>
        //       <PageSuspenseFallback>
        //         <ProfileLayout />
        //       </PageSuspenseFallback>
        //     </ProtectedRoute>
        //   ),
        //   children: [
        //     {
        //       index: true,
        //       element: (
        //         <PageSuspenseFallback>
        //           <Account />
        //         </PageSuspenseFallback>
        //       ),
        //     },
        //     {
        //       path: "orders",
        //       element: (
        //         <PageSuspenseFallback>
        //           <Orders />
        //         </PageSuspenseFallback>
        //       ),
        //     },
        //   ],
        // },
      ],
    },
    {
      element: <Outlet />,
      path: "/login",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <Login />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/register",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <Register />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/forgot-password",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <ForgetPassword />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/reset-password",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <ResetPassword />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/email-verification/:token",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <EmailVerification />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/resend-verification",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <ResendVerification />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/seller/register",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <SellerRegistration />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/seller/login",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <SellerLogin />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/seller/dashboard",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <SellerDashboard />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/seller/products/add",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <ProductForm onSubmit={() => {}} mode={"add"} />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/seller/products/update",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <ProductForm onSubmit={() => {}} mode={"update"} />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/seller/orders",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <OrderManagement />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/seller/orders/:id",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <OrderDetails />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    {
      element: <Outlet />,
      path: "/profile",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <UserDashboard />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
  ]
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;


// import { createBrowserRouter, Navigate } from "react-router-dom";

// // Layouts
// import RootLayout from "./layouts/RootLayout";
// import CustomerLayout from "./layouts/CustomerLayout";
// import SellerLayout from "./layouts/SellerLayout";
// import AuthLayout from "./layouts/AuthLayout";

// // Customer-Facing Pages
// import Homepage from "./pages/customer/Homepage";
// import ProductListing from "./pages/customer/ProductListing";
// import ProductDetails from "./pages/customer/ProductDetails";
// import ShoppingCart from "./pages/customer/ShoppingCart";
// import Checkout from "./pages/customer/Checkout";
// import UserDashboard from "./pages/customer/UserDashboard";
// import OrderTracking from "./pages/customer/OrderTracking";
// import Wishlist from "./pages/customer/Wishlist";
// import SearchResults from "./pages/customer/SearchResults";
// import ContactUs from "./pages/customer/ContactUs";
// import AboutUs from "./pages/customer/AboutUs";

// // Vendor/Seller Pages
// import SellerRegistration from "./pages/seller/SellerRegistration";
// import SellerDashboard from "./pages/seller/SellerDashboard";
// import ProductManagement from "./pages/seller/ProductManagement";
// import OrderManagement from "./pages/seller/OrderManagement";
// import SalesAnalytics from "./pages/seller/SalesAnalytics";
// import PaymentHistory from "./pages/seller/PaymentHistory";
// import ProfileManagement from "./pages/seller/ProfileManagement";

// // Authentication Pages
// import CustomerLogin from "./pages/auth/CustomerLogin";
// import CustomerRegister from "./pages/auth/CustomerRegister";
// import SellerLogin from "./pages/auth/SellerLogin";
// import PasswordReset from "./pages/auth/PasswordReset";
// import EmailVerification from "./pages/auth/EmailVerification";

// // Policy Pages
// import TermsConditions from "./pages/policy/TermsConditions";
// import PrivacyPolicy from "./pages/policy/PrivacyPolicy";
// import RefundPolicy from "./pages/policy/RefundPolicy";
// import ShippingPolicy from "./pages/policy/ShippingPolicy";
// import FAQ from "./pages/policy/FAQ";

// // Guards
// import AuthGuard from "./guards/AuthGuard";
// import SellerGuard from "./guards/SellerGuard";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       // Customer-Facing Pages (Public)
//       {
//         element: <CustomerLayout />,
//         children: [
//           { index: true, element: <Homepage /> },
//           { path: "products", element: <ProductListing /> },
//           { path: "products/:categoryId", element: <ProductListing /> },
//           { path: "product/:productId", element: <ProductDetails /> },
//           { path: "cart", element: <ShoppingCart /> },
//           { path: "search", element: <SearchResults /> },
//           { path: "contact", element: <ContactUs /> },
//           { path: "about", element: <AboutUs /> },

//           // Protected Customer Routes
//           {
//             element: <AuthGuard role="customer" />,
//             children: [
//               { path: "checkout", element: <Checkout /> },
//               { path: "account", element: <UserDashboard /> },
//               { path: "orders/:orderId", element: <OrderTracking /> },
//               { path: "wishlist", element: <Wishlist /> },
//             ],
//           },
//         ],
//       },

//       // Seller Pages (Protected)
//       {
//         path: "seller",
//         element: <SellerLayout />,
//         children: [
//           {
//             element: <SellerGuard />,
//             children: [
//               { path: "dashboard", element: <SellerDashboard /> },
//               { path: "products", element: <ProductManagement /> },
//               { path: "orders", element: <OrderManagement /> },
//               { path: "analytics", element: <SalesAnalytics /> },
//               { path: "payments", element: <PaymentHistory /> },
//               { path: "profile", element: <ProfileManagement /> },
//             ],
//           },
//         ],
//       },

//       // Authentication Pages
//       {
//         element: <AuthLayout />,
//         children: [
//           { path: "login", element: <CustomerLogin /> },
//           { path: "register", element: <CustomerRegister /> },
//           { path: "seller/register", element: <SellerRegistration /> },
//           { path: "seller/login", element: <SellerLogin /> },
//           { path: "reset-password", element: <PasswordReset /> },
//           { path: "verify-email", element: <EmailVerification /> },
//         ],
//       },

//       // Policy Pages (Public)
//       { path: "terms", element: <TermsConditions /> },
//       { path: "privacy", element: <PrivacyPolicy /> },
//       { path: "refund-policy", element: <RefundPolicy /> },
//       { path: "shipping-policy", element: <ShippingPolicy /> },
//       { path: "faq", element: <FAQ /> },

//       // 404 Route
//       { path: "*", element: <Navigate to="/" replace /> },
//     ],
//   },
// ]);

// export default router;