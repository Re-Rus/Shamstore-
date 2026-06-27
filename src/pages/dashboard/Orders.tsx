import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { ArrowLeft, Search, Filter } from 'lucide-react';

// Mock data - replace with API fetch later
const allOrders = [
  { id: "#ORD-2847", customer: "Ahmad Hassan", product: "ASUS ROG Gaming Laptop", date: "May 18", status: "Completed", amount: "$1200" },
  { id: "#ORD-2846", customer: "Layla Mansour", product: "Mechanical RGB Keyboard", date: "May 17", status: "Pending", amount: "$150" },
  { id: "#ORD-2845", customer: "Omar Khalil", product: "4K Gaming Monitor 27\"", date: "May 16", status: "Processing", amount: "$350" },
  { id: "#ORD-2844", customer: "Sara Ibrahim", product: "Logitech G Pro Mouse", date: "May 16", status: "Completed", amount: "$120" },
  { id: "#ORD-2843", customer: "Yusuf Nasser", product: "Premium Headphones", date: "May 15", status: "Returned", amount: "$299" },
  { id: "#ORD-2842", customer: "Ali Sami", product: "USB-C Hub", date: "May 14", status: "Pending", amount: "$45" },
  { id: "#ORD-2841", customer: "Mona Ali", product: "Webcam 4K", date: "May 14", status: "Returned", amount: "$199" },
];

// Helper to get badge colors based on order status
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Completed': return 'bg-green-100 text-green-700';
    case 'Pending': return 'bg-orange-100 text-orange-700';
    case 'Processing': return 'bg-blue-100 text-blue-700';
    case 'Shipped': return 'bg-purple-100 text-purple-700';
    case 'Returned': return 'bg-rose-100 text-rose-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export default function Orders() {
  const navigate = useNavigate();
  
  // Read initial filter from URL params (e.g., ?status=Returned)
  const [searchParams] = useSearchParams();
  const urlStatus = searchParams.get('status');

  const [searchTerm, setSearchTerm] = useState("");
  const [activeStatus, setActiveStatus] = useState(urlStatus || "All");

  // Filter orders by status and search term
  const displayedOrders = allOrders.filter(order => {
    const matchesStatus = activeStatus === "All" ? true : order.status.toLowerCase() === activeStatus.toLowerCase();
    
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      order.customer.toLowerCase().includes(searchLower) ||
      order.id.toLowerCase().includes(searchLower) ||
      order.product.toLowerCase().includes(searchLower);

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen pt-10 pb-10">
      <Container>
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate('/Dashboard')}
            className="p-2 bg-white rounded-xl border border-secondary/20 hover:bg-neutral-50 transition-colors"
          >
            <ArrowLeft size={20} className="text-neutral-600" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">
              {activeStatus !== "All" ? `${activeStatus} Orders` : "All Orders"}
            </h1>
            <p className="text-neutral-500 text-sm mt-1">Manage and track your customer orders</p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-secondary/10 mb-6 flex flex-wrap gap-4">
          
          <div className="flex-1 relative min-w-[250px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search orders by ID, Customer, or Product..." 
              className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl outline-none focus:border-accent transition-colors"
            />
          </div>
          
          {/* Custom styled select dropdown */}
          <div className="relative">
            <select 
              value={activeStatus}
              onChange={(e) => setActiveStatus(e.target.value)}
              className="appearance-none flex items-center gap-2 pl-12 pr-10 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl text-neutral-700 font-medium hover:border-accent hover:text-accent transition-colors outline-none cursor-pointer h-full"
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Completed">Completed</option>
              <option value="Returned">Returned</option>
            </select>
            <Filter size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 text-xs">
              ▼
            </div>
          </div>

        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-secondary/10">
          <p className="text-sm text-neutral-500 mb-6 font-medium">
            Showing {displayedOrders.length} orders
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-4 px-4 font-semibold text-neutral-500 text-sm">Order ID</th>
                  <th className="py-4 px-4 font-semibold text-neutral-500 text-sm">Customer</th>
                  <th className="py-4 px-4 font-semibold text-neutral-500 text-sm">Product</th>
                  <th className="py-4 px-4 font-semibold text-neutral-500 text-sm">Date</th>
                  <th className="py-4 px-4 font-semibold text-neutral-500 text-sm">Status</th>
                  <th className="py-4 px-4 font-semibold text-neutral-500 text-sm">Amount</th>
                </tr>
              </thead>
              <tbody>
                {displayedOrders.length > 0 ? (
                  displayedOrders.map((order, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-neutral-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-neutral-900 text-sm">{order.id}</td>
                      <td className="py-4 px-4 text-neutral-600 text-sm">{order.customer}</td>
                      <td className="py-4 px-4 text-[#b0891d] font-medium text-sm">{order.product}</td>
                      <td className="py-4 px-4 text-neutral-500 text-sm">{order.date}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadge(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-bold text-neutral-900">{order.amount}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-neutral-500">
                      No orders found matching your search or filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </Container>
    </div>
  );
}