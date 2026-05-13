import { lazy, Suspense } from 'react';
import Hero from './v2/Hero';
import LogoMarquee from './v2/LogoMarquee';
import Solution from './v2/Solution';

const AIAgents = lazy(() => import('./v2/AIAgents'));
const ConveyorSection = lazy(() => import('./v2/ConveyorSection'));
const Problems = lazy(() => import('./v2/Problems'));
const Showcase = lazy(() => import('./v2/Showcase'));
const HowItWorks = lazy(() => import('./v2/HowItWorks'));
const Stats = lazy(() => import('./v2/Stats'));
const Testimonials = lazy(() => import('./v2/Testimonials'));
const CTA = lazy(() => import('./v2/CTA'));

const Placeholder = ({ h = 'min-h-[60vh]' }) => (
  <div className={`${h} grid place-items-center`}>
    <div className="w-6 h-6 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
  </div>
);

export default function V2Page() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Solution />
      <Suspense fallback={<Placeholder />}>
        <div className="cv-auto">
          <AIAgents />
        </div>
        <div className="cv-auto">
          <ConveyorSection />
        </div>
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
  );
}
