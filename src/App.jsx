import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import NewsTicker from "./components/NewsTicker";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";
import { ConsultationProvider } from "./contexts/ConsultationContext";
import { useLenis } from "./hooks/useLenis";
import { ROUTES, LEGACY_REDIRECTS } from "./utils/routes";
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
  UAERealEstatePage,
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

import NDMCTicketingCase from "./pages/CaseStudies/NDMCTicketingCase";
import InsuranceExpertsCase from "./pages/CaseStudies/InsuranceExpertsCase";
import SSoodTaskManagementCase from "./pages/CaseStudies/SSoodTaskManagementCase";
import PumpkinsKindergartenCase from "./pages/CaseStudies/PumpkinsKindergartenCase";
import SunviewEnclaveCase from "./pages/CaseStudies/SunviewEnclaveCase";
import TravelandAiBlog26 from "./pages/Blogs/TravelandAiBlog2026";
import TravelMargin2026 from "./pages/Blogs/TravelMargins2026";
import Careers from "./pages/career-page";
import ShopifyServicePage from "./pages/Services/ShopifyDevelompentSolution";
import FabricShrinkagePredictionBlog from "./pages/Blogs/fabricShrinkagePrediction";
import FutureFabricShrinkagePredictionBlog from "./pages/Blogs/FutureFabricShrinkagePredictionBlog";
import TextileColorMatchingBlog from "./pages/Blogs/Textilecolormatchingblog";

function App() {
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
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.about} element={<About />} />
            <Route path={ROUTES.contact} element={<Contact />} />

            {/* Industry Routes — /industry/{slug} */}
            <Route
              path={ROUTES.industry.fieldServiceCrm}
              element={<FieldServiceCRM />}
            />
            <Route
              path={ROUTES.industry.businessCrm}
              element={<BusinessCRM />}
            />
            <Route
              path={ROUTES.industry.interiorArchitecture}
              element={<InteriorArchitecture />}
            />
            <Route
              path={ROUTES.industry.logistics}
              element={<LogisticsPage />}
            />
            <Route path={ROUTES.industry.erp} element={<ERPPage />} />
            <Route
              path={ROUTES.industry.healthcare}
              element={<HealthCarePage />}
            />
            <Route
              path={ROUTES.industry.realEstate}
              element={<RealEstatePage />}
            />
            <Route
              path={ROUTES.industry.uaeRealEstate}
              element={<UAERealEstatePage />}
            />
            <Route
              path={ROUTES.industry.kindergarten}
              element={<KindergartenPage />}
            />
            <Route
              path={ROUTES.industry.education}
              element={<EducationPage />}
            />
            <Route
              path={ROUTES.industry.travelTourism}
              element={<TravelTourismPage />}
            />
            <Route
              path={ROUTES.industry.ticketing}
              element={<TicketingSolutionPage />}
            />
            <Route
              path={ROUTES.industry.textiles}
              element={<TextilesPage />}
            />
            <Route
              path={ROUTES.industry.manufacturing}
              element={<ManufacturingPage />}
            />

            {/* Service Routes — /service/{slug} */}
            <Route
              path={ROUTES.service.customCrm}
              element={<CustomCRMDevelopment />}
            />
            <Route
              path={ROUTES.service.technologyConsultation}
              element={<TechnologyConsultationAndMIS />}
            />
            <Route
              path={ROUTES.service.softwareEngineering}
              element={<SoftwareEngineering />}
            />
            <Route path={ROUTES.service.aiMl} element={<AI_ML />} />
            <Route
              path={ROUTES.service.applicationModernisation}
              element={<ApplicationModernisation />}
            />
            <Route
              path={ROUTES.service.digitalTransformation}
              element={<DigitalTransformation />}
            />
            <Route
              path={ROUTES.service.ideationDesign}
              element={<IdeationDesign />}
            />
            <Route
              path={ROUTES.service.mobileApplication}
              element={<MobileApplication />}
            />
            <Route
              path={ROUTES.service.goToMarket}
              element={<GoToMarket />}
            />
            <Route path={ROUTES.service.startup} element={<Startup />} />
            <Route
              path={ROUTES.service.shopify}
              element={<ShopifyServicePage />}
            />

            {/* Blog Routes — /blog + /blog/{slug} */}
            <Route path={ROUTES.blog.index} element={<BlogsPage />} />
            <Route
              path={ROUTES.blog.travelAppDevelopment}
              element={<TravelAppDevelopment />}
            />
            <Route
              path={ROUTES.blog.travelAndAi2026}
              element={<TravelandAiBlog26 />}
            />
            <Route
              path={ROUTES.blog.travelMargin2026}
              element={<TravelMargin2026 />}
            />
            <Route
              path={ROUTES.blog.tourismInsights2025}
              element={<TourismReport2025 />}
            />
            <Route
              path={ROUTES.blog.aiBenefitsTravel}
              element={<AIBenefitsTravel />}
            />
            <Route
              path={ROUTES.blog.customSoftwareBusiness}
              element={<CustomSoftwareDevelopment />}
            />
            <Route
              path={ROUTES.blog.mobileAppTrends2025}
              element={<MobileAppTrends2025 />}
            />
            <Route
              path={ROUTES.blog.fabricShrinkage}
              element={<FabricShrinkagePredictionBlog />}
            />
            <Route
              path={ROUTES.blog.futureFabricShrinkage}
              element={<FutureFabricShrinkagePredictionBlog />}
            />
            <Route
              path={ROUTES.blog.textileColorMatching}
              element={<TextileColorMatchingBlog />}
            />
            <Route
              path={ROUTES.blog.healthcarePatientCare}
              element={<HealthcareAppDevelopment />}
            />

            {/* News Routes */}
            <Route path={ROUTES.news} element={<NewsPage />} />
            <Route path={ROUTES.newsItbAsia2025} element={<ITBAsia2025 />} />
            <Route
              path={ROUTES.newsRouteMaestro}
              element={<RouteMaestroPlatform />}
            />

            {/* Case Studies Routes */}
            <Route path={ROUTES.caseStudies} element={<CaseStudiesPage />} />
            <Route
              path={ROUTES.caseStudyJustDoIt}
              element={<JusDoItCase />}
            />
            <Route
              path={ROUTES.caseStudyRouteMaestro}
              element={<RouteMaestroCase />}
            />
            <Route
              path={ROUTES.caseStudyAirnet}
              element={<RouteMaestroCase />}
            />
            <Route
              path={ROUTES.caseStudyKinderConnect}
              element={<KinderConnectCase />}
            />
            <Route
              path={ROUTES.caseStudyInsuranceSafe}
              element={<InsuranceSafeCase />}
            />
            <Route
              path={ROUTES.caseStudyNdmc}
              element={<NDMCTicketingCase />}
            />
            <Route
              path={ROUTES.caseStudyInsuranceExperts}
              element={<InsuranceExpertsCase />}
            />
            <Route
              path={ROUTES.caseStudySSood}
              element={<SSoodTaskManagementCase />}
            />
            <Route
              path={ROUTES.caseStudyPumpkins}
              element={<PumpkinsKindergartenCase />}
            />
            <Route
              path={ROUTES.caseStudySunview}
              element={<SunviewEnclaveCase />}
            />

            <Route path={ROUTES.careers} element={<Careers />} />

            {/* Legacy URL redirects → new /industry|/service|/blog slugs */}
            {LEGACY_REDIRECTS.map(([from, to]) => (
              <Route
                key={from}
                path={from}
                element={<Navigate to={to} replace />}
              />
            ))}

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
