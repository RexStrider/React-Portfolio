import React from 'react';

import About from './About';
import Portfolio from './Portfolio';
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Aaron's Portfolio!</h1>
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;