import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import "./App.scss";
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import About from './pages/about us/About';
import Contact from './pages/contact/Contact';
import Features from './pages/Features/Features';
import Home from './pages/home/Home';
import Shop from './pages/Shop/Shop';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
