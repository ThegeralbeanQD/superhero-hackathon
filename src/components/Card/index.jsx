import React, {useState, useEffect} from 'react';

import './index.css'
const Card = () => {
    const [data, setData] = useState({});
    const [image, setImage] = useState('');
    let id = Math.floor(Math.random() * 731) + 1;

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://www.superheroapi.com/api.php/1585081062001012/${id}`
          );
          const rawData = await response.json(); 
          setData(rawData);
          setImage(rawData.image.url); 
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);

    const cardOverlay = {
      background: `linear-gradient(to bottom left, rgba(236,212,68,0.8), rgba(110,37,148, 0.8))`
    }
    const cardBg = {
      backgroundImage: `url(${image})`,
      objectFit: `cover`,
      backgroundSize: `cover`
    }
    return <>
        <div style={cardBg} className='card-container'>
          <div style={cardOverlay} className='cardBg'>
            <h2>{data.name}</h2>

            <h5>{data.id}</h5>
          </div>
        </div>
    </>
};

export default Card;
