import { useContext, useState } from "react";
import Logo from "../../public/swiggy.webp";
import { Link } from "react-router-dom";
import { AppContext } from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggleLogin, setToggleLogin] = useState(true);
  const data = useSelector((state) => state.cart.items);
  // console.log(data);

  // learn useContext Hook
  const { name, setName } = useContext(AppContext);

  const handleClick = () => {
    setToggleLogin((prev) => !prev);
    // learn previous state in useState
    setName((prev) => (prev === "No-User" ? "Abhijeet" : "No-User"));
  };

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
                {link.title === "Cart"
                  ? "cart" + " >   " + data.length
                  : link.title}
              </Link>
            ))}

            <Link
              className="px-4 border-[1px] border-black"
              onClick={handleClick}
            >
              {toggleLogin ? "Login" : "Register"}
            </Link>
            <Link>{name}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
