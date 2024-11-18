import React from "react";
import { Containerbox } from "../compo/Container";
import Headding from "../compo/Headding";
import { Buttonbox } from "../compo/Btn";
class Boom extends React.PureComponent {
  render() {
    return (
      <>
        <section className="relative py-[65px] !z-10 bg-no-repeat bg-cover bg-[#5F62E2] bg-center">
          <img className="absolute w-full h-full top-0 left-0 -z-10 right-0 object-cover lg:max-w-full "  src="./boom.png" alt="" />
          <Containerbox>
            <div className="max-w-full md:max-w-[700px]">
              <Headding className={"text-white"}>
                The quickest way to create awesome presentation
              </Headding>
              <div className="space-x-4 pt-6">
                <Buttonbox className={"bg-btntext text-white"}>
                  Get Started
                </Buttonbox>
                <Buttonbox className={"bg-blue-400/50 text-white"}>
                  Learne More
                </Buttonbox>
              </div>
            </div>
          </Containerbox>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
      </>
    );
  }
}

export default Boom;
