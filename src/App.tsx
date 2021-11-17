import { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';

const App: FC = () => (
  <div className="App">
    <Header />
    <Home />
    <Footer />
  </div>
);

export default App;
