import { profile } from "./data/portfolioData.js";
import verifiedIcon from "../assets/verified.png";

import { FaMapMarkerAlt } from "react-icons/fa";

function Profile() {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
      {/* Profile Image */}
      <img
        src={profile.profilePic}
        alt={profile.name}
        className="w-32 h-32 rounded-sm object-cover"
      />

      {/* Profile Info */}
      <div>
        <h1 className="text-xl font-semibold mt-2">{profile.name}
          <img src={verifiedIcon} alt="Verified" className="inline w-5 h-5 ml-1" />
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
          <FaMapMarkerAlt alt="Location" className="inline w-3 h-3 mr-1" />
          {profile.location}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{profile.role}</p>
        {/* Buttons */}
        <div className="mt-2 flex gap-2">
          {profile.buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.href}
              target={btn.newTab ? "_blank" : "_self"}
              rel={btn.newTab ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors duration-200 ${
                btn.text === "primary"
                  ? "bg-black text-white hover:bg-gray-800"
                  : "border dark:border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {btn.icon && <btn.icon className="w-4 h-4" />}
              {btn.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
