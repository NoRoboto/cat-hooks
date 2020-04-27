import React from 'react';
import './App.css';
import CatHeader from './components/CatHeader';
import CatList from './components/CatList';

import { GlobalProvider } from "./context/GlobalState";

function App() {
  const headerText = 'Cat Zone';
  const headerImg = 'https://publicdomainvectors.org/photos/Anthropomorphic-Cat-With-Glasses.png';

  return (
    <GlobalProvider>
      <div className="App">
        <CatHeader text={headerText} url={headerImg} />
        <CatList />
      </div>
    </GlobalProvider>
  );
}

export default App;
