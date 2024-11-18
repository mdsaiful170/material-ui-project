import { Buttonbox } from "../compo/Btn";
import { Containerbox } from "../compo/Container";
import Headding from "../compo/Headding";

const Hero = () => {
  return (
    <>
      <section className="pt-8 pb-10">
        <Containerbox>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 ">
            <div className="w-full text-center lg:text-left  lg:w-1/2 mx-auto ">
              <Headding
                childern={"Simply explained with illustrations"}
                className={
                  "text-7xl leading-[55px]  font-semibold lg:text-[72px] lg:leading-[83px]"
                }
              />
              <p className="text-base font-normal pt-6 mx-auto lg:mx-0  text-stone-500 max-w-sm">
                There are a lot of different components that will help you
                create the perfect look for your project
              </p>

              <div className="space-x-4 pt-8 lg:pt-10">
                <Buttonbox>get Started</Buttonbox>
                <Buttonbox className={"bg-bgdipcolor text-bgcolro"}>
                  learn more
                </Buttonbox>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src="./heroone.png"
                className="mx-auto self-center max-w-xl lg:max-w-full h-auto object-cover w-full"
                alt=""
              />
            </div>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Hero;
