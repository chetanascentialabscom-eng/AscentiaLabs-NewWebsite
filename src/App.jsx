import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { Home, About, CustomCRM ,InteriorArchitecture,LogisticsPage, ERPPage, HealthCarePage, RealEstatePage, EducationPage, TravelTourismPage, LibraryPage, BlogsPage, TravelAppDevelopment, TourismReport2025, AIBenefitsTravel, CustomSoftwareDevelopment} from './pages'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/complaint-management-system" element={<CustomCRM />} />
          <Route path="/interior-design-app-development" element={<InteriorArchitecture />} />
          <Route path="/logistics-software-development" element={<LogisticsPage/> } />
          <Route path="/enterprise-resource-planning" element={<ERPPage/> } />
          <Route path="/healthcare-app-development" element={<HealthCarePage/> } />
          <Route path="/real-estate-app-development" element={<RealEstatePage/> } />
          <Route path="/education-app-development" element={<EducationPage/> } />
          <Route path="/travel-tourism-app-development" element={<TravelTourismPage/> } />
          <Route path="/library-management-system" element={<LibraryPage/> } />
          
          {/* Blog Routes */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/travel-app-development-tourism-industry" element={<TravelAppDevelopment />} />
          <Route path="/blog/latest-tourism-report-2025" element={<TourismReport2025 />} />
          <Route path="/blog/benefits-ai-travel-tourism" element={<AIBenefitsTravel />} />
          <Route path="/blog/custom-software-development-business" element={<CustomSoftwareDevelopment />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App
