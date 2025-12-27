import { useState, useRef, useEffect, useCallback, memo } from 'react';
import { X, CheckCircle, Zap, Rocket, Target, Code, Lightbulb, Users } from 'lucide-react';
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
            <div className="flex-shrink-0 px-6 py-4 border-b border-amber-400/30 relative">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl  text-white mb-1">
                    Get In Touch
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
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
                    className="w-full px-3 py-2.5 text-white bg-gray-800 border border-amber-400/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none transition-all duration-200 hover:border-amber-400/40 placeholder-gray-400"
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
                    className="w-full px-3 py-2.5 text-white bg-gray-800 border border-amber-400/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none transition-all duration-200 hover:border-amber-400/40 placeholder-gray-400"
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
                    className="w-full px-3 py-2.5 text-white bg-gray-800 border border-amber-400/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none transition-all duration-200 hover:border-amber-400/40 placeholder-gray-400"
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
                    className="w-full h-full min-h-[80px] px-3 py-2.5 text-white bg-gray-800 border border-amber-400/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none transition-all duration-200 resize-none hover:border-amber-400/40 placeholder-gray-400"
                    placeholder="Describe Your Project Idea/Message"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 rounded-lg ${
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
          <div className="hidden lg:flex lg:w-96 relative overflow-hidden bg-slate-800">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            </div>
            
            {/* Floating Animated Icons */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-35 right-8 opacity-8 animate-float">
                <Code className="w-20 h-20 text-amber-400" />
              </div>
              <div className="absolute bottom-10 left-8 opacity-8 animate-float-delayed">
                <Lightbulb className="w-16 h-16 text-orange-400" />
              </div>
              <div className="absolute bottom-10 right-12 opacity-8 animate-float-slow">
                <Users className="w-14 h-14 text-amber-500" />
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-10 flex flex-col justify-between h-full text-white py-16">
              {/* Heading */}
              <div className="mb-8">
                <h3 className="text-3xl  leading-tight text-white mb-4">
                  Let's Build<br />Something Amazing<br />Together!
                </h3>
                <p className="text-gray-400 text-sm">
                  Transform your ideas into reality
                </p>
              </div>
              
              {/* Feature List */}
              <div className="space-y-8 flex-1 flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className=" text-white mb-1">Fast Response</h4>
                    <p className="text-gray-400 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className=" text-white mb-1">Tailored Solutions</h4>
                    <p className="text-gray-400 text-sm">Custom solutions for your unique needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className=" text-white mb-1">Expert Team</h4>
                    <p className="text-gray-400 text-sm">Experienced professionals at your service</p>
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
                <h3 className="text-sm  text-gray-800">
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