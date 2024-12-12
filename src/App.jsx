import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CatList from'./components/CatList';

const DATA = [
  {
    name: 'Ubik',
    caretaker: 'Maria',
    color: 'grey',
    personality: 'wild child',
  },
  {
    name: 'Pepper',
    caretaker: 'Mark',
    color: 'black',
    personality: 'spicy',
  },
  {
    name: 'Binx',
    caretaker: 'Susan',
    color: 'tuxedo',
    personality: 'feral',
  },
];


function App() {
  return (
    <>
      <main>
        <h1>The Cat Coral</h1>
        <CatList catData = {DATA}/>
      </main>
    </>
  );
}

export default App;
