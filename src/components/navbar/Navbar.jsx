import Logo from "../ui/Logo";
import NavbarItem from "./NavbarItem";
import Avatar from "../ui/Avatar";

const ITEMS = [
  { title: "Inicio", link: "/" },
  { title: "Comprar", link: "/comprar" },
  { title: "Vender", link: "/vender" },
  { title: "Contacto", link: "/contacto" },
];

const Navbar = () => {
  const calculeActive = (link) => {
    return document.location.href.includes(link);
  };

  return (
    <div className="w-full fixed bg-white z-10 border-b border-black/20 shadow-sm">
      <nav className="flex justify-between py-3.5 max-w-[80%] mx-auto ">
        <Logo />

        <ul className="items-center gap-3 sm:flex hidden">
          {ITEMS.map((item) => (
            <NavbarItem
              key={item.title}
              title={item.title}
              link={item.link}
              active={calculeActive(item.link)}
            />
          ))}
        </ul>

        <Avatar />
      </nav>
    </div>
  );
};

export default Navbar;
