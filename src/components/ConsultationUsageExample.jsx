// Example of how to use the global consultation dialog in any component

import { useConsultation } from '../contexts/ConsultationContext';
import ConsultationButton from './ConsultationButton';

const ExampleUsage = () => {
  const { openConsultation } = useConsultation();

  return (
    <div>
      {/* Method 1: Use the pre-built button component */}
      <ConsultationButton />
      
      {/* Method 2: Use different button variants */}
      <ConsultationButton variant="secondary" size="small">
        Contact Us
      </ConsultationButton>
      
      <ConsultationButton variant="outline" size="large">
        Schedule a Call
      </ConsultationButton>
      
      {/* Method 3: Use custom button with the hook */}
      <button 
        onClick={openConsultation}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Custom Button
      </button>
      
      {/* Method 4: Open from any event */}
      <div 
        onClick={openConsultation}
        className="cursor-pointer p-4 border rounded hover:bg-gray-100"
      >
        Click this div to open consultation
      </div>
    </div>
  );
};

export default ExampleUsage;