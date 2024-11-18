import { Timedatabox } from "../../../lib/data";
import { Containerbox } from "../compo/Container";
import { TimeBox } from "../compo/TimeBox";
import React from "react";
class Time extends React.PureComponent {
  render() {
    return (
      <>
        <section className="pt-[80px]   lg:pt-[94px]">
          <Containerbox className={"max-w-screen-lg"}>
            {Timedatabox.map((data) => (
              <TimeBox
                className={"pb-16 md:pb-[120px]"}
                {...data}
                key={data.id}
              />
            ))}
          </Containerbox>
        </section>
      </>
    );
  }
}

export default Time;
