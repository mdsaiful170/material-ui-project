import React from "react";
import Headding from "../compo/Headding";
import { Containerbox } from "../compo/Container";
class Video extends React.PureComponent {
  render() {
    return (
      <>
       <section className="pt-[80px] lg:pt-[95px]">
       <Containerbox>
          <Headding className={"text-center pb-5"}>
            Use illustrations in UI design
          </Headding>

          <div className="text-center  max-w-screen-lg h-auto border-[10px] border-bgcolor rounded-md  mx-auto  relative">
            <iframe
              className="w-full h-auto aspect-video "
              src="https://www.youtube.com/embed/kjlu9RRHcbE?autoplay=1"
              title="YouTube video player"
              allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Containerbox>
       </section>
      </>
    );
  }
}

export default Video;
