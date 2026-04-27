import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

// Lazy load sections below the fold
const About = lazy(() => import("@/components/sections/About").then(m => ({ default: m.About })));
const Skills = lazy(() => import("@/components/sections/Skills").then(m => ({ default: m.Skills })));
const Experience = lazy(() => import("@/components/sections/Experience").then(m => ({ default: m.Experience })));
const Projects = lazy(() => import("@/components/sections/Projects").then(m => ({ default: m.Projects })));
const WhyMe = lazy(() => import("@/components/sections/WhyMe").then(m => ({ default: m.WhyMe })));
const Contact = lazy(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/layout/Footer").then(m => ({ default: m.Footer })));

// Loading placeholder for lazy sections
const SectionLoader = () => <div className="h-40 w-full animate-pulse bg-muted/20" />;

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground" data-testid="page-home">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <WhyMe />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}
