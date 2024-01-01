import { useState } from "react";
import Logo from "../../public/swiggy.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleLogin, setToggleLogin] = useState(true);
  const navLinks = [
    {
      id: 1,
      url: "/about",
      title: "About",
    },
    {
      id: 2,
      url: "/search",
      title: "Search",
    },
    {
      id: 3,
      url: "/offers",
      title: "Offers  ",
    },
    {
      id: 4,
      url: "/help",
      title: "Help",
    },
    {
      id: 5,
      url: "/cart",
      title: "Cart",
    },
  ];
  return (
    <div className=" flex justify-between items-center px-20 h-24 ">
      <div className="w-20">
        <img className="object-cover" src={Logo} alt="logo" />
      </div>

      <div className="header_navLinks">
        <ul className="">
          <li className="flex gap-8 ">
            {navLinks.map((link) => (
              <Link
                className="hover:text-orange-400"
                key={link.id}
                to={link.url}
              >
                {link.title}
              </Link>
            ))}

            <Link onClick={() => setToggleLogin((prev) => !prev)}>
              {toggleLogin ? "Login" : "Register"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
