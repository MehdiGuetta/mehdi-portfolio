// Import Icons
import pythonIcon from "../../../public/assets/icons/python.svg";
import html5Icon from "../../../public/assets/icons/html5.svg";
import css3Icon from "../../../public/assets/icons/css3.svg";
import javascriptIcon from "../../../public/assets/icons/javascript.svg";
import reactIcon from "../../../public/assets/icons/react.svg";
import laravelIcon from "../../../public/assets/icons/laravel.svg";
import phpIcon from "../../../public/assets/icons/php.svg";
import figmaIcon from "../../../public/assets/icons/figma.svg";
import tailwindcssIcon from "../../../public/assets/icons/tailwindcss.svg";
import framerMotionIcon from "../../../public/assets/icons/framerMotion.svg";
import bootstrapIcon from "../../../public/assets/icons/bootstrap.svg";

// import components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// import framer motion
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates natus doloremque nulla totam nam deleniti?",
  info: [
    {
      fieldName: "Name",
      FieldValue: "Mehdi El Bettioui",
    },
    {
      fieldName: "Phone",
      FieldValue: "+212 657 435-204",
    },
    {
      fieldName: "Education",
      FieldValue: "2 Years",
    },
    {
      fieldName: "Linkedin",
      FieldValue: "El Mehdi El Bettioui",
    },
    {
      fieldName: "Nationality",
      FieldValue: "Moroccan",
    },
    {
      fieldName: "Email",
      FieldValue: "mehdi.elbettioui1@gmail.com",
    },
    {
      fieldName: "Languages",
      FieldValue: "English, French, Arabic",
    },
  ],
};

const education = {
  icon: "/assests/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates natus doloremque nulla totam nam deleniti?",
  items: [
    {
      institution: "ISTA Hay Riyad NTIC, Rabat",
      degree: "Development Digital",
      duration: "2023 - 2024",
    },
    {
      institution: "ISTA Hay Salam, Salé",
      degree: "Full Stack Web Development",
      duration: "2024 - 2025",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates natus doloremque nulla totam nam deleniti?",
  skillsList: [
    {
      icon: html5Icon,
      name: "html 5",
      link: "https://developer.mozilla.org/fr/docs/Web/HTML",
    },
    {
      icon: css3Icon,
      name: "css 3",
      link: "https://developer.mozilla.org/fr/docs/Web/css",
    },
    {
      icon: javascriptIcon,
      name: "javascript",
      link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    },
    {
      icon: reactIcon,
      name: "react.js",
      link: "https://react.dev/",
    },
    {
      icon: phpIcon,
      name: "php",
      link: "https://www.php.net/docs.php",
    },
    {
      icon: laravelIcon,
      name: "laravel",
      link: "https://laravel.com/docs/11.x/installation",
    },
    {
      icon: pythonIcon,
      name: "python",
      link: "https://www.python.org/",
    },
    {
      icon: figmaIcon,
      name: "figma",
      link: "https://www.figma.com/",
    },
    {
      icon: bootstrapIcon,
      name: "Bootstrap",
      link: "https://getbootstrap.com/docs/4.1/getting-started/introduction/",
    },
    {
      icon: framerMotionIcon,
      name: "framer motion",
      link: "https://www.framer.com/motion/",
    },
    {
      icon: tailwindcssIcon,
      name: "tailwind css",
      link: "https://tailwindcss.com/",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className=" flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full ">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col text-center xl:text-left gap-[30px]  ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <a
                                href={skill.link}
                                target="_blank"
                                className="text-6xl transition-all duration-300"
                              >
                                <img src={skill.icon} />
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[800px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{info.fieldName}</span>
                        <span className="text-xl">{info.FieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
