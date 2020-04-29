import React, { useMemo, useEffect } from 'react';

let renderCount = 0;

export default function CatTail() {

  useEffect(() => {
    renderCount ++;
  });

  return (
    <div>
      <h3>{renderCount}</h3>
    </div>
  )
}
