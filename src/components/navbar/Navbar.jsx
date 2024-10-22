import Logo from "../ui/Logo";
import NavbarItem from "./NavbarItem";
import Avatar from "./AvatarLogin";
import { useEffect, useState } from "react";

const ITEMS = [
  { title: "Inicio", link: "/" },
  { title: "Comprar", link: "/buy" },
  { title: "Vender", link: "/vender" },
];

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);

  const hasToken = () => {
    return localStorage.getItem("token") !== null;
  };

  useEffect(() => {
    setIsLogged(hasToken());
  }, []);

  const calculeActive = (link) => {
    return document.location.pathname === link;
  };

  return (
    <div className="w-full fixed top-0 bg-[#FAFAFA] z-[999] border-b border-black/10 backdrop-blur-sm">
      <nav className="flex justify-between py-3.5 max-w-[80%] mx-auto ">
        <Logo />

        <ul className="items-center gap-3 sm:flex hidden">
          {ITEMS.map((item) => {
            let link = item.link;

            if (item.title === "Vender") {
              link = isLogged ? "/vender" : "/login";
            }

            return (
              <NavbarItem
                key={item.title}
                title={item.title}
                link={link}
                active={calculeActive(item.link)}
              />
            );
          })}
        </ul>

        <Avatar />
      </nav>
    </div>
  );
};

export default Navbar;
