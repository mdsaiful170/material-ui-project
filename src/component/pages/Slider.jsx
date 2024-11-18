import { Containerbox } from "../compo/Container";
import Headding from "../compo/Headding";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Marquee from "react-fast-marquee";
import { BardLogo } from "../../../lib/data";
import { useState } from "react";

const sliderData = [
  {
    id: 1,
    title: "Make more time for the work that matters most",
    text: "We are a team of talented designers and developers",
    img: "./man.png",
  },
  {
    id: 2,
    title: "Make more time for Hardwok ",
    text: "We are a team of talented designers and developers, who ",
    img: "./user1.png",
  },
  {
    id: 3,
    title: "Creative and Innovative Management Systems",
    text: " create unique and innovative solutions for your business.",
    img: "./user2.png",
  },
  {
    id: 4,
    title: "Make more time for the work deeply database",
    text: "We are  innovative solutions for your business.",
    img: "./user3.png",
  },
];

const Slider = () => {
  const [active, setActive] = useState(0);
  const sliderActive = sliderData[active];

  const nextButton = () => {
    setActive(function (activeslideContent) {
      return activeslideContent < sliderData.length - 1
        ? activeslideContent + 1
        : 0;
    });
  };
  const prevButton = () => {
    setActive(function (activeslideContent) {
      return activeslideContent > 0
        ? activeslideContent - 1
        : sliderData.length - 1;
    });
  };

  return (
    <>
      <section className="py-12 lg:py-20">
        <Containerbox className={"mx-auto"}>
          <div className="flex items-center justify-between mx-auto flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 ps-0 lg:ps-8  ">
              <div className="max-w-full md:max-w-lg ">
                <div className="flex items-center gap-4 pb-4">
                  <img src="./logopng.png" alt="" />
                  <span>Logo</span>
                </div>

                <Headding
                  childern={
                    <>
                      <span
                        key="open-quote"
                        className="text-4xl font-bold  align-top text-emerald-500"
                      >
                        ''
                      </span>
                      {sliderActive.title}
                      <span
                        key="close-quote"
                        className="text-4xl font-bold align-top text-emerald-500"
                      >
                        ,,
                      </span>
                    </>
                  }
                ></Headding>
                <p className="text-base font-normal py-5 text-stone-400 max-w-xs">
                  {sliderActive.text}
                </p>
                <div className="flex items-center gap-4">
                  <span
                    onClick={nextButton}
                    className="size-12 active:bg-bgcolro active:text-white cursor-pointer bg-gray-200 grid place-items-center rounded-full font-bold text-neutral-700"
                  >
                    <NavigateBeforeIcon className="!text-3xl" />
                  </span>
                  <span
                    onClick={prevButton}
                    className="size-12 active:bg-bgcolro active:text-white cursor-pointer bg-gray-200 grid place-items-center rounded-full  font-bold text-neutral-700"
                  >
                    <NavigateNextIcon className="!text-3xl" />
                  </span>
                </div>
              </div>
            </div>

            <div className="relative w-full md:w-1/2  flex items-center justify-center flex-col">
              <div className="absolute block size-80 bg-stone-300 -z-10 rounded-full"></div>
              <img
                src={sliderActive.img}
                alt=""
                className="object-cover max-w-xs md:max-w-sm"
              />
            </div>
          </div>
          <div className="lg:pt-12 pt-10">
            <Marquee play speed={70} pauseOnHover>
              {BardLogo.map((img) => (
                <div key={img.id} className="px-5">
                  <img
                    src={img.img}
                    alt=""
                    className="mx-auto w-[80%] lg:max-w-full"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Slider;
