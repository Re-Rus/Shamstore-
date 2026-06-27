import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Clock, AlertTriangle, RefreshCcw, CheckCircle2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: { month: string; };
  }>;
}

// Chart payload - matches expected backend structure
const salesData = [
  { month: 'Jan', sales: 4500 },
  { month: 'Feb', sales: 5200 },
  { month: 'Mar', sales: 4900 },
  { month: 'Apr', sales: 6100 },
  { month: 'May', sales: 5900 },
  { month: 'Jun', sales: 7200 },
];

// Custom Recharts tooltip UI
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-4 py-3 rounded-2xl shadow-xl border border-secondary/10 text-center">
        <p className="text-sm font-semibold text-neutral-800 mb-1">{payload[0].payload.month}</p>
        <p className="text-sm font-bold text-[#b0891d]">
          sales : <span className="text-neutral-700">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      
      {/* Sales Chart Section */}
      <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-secondary/10 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 mb-1">Sales Analytics</h2>
          <p className="text-neutral-500 text-sm mb-6">Monthly sales performance</p>
        </div>
        
        <div className="w-full h-64 text-xs font-medium text-gray-400">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                stroke="#9ca3af" 
                dy={10}
              />
              
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                stroke="#9ca3af" 
                domain={[0, 8000]} 
                tickCount={5}
              />
              
              <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f3f4f6', opacity: 0.6 }} />
              
              <Bar 
                dataKey="sales" 
                fill="#cda94c" 
                radius={[8, 8, 0, 0]} 
                maxBarSize={48}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Action Center - Quick links to specific filtered views */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-secondary/10">
        <h2 className="text-xl font-bold text-neutral-900 mb-6">Action Center</h2>
        
        <div className="flex flex-col gap-4">
          
          <button 
            onClick={() => navigate('/Dashboard/orders?status=Pending')}
            className="flex items-center justify-between p-4 rounded-2xl border border-orange-100 bg-orange-50 hover:bg-orange-100 transition-all duration-300 group cursor-pointer text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-200/50 flex items-center justify-center text-orange-600">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">Pending Orders</p>
                <p className="text-xs text-orange-600 font-medium mt-0.5">Needs processing</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-orange-600">24</span>
              <ChevronRight size={18} className="text-orange-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button 
            onClick={() => navigate('/Dashboard/products?filter=low-stock')}
            className="flex items-center justify-between p-4 rounded-2xl border border-red-100 bg-red-50 hover:bg-red-100 transition-all duration-300 group cursor-pointer text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-200/50 flex items-center justify-center text-red-600">
                <AlertTriangle size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">Low Stock Items</p>
                <p className="text-xs text-red-600 font-medium mt-0.5">Restock required</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-red-600">8</span>
              <ChevronRight size={18} className="text-red-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button 
            onClick={() => navigate('/Dashboard/orders?status=Returned')}
            className="flex items-center justify-between p-4 rounded-2xl border border-rose-100 bg-rose-50 hover:bg-rose-100 transition-all duration-300 group cursor-pointer text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-rose-200/50 flex items-center justify-center text-rose-600">
                <RefreshCcw size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">Returns</p>
                <p className="text-xs text-rose-600 font-medium mt-0.5">Awaiting inspection</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-rose-600">3</span>
              <ChevronRight size={18} className="text-rose-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button 
            onClick={() => navigate('/Dashboard/orders?status=Completed')}
            className="flex items-center justify-between p-4 rounded-2xl border border-green-100 bg-green-50 hover:bg-green-100 transition-all duration-300 group cursor-pointer text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-200/50 flex items-center justify-center text-green-600">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">Completed</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">Successfully delivered</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-green-600">2,812</span>
              <ChevronRight size={18} className="text-green-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

        </div>
      </div>

    </div>
  );
}