import './Container.css';

import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from "./Contact";
import Resume from "./Resume";
import Footer from "./Footer";

function Container() {
  return (
    <section id='container' className="container">
      <BrowserRouter>
        <section id='section'>
          <Header />
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <section id='push-footer' />
        </section>
      </BrowserRouter>
      <Footer />
    </section>
  );
}

export default Container;