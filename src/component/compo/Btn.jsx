
import { cn } from "../../../lib/cd";

export const Buttonbox = ({ children, className }) => {
  return (
    <>
      <button
        className={cn(
          "px-4 py-3 bg-bgcolro inline-flex capitalize text-base font-medium text-white rounded-md",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};
