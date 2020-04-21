import React, { Component } from 'react';
import Cat from './Cat';
import CatBoddy from './CatBoddy';

function CatList({catList}) {
  return (
    <section className='wrapper'>
      {catList.map(cat => <Cat key={cat.id} url={cat.url} />)}
    </section>
  );
}

export default CatBoddy(CatList);
