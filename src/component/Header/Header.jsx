import Home from "../Home/Home";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2 className=" spiral  text-center text-6xl font-semibold text-amber-400 pt-5">Welcome to the best meal</h2>
            <nav className="flex gap-5 items-center justify-center p-2 text-amber-400 font-bold text-2xl">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/categories">Category</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="contactUs">Contact us</NavLink>
            </nav>
        </div>
    );
};

export default Header;