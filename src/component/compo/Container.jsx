import { cn } from "../../../lib/cd";

export const Containerbox = ({ className, children }) => {
  return (
    <>
      <div className={cn(" max-w-screen-xl mx-auto px-3 ", className)}>
        {children}
      </div>
    </>
  );
};
