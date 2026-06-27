import { useNavigate } from 'react-router-dom';
import { MoreVertical, Eye } from 'lucide-react';

// Mock data - replace with API fetch later
const recentOrders = [
  { id: "#ORD-2847", customer: "Ahmad Hassan", product: "ASUS ROG Gaming Laptop", date: "May 18, 2026", status: "Completed", amount: "$1200" },
  { id: "#ORD-2846", customer: "Layla Mansour", product: "Mechanical RGB Keyboard", date: "May 17, 2026", status: "Pending", amount: "$150" },
  { id: "#ORD-2845", customer: "Omar Khalil", product: "4K Gaming Monitor 27\"", date: "May 16, 2026", status: "Processing", amount: "$350" },
  { id: "#ORD-2844", customer: "Sara Ibrahim", product: "Logitech G Pro Mouse", date: "May 16, 2026", status: "Completed", amount: "$120" },
  { id: "#ORD-2843", customer: "Yusuf Nasser", product: "Premium Headphones", date: "May 15, 2026", status: "Shipped", amount: "$299" },
];

// Helper to get badge colors based on order status
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Completed': return 'bg-green-100 text-green-700';
    case 'Pending': return 'bg-orange-100 text-orange-700';
    case 'Processing': return 'bg-blue-100 text-blue-700';
    case 'Shipped': return 'bg-purple-100 text-purple-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export default function RecentOrders() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-secondary/10">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 mb-1">Recent Orders</h2>
          <p className="text-neutral-500 text-sm">Latest customer orders</p>
        </div>
        
        <button 
          onClick={() => navigate('/Dashboard/orders')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-secondary/20 text-neutral-700 font-medium hover:border-accent hover:text-accent transition-all"
        >
          <Eye size={16} /> View All
        </button>
      </div>

      {/* Responsive Table Wrapper */}
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
              <th className="py-4 px-4"></th>
            </tr>
          </thead>
          
          <tbody>
            {recentOrders.map((order, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-neutral-50/50 transition-colors">
                <td className="py-4 px-4 font-bold text-neutral-900 text-sm">{order.id}</td>
                <td className="py-4 px-4 text-neutral-600 text-sm">{order.customer}</td>
                <td className="py-4 px-4 text-accent font-medium text-sm">{order.product}</td>
                <td className="py-4 px-4 text-neutral-500 text-sm">{order.date}</td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadge(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-4 font-bold text-neutral-900">{order.amount}</td>
                <td className="py-4 px-4 text-right">
                  {/* TODO: Implement dropdown menu for order actions */}
                  <button 
                    onClick={() => alert(`More options for order ${order.id} will open here.`)}
                    className="text-neutral-400 hover:text-accent transition-colors"
                    aria-label={`View options for order ${order.id}`}
                  >
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}