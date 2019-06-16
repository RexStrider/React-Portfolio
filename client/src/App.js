import React from 'react';

import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from "./Components/Contact";

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