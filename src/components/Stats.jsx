import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "years of experience",
  },
  {
    num: 10,
    text: "projects completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 100,
    text: "code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-1 gap-4 justify-center items-center xl:justify-start capitalize"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length === 15 ? "max-w-[100px]" : "max-w-[150px] "
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
