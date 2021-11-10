import React, { FC } from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

const Home: FC = () => (
  <div className="home">
    <h1>Home Component</h1>

    <Banner />
    <div className="home__section">
      <Card />
      <Card />
      <Card />
    </div>
    <div className="home__section">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default Home;
