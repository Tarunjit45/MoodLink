
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`glass rounded-3xl p-6 md:p-8 shadow-2xl transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
