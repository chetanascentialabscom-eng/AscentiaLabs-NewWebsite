import { ArrowRight } from 'lucide-react';
import { useConsultation } from '../contexts/ConsultationContext';

const ConsultationButton = ({ 
  className = "", 
  variant = "primary", 
  size = "default",
  children = "Get Free Consultation"
}) => {
  const { openConsultation } = useConsultation();

  const baseClasses = "group relative font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] overflow-hidden",
    secondary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  };
  
  const sizes = {
    small: "px-4 py-2 text-sm rounded-lg",
    default: "px-6 py-3 text-base rounded-full",
    large: "px-8 py-4 text-lg rounded-full"
  };

  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.default;

  return (
    <button
      onClick={openConsultation}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </span>
    </button>
  );
};

export default ConsultationButton;