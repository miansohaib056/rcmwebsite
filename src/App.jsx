import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroV2 from './components/HeroV2';
import HeroV3 from './components/HeroV3';
import HeroV4 from './components/HeroV4';
import V5Page from './components/V5Page';
import LogoMarquee from './components/LogoMarquee';
import Solution from './components/Solution';
import Footer from './components/Footer';

// Below-the-fold sections are split into their own chunks and loaded on demand —
// shrinks the initial JS payload meaningfully (framer-motion pulls a lot in).
const AIAgents = lazy(() => import('./components/AIAgents'));
const ConveyorSection = lazy(() => import('./components/ConveyorSection'));
const Problems = lazy(() => import('./components/Problems'));
const Showcase = lazy(() => import('./components/Showcase'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Stats = lazy(() => import('./components/Stats'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CTA = lazy(() => import('./components/CTA'));

// Reserved-height placeholder prevents layout shift while a chunk loads.
const Placeholder = ({ h = 'min-h-[60vh]' }) => (
  <div className={`${h} grid place-items-center`}>
    <div className="w-6 h-6 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
  </div>
);

function pickHero() {
  if (typeof window === 'undefined') return <Hero />;
  const p = window.location.pathname;
  if (p.startsWith('/v2')) return <HeroV2 />;
  if (p.startsWith('/v3')) return <HeroV3 />;
  if (p.startsWith('/v4')) return <HeroV4 />;
  return <Hero />;
}

export default function App() {
  const isV5 = typeof window !== 'undefined' && window.location.pathname.startsWith('/v5');

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <main className="relative">
        {isV5 ? (
          <V5Page />
        ) : (
          <>
            {pickHero()}
            <LogoMarquee />
            <Solution />
            <Suspense fallback={<Placeholder />}>
              {/* cv-auto lets the browser skip rendering each section while it's offscreen. */}
              <div className="cv-auto">
                <AIAgents />
              </div>
              <div className="cv-auto">
                <ConveyorSection />
              </div>
              {/* Problems uses pinned scroll — cv-auto would interfere with the dynamic height */}
              <Problems />
              <div className="cv-auto">
                <Showcase />
              </div>
              <div className="cv-auto">
                <HowItWorks />
              </div>
              <div className="cv-auto">
                <Stats />
              </div>
              <div className="cv-auto">
                <Testimonials />
              </div>
              <div className="cv-auto">
                <CTA />
              </div>
            </Suspense>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
