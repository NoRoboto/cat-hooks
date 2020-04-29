import React, { useEffect } from 'react';

let renderCount = 0;

export default function CatTail() {

  useEffect(() => {
    renderCount ++;
  });

  return (
    <div>
      <h3>Render tail count = {renderCount}</h3>
    </div>
  )
}
