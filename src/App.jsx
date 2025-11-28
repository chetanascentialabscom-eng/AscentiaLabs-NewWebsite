import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { Home, About, CustomCRM ,InteriorArchitecture,LogisticsPage, RealEstatePage, EducationPage, TravelTourismPage} from './pages'

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
          <Route path="/real-estate-app-development" element={<RealEstatePage/> } />
          <Route path="/education-app-development" element={<EducationPage/> } />
          <Route path="/travel-tourism-app-development" element={<TravelTourismPage/> } />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App
