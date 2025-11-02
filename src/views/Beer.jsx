import { useAppData } from '../contexts/AppData';
import { useParams } from 'react-router';
import { useState } from 'react';
import Input from '../components/Input';

const Beer = () => {

  const appData = useAppData();
  const params = useParams();
  
  const [beer, setBeer] = useState(appData.beer.beers.find(b => b.id === parseInt(params.id)) || {});

  const onChange = (ev) => {
    const value = ev.target.value;
    const attr = ev.target.getAttribute("name");

    setBeer({...beer, [attr]: value});
  };

  const save = (ev) => {
    ev.preventDefault();

    if(params.id === "add")
      appData.beer.add(beer)
    else
      appData.beer.update(beer);
  };

  return (
    <form onSubmit={save}>
      <Input type="text" name="name" onChange={onChange} value={beer.name || ""} className="rounded-full"/>
      <Input type="number" min={1} max={5} name="rating" onChange={onChange} value={beer.rating || ""} className="rounded-full w-24"/>
      <textarea onChange={onChange} name="description" value={beer.description} />
      <button type="submit" className="bg-[#3b2e21] text-white py-2 px-5 rounded-lg font-bold hover:bg-[#5a4636] transition duration-300">Mentés</button>
    </form>
  );
};

export default Beer;