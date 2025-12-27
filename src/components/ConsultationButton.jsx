import { ArrowRight } from 'lucide-react';
import { useConsultation } from '../contexts/ConsultationContext';

const ConsultationButton = ({ 
  className = "", 
  variant = "primary", 
  size = "default",
  children = "Get Free Consultation"
}) => {
  const { openConsultation } = useConsultation();

  const baseClasses = "group relative  transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-amber-400 to-orange-500 text-black  overflow-hidden",
    secondary: "bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black shadow-lg",
    outline: "border-2 border-amber-500 text-amber-600 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-black"
  };
  
  const sizes = {
    small: "px-4 py-2 text-sm rounded-lg",
    default: "px-6 py-3 text-base rounded-xl",
    large: "px-8 py-4 text-lg rounded-xl"
  };

  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.default;

  return (
    <button
      onClick={openConsultation}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </span>
    </button>
  );
};

export default ConsultationButton;