import { useState, useRef, useEffect, useCallback, memo } from 'react';
import { X, Send, User, Mail, Phone, MessageSquare, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { sendEmail, validateContactForm, extractFormData, initializeEmailJS } from '../utils/email';

const ConsultationDialog = memo(({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');
  
  const dialogRef = useRef(null);
  const formRef = useRef(null);

  // Initialize EmailJS only once
  useEffect(() => {
    if (isOpen) {
      initializeEmailJS();
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
    
    // Extract and validate form data
    const formDataObj = extractFormData(form);
    
    // Validate form data
    const validation = validateContactForm(formDataObj);
    
    if (!validation.isValid) {
      showToastMessage('error', validation.errors[0]); // Show first error
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Send email using utility function
      const result = await sendEmail(form);
      
      if (result.success) {
        // Show success toast
        showToastMessage('success', result.message);
        
        // Reset the form after successful submission
        form.reset();
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });

        // Close dialog after successful submission
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error(result.message);
      }

    } catch (error) {
      // Show error toast
      showToastMessage('error', error.message || 'Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [onClose, showToastMessage]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999]  backdrop-blur-xs" style={{ pointerEvents: 'auto' }}>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 cursor-pointer"
          onClick={onClose}
          style={{ pointerEvents: 'auto' }}
        ></div>
        
        {/* Dialog */}
        <div 
          ref={dialogRef}
          className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-black rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] w-full max-w-4xl h-[80vh] flex overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{ pointerEvents: 'auto' }}
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a15_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a15_1px,transparent_1px)] bg-[size:4rem_4rem] rounded-3xl"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Left Side - Form */}
          <div className="flex-1 flex flex-col relative z-10 bg-gray-900 rounded-l-3xl">
            {/* Header */}
            <div className="flex-shrink-0 px-6 py-4 border-b border-gray-700 relative">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    Get In Touch
                  </h2>
                  <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-800 transition-all duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 p-6">
              <form ref={formRef} onSubmit={handleSubmit} className="h-full flex flex-col space-y-4">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 text-white bg-gray-800  border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 hover:border-gray-500 placeholder-gray-400"
                    placeholder="Full Name*"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 text-white bg-gray-800  border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 hover:border-gray-500 placeholder-gray-400"
                    placeholder="Email Id*"
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 text-white bg-gray-800  border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 hover:border-gray-500 placeholder-gray-400"
                    placeholder="Phone Number*"
                  />
                </div>

                {/* Message */}
                <div className="flex-1">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full h-full min-h-[80px] px-3 py-2.5 text-white bg-gray-800  border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 resize-none hover:border-gray-500 placeholder-gray-400"
                    placeholder="Describe Your Project Idea/Message"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 rounded-lg ${
                      isSubmitting
                        ? 'bg-gradient-to-r from-amber-400 to-orange-500 cursor-not-allowed text-black opacity-75'
                        : 'bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:from-amber-500 hover:to-orange-600 hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                        Sending...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="hidden lg:flex lg:w-96 relative overflow-hidden">
            {/* Background with dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/95 backdrop-blur-sm"></div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-10 w-20 h-20 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-16 w-16 h-16 border-2 border-blue-300/40 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 right-16 w-12 h-12 border-2 border-blue-400/30 rounded-full animate-pulse delay-500"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col justify-center items-center h-full text-white">
              {/* Heading */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold leading-tight text-white">
                  Let's Build Something Amazing Together
                </h3>
              </div>
              
              {/* Large Image */}
              <div className="w-full flex justify-center">
                <div className="w-full max-w-sm h-80 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                  <img 
                    src="/contact.jpg" 
                    alt="Ascential Labs" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl items-center justify-center">
                    <div className="text-white text-3xl font-bold">Ascential Labs</div>
                  </div>
                </div>
              </div>
            </div>
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