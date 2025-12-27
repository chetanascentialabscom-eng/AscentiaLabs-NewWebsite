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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success'); // 'success' or 'error'
  const [toastMessage, setToastMessage] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isBudgetDropdownOpen, setIsBudgetDropdownOpen] = useState(false);
  const countryDropdownRef = useRef(null);
  const budgetDropdownRef = useRef(null);
  const formRef = useRef(null);

  // Initialize EmailJS
  useEffect(() => {
    initializeEmailJS();
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
    <div className="min-h-screen">
      <SEO {...seoData.contact} />
      {/* Hero Section with Enhanced Gradient matching website theme */}
      <section className="relative pt-32 md:pt-40 pb-20 lg:pb-24 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>
        
        {/* Gradient Overlay for Smooth Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-white/30 to-white"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl  mb-6">
              <span className="text-blue-600">Get In</span> <span className="text-gray-800">Touch</span> <span className="text-gray-700">With Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your business with innovative technology solutions? 
              Let's discuss your project and bring your vision to life.
            </p>
          </div>

          {/* Enhanced Contact Info Cards with your theme colors */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group hover:border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl  text-gray-800 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-3">Ready to talk? Give us a call</p>
              <a href="tel:+919356385744" className="text-blue-600  hover:text-blue-700 text-lg transition-colors">
                +91 9356385744
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group hover:border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl  text-gray-800 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-3">Send us an email anytime</p>
              <a href="mailto:support@ascentialabs.com" className="text-blue-600  hover:text-blue-700 text-lg transition-colors">
                support@ascentialabs.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group hover:border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl  text-gray-800 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-3">Come say hello at our office</p>
              <p className="text-blue-600  text-lg">
                India & Australia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smooth Transition Section */}
      <div className="h-16 bg-gradient-to-b from-white via-gray-50/50 to-black"></div>

       {/* Interactive Map Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <LeafletMap />
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
                  <h2 className="text-2xl md:text-3xl  text-gray-800">Send Us a Message</h2>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Country</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200"
                      placeholder="Enter your country"
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 bg-white cursor-pointer text-sm text-gray-700 font-medium shadow-sm hover:shadow-md hover:border-blue-300 flex items-center justify-between"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all duration-200 resize-none"
                    placeholder="Tell us about your project requirements, goals, and any specific details you'd like us to know..."
                  />
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