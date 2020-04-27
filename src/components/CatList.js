import React, { useState, useContext } from 'react';
import useGetCatsData from '../hooks/getCatsData';
import Cat from './Cat';
import catRequest from "../network/catRequest";
import { GlobalContext } from '../context/GlobalState';

function CatList() {
  const { addCat } = useContext(GlobalContext);
  const [requestId, setRequestId] = useState(0);
  const catData = useGetCatsData(requestId, 10);

  const resetCats = (ev) => {
    const requestId = Math.random().toString(25).substring(10);
    setRequestId(requestId);
  }

  const addCatOnClick = async (ev) => {
    const data = await catRequest(1);

    addCat(data[0]);
  }

  return (
    <div className="list">      
      <button className="btn" onClick={resetCats}>
        Paw here reset cats
      </button>
      <button className="btn" onClick={addCatOnClick}>
        Paw here to add 1 cat
      </button>
      <section className='wrapper'>
        {catData.map(cat => <Cat key={cat.id} url={cat.url} />)}
      </section>
    </div>
  );
}

export default CatList;
