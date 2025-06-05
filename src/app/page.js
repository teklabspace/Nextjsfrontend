import Blogs from './Home/blogs.jsx';
import EthicalHacking from './Home/ethicalHacking.jsx';
import HardenattackSurface from './Home/hardenattackSurface.jsx';
import HeroSection from './Home/heroSection.jsx';
import LayerofAssurance from './Home/layerofAssurance.jsx';
import OurServices from './Home/ourServices.jsx';
import PlatformHighlights from './Home/platformHighlights.jsx';
import SecureSmarter from './Home/secureSmarter.jsx';
import Testimonials from './Home/testimonials.jsx';
import TrustedPartners from './Home/trustedPrtners';
import WhyTeklabspace from './Home/whyTeklabspace.jsx';

export default function Home() {
  return (
    <section className=''>
      <HeroSection />
      <TrustedPartners />
      <WhyTeklabspace />
      <SecureSmarter />
      <OurServices />
      <HardenattackSurface />
      <LayerofAssurance />
      <Testimonials />
      <PlatformHighlights />
      <Blogs />
      <EthicalHacking />
    </section>
  );
}
