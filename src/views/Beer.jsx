import { useAppData } from '../contexts/AppData';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import DeleteButton from "../components/Deletebutton"

const Beer = () => {

  const appData = useAppData();
  const params = useParams();
  const navigate = useNavigate();

  const [beer, setBeer] = useState(appData.beer.beers.find(b => b.id === parseInt(params.id)) || {});
  const [edited, setEdited] = useState(false);

  const onChange = (ev) => {
    const value = ev.target.value;
    const attr = ev.target.getAttribute("name");

    setEdited(params.id !== "add");

    setBeer({ ...beer, [attr]: value });
  };

  const save = (ev) => {
    ev.preventDefault();

    if (params.id === "add")
      appData.beer.add(beer)
    else
      appData.beer.update(beer);

    setEdited(false);
  };

  return (
    <div className='flex justify-center pt-10'>
      <div className='w-2/3 bg-[#faf0de] rounded-2xl shadow-xl p-10 relative'>
        {params.id !== "add" && (
          <div className='absolute top-5 -left-5 flex justify-end w-full'>
            {edited ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            )}
          </div>
        )}
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
              <DeleteButton id={beer} className={"bg-[#faf0de]"} />
            )}
            <button type="submit" className="bg-[#3b2e21] text-white py-2 px-5 rounded-lg font-bold hover:bg-[#5a4636] transition duration-300">Mentés</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Beer;