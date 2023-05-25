import React, { useState } from 'react';
import { FightForm, SelectionHolder } from '../../components';
import './Fight.css';

const Fight = () => {
  const [selectedHero, setSelectedHero] = useState(null);
  const [image, setImage] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = async (inputText) => {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/6382134991809408/search/${inputText}`
    );
    const data = await response.json();
    setData(data.results);
    if (data.results.length > 1) {
      setSelectedHero(null); // Reset selected hero if multiple options available
      setImage('');
      setSelectedHero(null);
    } else {
      setSelectedHero(data.results[0]);
      setImage(data.results[0].image.url);
      console.log(data.results);
    }
  };

  const handleHeroSelect = (hero) => {
    setSelectedHero(hero);
    setImage(hero.image.url);
  };

  const handleStart = () => {
    console.log('start');
  };

  return (
    <>
      <FightForm handleSearch={handleSearch} />
      <SelectionHolder
        selectedHero={selectedHero}
        data={data}
        handleHeroSelect={handleHeroSelect}
        handleStart={handleStart}
      />
    </>
  );
};

export default Fight;
