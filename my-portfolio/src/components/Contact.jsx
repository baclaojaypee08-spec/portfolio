import { contactSections } from "./data/portfolioData.js";
import { sectionIcons } from "./data/sectionIcons";

export default function Contact() {
  const contactIcons = {
    goal: sectionIcons.GOALS,
    social: sectionIcons.SOCIAL,
    contact: sectionIcons.CONTACT,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {contactSections.map((section, index) => {
        const Icon = contactIcons[section.type];

        return (
          <div
            key={index}
            className="
              bg-white dark:bg-slate-800
              p-4 rounded-xl shadow
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-md
            "
          >
            <h3 className="group flex items-center gap-2 text-sm font-medium mb-3">
              {Icon && (
                <Icon
                  className="
                    w-5 h-5 p-1 rounded-full
                    bg-gray-100 dark:bg-slate-700
                    transition-all duration-200
                    group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]
                  "
                />
              )}
              {section.title}
            </h3>

            {/* GOALS / CONTACT */}
            {section.type !== "social" && (
              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => navigator.clipboard.writeText(item)}
                    title="Click to copy"
                    className="
                      text-xs text-gray-500 dark:text-gray-400
                      p-3 rounded-lg border border-gray-200 dark:border-slate-700
                      cursor-pointer
                      transition-all duration-200
                      hover:bg-gray-50 dark:hover:bg-slate-700
                      hover:-translate-y-0.5
                    "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* SOCIAL LINKS */}
            {section.type === "social" && (
              <ul className="space-y-1">
                {section.items.map((link, i) => {
                  const SocialIcon = link.icon;

                  return (
                    <li
                      key={i}
                      title="Open profile"
                      className="
                        p-3 rounded-lg border border-gray-200 dark:border-slate-700
                        transition-all duration-200
                        hover:-translate-y-0.5 hover:shadow-sm
                      "
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-blue-500"
                      >
                        {SocialIcon && <SocialIcon className="w-4 h-4" />}
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}


          </div>
        );
      })}
    </div>
  );
}
