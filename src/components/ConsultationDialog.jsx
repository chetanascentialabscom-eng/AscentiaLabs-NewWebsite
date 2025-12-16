import { useState, useRef, useEffect, useCallback, memo } from 'react';
import { X, Send, User, Mail, Phone, Building, Globe, DollarSign, MessageSquare, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';


const BUDGET_RANGES = [
  'Still Evaluating',
  'Less than $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000', 
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000 - $250,000',
  '$250,000+'
];

// EmailJS Configuration - moved outside component
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_0ftxvuf',
  TEMPLATE_ID: 'template_6dsymfm',
  USER_ID: 'Xws9hZ7gOUXxCs3lu'
};

const ConsultationDialog = memo(({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    country: '',
    budgetRange: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isBudgetDropdownOpen, setIsBudgetDropdownOpen] = useState(false);
  
  const dialogRef = useRef(null);
  const countryDropdownRef = useRef(null);
  const budgetDropdownRef = useRef(null);
  const formRef = useRef(null);

  // Initialize EmailJS only once
  useEffect(() => {
    if (isOpen) {
      emailjs.init(EMAILJS_CONFIG.USER_ID);
    }
  }, [isOpen]);

  // Block all background interactions and scrolling
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    
    // Completely block background interactions
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
    
    // Block keyboard interactions except for dialog
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      
      if (dialogRef.current?.contains(e.target)) {
        const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', 'Space'];
        if (scrollKeys.includes(e.key)) {
          return;
        }
      }
      
      if (!dialogRef.current?.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown, true);
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.pointerEvents = '';
      
      document.removeEventListener('keydown', handleKeyDown, true);
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, onClose]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
      if (budgetDropdownRef.current && !budgetDropdownRef.current.contains(event.target)) {
        setIsBudgetDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close dialog on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const showToastMessage = useCallback((type, message) => {
    setToastType(type);
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const form = e.target;
    
    // Extract form values
    const fullName = form.querySelector('#fullName')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';
    
    // Validation
    if (!fullName) {
      showToastMessage('error', 'Full Name is required');
      return;
    }
    
    if (!email) {
      showToastMessage('error', 'Invalid Email Address');
      return;
    }
    
    if (!message) {
      showToastMessage('error', 'Message is required');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // EmailJS Integration
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form
      );
      
      // Show success toast
      showToastMessage('success', 'Email sent successfully! We\'ll get back to you within 24 hours.');
      
      // Reset the form after successful submission
      form.reset();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        country: '',
        budgetRange: '',
        message: ''
      });

      // Close dialog after successful submission
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      // Show error toast
      showToastMessage('error', `Failed to send email: ${error.text || error.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  }, [onClose, showToastMessage]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm" style={{ pointerEvents: 'auto' }}>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 cursor-pointer"
          onClick={onClose}
          style={{ pointerEvents: 'auto' }}
        ></div>
        
        {/* Dialog */}
        <div 
          ref={dialogRef}
          className="relative bg-white rounded-2xl md:rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] flex flex-col border-0 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{ pointerEvents: 'auto' }}
        >
        {/* Header */}
        <div className="flex-shrink-0 bg-white px-4 md:px-6 py-3 md:py-5 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-slate-800 bg-clip-text text-transparent tracking-tight">
                Let's work together
              </h2>
              <p className="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1">Tell us about your project and we'll get back to you within 24 hours</p>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
            >
              <X className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
          </div>
        </div>

        {/* Form Content - Independent Scrolling */}
        <div 
          className="flex-1 p-3 md:p-5 overflow-y-auto scrollbar-hide"
          style={{ 
            scrollBehavior: 'smooth'
          }}
          onWheel={(e) => {
            // Allow smooth scrolling anywhere in the form area
            e.stopPropagation();
          }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            {/* Hidden inputs for dropdown values */}
            <input type="hidden" name="country" value={formData.country} />
            <input type="hidden" name="budgetRange" value={formData.budgetRange} />
            
            {/* Row 1: Full Name, Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label htmlFor="fullName" className="flex items-center text-xs font-medium text-gray-700 mb-1 md:mb-1.5">
                  <User className="w-3 h-3 mr-1.5 text-blue-600" />
                  Full Name <span className='text-red-400 ml-1'>*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center text-xs font-medium text-gray-700 mb-1 md:mb-1.5">
                  <Mail className="w-3 h-3 mr-1.5 text-blue-600" />
                  Email Address <span className='text-red-400 ml-1'>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Row 2: Phone, Company Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label htmlFor="phone" className="flex items-center text-xs font-medium text-gray-700 mb-1 md:mb-1.5">
                  <Phone className="w-3 h-3 mr-1.5 text-blue-600" />
                  Phone Number <span className='text-red-400 ml-1'>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="flex items-center text-xs font-medium text-gray-700 mb-1 md:mb-1.5">
                  <Building className="w-3 h-3 mr-1.5 text-blue-600" />
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white"
                  placeholder="Enter your company name"
                />
              </div>
            </div>

            {/* Row 3: Country, Budget Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label htmlFor="country" className="flex items-center text-xs font-medium text-gray-700 mb-1 md:mb-1.5">
                  <Globe className="w-3 h-3 mr-1.5 text-blue-600" />
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white"
                  placeholder="Enter your country"
                />
              </div>

              <div>
                <label className="flex items-center text-xs font-medium text-gray-700 mb-1 md:mb-1.5">
                  <DollarSign className="w-3 h-3 mr-1.5 text-blue-600" />
                  Budget Range
                </label>
                <div className="relative" ref={budgetDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsBudgetDropdownOpen(!isBudgetDropdownOpen)}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white cursor-pointer text-gray-700 flex items-center justify-between"
                  >
                    <span className="truncate flex-1 text-left">
                      {formData.budgetRange || 'Select budget range'}
                    </span>
                    <svg 
                      className={`w-3 h-3 ml-2 flex-shrink-0 transition-transform duration-200 text-blue-600 ${isBudgetDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isBudgetDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden w-full z-50 max-h-48 overflow-y-auto"
                    >
                      {BUDGET_RANGES.map((range, index) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, budgetRange: range }));
                            setIsBudgetDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-blue-50 ${
                            formData.budgetRange === range 
                              ? 'bg-blue-50 text-blue-600 font-medium' 
                              : 'text-gray-700 hover:text-blue-600'
                          } ${index === BUDGET_RANGES.length - 1 ? '' : 'border-b border-gray-100'}`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="flex items-center text-xs font-medium text-gray-700 mb-1 md:mb-1.5">
                <MessageSquare className="w-3 h-3 mr-1.5 text-blue-600" />
                Project Details <span className='text-red-400 ml-1'>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={2}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 resize-none bg-white md:h-20"
                placeholder="Tell us about your project requirements and goals..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2 md:pt-3 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2.5 text-sm rounded-full font-medium text-white transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 via-blue-700 to-slate-800 hover:from-blue-700 hover:via-blue-800 hover:to-slate-900 hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-[10001] animate-slide-in-right">
          <div className={`bg-white border rounded-xl shadow-xl p-4 max-w-sm ${
            toastType === 'success' ? 'border-green-200' : 'border-red-200'
          }`}>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  toastType === 'success' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {toastType === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <X className="w-5 h-5 text-red-600" />
                  )}
                </div>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="text-sm font-semibold text-gray-800">
                  {toastType === 'success' ? 'Message Sent Successfully!' : 'Error Sending Message'}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{toastMessage}</p>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default ConsultationDialog;