import { Containerbox } from "../compo/Container";
import Headding from "../compo/Headding";
import { Buttonbox } from "../compo/Btn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { PresentationData } from "../../../lib/data";
import Cardbox from "../compo/Cardbox";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
const Presentation = () => {
  return (
    <>
      <section className="py-[80px] bg-neutral-100 lg:py-[135px]">
        <Containerbox className={"bg-red"}>
          <div className="flex   items-start justify-between gap-6 lg:gap-x-[110px] flex-col lg:flex-row ">
            {/* grid box content */}
            <div className="w-full lg:w-3/5 grid grid-cols-10 gap-5">
              {PresentationData.map((data) => (
                <Cardbox key={data.id} {...data} />
              ))}
            </div>

            {/* content */}
            <div className="w-full lg:w-2/5 flex flex-col h-auto lg:h-[640px] ">
              <div className="space-y-5  flex-1">
                <Headding
                  childern={"The quickest way to create modern presentation"}
                />
                <p className="text-stone-500 text-base font-normal max-w-md">
                  Best software platform for running an internet business. We
                  build the most powerful and flexible tools for internet
                  commerce.
                </p>
                <Buttonbox className="bg-bgdipcolor block w-[180px] text-bgcolro pe-8">
                  Explore All <ArrowRightAltIcon />
                </Buttonbox>
              </div>

              <div className=" mt-6 lg:mt-0">
                <span className="pb-3 text-base block text-stone-500 font-normal">
                  Follow Us
                </span>
                <div className="inline-flex gap-4">
                  <div className="rounded-full p-2 flex items-center justify-center bg-[#C4C4C4]">
                    <XIcon className="!text-[#12131A] !text-[24px]" />
                  </div>
                  <div className="rounded-full p-2 flex items-center justify-center bg-[#C4C4C4]">
                    <FacebookOutlinedIcon className="!text-[#12131A] !text-[24px]" />
                  </div>
                  <div className="rounded-full p-2 flex items-center justify-center bg-[#C4C4C4]">
                    <InstagramIcon className="!text-[#12131A] !text-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Presentation;
