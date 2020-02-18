import React from 'react';

import './App.css';
import Header from '../components/Header/Header';
import Cards from '../components/card/cards/Cards';
import Footer from '../components/Footer/Footer'

const App = () => (
  <div className='App'>
    <Header />
    <Cards />
    <Footer/>
  </div>
);

export default App;
