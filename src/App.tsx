import { useRef, useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Capabilities from '@/components/Capabilities';
import Campaigns from '@/components/Campaigns';
import CampaignCaseStudy from '@/components/CampaignCaseStudy';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScroll';

export default function App() {
  const [activeCampaign, setActiveCampaign] = useState<string | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const scrollRef = useRef(0);
  useScrollReveal(activeCampaign);

  const openCampaign = (slug: string) => {
    scrollRef.current = window.scrollY;
    setTransitioning(true);
    setTimeout(() => {
      setActiveCampaign(slug);
      window.scrollTo({ top: 0, behavior: 'auto' });
      setTransitioning(false);
    }, 200);
  };

  const closeCampaign = () => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveCampaign(null);
      setTransitioning(false);
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollRef.current, behavior: 'auto' });
      });
    }, 200);
  };

  useEffect(() => {
    if (transitioning) {
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.pointerEvents = '';
    }
    return () => {
      document.body.style.pointerEvents = '';
    };
  }, [transitioning]);

  const pageContent = activeCampaign ? (
    <main className="animate-fade-in">
      <CampaignCaseStudy
        key={activeCampaign}
        slug={activeCampaign}
        onBack={closeCampaign}
        onOpen={openCampaign}
      />
    </main>
  ) : (
    <main>
      <Hero />
      <About />
      <Capabilities />
      <Campaigns onOpen={openCampaign} />
      <Experience />
      <Contact />
    </main>
  );

  return (
    <div
      className={`min-h-screen bg-canvas text-ink transition-opacity duration-200 ease-out-quint ${
        transitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <Header />
      {pageContent}
      <Footer />
    </div>
  );
}
