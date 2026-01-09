import { useEffect, useRef } from "react";
import { gallery } from "./data/portfolioData";
import SectionHeader from "./SectionHeader";
import { sectionIcons } from "./data/sectionIcons";

export default function Gallery() {
  const scrollRef = useRef(null);
  const isPaused = useRef(false);
  const speed = 0.5;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isPaused.current) {
        container.scrollLeft += speed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }

      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    return () => {};
  }, []);

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
      <SectionHeader
          icon={sectionIcons.GALLERY}
          title="Gallery"
        />

      <div
        ref={scrollRef}
        className="overflow-x-hidden"
        style={{
            maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
      >
        <div className="flex gap-4 w-max">
          {[...gallery, ...gallery].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-40 h-40 rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-700"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
