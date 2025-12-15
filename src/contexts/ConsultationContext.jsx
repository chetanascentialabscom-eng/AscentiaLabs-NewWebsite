import { createContext, useContext, useState } from 'react';
import ConsultationDialog from '../components/ConsultationDialog';

const ConsultationContext = createContext();

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};

export const ConsultationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openConsultation = () => setIsOpen(true);
  const closeConsultation = () => setIsOpen(false);

  return (
    <ConsultationContext.Provider value={{ openConsultation, closeConsultation, isOpen }}>
      {children}
      <ConsultationDialog isOpen={isOpen} onClose={closeConsultation} />
    </ConsultationContext.Provider>
  );
};