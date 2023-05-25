import React from 'react';

const SelectionHolder = ({ selectedHero, data, handleHeroSelect, handleStart }) => {
  if (selectedHero === null) {
    if (data.length > 1) {
      return (
        <>
          <h3>Which one?</h3>
          <div className="selection-holder">
            {data.map((hero) => (
              <div key={hero.id} className="selection-card">
                {hero.name}
                <img src={hero.image.url} alt="" />
                <button onClick={() => handleHeroSelect(hero)}>Select</button>
              </div>
            ))}
          </div>
        </>
      );
    } else {
      return null;
    }
  } else {
    return (
      <>
        <div className="selection-holder">
          <div className="selection-card">
            {selectedHero.name}
            <img src={selectedHero.image.url} alt="" />
            <button onClick={handleStart}>Start</button>
          </div>
        </div>
      </>
    );
  }
};

export default SelectionHolder;
