import './App.css';

import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from "./Contact";

function App() {
  return (
    <section className="container">
      <BrowserRouter>
        <section>
          <Header />
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </section>
      </BrowserRouter>
    </section>
  );
}

export default App;