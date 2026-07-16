import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NewsTicker from "./components/NewsTicker";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";
import { ConsultationProvider } from "./contexts/ConsultationContext";
import { useLenis } from "./hooks/useLenis";
import {
  Home,
  About,
  Contact,
  FieldServiceCRM,
  BusinessCRM,
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
  CustomCRMDevelopment,
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
  JusDoItCase,
  NewsPage,
  ITBAsia2025,
  RouteMaestroPlatform,
  NotFound,
} from "./pages";

// Import new case study components
import NDMCTicketingCase from "./pages/CaseStudies/NDMCTicketingCase";
import InsuranceExpertsCase from "./pages/CaseStudies/InsuranceExpertsCase";
import SSoodTaskManagementCase from "./pages/CaseStudies/SSoodTaskManagementCase";
import PumpkinsKindergartenCase from "./pages/CaseStudies/PumpkinsKindergartenCase";
import SunviewEnclaveCase from "./pages/CaseStudies/SunviewEnclaveCase";
import TravelandAiBlog26 from "./pages/Blogs/TravelandAiBlog2026";
import TravelMargin2026 from "./pages/Blogs/TravelMargins2026";
import Careers from "./pages/career-page";
import ShopifyServicePage from "./pages/Services/ShopifyDevelompentSolution";

function App() {
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <Router>
      <ConsultationProvider>
        <ScrollToTop />
        <div className="min-h-screen">
          <Header />
          <div className="fixed top-[60px] md:top-[110px] left-0 right-0 z-[9998] w-full">
            <NewsTicker />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />

            {/* Industry Routes - Using old website URLs */}
            <Route path="/field-service-crm" element={<FieldServiceCRM />} />
            <Route
              path="/business-management-crm-solution"
              element={<BusinessCRM />}
            />
            <Route
              path="/interior-design-app-development"
              element={<InteriorArchitecture />}
            />
            <Route
              path="/logistics-software-development"
              element={<LogisticsPage />}
            />
            <Route path="/enterprise-resource-planning" element={<ERPPage />} />
            <Route
              path="/healthcare-app-development"
              element={<HealthCarePage />}
            />
            <Route
              path="/real-estate-app-development"
              element={<RealEstatePage />}
            />
            <Route
              path="/kindergarten-school-management"
              element={<KindergartenPage />}
            />
            <Route
              path="/education-app-development"
              element={<EducationPage />}
            />
            <Route
              path="/travel-app-development"
              element={<TravelTourismPage />}
            />
            <Route
              path="/ticketing-solution"
              element={<TicketingSolutionPage />}
            />
            <Route
              path="/textile-erp-software-manufacturing-solutions"
              element={<TextilesPage />}
            />
            <Route
              path="/manufacturing-management-software"
              element={<ManufacturingPage />}
            />

            {/* Services Routes */}
            <Route
              path="/custom-crm-development"
              element={<CustomCRMDevelopment />}
            />
            <Route
              path="/technology-consultation-mis"
              element={<TechnologyConsultationAndMIS />}
            />
            <Route
              path="/software-engineering"
              element={<SoftwareEngineering />}
            />
            <Route path="/ai-ml-services" element={<AI_ML />} />
            <Route
              path="/application-modernisation"
              element={<ApplicationModernisation />}
            />
            <Route
              path="/digital-transformation"
              element={<DigitalTransformation />}
            />
            <Route path="/ideation-design" element={<IdeationDesign />} />
            <Route path="/mobile-application" element={<MobileApplication />} />
            <Route path="/go-to-market" element={<GoToMarket />} />
            <Route
              path="/startup-technology-partnership"
              element={<Startup />}
            />
            <Route
              path="/shopify-development-solution"
              element={<ShopifyServicePage />}
            />

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogsPage />} />
            <Route
              path="/travel-app-development-in-tourism"
              element={<TravelAppDevelopment />}
            />
            <Route path="travel-and-ai-2026" element={<TravelandAiBlog26 />} />
            <Route path="travel-margin-2026" element={<TravelMargin2026 />} />
            <Route
              path="/latest-tourism-insights2025"
              element={<TourismReport2025 />}
            />
            <Route
              path="/benefits-ai-travel-tourism"
              element={<AIBenefitsTravel />}
            />
            <Route
              path="/custom-software-development-business"
              element={<CustomSoftwareDevelopment />}
            />
            <Route
              path="/mobile-app-development-trends-2025"
              element={<MobileAppTrends2025 />}
            />
            <Route
              path="/healthcare-app-development-patient-care"
              element={<HealthcareAppDevelopment />}
            />

            {/* News Routes */}
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/itb-asia-2025" element={<ITBAsia2025 />} />
            <Route
              path="/news/routemaestro-platform"
              element={<RouteMaestroPlatform />}
            />

            {/* Case Studies Routes */}
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-study-justdoit" element={<JusDoItCase />} />
            <Route
              path="/case-study-routemaestro-ai-travel-platform"
              element={<RouteMaestroCase />}
            />
            <Route
              path="/case-study-airnet-travels-routemaestro"
              element={<RouteMaestroCase />}
            />
            <Route
              path="/case-study-kinderconnect-kindergarten-management"
              element={<KinderConnectCase />}
            />
            <Route
              path="/case-study-insurancesafe-digital-platform"
              element={<InsuranceSafeCase />}
            />
            <Route
              path="/case-study-ndmc-mcl-ticketing-platform"
              element={<NDMCTicketingCase />}
            />
            <Route
              path="/case-study-insurance-experts-management"
              element={<InsuranceExpertsCase />}
            />
            <Route
              path="/case-study-s-sood-co-task-management"
              element={<SSoodTaskManagementCase />}
            />
            <Route
              path="/case-study-pumpkins-kindergarten-management"
              element={<PumpkinsKindergartenCase />}
            />
            <Route
              path="/case-study-sunview-enclave-real-estate"
              element={<SunviewEnclaveCase />}
            />

            {/* career page */}
            <Route path="/careers" element={<Careers />} />

            {/* 404 Catch-all Route - Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <WhatsAppFloat />
        </div>
      </ConsultationProvider>
    </Router>
  );
}

export default App;
