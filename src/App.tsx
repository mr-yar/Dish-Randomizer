import React from 'react';
import {Dish} from './components/Dish/Dish';
import {Header} from './components/Header/Header';
import './styles/main.sass';

const App = (): JSX.Element => (
  <div>
    <Header />
    <Dish />
  </div>
);

export default App;
