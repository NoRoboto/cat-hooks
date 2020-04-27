import React, { useState, useContext, useDebugValue } from "react";
import { GlobalContext } from '../context/GlobalState';

export default function Cat({ url }) {
  const { deleteCat } = useContext(GlobalContext);
  const [mouseEvent, setMouseEvent] = useState("");

  useDebugValue(mouseEvent);

  return (
    <div
      className="img-container"
      onMouseEnter={() => setMouseEvent("enter")}
      onMouseLeave={() => setMouseEvent("leave")}
    >
      <img src={url} alt="cat" className="img" />
      {mouseEvent === "enter" && (
        <button
          className="delete-btn"
          onClick={() => deleteCat(url)}
        >
          x
        </button>
      )}
    </div>
  );
}
