import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NewsTicker from './components/NewsTicker'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollToTop from './components/ScrollToTop'
import { ConsultationProvider } from './contexts/ConsultationContext'
import { useLenis } from './hooks/useLenis'
import {
  Home,
  About,
  Contact,
  CustomCRM,
  InteriorArchitecture,
  LogisticsPage, 
  ERPPage, 
  HealthCarePage, 
  RealEstatePage, 
  KindergartenPage, 
  EducationPage, 
  TravelTourismPage, 
  TicketingSolutionPage, 
  TextilesPage,
  ManufacturingPage, 
  TechnologyConsultationAndMIS, 
  SoftwareEngineering, 
  AI_ML,
  ApplicationModernisation,
  DigitalTransformation,
  IdeationDesign,
  MobileApplication,
  GoToMarket,
  Startup,
  BlogsPage, 
  TravelAppDevelopment, 
  TourismReport2025, 
  AIBenefitsTravel, 
  CustomSoftwareDevelopment, 
  MobileAppTrends2025, 
  HealthcareAppDevelopment,
  CaseStudiesPage,
  RouteMaestroCase,
  KinderConnectCase,
  InsuranceSafeCase,
  JusDoItCase
} from './pages'

function App() {
  // Initialize Lenis smooth scrolling
  useLenis()
  
  return (
    <Router>
      <ConsultationProvider>
        <ScrollToTop />
        <div className="min-h-screen">
          <Header />
          <div className="fixed top-[70px] md:top-[110px] left-0 right-0 z-[9998] w-full">
            <NewsTicker />
          </div>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />

          {/* Industry Routes - Using old website URLs */}
          <Route path="/complaint-management-system" element={<CustomCRM />} />
          <Route path="/interior-design-app-development" element={<InteriorArchitecture />} />
          <Route path="/logistics-software-development" element={<LogisticsPage/> } />
          <Route path="/enterprise-resource-planning" element={<ERPPage/> } />
          <Route path="/healthcare-app-development" element={<HealthCarePage/> } />
          <Route path="/real-estate-app-development" element={<RealEstatePage/> } />
          <Route path="/kindergarten-school-management" element={<KindergartenPage/> } />
          <Route path="/education-app-development" element={<EducationPage/> } />
          <Route path="/travel-app-development" element={<TravelTourismPage/> } />
          <Route path="/ticketing-solution" element={<TicketingSolutionPage/> } />
          <Route path="/textiles" element={<TextilesPage/> } />
          <Route path="/manufacturing" element={<ManufacturingPage/> } />
          
          {/* Services Routes */}
          <Route path="/technology-consultation-mis" element={<TechnologyConsultationAndMIS/> } />
          <Route path="/software-engineering" element={<SoftwareEngineering/> } />
          <Route path="/ai-ml-services" element={<AI_ML/> } />
          <Route path="/application-modernisation" element={<ApplicationModernisation/> } />
          <Route path="/digital-transformation" element={<DigitalTransformation/> } />
          <Route path="/ideation-design" element={<IdeationDesign/> } />
          <Route path="/mobile-application" element={<MobileApplication/> } />
          <Route path="/go-to-market" element={<GoToMarket/> } />
          <Route path="/startup-technology-partnership" element={<Startup/> } />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/travel-app-development-in-tourism" element={<TravelAppDevelopment />} />
          <Route path="/latest-tourism-insights2025" element={<TourismReport2025 />} />
          <Route path="/benefits-ai-travel-tourism" element={<AIBenefitsTravel />} />
          <Route path="/custom-software-development-business" element={<CustomSoftwareDevelopment />} />
          <Route path="/mobile-app-development-trends-2025" element={<MobileAppTrends2025 />} />
          <Route path="/healthcare-app-development-patient-care" element={<HealthcareAppDevelopment />} />
          
          {/* Case Studies Routes */}
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-study-justdoit" element={<JusDoItCase />} />
          <Route path="/case-study-routemaestro-ai-travel-platform" element={<RouteMaestroCase />} />
          <Route path="/case-study-kinderconnect-kindergarten-management" element={<KinderConnectCase />} />
          <Route path="/case-study-insurancesafe-digital-platform" element={<InsuranceSafeCase />} />
          </Routes>
          <Footer />
          <WhatsAppFloat />
        </div>
      </ConsultationProvider>
    </Router>
  )
}

export default App
