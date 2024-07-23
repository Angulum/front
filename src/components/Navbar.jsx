import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import Avatar from "./ui/Avatar";

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
    <div className="w-full max-w-[70%] mx-auto">
      <nav className="flex justify-between py-3">
        <Logo />
        
        <ul className="flex items-center gap-3">
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
