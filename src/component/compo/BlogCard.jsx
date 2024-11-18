import React from "react";
import { cn } from "../../../lib/cd";
import { Buttonbox } from "./Btn";

class BlogCard extends React.PureComponent {
  render() {
    const { id, img, title, subtext, btn, className } = this.props || {};
    return (
      <>
        <div key={id} className={cn(" overflow-hidden transition-all duration-150 relative group/box space-y-4 max-w-xs", className)}>
          <img
            className="bg-[#F7F7FA] transition-all duration-150 group-hover/box:scale-105 object-cover rounded-md w-full"
            src={img}
            alt={title}
          />
          <div className="space-y-4 p-1">
            <h2 className="text-xl lg:text-2xl font-medium text-neutral-900">
              {title}
            </h2>
            <p className="text-sm font-normal text-stone-600">{subtext}</p>
            <Buttonbox className={"text-[#2AB691] bg-[#2AB6911C] rounded-md"}>
              {btn}
            </Buttonbox>
          </div>
        </div>
      </>
    );
  }
}

export default BlogCard;
