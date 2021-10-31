import { FC } from 'react';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';

const App: FC = () => (
  <div className="App">
    <Header />
    <Home />
  </div>
);

export default App;
