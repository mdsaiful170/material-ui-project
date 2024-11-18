import { cn } from "../../../lib/cd";

const Headding = ({ childern, children, className }) => {
  return (
    <>
      <h2
        className={cn(
          "text-5xl md:text-[55px] lg:leading-[60px] font-medium text-neutral-900",
          className
        )}
      >
        {childern}
        {children}
      </h2>
    </>
  );
};

export default Headding;
