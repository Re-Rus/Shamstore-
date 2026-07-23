import React from 'react';
import { Link } from 'react-router-dom';

export interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
  href: string;
}

export default function CategoryCard({ title, description, icon, linkText, href }: CategoryCardProps) {
  return (
   <section> 
    <div className="relative overflow-hidden bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 border border-[#f2e7d8] group flex flex-col h-full">
      
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#f2e7d8] rounded-full transition-transform duration-500 group-hover:scale-110 pointer-events-none"></div>

      <div className="relative z-10 w-14 h-14 rounded-2xl
       bg-gradient-to-br from-hero-start from-0% via-hero-end via-65% to-hero-mid to-100%
       text-white flex items-center justify-center mb-6 shadow-sm">
        {icon}
      </div>


      <div className="relative z-10 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-neutral-900 mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed mb-8 pr-4">
          {description}
        </p>
      </div>

      <Link 
        to={href} 
        className="relative z-10 inline-flex items-center gap-2 text-accent font-semibold text-sm w-fit group/link"
      >
        {linkText}
        <svg 
          className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
    </section>
  );
}