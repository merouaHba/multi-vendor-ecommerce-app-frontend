// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   CheckCircle2,
//   Store,
//   Upload,
//   AlertCircle,
//   Loader2,
// } from "lucide-react";

// const SellerRegistration = () => {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     // Business Information
//     businessName: "",
//     businessType: "",
//     registrationNumber: "",
//     taxId: "",

//     // Contact Information
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",

//     // Store Information
//     storeName: "",
//     storeDescription: "",
//     storeCategory: "",

//     // Address Information
//     address: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     country: "",

//     // Documents
//     businessLicense: null,
//     taxDocument: null,
//     identityProof: null,

//     // Account Information
//     bankName: "",
//     accountNumber: "",
//     routingNumber: "",

//     // Agreement
//     termsAccepted: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleFileUpload = (e, fieldName) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({
//       ...prev,
//       [fieldName]: file,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       // Here you would typically send the formData to your backend

//       // Show success message and redirect
//       window.location.href = "/seller/dashboard";
//     } catch (error) {
//       setLoading(false);
//       // Handle error
//     }
//   };

//   const renderStep1 = () => (
//     <div className="space-y-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Business Name *</label>
//           <Input
//             name="businessName"
//             value={formData.businessName}
//             onChange={handleInputChange}
//             placeholder="Your Business Name"
//           />
//         </div>
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Business Type *</label>
//           <Select
//             value={formData.businessType}
//             onValueChange={(value) =>
//               handleInputChange({
//                 target: { name: "businessType", value },
//               })
//             }
//           >
//             <SelectTrigger>
//               <SelectValue placeholder="Select Business Type" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="individual">Individual</SelectItem>
//               <SelectItem value="llc">LLC</SelectItem>
//               <SelectItem value="corporation">Corporation</SelectItem>
//               <SelectItem value="partnership">Partnership</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Registration Number *</label>
//           <Input
//             name="registrationNumber"
//             value={formData.registrationNumber}
//             onChange={handleInputChange}
//             placeholder="Business Registration Number"
//           />
//         </div>
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Tax ID *</label>
//           <Input
//             name="taxId"
//             value={formData.taxId}
//             onChange={handleInputChange}
//             placeholder="Tax ID/EIN"
//           />
//         </div>
//       </div>
//     </div>
//   );

//   const renderStep2 = () => (
//     <div className="space-y-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Store Name *</label>
//           <Input
//             name="storeName"
//             value={formData.storeName}
//             onChange={handleInputChange}
//             placeholder="Your Store Name"
//           />
//         </div>
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Store Category *</label>
//           <Select
//             value={formData.storeCategory}
//             onValueChange={(value) =>
//               handleInputChange({
//                 target: { name: "storeCategory", value },
//               })
//             }
//           >
//             <SelectTrigger>
//               <SelectValue placeholder="Select Category" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="electronics">Electronics</SelectItem>
//               <SelectItem value="fashion">Fashion</SelectItem>
//               <SelectItem value="home">Home & Garden</SelectItem>
//               <SelectItem value="beauty">Beauty & Health</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="col-span-2 space-y-2">
//           <label className="text-sm font-medium">Store Description *</label>
//           <Textarea
//             name="storeDescription"
//             value={formData.storeDescription}
//             onChange={handleInputChange}
//             placeholder="Describe your store and what you sell..."
//             className="h-32"
//           />
//         </div>
//       </div>
//     </div>
//   );

//   const renderStep3 = () => (
//     <div className="space-y-6">
//       <div className="space-y-4">
//         <div className="border rounded-lg p-4 space-y-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="font-medium">Business License</h3>
//               <p className="text-sm text-gray-500">
//                 Upload your business license (PDF or Image)
//               </p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Input
//                 type="file"
//                 className="hidden"
//                 id="businessLicense"
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 onChange={(e) => handleFileUpload(e, "businessLicense")}
//               />
//               <label
//                 htmlFor="businessLicense"
//                 className="flex items-center space-x-2 cursor-pointer bg-blue-50 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100"
//               >
//                 <Upload className="h-4 w-4" />
//                 <span>Upload</span>
//               </label>
//             </div>
//           </div>
//           {formData.businessLicense && (
//             <Alert className="bg-green-50">
//               <CheckCircle2 className="h-4 w-4 text-green-600" />
//               <AlertDescription className="text-green-700">
//                 {formData.businessLicense.name} uploaded successfully
//               </AlertDescription>
//             </Alert>
//           )}
//         </div>

//         <div className="border rounded-lg p-4 space-y-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="font-medium">Tax Document</h3>
//               <p className="text-sm text-gray-500">
//                 Upload your tax registration document
//               </p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Input
//                 type="file"
//                 className="hidden"
//                 id="taxDocument"
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 onChange={(e) => handleFileUpload(e, "taxDocument")}
//               />
//               <label
//                 htmlFor="taxDocument"
//                 className="flex items-center space-x-2 cursor-pointer bg-blue-50 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100"
//               >
//                 <Upload className="h-4 w-4" />
//                 <span>Upload</span>
//               </label>
//             </div>
//           </div>
//           {formData.taxDocument && (
//             <Alert className="bg-green-50">
//               <CheckCircle2 className="h-4 w-4 text-green-600" />
//               <AlertDescription className="text-green-700">
//                 {formData.taxDocument.name} uploaded successfully
//               </AlertDescription>
//             </Alert>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   const renderStep4 = () => (
//     <div className="space-y-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Bank Name *</label>
//           <Input
//             name="bankName"
//             value={formData.bankName}
//             onChange={handleInputChange}
//             placeholder="Your Bank Name"
//           />
//         </div>
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Account Number *</label>
//           <Input
//             name="accountNumber"
//             value={formData.accountNumber}
//             onChange={handleInputChange}
//             placeholder="Account Number"
//           />
//         </div>
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Routing Number *</label>
//           <Input
//             name="routingNumber"
//             value={formData.routingNumber}
//             onChange={handleInputChange}
//             placeholder="Routing Number"
//           />
//         </div>
//       </div>

//       <div className="mt-6">
//         <label className="flex items-center space-x-2">
//           <Input
//             type="checkbox"
//             name="termsAccepted"
//             checked={formData.termsAccepted}
//             onChange={handleInputChange}
//             className="w-4 h-4"
//           />
//           <span className="text-sm">
//             I agree to the{" "}
//             <a href="/terms" className="text-blue-600 hover:underline">
//               Terms and Conditions
//             </a>{" "}
//             and
//             <a href="/privacy" className="text-blue-600 hover:underline">
//               {" "}
//               Privacy Policy
//             </a>
//           </span>
//         </label>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-4xl mx-auto">
//         <Card>
//           <CardHeader>
//             <div className="flex items-center space-x-3">
//               <Store className="h-8 w-8 text-blue-600" />
//               <div>
//                 <CardTitle>Seller Registration</CardTitle>
//                 <CardDescription>
//                   Join our marketplace and start selling your products
//                 </CardDescription>
//               </div>
//             </div>
//           </CardHeader>

//           <CardContent>
//             {/* Progress Steps */}
//             <div className="mb-8">
//               <div className="flex justify-between items-center">
//                 {[
//                   "Business Info",
//                   "Store Details",
//                   "Documents",
//                   "Payment Info",
//                 ].map((label, index) => (
//                   <div key={label} className="flex items-center">
//                     <div
//                       className={`
//                       flex items-center justify-center w-8 h-8 rounded-full
//                       ${
//                         step > index + 1
//                           ? "bg-green-100 text-green-600"
//                           : step === index + 1
//                           ? "bg-blue-600 text-white"
//                           : "bg-gray-100 text-gray-400"
//                       }
//                     `}
//                     >
//                       {step > index + 1 ? (
//                         <CheckCircle2 className="h-5 w-5" />
//                       ) : (
//                         <span>{index + 1}</span>
//                       )}
//                     </div>
//                     <span className="ml-2 text-sm hidden md:block">
//                       {label}
//                     </span>
//                     {index < 3 && (
//                       <div className="w-12 h-0.5 mx-2 bg-gray-200" />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <form onSubmit={handleSubmit}>
//               {step === 1 && renderStep1()}
//               {step === 2 && renderStep2()}
//               {step === 3 && renderStep3()}
//               {step === 4 && renderStep4()}
//             </form>
//           </CardContent>

//           <CardFooter className="flex justify-between">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => setStep((prev) => prev - 1)}
//               disabled={step === 1 || loading}
//             >
//               Previous
//             </Button>

//             <Button
//               type="button"
//               onClick={() => {
//                 if (step === 4) {
//                   handleSubmit(new Event("submit"));
//                 } else {
//                   setStep((prev) => prev + 1);
//                 }
//               }}
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                   Processing...
//                 </>
//               ) : step === 4 ? (
//                 "Submit Registration"
//               ) : (
//                 "Next"
//               )}
//             </Button>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SellerRegistration;


import React from "react";
import { Eye, EyeOff, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



 const SellerRegister = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-xl w-full mx-auto">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <Store className="h-12 w-12 text-indigo-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-indigo-600">
            Seller Registration
          </CardTitle>
          <CardDescription className="text-center">
            Create your seller account to start selling on our platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* Business Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Business Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="llc">LLC</SelectItem>
                      <SelectItem value="corporation">Corporation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessAddress">Business Address</Label>
                <Input id="businessAddress" required />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input id="zipCode" required />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" required />
              </div>
            </div>

            {/* Account Security */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Account Security</h3>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" required />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                required
              />
              <Label htmlFor="terms" className="ml-2">
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Privacy Policy
                </a>
              </Label>
            </div>

            <Button className="w-full" type="submit">
              Create Seller Account
            </Button>
            <p className="text-center text-sm text-gray-600">
              Already have a seller account?{" "}
              <a
                href="/seller/login"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerRegister;