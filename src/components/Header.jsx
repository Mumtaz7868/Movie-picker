import { NavLink } from "react-router-dom";

const Header = ({isSelected}) => (
  <nav>
    <h1 className="text-3xl text-blue-600 font-bold">Random Movie Picker</h1>
    <div className="flex gap-4 text-2xl">
      <NavLink
        className={({ isActive }) => (isActive || isSelected ? "underline" : null)}
        to="/random"
      >
        Random
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "underline" : null)}
        to="/most-popular"
      >
        Most Popular
      </NavLink>
    </div>
  </nav>
);

export default Header;
