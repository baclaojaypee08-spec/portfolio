import Profile from "./components/Profile";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import RecentProjects from "./components/RecentProjects";
import RecentCertification from "./components/RecentCertification";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

import MotionSection from "./components/MotionSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-5xl mx-auto p-6 space-y-4">
        
        <MotionSection>
          <Profile />
        </MotionSection>
        
        <div className="max-w-6xl mx-auto">
          {/* 2-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-9 gap-4 items-stretch">

          {/* LEFT COLUMN */}
          <div className="md:col-span-5 flex flex-col gap-4">
            
            <MotionSection>
              <About />
            </MotionSection>

            <MotionSection delay={0.2}>
              <TechStack />
            </MotionSection>
            
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-4 flex">
            
            <MotionSection className="flex-1">
              <Experience />
            </MotionSection>

          </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          {/* 2-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">

          {/* LEFT COLUMN */}
          <div className="md:col-span-3 h-full">
            
            <MotionSection>
              <RecentProjects />
            </MotionSection>

          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-2 flex">
            
            <MotionSection className="flex-1">
              <RecentCertification />
            </MotionSection>

          </div>
          </div>
        </div>

        <MotionSection>
          <Contact />
        </MotionSection>

        <MotionSection>
          <Gallery />
        </MotionSection>
        
      </div>
    </div>
  );
}

export default App;
