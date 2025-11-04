import { useNavigate } from 'react-router';
import DeleteButton from './Deletebutton';

const BeerCard = ({ beer }) => {

    const navigate = useNavigate();

    const nav2Edit = () => navigate(`/${beer.id}`);

    return (
        <div className="flex flex-col w-72 m-4 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">{beer.name}</h2>
            <div className="flex-1 overflow-clip max-h-40">
                <p className="text-gray-700 mb-4">{beer.description}</p>
            </div>
            <div className="flex justify-center items-center text-sm text-gray-600 bg-y">
                <span>Értékelés: {beer.rating}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffdf20" viewBox="0 0 16 16" className="ms-2">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
            </div>
            <div className='flex justify-center mt-2'>
                <button onClick={nav2Edit} className='p-3 text-white bg-[#3b2e21] rounded-full hover:bg-[#5a4736] cursor-pointer transition-colors'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                    </svg>
                </button>

                <DeleteButton id={beer.id} className={"bg-[#fdebca]"}/>
            </div>
        </div>
    );
};

export default BeerCard;