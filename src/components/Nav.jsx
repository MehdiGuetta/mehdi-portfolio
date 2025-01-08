import { NavLink, useLocation } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = useLocation().pathname;
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            to={link.path}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Nav;
