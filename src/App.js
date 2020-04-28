import React from 'react';
import './App.css';
import CatHeader from './components/CatHeader';
import CatList from './components/CatList';

function App() {
  const headerText = 'Cat Zone';
  const headerImg = 'https://publicdomainvectors.org/photos/Anthropomorphic-Cat-With-Glasses.png';

  return (
    <div className="App">
      <CatHeader text={headerText} url={headerImg} />
      <CatList numberOfCats={10} />
    </div>
  );
}

export default App;
