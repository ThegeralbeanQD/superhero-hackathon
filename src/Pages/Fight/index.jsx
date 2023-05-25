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
    }
  };

  const handleHeroSelect = (hero) => {
    setSelectedHero(hero);
    setImage(hero.image.url);
  };

  const handleStart = async () => {
    let id = Math.floor(Math.random() * 731) + 1;
    const response = await fetch(
      `https://www.superheroapi.com/api.php/6382134991809408/${id}`
    );
    const randomHeroData = await response.json();
    
    let selectedHeroStats = selectedHero.powerstats
    let randomHeroStats = randomHeroData.powerstats
    console.log(selectedHeroStats);
    console.log(randomHeroStats);

    let totalSelectedHeroPower = 0;
    let totalRandomHeroPower = 0;

    for (let stat in selectedHeroStats) {
      totalSelectedHeroPower += parseInt(selectedHeroStats[stat]);
    }

    for (let stat in randomHeroStats) {
      totalRandomHeroPower += parseInt(randomHeroStats[stat]);
    }

    console.log('Total Power of Selected Hero:', totalSelectedHeroPower);
    console.log('Total Power of Random Hero:', totalRandomHeroPower);
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
