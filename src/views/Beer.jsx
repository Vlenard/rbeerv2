import { useAppData } from '../contexts/AppData';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';

const Beer = () => {

  const appData = useAppData();
  const params = useParams();
  const navigate = useNavigate();

  const [beer, setBeer] = useState(appData.beer.beers.find(b => b.id === parseInt(params.id)) || {});

  const onChange = (ev) => {
    const value = ev.target.value;
    const attr = ev.target.getAttribute("name");

    setBeer({ ...beer, [attr]: value });
  };

  const save = (ev) => {
    ev.preventDefault();

    if (params.id === "add")
      appData.beer.add(beer)
    else
      appData.beer.update(beer);

    
  };

  const deleteBeer = () => {
    appData.beer.remove(beer.id);
    navigate("/");
  }

  return (
    <div className='flex justify-center pt-10'>
      <div className='w-2/3 bg-[#faf0de] rounded-2xl shadow-xl p-10'>
        <form onSubmit={save}>
          <div>
            <input type="text" name="name" onChange={onChange} value={beer.name || ""} placeholder='Pilsner Urquell' className='min-w-72 px-5 py-2 text-xl border-b-2 border-[#3b2e21]/50 hover:border-[#3b2e21] focus:border-[#3b2e21] transition-colors' required />
          </div>
          <div className='flex pt-5 pe-5'>
            <div className='flex-1'>
              <label className="uppercase font-bold">Megjegyzés</label>
              <textarea onChange={onChange} name="description" value={beer.description} placeholder='Fincsa' className='block w-full resize-none rounded-lg border-2 h-30 px-3 py-2 text-sm leading-relaxed placeholder-gray-400 focus:outline-none border-[#3b2e21]/50 hover:border-[#3b2e21] focus:border-[#3b2e21] transition-colors' />
            </div>

            <div className='flex flex-col ps-5 justify-start items-center'>
              <label className="uppercase font-bold">Értékelés</label>
              <input type="number" name="rating" onChange={onChange} value={beer.rating || ""} placeholder='5' className='w-20 px-5 py-2 text-xl border-b-2 border-[#3b2e21]/50 hover:border-[#3b2e21] focus:border-[#3b2e21] transition-colors' required />
            </div>
          </div>


          <div className='flex justify-center space-x-2 mt-10'>
            {params.id !== "add" && (
              <button onClick={deleteBeer} className='bg-[#faf0de] rounded-full p-3 ms-2 group hover:bg-red-500 cursor-pointer transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className='group-hover:fill-white' viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </button>
            )}
            <button type="submit" className="bg-[#3b2e21] text-white py-2 px-5 rounded-lg font-bold hover:bg-[#5a4636] transition duration-300">Mentés</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Beer;