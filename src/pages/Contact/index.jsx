import { useState, useRef , useEffect } from 'react';
import { Mail, Phone, MapPin, Send, User, Building, Globe, DollarSign, MessageSquare, CheckCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success'); // 'success' or 'error'
  const [toastMessage, setToastMessage] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isBudgetDropdownOpen, setIsBudgetDropdownOpen] = useState(false);
  const countryDropdownRef = useRef(null);
  const budgetDropdownRef = useRef(null);
  const formRef = useRef(null);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_0ftxvuf';
  const EMAILJS_TEMPLATE_ID = 'template_6dsymfm';
  const EMAILJS_USER_ID = 'Xws9hZ7gOUXxCs3lu';

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID);
  }, []);

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 
    'India', 'Japan', 'China', 'Brazil', 'Mexico', 'Italy', 'Spain', 'Netherlands',
    'Sweden', 'Norway', 'Denmark', 'Switzerland', 'Austria', 'Belgium', 'Other'
  ];

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    console.log("Event", e);
    e.preventDefault(); // Prevent default form submission
    
    const form = e.target; // Get the form element
    
    // Extract form values (similar to your reference code)
    const fullName = form.querySelector('#fullName')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const phone = form.querySelector('#phone')?.value || '';
    const message = form.querySelector('#message')?.value || '';
    
    console.log({ fullName, email, phone, message });
    
    let isValid = true;
    
    // Validation (matching your reference code pattern)
    if (!fullName) {
      isValid = false;
      setToastType('error');
      setToastMessage('Full Name is required');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      return;
    }
    
    if (!email) {
      isValid = false;
      setToastType('error');
      setToastMessage('Invalid Email Address');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      return;
    }
    
    if (!message) {
      isValid = false;
      setToastType('error');
      setToastMessage('Message is required');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      return;
    }
    
    // Stop if the form is not valid
    if (!isValid) return;
    
    console.log('Validation passed. Sending email...');
    setIsSubmitting(true);

    try {
      // EmailJS Integration (matching your reference code)
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form
      );

      console.log('Email sent successfully:', result);
      
      // Show success toast
      setToastType('success');
      setToastMessage('Email sent successfully! We\'ll get back to you within 24 hours.');
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

    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error toast
      setToastType('error');
      setToastMessage(`Failed to send email: ${error.text || error.message || 'Unknown error'}`);
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-600">
              Get In <span className="text-gray-800">Touch</span> With <span className="text-gray-700">Us</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Ready to transform your business with innovative technology solutions? 
              Let's discuss your project and bring your vision to life.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Ready to talk? Give us a call</p>
              <a href="tel:+919356385744" className="text-blue-600 font-semibold hover:text-blue-700">
                +91 9356385744
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">Send us an email anytime</p>
              <a href="mailto:support@ascentialabs.com" className="text-blue-600 font-semibold hover:text-blue-700">
                support@ascentialabs.com
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Come say hello at our office</p>
              <p className="text-blue-600 font-semibold">
                India & Australia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Send Us a Message</h2>
                </div>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>



              {/* Contact Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" id="contactForm">
                {/* Hidden inputs for dropdown values to ensure they're sent with EmailJS */}
                <input type="hidden" name="country" value={formData.country} />
                <input type="hidden" name="budgetRange" value={formData.budgetRange} />
                {/* Row 1: Full Name, Email, Country */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="fullName" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Your Email *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Country *</span>
                    </label>
                    <div className="relative" ref={countryDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white cursor-pointer text-sm text-gray-700 font-medium shadow-sm hover:shadow-md hover:border-blue-300 flex items-center justify-between"
                      >
                        <span className="truncate flex-1 text-left">
                          {formData.country || 'Select your country'}
                        </span>
                        <svg 
                          className={`w-4 h-4 ml-3 flex-shrink-0 transition-transform duration-200 ${isCountryDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isCountryDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden w-full z-50 max-h-60 overflow-y-auto">
                          {countries.map((country, index) => (
                            <button
                              key={country}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, country }));
                                setIsCountryDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-blue-50 whitespace-nowrap ${
                                formData.country === country 
                                  ? 'bg-blue-50 text-blue-600 font-medium' 
                                  : 'text-gray-700 hover:text-blue-600'
                              } ${index === countries.length - 1 ? '' : 'border-b border-gray-100'}`}
                            >
                              {country}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Row 2: Phone Number, Company Name, Budget Range */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Building className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Company Name</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <DollarSign className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Budget Range</span>
                    </label>
                    <div className="relative" ref={budgetDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsBudgetDropdownOpen(!isBudgetDropdownOpen)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white cursor-pointer text-sm text-gray-700 font-medium shadow-sm hover:shadow-md hover:border-blue-300 flex items-center justify-between"
                      >
                        <span className="truncate flex-1 text-left">
                          {formData.budgetRange || 'Select budget range'}
                        </span>
                        <svg 
                          className={`w-4 h-4 ml-3 flex-shrink-0 transition-transform duration-200 ${isBudgetDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isBudgetDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden w-full z-50">
                          {budgetRanges.map((range, index) => (
                            <button
                              key={range}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, budgetRange: range }));
                                setIsBudgetDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-blue-50 whitespace-nowrap ${
                                formData.budgetRange === range 
                                  ? 'bg-blue-50 text-blue-600 font-medium' 
                                  : 'text-gray-700 hover:text-blue-600'
                              } ${index === budgetRanges.length - 1 ? '' : 'border-b border-gray-100'}`}
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
                  <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Your Message *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project requirements, goals, and any specific details you'd like us to know..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-black hover:shadow-lg'
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

      {/* Additional Contact Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Ascentia Labs?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to delivering exceptional results and building long-term partnerships with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Proven Expertise</h3>
              <p className="text-gray-600">
                Years of experience delivering successful projects across various industries and technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                24/7 support and dedicated project managers to ensure your success every step of the way.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                Future-proof solutions that grow with your business and adapt to changing requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

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
};

export default ContactPage;