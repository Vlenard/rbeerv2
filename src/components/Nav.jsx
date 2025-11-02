import { useAppData } from "../contexts/AppData";

const Nav = () => {

    const appData = useAppData();

    const logout = () => {
        appData.auth.setAuthenticated(false);
    };

    return (
        <nav className="fixed top-0 w-full flex bg-[#3b2e21] text-[#fdebca] px-10 h-14 items-center">
            <div className="flex-1">
                <span className="font-title text-2xl">Rbeer</span>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li>
                        <button className="uppercase bg-[#3b2e21] p-2 rounded-full hover:bg-[#5a4736] px-5" onClick={logout}>Kijelentkezés</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;