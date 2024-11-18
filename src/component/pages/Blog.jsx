import { Blogdata } from "../../../lib/data";
import BlogCard from "../compo/BlogCard";
import { Buttonbox } from "../compo/Btn";
import { Containerbox } from "../compo/Container";
import Marquee from "react-fast-marquee";
import Headding from "../compo/Headding";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Blog = () => {
  return (
    <>
      <section className="py-[2rem] lg:py-[5rem] ">
        <Containerbox>
          <div>
            <div className="pb-8 lg:pb-12">
              <Headding className={"pb-4"}>Get more from our blog</Headding>
              <div className="flex items-center justify-between">
                <p className="text-base text-stone-600 max-w-sm md:max-w-md">
                  There are a lot of different components that will help you
                  create the perfect look for your project
                </p>
                <Buttonbox className={"bg-bgdipcolor text-bgcolro pe-8"}>
                  Explore <ArrowRightAltIcon className="ms-4" />{" "}
                </Buttonbox>
              </div>
            </div>

            <Marquee
              speed={80}
              className="flex items-center gap-4"
              pauseOnHover
            >
              <div className="flex items-center gap-4">
                {Blogdata.map((res) => (
                  <BlogCard
                    className={
                      "cursor-pointer hover:border hover:border-stone-300 border-white  border rounded-md "
                    }
                    {...res}
                    key={res.id}
                  />
                ))}
              </div>
            </Marquee>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Blog;
