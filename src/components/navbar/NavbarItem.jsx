import { cn } from "../../lib/utils";

const NavbarItem = ({ title, link, active }) => {
  return (
    <li
      className={cn("text-[#4F4F4F] rounded-md py-2 px-3 transition-all", {
        "bg-[#eeeeee] font-semibold": active,
        "hover:bg-[#F5F5F5] ": !active,
      })}
    >
      <a href={link}>{title}</a>
    </li>
  );
};

export default NavbarItem;
