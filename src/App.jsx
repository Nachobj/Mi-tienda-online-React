import React from 'react';
// import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo = {"Bienvenidos"}/>
    </div>
  );
};

export default App;
