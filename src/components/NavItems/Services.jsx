import { Link } from "react-router-dom";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Crafting modern, responsive websites tailored to your unique needs.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user experiences with a focus on aesthetics and functionality.",
    href: "",
  },
  {
    num: "03",
    title: "Social media management",
    description:
      "Boosting your online presence with effective strategies and consistent content.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Enhancing your website's visibility and ranking to drive organic traffic.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* Top */}
                <div className="flex justify-between items-center w-full">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white group-hover:bg-accent hover:-rotate-45 transition-all duration-500 "
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Heading */}
                <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 text-white ">
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-white/80">{service.description}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
