import { useRef } from 'react';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router';
import { useAppData } from '../contexts/AppData';
import Input from '../components/Input';


const Login = () => {

    const navigate = useNavigate();
    const appData = useAppData();

    const username_ref = useRef(null);
    const password_ref = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = username_ref.current.value;
        const password = password_ref.current.value;

        if (username === 'admin' && password === 'admin') {
            appData.auth.setAuthenticated(true);
            navigate('/');
        }
    };

    return (
        <div className="flex flex-1 justify-center items-center">
            <form onSubmit={handleSubmit} method="POST" className="shadow-2xl rounded-2xl w-[30%] p-10">
                <img src={logo} alt="Logo" className="w-60 h-auto mx-auto" />
                <h2 className="text-center text-xl font-bold">Bejelentkezés</h2>
                <div className="flex flex-col space-y-5 mt-5">
                    <Input ref={username_ref} type="text" placeholder="Felhasználó" required />
                    <Input ref={password_ref} type="password" placeholder="Jelszó" required />
                    <button type="submit" className="bg-[#3b2e21] text-white py-2 rounded-lg font-bold hover:bg-[#5a4636] transition duration-300">Bejelentkezés</button>
                </div>
            </form>
        </div>
    );
};

export default Login;