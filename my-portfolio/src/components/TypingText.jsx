import { useEffect, useState } from "react";

function TypingText({ text, startDelay = 0, speed = 30 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let intervalId;
    let timeoutId;

    setDisplayedText(""); // ✅ reset before typing

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index++;

        if (index >= text.length) {
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, startDelay, speed]);

  return (
    <p className="pl-3 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
      {displayedText}
    </p>
  );
}

export default TypingText;
