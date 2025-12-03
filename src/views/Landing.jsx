import { NavLink } from 'react-router';
import logo from '../assets/img/logo.png';

const Landing = () => {

    return (
        <>
            <div className="flex flex-1 justify-center items-center p-4 select-none">
                <div className="flex flex-col md:flex-row rounded-3xl p-5">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-[20rem] h-auto mx-auto" />
                    </div>
                    <div className="md:pe-20 md:pt-20">
                        <h1 className="font-title font-bold text-7xl text-center md:text-start">RBeer</h1>
                        <p className="text-sm mt-4 uppercase">Tölts magadnak egy korsóval, és merülj el az ízek világában!</p>
                        <div className="flex justify-center md:justify-end space-x-5 p-4">
                            <NavLink to="/login" className="uppercase font-bold rounded-full hover:shadow-md px-5 py-3 transition-shadow bg-[#3b2e21] text-white duration-300">
                                Belépés
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#3b2e21] text-white text-center p-4 select-none">
                Listázd és értékeld kedvenc söreidet egy helyen!
            </div>
        </>
    );
};

export default Landing;