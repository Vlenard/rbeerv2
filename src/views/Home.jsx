import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.png';
import Input from '../components/Input';
import { useAppData } from '../contexts/AppData';
import BeerCard from '../components/BeerCard';
import { useNavigate } from 'react-router';

const stuckedThreshold = 320; // 20rem = 320px

const Home = () => {

    const appData = useAppData();
    const navigate = useNavigate();

    const [stucked, setStucked] = useState(window.scrollY > stuckedThreshold); // window.scrollY > (3.5rem = 56px) + (20rem = 320px)
    const [filter, setFilter] = useState('');
    const [filteredBeers, setFilteredBeers] = useState(appData.beer.beers);

    const nav2Add = () => navigate('/add');

    const onChange = (e) => {
        setFilter(e.target.value.toLowerCase());
    };

    useEffect(() => {
        setFilteredBeers(
            appData.beer.beers.filter(beer =>
                beer.name.toLowerCase().includes(filter) ||
                beer.description.toLowerCase().includes(filter)
            )
        );
    }, [filter, appData.beer.beers]);

    useEffect(() => {
        document.body.onscroll = () => setStucked(window.scrollY > stuckedThreshold);

        return () => document.body.onscroll = null;
    }, []);

    return (
        <>
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-80 w-auto mx-auto" />
            </div>
            <div className="sticky top-14 flex justify-center z-10 py-2">
                <div className={`flex w-auto py-3 px-7 rounded-full backdrop-blur-md bg-[#fdebca]/20' ${stucked ? ' shadow-2xl' : ' shadow-none'}`}>
                    <Input onChange={onChange} placeholder="Keresés..." className="rounded-full w-72" />
                    <button onClick={nav2Add} className='py-2 px-5 ml-4 bg-[#3b2e21] text-[#fdebca] rounded-full hover:bg-[#5a4736]'>
                        Adj hozzá sört
                    </button>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='flex flex-wrap justify-center w-4/5'>
                    {filteredBeers.map((beer) => (
                        <BeerCard key={beer.id} beer={beer} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;