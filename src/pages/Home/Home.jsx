import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Partnership from '../../components/Partnership'
import Industries from '../../components/Industries'
import Technologies from '../../components/Technologies'
import SoftwareProducts from '../../components/SoftwareProducts'
import Clients from '../../components/Clients'
import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'

const Home = () => {
  return (
    <div>
      <SEO {...seoData.home} />
      <Hero />
      <Services />
      <Partnership />
      <Industries />
      <Technologies />
      <SoftwareProducts />
      <Clients />
    </div>
  );
};

export default Home;