import { useState } from 'react';
import AddProductModal from './ProductModal';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/common/Container';
import { ArrowLeft, Search, Filter, Plus, Edit, Trash2 } from 'lucide-react';


// Temporary mock data until products API connected
const initialProducts = [
  { id: "#PROD-001", name: "ASUS ROG Gaming Laptop", category: "Laptops", price: "$1200", stock: 4, status: "Low Stock" },
  { id: "#PROD-002", name: "Mechanical RGB Keyboard", category: "Accessories", price: "$150", stock: 45, status: "In Stock" },
  { id: "#PROD-003", name: "Intel Core i9 Processor", category: "Computer Parts", price: "$450", stock: 2, status: "Low Stock" },
  { id: "#PROD-004", name: "Logitech G Pro Mouse", category: "Accessories", price: "$120", stock: 12, status: "In Stock" },
  { id: "#PROD-005", name: "4K Gaming Monitor 27\"", category: "Accessories", price: "$350", stock: 0, status: "Out of Stock" },
  { id: "#PROD-006", name: "Premium Wireless Headphones", category: "Accessories", price: "$299", stock: 8, status: "Low Stock" },
];

// badge styles
const badgeclasss = (status: string) => {
  switch (status) {
    case 'In Stock': return 'bg-green-100 text-green-700';
    case 'Low Stock': return 'bg-orange-100 text-orange-700';
    case 'Out of Stock': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export default function Products() {
   const { t } = useTranslation('dashboard');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter'); 

  const [productsList, setProductsList] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProductsList(prev => prev.filter(product => product.id !== id));
    }
  };

  const handleEditStock = (id: string, currentStock: number) => {
    // Quick inline edit using prompt (consider changing to a proper modal later)
    const newStockStr = window.prompt("Enter new stock quantity:", currentStock.toString());
    if (!newStockStr) return;

    const newStock = parseInt(newStockStr);
    
    if (isNaN(newStock) || newStock < 0) {
      alert("Please enter a valid number!");
      return;
    }

    // Update stock and auto-calculate new status
    setProductsList(prev => prev.map(product => {
      if (product.id !== id) return product;
      
      let status = "In Stock";
      if (newStock === 0) status = "Out of Stock";
      else if (newStock < 10) status = "Low Stock";
      
      return { ...product, stock: newStock, status };
    }));
  };

  // Filter products by URL param and search input simultaneously
  const displayedProducts = productsList.filter(product => {
    const matchesUrlFilter = filter === 'low-stock' 
      ? ["Low Stock", "Out of Stock"].includes(product.status) || product.stock < 10
      : true;
      
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.id.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesUrlFilter && matchesSearch;
  });

  return (
  <div className="bg-background min-h-screen pt-10 pb-10">
      <Container>
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/Dashboard')}
              className="p-2 bg-white rounded-xl border border-secondary/20 hover:bg-neutral-50 transition-colors">
              <ArrowLeft size={20} className="text-neutral-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">
                {filter === t("Products.low-stock") ? t("Products.Low Stock Alerts") : t("Products.Inventory Management")}
              </h1>
              {/* 2. إزالة المسافة الزائدة قبل Products */}
              <p className="text-neutral-500 text-sm mt-1">{t("Products.Manage your products and track inventory")}</p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-5 py-3 bg-accent text-white rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            <Plus size={20} />{t("Products.Add New Product")} 
          </button>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-secondary/10 mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
              placeholder="Search products by name or ID..." 
              className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl outline-none focus:border-accent transition-colors"
            />
          </div>
          <button 
             onClick={() => alert("Advanced filter modal will open here")}
             className="flex items-center gap-2 px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl text-neutral-700 font-medium hover:border-accent hover:text-accent transition-colors">
            <Filter size={20} />{t("Products.Filter")} 
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-secondary/10">
          <p className="text-sm text-neutral-500 mb-6 font-medium">
            Showing {displayedProducts.length} {t("Products.products")} 
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-4 px-4 font-semibold text-neutral-500 text-sm">{t("Products.Product Name")}</th>
                  <th className="py-4 px-4 font-semibold text-neutral-500 text-sm">{t("Products.Category")}</th>
                  <th className="py-4 px-4 font-semibold text-neutral-500 text-sm">{t("Products.Price")}</th>
                  <th className="py-4 px-4 font-semibold text-neutral-500 text-sm">{t("Products.Stock")}</th>
                  <th className="py-4 px-4 font-semibold text-neutral-500 text-sm">{t("Products.Status")}</th>
                  <th className="py-4 px-4 font-semibold text-neutral-500 text-sm text-right">{t("Products.Actions")}</th>
                </tr>
              </thead>
              <tbody>
                {displayedProducts.length > 0 ? (
                  displayedProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-50 last:border-0 hover:bg-neutral-50/50 transition-colors">
                      <td className="py-4 px-4">
                        <p className="font-bold text-neutral-900 text-sm">{product.name}</p>
                        <p className="text-xs text-neutral-400">{product.id}</p>
                      </td>
                      <td className="py-4 px-4 text-neutral-600 text-sm">{product.category}</td>
                      <td className="py-4 px-4 font-bold text-neutral-900">{product.price}</td>
                      <td className="py-4 px-4 font-medium text-neutral-700">{product.stock} units</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeclasss(product.status)}`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleEditStock(product.id, product.stock)}
                            className="p-2 text-neutral-400 hover:text-blue-600 transition-colors"
                            title="Edit Stock"
                          >
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={() => handleDelete(product.id)}
                            className="p-2 text-neutral-400 hover:text-red-600 transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-neutral-500">
                      {t("Products.No products found")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </Container>
      
      <AddProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}