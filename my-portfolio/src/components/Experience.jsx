import { experiences } from "./data/portfolioData.js";
import SectionHeader from "./SectionHeader";
import { sectionIcons } from "./data/sectionIcons";

import { motion } from "framer-motion";

function Experience() {
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // speed between items
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow flex flex-col h-full">
      <SectionHeader
        icon={sectionIcons.EXPERIENCE}
        title="Experience"
      />

      {/* 👇 THIS is the scrollable area */}
      <div className="flex-1 overflow-y-auto mt-4 pr-2 scrollbar-hide">
        <motion.ul
          className="relative ml-6"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Vertical timeline */}
          <span className="absolute left-[-7px] top-0 w-[2px] h-full bg-gray-200 dark:bg-gray-700 rounded" />

          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="relative mb-8 last:mb-0 flex items-start group"
            >
              {index !== experiences.length - 1 && (
                <span
                  className={`
                    absolute left-[-7px] top-[16px]
                    w-[2px]
                    bg-transparent
                    transition-all duration-200
                    group-hover:bg-blue-500
                    group-hover:shadow-[0_0_10px_rgba(59,130,246,0.9)]
                    ${
                      index === experiences.length - 1
                        ? "h-4"
                        : "bottom-[-2rem]"
                    }
                  `}
                />
              )}

              {/* Dot */}
              <span
                className="
                  absolute left-[-14px]
                  flex items-center justify-center
                  w-4 h-4 rounded-full
                  border-2 border-gray-400 dark:border-gray-500
                  bg-white dark:bg-slate-800
                  transition-all duration-200
                  group-hover:border-blue-500
                  group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]
                "
              >
                {index === 0 && (
                  <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 group-hover:bg-blue-500" />
                )}
              </span>

              {/* Content */}
              <div className="ml-3 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="group-hover:translate-x-1 transition-transform">
                  <p className="text-xs font-medium">{exp.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {exp.company}
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <span className="block text-gray-400 dark:text-gray-500 max-w-full sm:max-w-md md:max-w-lg">
                        {exp.responsibilities.join(", ")}
                      </span>
                    )}
                  </p>
                </div>

                <span className="text-xs text-gray-400 dark:text-gray-500 sm:text-right sm:w-16 shrink-0">
                  {/* Mobile: single line */}
                  <span className="block sm:hidden">
                    {exp.date.from} – {exp.date.to}
                  </span>

                  {/* Desktop: stacked */}
                  <span className="hidden sm:block">
                    <span className="block">{exp.date.from}</span>
                    <span className="block">– {exp.date.to}</span>
                  </span>
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default Experience;
