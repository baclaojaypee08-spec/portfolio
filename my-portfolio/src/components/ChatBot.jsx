import { useState, useEffect, useRef } from "react";
import { HiChatAlt2, HiX, HiPaperAirplane } from "react-icons/hi";
import { techStack, projects, profile } from "./data/portfolioData";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! Ask me about my skills or projects 👋" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();

    setMessages((prev) => [
        ...prev,
        { role: "user", content: input },
    ]);

    setInput("");

    let botReply = "";

    // 🔹 Skills
    if (userMessage.includes("skill") || userMessage.includes("tech")) {
    botReply = {
        type: "list",
        intro: "🧠 Here are my main skills:",
        items: [
        `Frontend: ${techStack.Frontend.join(", ")}`,
        `Backend: ${techStack.Backend.join(", ")}`,
        `Tools: ${techStack.Tools.join(", ")}`,
        ],
    };
    }

    // 🔹 Projects
    else if (userMessage.includes("project")) {
    botReply = {
        type: "list",
        intro: "🚀 Here are some of the projects I’ve worked on:",
        items: projects.slice(0, 10).map((p) => p.title),
    };
    }


    // 🔹 About
    else if (
        userMessage.includes("who") ||
        userMessage.includes("about")
    ) {
        botReply = `Hi! I'm ${profile.name}, a frontend developer who loves building clean and responsive web apps 🚀`;
    }

    // 🔹 Fallback (AI later)
    else {
        botReply = "🤖 I'm still learning! Ask me about my skills or projects.";
    }

    // Show typing indicator
    setTyping(true);

    setTimeout(() => {
    setMessages((prev) => [
        ...prev,
        { role: "bot", content: botReply },
    ]);
    setTyping(false);
    }, 1000); // ⏱ adjust delay here

    };


  return (
    <>
      {/* 🔵 Floating Button (ONLY when closed) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed bottom-6 right-6
            w-14 h-14
            rounded-full
            bg-blue-600 hover:bg-blue-700
            text-white text-2xl
            shadow-xl
            z-50
            flex items-center justify-center
          "
        >
          {open ? <HiX size={24} /> : <HiChatAlt2 size={26} />}
        </button>
      )}

      {/* 💬 Messenger-style Chat */}
      {open && (
        <div
          className="
            fixed bottom-6 right-6
            w-80 h-[460px]
            bg-white dark:bg-slate-800
            rounded-xl
            shadow-2xl
            z-50
            flex flex-col
            overflow-hidden
          "
        >
          {/* Header */}
        <div className="p-3 bg-blue-600 text-white flex items-center">
        {/* Left: avatar + name */}
        <div className="flex items-center gap-2">
            <img
            src={profile.profilePic}
            alt={profile.name}
            className="
                w-4 h-4 /* mobile */ sm:w-6 sm:h-6 /* tablet */ md:w-8 md:h-8 /* desktop */
                rounded-full object-cover
            "
            />
            <span className="text-sm font-medium">
            Jepoy's Chatbot
            </span>
        </div>

        {/* Right: close button */}
        <button
        onClick={() => setOpen(false)}
        className="ml-auto hover:opacity-80"
        >
        <HiX size={20} />
        </button>

        </div>

          {/* Messages */}
          <div className="
            flex-1 min-h-0
            p-3 space-y-2
            overflow-y-auto
            scrollbar-hide
          ">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg max-w-[85%] text-xs
                  ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white ml-auto"
                      : "bg-gray-200 dark:bg-slate-700 dark:text-white"
                  }`}
              >
                {typeof msg.content === "string" ? (
                msg.content
                ) : msg.content?.type === "list" ? (
                <div className="space-y-2">
                    {msg.content.intro && (
                    <p className="text-sm">{msg.content.intro}</p>
                    )}

                    <ul className="list-disc pl-4 space-y-1">
                    {msg.content.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                    </ul>
                </div>
                ) : null}

              </div>
            ))}

            {typing && (
            <div
                className="
                px-3 py-2
                rounded-lg
                max-w-[60%]
                bg-gray-200 dark:bg-slate-700
                dark:text-white
                text-xs
                flex items-center gap-1
                "
            >
                <span className="wave-dot">•</span>
                <span className="wave-dot">•</span>
                <span className="wave-dot">•</span>
            </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t dark:border-slate-700 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about me..."
              className="
                flex-1 px-3 py-2 text-xs
                rounded-lg
                border dark:border-slate-600
                dark:bg-slate-900 dark:text-white
                focus:outline-none
              "
            />
            <button
            onClick={sendMessage}
            className="
                p-2
                bg-blue-600 hover:bg-blue-700
                text-white
                rounded-lg
                flex items-center justify-center
            "
            >
            <HiPaperAirplane className="rotate-90" size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
