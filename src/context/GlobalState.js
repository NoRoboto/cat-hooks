import React, { createContext, useReducer } from "react";
import { fetchCatsActions, deleteCatAction, addCatAction } from "./AppActions";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  cats: []
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  /* 
    TODO: Apply redux like middleware;
    https://dev.to/vanderleisilva/middlewares-with-react-context-and-hooks-2gm1

  */

  const fetchCats = fetchCatsActions(dispatch);
  const deleteCat = deleteCatAction(dispatch);
  const addCat = addCatAction(dispatch);

  const catActions = {
    fetchCats,
    deleteCat,
    addCat
  };

  return (
    <GlobalContext.Provider
      value={{
        cats: state.cats,
        ...catActions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
