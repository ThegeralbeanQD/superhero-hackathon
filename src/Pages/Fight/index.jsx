import React, { useState } from 'react';
import { FightForm, SelectionHolder } from '../../components';
import './Fight.css';

const Fight = () => {
  const [selectedHero, setSelectedHero] = useState(null);
  const [image, setImage] = useState('');
  const [data, setData] = useState([]);
  const [showTotalPower, setShowTotalPower] = useState(false);
  const [totalSelectedHeroPower, setTotalSelectedHeroPower] = useState(0);
  const [totalRandomHeroPower, setTotalRandomHeroPower] = useState(0);

  const handleSearch = async (inputText) => {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/6382134991809408/search/${inputText}`
    );
    const data = await response.json();
    setData(data.results);
    if (data.results.length > 1) {
      setSelectedHero(null);
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
    
    let selectedHeroStats = selectedHero.powerstats;
    let randomHeroStats = randomHeroData.powerstats;
    
    setTotalSelectedHeroPower(0);
    setTotalRandomHeroPower(0);

    for (let stat in selectedHeroStats) {
      const power = selectedHeroStats[stat];
      setTotalSelectedHeroPower(prevPower => prevPower + (power !== null && !isNaN(power) ? parseInt(power) : 0));
    }
    if (totalSelectedHeroPower === null || isNaN(totalSelectedHeroPower)) {
      setTotalSelectedHeroPower(1);
    }
    
    for (let stat in randomHeroStats) {
      const power = randomHeroStats[stat];
      setTotalRandomHeroPower(prevPower => prevPower + (power !== null && !isNaN(power) ? parseInt(power) : 0));
    }
    if (totalRandomHeroPower === null || isNaN(totalRandomHeroPower)) {
      setTotalRandomHeroPower(1);
    }

    setShowTotalPower(true);
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
      {showTotalPower && (
        <>
          <h3>Total Power of Selected Hero: {totalSelectedHeroPower}</h3>
          <h3>Total Power of Random Hero: {totalRandomHeroPower}</h3>
        </>
      )}
    </>
  );
};

export default Fight;

