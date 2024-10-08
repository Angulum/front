import { cn } from "../../lib/utils";

const Skeleton = ({ className }) => {
  return <div className={cn("bg-gray-300 animate-pulse rounded", className)} />;
};

export default Skeleton;
