import React from 'react';
{/* Interface for Container component props
  @property {React.ReactNode} children - The elements to be rendered inside the container
  @property {string} className - Optional additional Tailwind classes for custom styling*/}
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}