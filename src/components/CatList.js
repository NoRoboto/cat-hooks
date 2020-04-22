import React, { useState } from 'react';
import useGetCatsData from '../components/hooks/getCatsData';
import Cat from './Cat';

function CatList() {
  const [requestId, setRequestId] = useState(0);
  const catData = useGetCatsData(requestId, 10);

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
