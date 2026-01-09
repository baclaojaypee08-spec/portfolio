import { about } from "./data/portfolioData";
import TypingText from "./TypingText";
import SectionHeader from "./SectionHeader";
import { sectionIcons } from "./data/sectionIcons";

function About() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow space-y-3">
        <SectionHeader
          icon={sectionIcons.ABOUT}
          title="About"
        />

      <div className="space-y-3">
        {about.paragraphs.map((para, index) => (
          <TypingText
            key={index}
            text={para}
            startDelay={index * 1500}
            speed={30}
          />
        ))}
      </div>
    </div>
  );
}

export default About;

