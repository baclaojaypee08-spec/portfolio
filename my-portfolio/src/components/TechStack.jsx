import React from "react";
import { techStack } from "./data/portfolioData";
import SectionHeader from "./SectionHeader";
import { sectionIcons } from "./data/sectionIcons";

const TechStack = () => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
      <SectionHeader
        icon={sectionIcons.TECHSTACK}
        title="Tech Stack"
      />

      <div className="mt-4 space-y-4">
        {Object.entries(techStack).map(([category, skills]) => (
          <div key={category}>
            <h3 className="mb-2 text-sm font-medium">
              {category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3 py-1 text-xs rounded-md
                    bg-gray-100 dark:bg-zinc-800
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:shadow-md
                    hover:bg-gray-200 dark:hover:bg-zinc-700
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
