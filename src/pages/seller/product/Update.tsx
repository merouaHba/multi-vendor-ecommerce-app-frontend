// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Product Management</title>
//     <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
// </head>
// <body class="bg-gray-50">
//     <div class="container mx-auto p-6">
//         <!-- Header Section -->
//         <div class="flex justify-between items-center mb-6">
//             <h1 class="text-2xl font-bold text-gray-800">Add New Product</h1>
//             <button class="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
//                 Back to Dashboard
//             </button>
//         </div>

//         <!-- Main Form -->
//         <div class="bg-white rounded-lg shadow-md p-6">
//             <form class="space-y-6">
//                 <!-- Basic Information -->
//                 <div class="border-b pb-6">
//                     <h2 class="text-xl font-semibold mb-4">Basic Information</h2>
//                     <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <label class="block text-sm font-medium text-gray-700 mb-2">
//                                 Product Name*
//                             </label>
//                             <input type="text" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required>
//                         </div>
//                         <div>
//                             <label class="block text-sm font-medium text-gray-700 mb-2">
//                                 SKU*
//                             </label>
//                             <input type="text" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required>
//                         </div>
//                     </div>
//                 </div>

//                 <!-- Categories and Tags -->
//                 <div class="border-b pb-6">
//                     <h2 class="text-xl font-semibold mb-4">Categories & Tags</h2>
//                     <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <label class="block text-sm font-medium text-gray-700 mb-2">
//                                 Category*
//                             </label>
//                             <select class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required>
//                                 <option>Select Category</option>
//                                 <option>Electronics</option>
//                                 <option>Fashion</option>
//                                 <option>Home & Living</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label class="block text-sm font-medium text-gray-700 mb-2">
//                                 Tags
//                             </label>
//                             <input type="text" placeholder="Separate tags with commas" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
//                         </div>
//                     </div>
//                 </div>

//                 <!-- Pricing -->
//                 <div class="border-b pb-6">
//                     <h2 class="text-xl font-semibold mb-4">Pricing</h2>
//                     <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div>
//                             <label class="block text-sm font-medium text-gray-700 mb-2">
//                                 Regular Price*
//                             </label>
//                             <input type="number" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required>
//                         </div>
//                         <div>
//                             <label class="block text-sm font-medium text-gray-700 mb-2">
//                                 Sale Price
//                             </label>
//                             <input type="number" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
//                         </div>
//                         <div>
//                             <label class="block text-sm font-medium text-gray-700 mb-2">
//                                 Stock Quantity*
//                             </label>
//                             <input type="number" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required>
//                         </div>
//                     </div>
//                 </div>

//                 <!-- Product Images -->
//                 <div class="border-b pb-6">
//                     <h2 class="text-xl font-semibold mb-4">Product Images</h2>
//                     <div class="grid grid-cols-1 gap-4">
//                         <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                             <div class="space-y-2">
//                                 <div class="text-gray-600">Drag and drop images here or</div>
//                                 <button type="button" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                                     Browse Files
//                                 </button>
//                             </div>
//                         </div>
//                         <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             <div class="relative border rounded-lg p-2">
//                                 <img src="/api/placeholder/150/150" alt="Product preview" class="w-full rounded-lg">
//                                 <button class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
//                                     ×
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <!-- Description -->
//                 <div class="border-b pb-6">
//                     <h2 class="text-xl font-semibold mb-4">Description</h2>
//                     <div>
//                         <label class="block text-sm font-medium text-gray-700 mb-2">
//                             Product Description*
//                         </label>
//                         <textarea rows="6" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required></textarea>
//                     </div>
//                 </div>

//                 <!-- Specifications -->
//                 <div class="border-b pb-6">
//                     <h2 class="text-xl font-semibold mb-4">Specifications</h2>
//                     <div class="space-y-4">
//                         <div class="grid grid-cols-2 gap-4">
//                             <input type="text" placeholder="Specification Name" class="p-2 border rounded-lg">
//                             <input type="text" placeholder="Specification Value" class="p-2 border rounded-lg">
//                         </div>
//                         <button type="button" class="text-blue-500 hover:text-blue-600">
//                             + Add More Specifications
//                         </button>
//                     </div>
//                 </div>

//                 <!-- Shipping -->
//                 <div class="border-b pb-6">
//                     <h2 class="text-xl font-semibold mb-4">Shipping</h2>
//                     <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <label class="block text-sm font-medium text-gray-700 mb-2">
//                                 Weight (kg)
//                             </label>
//                             <input type="number" step="0.01" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
//                         </div>
//                         <div>
//                             <label class="block text-sm font-medium text-gray-700 mb-2">
//                                 Dimensions (L × W × H) cm
//                             </label>
//                             <div class="grid grid-cols-3 gap-2">
//                                 <input type="number" placeholder="L" class="w-full p-2 border rounded-lg">
//                                 <input type="number" placeholder="W" class="w-full p-2 border rounded-lg">
//                                 <input type="number" placeholder="H" class="w-full p-2 border rounded-lg">
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <!-- Action Buttons -->
//                 <div class="flex justify-end space-x-4">
//                     <button type="button" class="px-6 py-2 border rounded-lg hover:bg-gray-50">
//                         Save as Draft
//                     </button>
//                     <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//                         Publish Product
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
// </body>
// </html>



// types.ts
interface ProductImage {
  id: string;
  url: string;
}

interface Specification {
  id: string;
  name: string;
  value: string;
}

interface ProductFormData {
  name: string;
  sku: string;
  category: string;
  tags: string[];
  regularPrice: number;
  salePrice?: number;
  stockQuantity: number;
  images: ProductImage[];
  description: string;
  specifications: Specification[];
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
}

// ProductForm.tsx
import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

const ProductForm: React.FC<{
  initialData?: ProductFormData;
  onSubmit: (data: ProductFormData) => void;
  mode: 'add' | 'update';
}> = ({ initialData, onSubmit, mode }) => {
  const [formData, setFormData] = useState<ProductFormData>(
    initialData || {
      name: '',
      sku: '',
      category: '',
      tags: [],
      regularPrice: 0,
      salePrice: 0,
      stockQuantity: 0,
      images: [],
      description: '',
      specifications: [],
    }
  );

  const [dragActive, setDragActive] = useState(false);

  const handleChange = (field: keyof ProductFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    // Handle file upload logic here
  };

  const addSpecification = () => {
    const newSpec = {
      id: Date.now().toString(),
      name: '',
      value: '',
    };
    setFormData((prev) => ({
      ...prev,
      specifications: [...prev.specifications, newSpec],
    }));
  };

  const removeSpecification = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      specifications: prev.specifications.filter((spec) => spec.id !== id),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {mode === 'add' ? 'Add New Product' : 'Update Product'}
        </h1>
        <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
          Back to Dashboard
        </button>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
        {/* Basic Information */}
        <section className="border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Name*
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SKU*
              </label>
              <input
                type="text"
                value={formData.sku}
                onChange={(e) => handleChange('sku', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </section>

        {/* Categories and Tags */}
        <section className="border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Categories & Tags</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category*
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleChange('category', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home & Living</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <input
                type="text"
                value={formData.tags.join(', ')}
                onChange={(e) => handleChange('tags', e.target.value.split(',').map(tag => tag.trim()))}
                placeholder="Separate tags with commas"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Image Upload */}
        <section className="border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Product Images</h2>
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center ${
              dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
            onDragEnter={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleImageDrop}
          >
            <div className="space-y-2">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="text-gray-600">
                Drag and drop images here or
              </div>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Browse Files
              </button>
            </div>
          </div>
          
          {/* Image Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {formData.images.map((image) => (
              <div key={image.id} className="relative border rounded-lg p-2">
                <img
                  src={image.url}
                  alt="Product preview"
                  className="w-full rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      images: prev.images.filter((img) => img.id !== image.id),
                    }));
                  }}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Regular Price*
              </label>
              <input
                type="number"
                value={formData.regularPrice}
                onChange={(e) => handleChange('regularPrice', parseFloat(e.target.value))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sale Price
              </label>
              <input
                type="number"
                value={formData.salePrice}
                onChange={(e) => handleChange('salePrice', parseFloat(e.target.value))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stock Quantity*
              </label>
              <input
                type="number"
                value={formData.stockQuantity}
                onChange={(e) => handleChange('stockQuantity', parseInt(e.target.value))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Description*
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={6}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </section>

        {/* Specifications */}
        <section className="border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Specifications</h2>
          <div className="space-y-4">
            {formData.specifications.map((spec) => (
              <div key={spec.id} className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  value={spec.name}
                  onChange={(e) => {
                    const updatedSpecs = formData.specifications.map((s) =>
                      s.id === spec.id ? { ...s, name: e.target.value } : s
                    );
                    handleChange('specifications', updatedSpecs);
                  }}
                  placeholder="Specification Name"
                  className="p-2 border rounded-lg"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={spec.value}
                    onChange={(e) => {
                      const updatedSpecs = formData.specifications.map((s) =>
                        s.id === spec.id ? { ...s, value: e.target.value } : s
                      );
                      handleChange('specifications', updatedSpecs);
                    }}
                    placeholder="Specification Value"
                    className="p-2 border rounded-lg flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => removeSpecification(spec.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addSpecification}
              className="text-blue-500 hover:text-blue-600"
            >
              + Add More Specifications
            </button>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-lg hover:bg-gray-50"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {mode === 'add' ? 'Publish Product' : 'Update Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;