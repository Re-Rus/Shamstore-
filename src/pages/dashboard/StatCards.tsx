import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DollarSign, ShoppingCart, Package, Users, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function StatCards() {
  const navigate = useNavigate();
const { t } = useTranslation('dashboard');


  const statsData = [
    { 
      title: t('Satcards.Total Sales'), 
      value: "$37,245", 
      increase: "+12.5%", 
      context: t('Satcards.salecontext'), 
      icon: <DollarSign size={24} className="text-white" />, 
      bgColor: "bg-green-800",
      link: "/Dashboard/orders"
    },
    { 
      title: t('Satcards.Total Orders'), 
      value: "2,847", 
      increase: "+8.2%", 
      context: t('Satcards.ordercontext'),
      icon: <ShoppingCart size={24} className="text-white" />, 
      bgColor: "bg-green-800",
      link: "/Dashboard/orders"
    },
    { 
      title: t('Satcards.Total Products'), 
      value: "156", 
      increase: "+5.1%", 
      context: t('Satcards.productcontext'),
      icon: <Package size={24} className="text-white" />, 
      bgColor: "bg-green-800",
      link: "/Dashboard/products"
    },
    { 
      title: t('Satcards.Total Customers'), 
      value: "1,284", 
      increase: "+15.3%", 
      context: t('Satcards.customercontext'),
      icon: <Users size={24} className="text-white" />, 
      bgColor: "bg-green-800",
      link: "#" // TODO: Add customers route later
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsData.map((stat, index) => (
        <div 
          key={index} 
          onClick={() => stat.link !== "#" && navigate(stat.link)}
          className={`bg-white rounded-3xl p-6 shadow-sm border border-secondary/10 flex flex-col justify-between h-44 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group ${stat.link !== "#" ? "cursor-pointer" : ""}`}
        >
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bgColor} shadow-sm group-hover:scale-110 transition-transform`}>
              {stat.icon}
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-lg text-sm font-bold">
                <TrendingUp size={14} />
                {stat.increase}
              </div>
              <span className="text-[11px] text-neutral-400 mt-1 font-medium">{stat.context}</span>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="mt-4 flex justify-between items-end">
            <div>
              <p className="text-neutral-500 text-sm mb-1 font-medium">{stat.title}</p>
              <h3 className="text-3xl font-bold text-neutral-900">{stat.value}</h3>
            </div>
            
            {stat.link !== "#" && (
              <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-accent group-hover:text-white transition-colors">
                <ArrowUpRight size={18} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}