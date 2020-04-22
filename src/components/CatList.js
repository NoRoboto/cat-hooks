import React, { useState, useEffect } from 'react';
import Cat from './Cat';
import catRequest from "../network/catRequest";

function CatList() {
  const [catData, setCatData] = useState([]);
  const [requestId, setRequestId] = useState(0);

  useEffect(() => {
    fetchCats();
  }, [requestId]);

  async function fetchCats () {
    const data = await catRequest(10);
    setCatData(data);
  }

  // fetch more cats
  const onClick = (ev) => {
    const requestId = Math.random().toString(25).substring(10);
    setRequestId(requestId);
  }

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
