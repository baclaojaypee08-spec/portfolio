import { certifications } from "./data/portfolioData.js";
import SectionHeader from "./SectionHeader";
import { sectionIcons } from "./data/sectionIcons";
import { HiOutlineExternalLink } from "react-icons/hi";

function RecentCertification() {
  return (
    <div className="h-full bg-white dark:bg-slate-800 p-6 rounded-xl shadow flex flex-col">
      <SectionHeader
        icon={sectionIcons.CERTIFICATION}
        title="Recent Certifications"
      />

      <ul className="space-y-4">
        {certifications.map((cert, index) => (
          <li
            key={index}
            className="
              flex justify-between items-start
              p-3 rounded-lg border
              border-gray-200 dark:border-slate-700
              transition-all duration-200
              hover:bg-gray-50 dark:hover:bg-slate-700
            "
          >
            {/* Title & Issuer */}
            <div className="relative group">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                title="View certificate"
                className="
                  flex items-center gap-1 text-xs font-medium
                  hover:underline
                "
              >
                {cert.title}
                <HiOutlineExternalLink className="w-3 h-3 opacity-60" />
              </a>

              {/* PREVIEW */}
              {cert.preview && (
                <div
                  className="
                    absolute z-20 left-0 top-full mt-2
                    hidden group-hover:block
                    w-64
                    rounded-lg border
                    bg-white dark:bg-slate-800
                    shadow-lg
                  "
                >
                  <img
                    src={cert.preview}
                    alt={cert.title}
                    className="rounded-lg"
                  />
                </div>
              )}

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {cert.issuer}
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {cert.description}
              </p>
            </div>

            {/* Date */}
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {cert.date}
            </span>
          </li>

        ))}
      </ul>
    </div>
  );
}

export default RecentCertification;
