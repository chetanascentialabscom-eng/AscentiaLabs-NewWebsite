// This is a utility script to help add SEO components to all pages
// Run this manually to update pages that don't have SEO yet

export const pageMapping = [
  // Industry Pages
  { 
    file: 'src/pages/Industries/CustomCRM/index.jsx', 
    seoKey: 'customCRM',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Industries/InteriorArchitecture/index.jsx', 
    seoKey: 'interiorArchitecture',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Industries/ERP/index.jsx', 
    seoKey: 'erp',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Industries/HealthCare/index.jsx', 
    seoKey: 'healthcare',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Industries/RealEstate/index.jsx', 
    seoKey: 'realEstate',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Industries/Kindergarten/index.jsx', 
    seoKey: 'kindergarten',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Industries/Education/index.jsx', 
    seoKey: 'education',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Industries/TravelTourism/index.jsx', 
    seoKey: 'travelTourism',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Industries/Library/index.jsx', 
    seoKey: 'library',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Industries/Manufacturing/index.jsx', 
    seoKey: 'manufacturing',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },

  // Services Pages
  { 
    file: 'src/pages/Services/TechnologyConsultationAndMIS/index.jsx', 
    seoKey: 'technologyConsultation',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Services/SoftwareEngineering/index.jsx', 
    seoKey: 'softwareEngineering',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Services/AI_ML/index.jsx', 
    seoKey: 'aiMl',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Services/ApplicationModernisation/index.jsx', 
    seoKey: 'applicationModernisation',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Services/DigitalTransformation/index.jsx', 
    seoKey: 'digitalTransformation',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Services/IdeationDesign/index.jsx', 
    seoKey: 'ideationDesign',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Services/MobileApplication/index.jsx', 
    seoKey: 'mobileApplication',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },
  { 
    file: 'src/pages/Services/GoToMarket/index.jsx', 
    seoKey: 'goToMarket',
    importPath: '../../../components/SEO',
    dataPath: '../../../utils/seoData'
  },

  // Blog Pages
  { 
    file: 'src/pages/Blogs/index.jsx', 
    seoKey: 'blog',
    importPath: '../../components/SEO',
    dataPath: '../../utils/seoData'
  },
  { 
    file: 'src/pages/Blogs/TravelAppDevelopment.jsx', 
    seoKey: 'travelAppDevelopmentBlog',
    importPath: '../../components/SEO',
    dataPath: '../../utils/seoData'
  },
  { 
    file: 'src/pages/Blogs/TourismReport2025.jsx', 
    seoKey: 'tourismReport2025',
    importPath: '../../components/SEO',
    dataPath: '../../utils/seoData'
  },
  { 
    file: 'src/pages/Blogs/AIBenefitsTravel.jsx', 
    seoKey: 'aiBenefitsTravel',
    importPath: '../../components/SEO',
    dataPath: '../../utils/seoData'
  },
  { 
    file: 'src/pages/Blogs/CustomSoftwareDevelopment.jsx', 
    seoKey: 'customSoftwareDevelopmentBlog',
    importPath: '../../components/SEO',
    dataPath: '../../utils/seoData'
  },
  { 
    file: 'src/pages/Blogs/MobileAppTrends2025.jsx', 
    seoKey: 'mobileAppTrends2025',
    importPath: '../../components/SEO',
    dataPath: '../../utils/seoData'
  },
  { 
    file: 'src/pages/Blogs/HealthcareAppDevelopment.jsx', 
    seoKey: 'healthcareAppDevelopmentBlog',
    importPath: '../../components/SEO',
    dataPath: '../../utils/seoData'
  },

  // Case Studies Pages
  { 
    file: 'src/pages/CaseStudies/index.jsx', 
    seoKey: 'caseStudies',
    importPath: '../../components/SEO',
    dataPath: '../../utils/seoData'
  },
  { 
    file: 'src/pages/CaseStudies/RouteMaestroCase.jsx', 
    seoKey: 'routeMaestroCase',
    importPath: '../../components/SEO',
    dataPath: '../../utils/seoData'
  },
  { 
    file: 'src/pages/CaseStudies/KinderConnectCase.jsx', 
    seoKey: 'kinderConnectCase',
    importPath: '../../components/SEO',
    dataPath: '../../utils/seoData'
  },
  { 
    file: 'src/pages/CaseStudies/InsuranceSafeCase.jsx', 
    seoKey: 'insuranceSafeCase',
    importPath: '../../components/SEO',
    dataPath: '../../utils/seoData'
  },
  { 
    file: 'src/pages/CaseStudies/JusDoItCase.jsx', 
    seoKey: 'jusDoItCase',
    importPath: '../../components/SEO',
    dataPath: '../../utils/seoData'
  }
];

// Instructions for manual implementation:
// 1. For each page, add these imports at the top:
//    import SEO from '[importPath]';
//    import { seoData } from '[dataPath]';
//
// 2. Add this component at the beginning of the return statement:
//    <SEO {...seoData.[seoKey]} />