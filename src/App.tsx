import { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, , Route } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import SearchPage from './component/SearchPage';

const App: FC = () => (
  <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  </div>
);

export default App;
