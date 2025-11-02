import { Outlet } from "react-router";
import { useAppData } from '../contexts/AppData';
import Landing from '../views/Landing';
import Nav from "../components/Nav";

const Auth = () => {

    const appData = useAppData();

    return appData.auth.authenticated ? (
        <>
            <Nav />
            
            <div className="flex-1 pt-14">
                <Outlet /> 
            </div>
        </>
    ) : <Landing />;
};

export default Auth;