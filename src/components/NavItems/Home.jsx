import Photo from "../Photo";
import Social from "../Social";
import Stats from "../Stats";
import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1">
              Hello i{"'"}m <br />{" "}
              <span className="text-accent">Mehdi El Bettioui</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/cv.pdf" download="El Bettioui El Mehdi CV.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:transition-all duration-500"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center"
                  }
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-none">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
