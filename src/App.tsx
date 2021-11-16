import { FC } from 'react';
import './App.css';
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
