import { cn } from "../lib/utils";

const Section = ({ children, className }) => {
  return (
    <section
      className={cn(
        "h-[100vh] w-full flex items-center justify-center",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
