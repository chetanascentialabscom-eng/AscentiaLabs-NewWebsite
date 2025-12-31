import { useNavigate } from 'react-router-dom';
import { Home, Mail, ArrowLeft, Search } from 'lucide-react';
import SEO from '../../components/SEO';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black flex items-center justify-center relative overflow-hidden">
      <SEO 
        title="404 - Page Not Found | Ascentia Labs"
        description="The page you're looking for doesn't exist. Return to our homepage or contact us for assistance."
        keywords="404, page not found, error"
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
         

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, we'll help you find your way back!
            </p>
          </div>

          {/* Search Icon Animation */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-slate-800/50 backdrop-blur-sm border-2 border-blue-400/30 rounded-full flex items-center justify-center animate-gentle-float">
                <Search className="w-10 h-10 text-amber-400" />
              </div>
              <div className="absolute inset-0 w-20 h-20 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/')}
              className="group px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-amber-500 hover:to-orange-600 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Home className="w-5 h-5 group-hover:animate-gentle-float" />
              <span className="font-medium">Go To Home</span>
            </button>

            <button
              onClick={() => navigate('/contact-us')}
              className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-amber-400/50 text-amber-400 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-slate-800/70 hover:border-amber-400 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Mail className="w-5 h-5 group-hover:animate-gentle-float" />
              <span className="font-medium">Contact Us</span>
            </button>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <button
              onClick={() => navigate(-1)}
              className="text-blue-200/80 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 mx-auto group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Or Go Back To Previous Page</span>
            </button>
          </div>

          {/* Additional Help Text */}
          <div className="mt-12 pt-8 border-t border-blue-400/20">
            <p className="text-blue-200/60 text-sm">
              If you believe this is an error, please{' '}
              <button
                onClick={() => navigate('/contact-us')}
                className="text-amber-400 hover:text-amber-300 underline transition-colors"
              >
                contact our support team
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
