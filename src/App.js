import './App.css';
import React, { useState } from 'react';
import Header from './header';
import Quotes from './components/Quotes';
import Music from './components/music';
import AddQuote from './components/newquote';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Music />
      <Quotes />
      <AddQuote />
      <Footer />
    </div>
  );
}
export default App;
