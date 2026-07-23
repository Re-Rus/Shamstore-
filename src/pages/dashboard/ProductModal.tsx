import React, { useState } from 'react';
import { X, Upload, Save } from 'lucide-react';
import { useTranslation } from 'react-i18next';
interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
  const { t } = useTranslation('dashboard');
  // Form payload
  const [formData, setFormData] = useState({
    name: '',
    category: 'Laptops',
    price: '',
    stock: '',
    description: '',
  });

  // Prevents double submissions
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generic handler for all inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call
      // const response = await axios.post('/api/products', formData);
      
      // Mock API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Payload ready for backend:", formData);
      
      onClose(); 
    } catch (error) {
      console.error("Failed to add product:", error);
      // TODO: Add error toast notification here
    } finally {
      setIsSubmitting(false);
    }
  };

  // Early return if modal is closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/50 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <h2 className="text-xl font-bold text-neutral-900">{t("AddProductModal.Add New Product")}</h2>
          <button onClick={onClose} className="p-2 text-neutral-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50">
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          <form id="addProductForm" onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">{t("AddProductModal.Product Name")}</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. ASUS ROG Gaming Laptop" 
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">{t("AddProductModal.Price ")} ($)</label>
                <input 
                  type="number" 
                  name="price"
                  required
                  min="0"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0.00" 
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">{t("AddProductModal.Initial Stock")}</label>
                <input 
                  type="number" 
                  name="stock"
                  required
                  min="0"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="e.g. 50" 
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">{t("AddProductModal.Category")}</label>
              <select 
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-accent transition-colors"
              >
                <option value="Laptops">{t("AddProductModal.Laptops")}</option>
                <option value="Accessories">{t("AddProductModal.Accessories")}</option>
                <option value="Computer Parts">{t("AddProductModal.Computer Parts")} </option>
                <option value="Monitors">{t("AddProductModal.Monitors")} </option>
              </select>
            </div>

            {/* TODO: Implement actual file upload logic and preview */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">{t("AddProductModal.Product Image")}</label>
              <div className="w-full border-2 border-dashed border-neutral-300 rounded-2xl p-8 flex flex-col items-center justify-center text-neutral-500 hover:bg-neutral-50 hover:border-accent transition-colors cursor-pointer">
                <Upload size={32} className="mb-3 text-neutral-400" />
                <p className="text-sm font-medium">{t("AddProductModal.Click to upload or drag and drop")}</p>
                <p className="text-xs mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-neutral-100 flex justify-end gap-3 bg-neutral-50">
          <button 
            type="button" 
            onClick={onClose}
            className="px-6 py-3 rounded-xl font-semibold text-neutral-600 hover:bg-neutral-200 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            form="addProductForm"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-8 py-3 bg-[#b0891d] text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? "Saving..." : <><Save size={20} /> {t("AddProductModal.Save Product")} </>}
          </button>
        </div>

      </div>
    </div>
  );
}