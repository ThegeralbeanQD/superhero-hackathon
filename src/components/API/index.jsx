import React, {useState, useEffect} from 'react';
import axios from 'axios'

const API = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setData(response.data)
          } catch (error) {
            console.error(error);
          }
        }
        fetchData()
      }, []);

    return <>
        <div>
            {data.map(item => (<div key={item.id}>{item.title}</div>))}
        </div>
    </>
};

export default API;
