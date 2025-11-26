import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const _context = React.createContext();

const AppData = (props) => {

  const navigate = useNavigate();

  const [beers, setBeers] = useState(
    localStorage.getItem('beers') && localStorage.getItem('beers').length != 0 
    ? JSON.parse(localStorage.getItem('beers')) 
    : 
    []);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('authenticated') 
    ? JSON.parse(localStorage.getItem('authenticated')) 
    : false);

  const add = (beer) => {
    beer.id = parseInt((localStorage.getItem("prevId") || "-1")) + 1;
    localStorage.setItem("prevId", beer.id);
    setBeers([...beers, beer]);
    navigate("/" + beer.id);
  }

  const remove = (beerId) => {
    setBeers(beers.filter(b => b.id !== beerId));
  }

  const update = (updatedBeer) => {
    setBeers(beers.map(b => b.id === updatedBeer.id ? updatedBeer : b));
  }

  useEffect(() => {
    localStorage.setItem('beers', JSON.stringify(beers));
  }, [beers]);

  useEffect(() => {
    localStorage.setItem('authenticated', JSON.stringify(authenticated));
  }, [authenticated]);

  return (
    <_context.Provider value={{ beer: { beers, add, remove, update }, auth: { authenticated, setAuthenticated } }}>
      {props.children}
    </_context.Provider>
  );
}

export default AppData;

export const useAppData = () => React.useContext(_context);
