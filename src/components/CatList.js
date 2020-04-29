import React, { useState, useContext, useMemo, useLayoutEffect, useRef } from 'react';
import useGetCatsData from '../hooks/getCatsData';
import Cat from './Cat';
import CatTail from './CatTail';
import catRequest from "../network/catRequest";
import { GlobalContext } from '../context/GlobalState';

function CatList() {
  const { addCat } = useContext(GlobalContext);
  const [requestId, setRequestId] = useState(0);
  const catData = useGetCatsData(requestId, 2);
  const listRef = useRef(null);

  const resetCats = (ev) => {
    const requestId = Math.random().toString(25).substring(10);
    setRequestId(requestId);
  }

  const addCatOnClick = async (ev) => {
    const data = await catRequest(1);

    addCat(data[0]);
  }

  useLayoutEffect(() => {
    if (listRef.current.clientHeight > 600) {
        listRef.current.style.border = `2px solid #9c88ff`;
    } else {
      listRef.current.style.border = '';
    }
  });

  const memoElement = useMemo(() => {
    return <CatTail />;
  }, [catData.length]);

  return (
    <div className="list" ref={listRef}>      
      <button className="btn" onClick={resetCats}>
        Paw here reset cats
      </button>
      <button className="btn" onClick={addCatOnClick}>
        Paw here to add 1 cat
      </button>
      <section className='wrapper'>
        {catData.map(cat => <Cat key={cat.id} url={cat.url} />)}
      </section>
      {memoElement}
    </div>
  );
}

export default CatList;
