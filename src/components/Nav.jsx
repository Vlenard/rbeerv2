import { useAppData } from "../contexts/AppData";
import { NavLink } from "react-router";

const Nav = () => {

    const appData = useAppData();

    const logout = () => appData.auth.setAuthenticated(false);

    return (
        <nav className="sticky top-0 w-full flex bg-[#3b2e21] text-[#fdebca] px-10 h-14 items-center">
            <div className="flex-1">
                <NavLink to="/" className="font-title text-2xl">
                    Rbeer
                </NavLink>
            </div>
            <div className="flex items-center">
                <button className="uppercase bg-[#3b2e21] p-2 rounded-full hover:bg-[#5a4736] px-5" onClick={logout}>Kijelentkezés</button>
            </div>
        </nav>
    );
}

export default Nav;