import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesConvergence from '@/components/ServicesConvergence';
import VideoSection from '@/components/VideoSection';
import WorkSection from '@/components/WorkSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import PricingSection from '@/components/PricingSection';
import PricingSection2 from '@/components/PricingSection2';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <AnimatedSection delay={0.2}>
          <PricingSection2 />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <ServicesConvergence />
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <VideoSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <WorkSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <PricingSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
