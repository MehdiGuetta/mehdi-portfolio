import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/MehdiGuetta",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/elmehdi-elbettioui/",
  },
  {
    icon: <FaXTwitter />,
    path: "https://x.com/mehdiguetta17",
  },
  {
    icon: <FaFacebook />,
    path: "https://web.facebook.com/itsrealmehdi",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/itsreal_mehdi/",
  },
];

const Social = () => {
  return (
    <div className="flex gap-6">
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
            className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            key={index}
            to={item.path}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
