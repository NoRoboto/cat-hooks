import React, { useState, useEffect, useCallback } from 'react';
import Cat from './Cat';
import catRequest from "../network/catRequest";

function CatList({numberOfCats}) {
  const [catData, setCatData] = useState([]);

  const fetchCats = useCallback(async () => {
    const data = await catRequest(numberOfCats);
    setCatData(data);
  }, [numberOfCats]);

  // fetch more cats
  const onClick = (ev) => {
    fetchCats();
  }

  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  return (
    <div className="list">      
      <button className="btn" onClick={onClick}>
        Paw here to get random cats
      </button> 
      <section className='wrapper'>
        {catData.map(cat => <Cat key={cat.id} url={cat.url} />)}
      </section>
    </div>
  );
}

export default CatList;
