import React, { Fragment } from 'react';

import { GlobalStyles } from './components/styles/global';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import Projects from './components/layout/Projects';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
