import { useState, useRef , useEffect } from 'react';
import { Mail, Phone, MapPin, Send, User, Building, Globe, DollarSign, MessageSquare, CheckCircle, X } from 'lucide-react';
import SEO from '../../components/SEO';
import { seoData } from '../../utils/seoData';
import LeafletMap from '../../components/LeafletMap';
import { sendEmail, validateContactForm, extractFormData, initializeEmailJS } from '../../utils/email';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    country: '',
    budgetRange: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success'); // 'success' or 'error'
  const [toastMessage, setToastMessage] = useState('');
  const [isBudgetDropdownOpen, setIsBudgetDropdownOpen] = useState(false);
  const budgetDropdownRef = useRef(null);
  const formRef = useRef(null);

  // Initialize EmailJS
  useEffect(() => {
    initializeEmailJS();
  }, []);

  const budgetRanges = [
    'Still Evaluating',
    'Less than $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000', 
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+'
  ];

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Name can only contain letters and spaces';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'phone':
        if (value.trim()) { // Only validate if phone is provided (it's optional)
          const cleanedPhone = value.replace(/[\s\-\(\)+]/g, '');
          if (!/^\d+$/.test(cleanedPhone)) {
            error = 'Phone number can only contain digits';
          } else if (cleanedPhone.length < 10) {
            error = 'Phone number must be at least 10 digits';
          } else if (cleanedPhone.length > 15) {
            error = 'Phone number is too long';
          }
        }
        break;

      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    console.log("Event", e);
    e.preventDefault(); // Prevent default form submission
    
    // Validate all required fields
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (hasErrors) {
      setToastType('error');
      setToastMessage('Please fix all errors before submitting');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      return;
    }
    
    const form = e.target; // Get the form element
    
    // Extract and validate form data
    const formDataObj = extractFormData(form);
    console.log('Form data:', formDataObj);
    
    // Validate form data
    const validation = validateContactForm(formDataObj);
    
    if (!validation.isValid) {
      setToastType('error');
      setToastMessage(validation.errors[0]); // Show first error
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      return;
    }
    
    console.log('Validation passed. Sending email...');
    setIsSubmitting(true);

    try {
      // Send email using utility function
      const result = await sendEmail(form);
      
      if (result.success) {
        console.log('Email sent successfully:', result.result);
        
        // Show success toast
        setToastType('success');
        setToastMessage(result.message);
        setShowToast(true);
        
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
        setErrors({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(result.message);
      }

    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error toast
      setToastType('error');
      setToastMessage(error.message || 'Failed to send email. Please try again.');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (budgetDropdownRef.current && !budgetDropdownRef.current.contains(event.target)) {
        setIsBudgetDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData.contact} />
     {/* Contact Form Section */}
      <section className="pt-32 pb-8 bg-black relative">
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border-2 border-amber-400/30">
              {/* Form Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                    <Send className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-white">Send Us A Message</h2>
                </div>
                <p className="text-blue-200/80 text-sm">
                  Fill Out The Form Below And We'll Get Back To You Within 24 Hours
                </p>
              </div>

              {/* Contact Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" id="contactForm">
                {/* Hidden inputs for dropdown values to ensure they're sent with EmailJS */}
                <input type="hidden" name="country" value={formData.country} />
                <input type="hidden" name="budgetRange" value={formData.budgetRange} />
                {/* Row 1: Full Name, Email, Country */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="fullName" className="flex items-center text-sm font-medium text-blue-200 mb-2">
                      <User className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 bg-slate-900/50 text-white placeholder-blue-200/50 ${
                        errors.fullName 
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                          : 'border-blue-400/20 focus:ring-amber-500 focus:border-transparent'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="flex items-center text-sm font-medium text-blue-200 mb-2">
                      <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Your Email *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 bg-slate-900/50 text-white placeholder-blue-200/50 ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                          : 'border-blue-400/20 focus:ring-amber-500 focus:border-transparent'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="country" className="flex items-center text-sm font-medium text-blue-200 mb-2">
                      <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Country</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-blue-400/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:outline-none transition-all duration-200 bg-slate-900/50 text-white placeholder-blue-200/50"
                      placeholder="Enter your country"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number, Company Name, Budget Range */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="phone" className="flex items-center text-sm font-medium text-blue-200 mb-2">
                      <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 bg-slate-900/50 text-white placeholder-blue-200/50 ${
                        errors.phone 
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                          : 'border-blue-400/20 focus:ring-amber-500 focus:border-transparent'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="companyName" className="flex items-center text-sm font-medium text-blue-200 mb-2">
                      <Building className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Company Name</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-blue-400/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:outline-none transition-all duration-200 bg-slate-900/50 text-white placeholder-blue-200/50"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-blue-200 mb-2">
                      <DollarSign className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Budget Range</span>
                    </label>
                    <div className="relative" ref={budgetDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsBudgetDropdownOpen(!isBudgetDropdownOpen)}
                        className="w-full px-4 py-2.5 border border-blue-400/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:outline-none transition-all duration-200 bg-slate-900/50 cursor-pointer text-sm text-white font-medium shadow-sm hover:shadow-md hover:border-amber-400/50 flex items-center justify-between"
                      >
                        <span className={`truncate flex-1 text-left ${formData.budgetRange ? 'text-white' : 'text-blue-200/50'}`}>
                          {formData.budgetRange || 'Select budget range'}
                        </span>
                        <svg 
                          className={`w-4 h-4 ml-3 flex-shrink-0 transition-transform duration-200 text-blue-200 ${isBudgetDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isBudgetDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-slate-900/95 backdrop-blur-sm border border-blue-400/20 rounded-xl shadow-xl overflow-hidden w-full z-50">
                          {budgetRanges.map((range, index) => (
                            <button
                              key={range}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, budgetRange: range }));
                                setIsBudgetDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-blue-500/20 whitespace-nowrap ${
                                formData.budgetRange === range 
                                  ? 'bg-blue-500/20 text-blue-300' 
                                  : 'text-blue-200 hover:text-blue-300'
                              } ${index === budgetRanges.length - 1 ? '' : 'border-b border-blue-400/10'}`}
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
                  <label htmlFor="message" className="flex items-center text-sm font-medium text-blue-200 mb-2">
                    <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Your Message *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    rows={4}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 resize-none bg-slate-900/50 text-white placeholder-blue-200/50 ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                        : 'border-blue-400/20 focus:ring-amber-500 focus:border-transparent'
                    }`}
                    placeholder="Tell us about your project requirements, goals, and any specific details you'd like us to know... (min 10 characters)"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-4 rounded-full  transition-all duration-300 transform hover:scale-105 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:shadow-lg hover:from-amber-500 hover:to-orange-600'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        Submit Message
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

       {/* Interactive Map Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <LeafletMap />
        </div>
      </section>

      
      {/* Hero Section with Enhanced Gradient matching website theme */}

      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-blue-950 via-blue-900 to-slate-900">
        {/* Smooth transition gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
        
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Gradient Overlay for Smooth Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Get In <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Touch</span> With Us
            </h1>
            <p className="text-lg sm:text-xl text-blue-200/80 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your business with innovative technology solutions? 
              Let's discuss your project and bring your vision to life.
            </p>
          </div>

          {/* Enhanced Contact Info Cards with dark theme */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 shadow-lg hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl text-white mb-3">Call Us</h3>
              <p className="text-blue-200/70 text-sm mb-3">Ready To Talk? Give Us A Call</p>
              <a href="tel:+919356385744" className="text-amber-400 hover:text-amber-300 text-lg transition-colors">
                +91 9356385744
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 shadow-lg hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl text-white mb-3">Email Us</h3>
              <p className="text-blue-200/70 text-sm mb-3">Send Us An Email Anytime</p>
              <a href="mailto:support@ascentialabs.com" className="text-amber-400 hover:text-amber-300 text-lg transition-colors break-all lowercase">
                support@ascentialabs.com
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 shadow-lg hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl text-white mb-3">Visit Us</h3>
              <p className="text-blue-200/70 text-sm mb-3">Come Say Hello At Our Office</p>
              <p className="text-amber-400 text-lg">
                India & Australia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Information */}
      {/* <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl  text-gray-800 mb-4">Why Choose Ascentia Labs?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to delivering exceptional results and building long-term partnerships with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl  text-gray-800 mb-3">Proven Expertise</h3>
              <p className="text-gray-600">
                Years of experience delivering successful projects across various industries and technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl  text-gray-800 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                24/7 support and dedicated project managers to ensure your success every step of the way.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl  text-gray-800 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                Future-proof solutions that grow with your business and adapt to changing requirements.
              </p>
            </div>
          </div>
        </div>
      </section> */}

     

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-[10000] animate-slide-in-right">
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
};

export default ContactPage;