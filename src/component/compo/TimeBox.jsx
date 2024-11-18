import React, { useState } from "react";
import Headding from "./Headding";
import { Buttonbox } from "./Btn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { cn } from "../../../lib/cd";
export class Listbox extends React.PureComponent {
  render() {
    const { item1, item2, item3 } = this.props || {};
    return (
      <>
        <ul className=" list-inside ">
          <li className="mt-4 flex gap-x-2 items-start">
            <img src="./list-img.png" alt="icon" className="mb-2 w-6 h-6" />
            {item1}
          </li>
          <li className="mt-4 flex  gap-x-2 items-start">
            <img src="./list-img.png" alt="icon" className="mb-2 w-6 h-6" />
            {item2}
          </li>
          <li className="mt-4 flex  gap-x-2 items-start">
            <img src="./list-img.png" alt="icon" className="mb-2 w-6 h-6" />
            {item3}
          </li>
        </ul>
      </>
    );
  }
}

export class TimeBox extends React.PureComponent {
  render() {
    const { id, img, title, listdata, flexrow,className } = this.props || {};

    return (
      <>
        <div
          key={id}
          className={cn(`flex items-center flex-col-reverse justify-between gap-5 lg:gap-14 ${
            flexrow === "md:flex-row" ? "md:flex-row" : "md:flex-row-reverse"
          }`,className)}
        >
          <div className=" w-full flex items-center justify-center md:w-1/2">
            <img
              src={img}
              className="max-w-md md:max-w-lg object-cover h-auto"
              alt=""
            />
          </div>

          <div className="w-full  md:w-1/2">
            <Headding className={"pb-4 md:max-w-md max-w-full"}>{title}</Headding>
            <Listbox
              item1={listdata?.item1}
              item2={listdata?.item2}
              item3={listdata?.item3}
            />

            <Buttonbox
              className={
                "max-w-[180px] mt-5 bg-bgdipcolor text-bgcolro pt-[28px]  px-4 py-3"
              }
            >
              Explore All <ArrowRightAltIcon className="ms-4" />
            </Buttonbox>
          </div>
        </div>
      </>
    );
  }
}
