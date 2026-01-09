import { projects } from "./data/portfolioData.js";
import SectionHeader from "./SectionHeader";
import { sectionIcons } from "./data/sectionIcons";

function RecentProjects() {
  return (
    <div className="h-full bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
      <SectionHeader
        icon={sectionIcons.PROJECTS}
        title="Recent Projects"
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <li
            key={index}
            className="p-4 rounded-lg border border-gray-200 dark:border-slate-700
            hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
          >
            {/* Title */}
            <h3 className="text-sm font-medium mb-1">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-0.5 rounded-full
                  bg-gray-100 dark:bg-slate-600
                  text-gray-600 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-500 hover:underline"
            >
              View Project →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentProjects;
