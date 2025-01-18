// Stack Icons
import html5 from "../../../public/assets/icons/html5.svg";
import css3 from "../../../public/assets/icons/css3.svg";
import javascript from "../../../public/assets/icons/javascript.svg";
import react from "../../../public/assets/icons/react.svg";
import tailwindcss from "../../../public/assets/icons/tailwindcss.svg";

// Mockups
import project1 from "../../../public/assets/work/project-1.png";
import project2 from "../../../public/assets/work/project-2.png";
import project3 from "../../../public/assets/work/project-3.png";
import project4 from "../../../public/assets/work/project-4.png";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub, BsGlobe } from "react-icons/bs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import WorkSliderBtns from "../WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Quiz App",
    desription:
      "A responsive quiz app built with HTML, CSS, and JavaScript. It features static questions, real-time feedback, score tracking.",
    stacks: [
      { icon: html5, name: "HTML 5" },
      { icon: css3, name: "CSS 3" },
      { icon: javascript, name: "Javascript" },
    ],
    image: project1,
    github: "https://github.com/MehdiGuetta/quizapp.github.io",
    live: "https://quizapp-github-io-kappa.vercel.app/",
  },
  {
    num: "02",
    category: "frontend",
    title: "Javascript Age Calculator",
    desription:
      "A simple age calculator using HTML, CSS, and JavaScript that calculates age based on the user's birth date.",
    stacks: [
      { icon: html5, name: "HTML 5" },
      { icon: css3, name: "CSS 3" },
      { icon: javascript, name: "Javascript" },
    ],
    image: project2,
    github: "https://github.com/MehdiGuetta/ageCalculator",
    live: "https://age-calculator-gamma-lemon.vercel.app/",
  },
  {
    num: "03",
    category: "frontend",
    title: "Simple Music Player",
    desription:
      "A simple music player made with HTML, CSS, and JavaScript, offering play, pause and skip, user-friendly interface.",
    stacks: [
      { icon: html5, name: "HTML 5" },
      { icon: css3, name: "CSS 3" },
      { icon: javascript, name: "Javascript" },
    ],
    image: project3,
    github: "https://github.com/MehdiGuetta/MusicPlayer",
    live: "https://music-player-six-rose.vercel.app/",
  },
  {
    num: "04",
    category: "frontend",
    title: "Student Management with React",
    desription:
      "A Student Management app built with React, Redux, React Router, and TailwindCSS, providing efficient data management, dynamic routing, and a responsive UI.",
    stacks: [
      { icon: html5, name: "HTML 5" },
      { icon: tailwindcss, name: "Tailwind CSS" },
      { icon: react, name: "React JS" },
    ],
    image: project4,
    github: "https://github.com/MehdiGuetta/studentManagement2",
    live: "https://student-management2-ulpm.vercel.app/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSwiperChange = (e) => {
    const currentIndex = e.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center 
      py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full flex flex-col xl:w-[50%] xl:h-[460px] xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* Project number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline  ">
                {project.num}
              </div>
              {/* Project category */}
              <h2 className="capitalize text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.category} project
              </h2>
              {/* Project desription */}
              <p className="text-white/60">{project.desription}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stacks.map((stack, key) => {
                  return (
                    <TooltipProvider delayDuration={100} key={key}>
                      <Tooltip>
                        <TooltipTrigger>
                          <img
                            src={stack.icon}
                            alt={stack.name}
                            className="w-[50px] h-[50px]"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{stack.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* Live Buttons */}
                <Link to={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGlobe className="text-3xl text-white group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github button */}
                <Link to={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-3xl text-white group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>Github Repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] order-1 xl:order-none ">
            <Swiper
              spaceBetween={30} // Adds space between slides
              slidesPerView={1} // Displays one slide at a time
              onSlideChange={handleSwiperChange} // Slide change handler
              className="h-[520px] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 buttom-0 w-full h-full bg-black/10 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles="text-lg"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
