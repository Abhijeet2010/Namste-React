import { useState } from "react";
import Logo from "../../public/swiggy.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleLogin, setToggleLogin] = useState(true);
  const navLinks = [
    {
      id: 1,
      url: "/search",
      title: "Search",
    },
    {
      id: 2,
      url: "/offers",
      title: "Offers  ",
    },
    {
      id: 3,
      url: "/help",
      title: "Help",
    },
    {
      id: 4,
      url: "/cart",
      title: "Cart",
    },
  ];
  return (
    <div className="header">
      <div className="header_logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="header_navLinks">
        <ul>
          <li>
            {navLinks.map((link) => (
              <Link key={link.id} to={link.url}>
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
