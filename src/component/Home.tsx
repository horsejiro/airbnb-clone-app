import React, { FC } from 'react';
import './Home.css';
import Banner from './Banner';

const Home: FC = () => (
  <div className="home">
    <h1>Home Component</h1>

    <Banner />
  </div>
);

export default Home;
