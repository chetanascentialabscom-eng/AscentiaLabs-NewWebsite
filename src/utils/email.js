import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_idj4a7j',
  TEMPLATE_ID: 'template_0pg4xgm',
  USER_ID: '5X7tMqhA3MZC3IOs_'
};

// Initialize EmailJS
export const initializeEmailJS = (config = EMAILJS_CONFIG) => {
  try {
    emailjs.init(config.USER_ID);
    console.log('EmailJS initialized successfully');
    return true;
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    return false;
  }
};

// Send email function with error handling
export const sendEmail = async (formElement, config = EMAILJS_CONFIG) => {
  try {
    // Ensure EmailJS is initialized
    initializeEmailJS(config);
    
    // Send the email
    const result = await emailjs.sendForm(
      config.SERVICE_ID,
      config.TEMPLATE_ID,
      formElement
    );
    
    console.log('Email sent successfully:', result);
    return {
      success: true,
      result,
      message: 'Email sent successfully! We\'ll get back to you within 24 hours.'
    };
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      success: false,
      error,
      message: `Failed to send email: ${error.text || error.message || 'Unknown error'}`
    };
  }
};

// Validate form data before sending
export const validateContactForm = (formData) => {
  const errors = [];
  
  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.push('Full Name is required and must be at least 2 characters');
  }
  
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.push('Valid Email Address is required');
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors.push('Message is required and must be at least 10 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Email validation helper
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Extract form data helper
export const extractFormData = (formElement) => {
  const formData = new FormData(formElement);
  return {
    fullName: formData.get('fullName') || '',
    email: formData.get('email') || '',
    phone: formData.get('phone') || '',
    companyName: formData.get('companyName') || '',
    country: formData.get('country') || '',
    budgetRange: formData.get('budgetRange') || '',
    message: formData.get('message') || ''
  };
};

// Toast notification helper
export const createToastMessage = (type, message) => {
  return {
    type, // 'success' or 'error'
    message,
    timestamp: Date.now()
  };
};

export default {
  EMAILJS_CONFIG,
  initializeEmailJS,
  sendEmail,
  validateContactForm,
  isValidEmail,
  extractFormData,
  createToastMessage
};