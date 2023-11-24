import React from 'react'
import { Hero } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data'
import Sales from './components/Sales';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FlexContent from './components/FlexContent';
import Stories from './components/Stories';
import Cart from './components/Cart';

const App = () => {
  return (
     <>
        <Navbar/>
        <Cart/>
        <main className='flex flex-col gap-16 relative'>
          <Hero heroapi={heroapi} />
          <Sales endpoint={popularsales} ifExists/>
          <FlexContent endpoint={highlight} />
          <Sales endpoint={toprateslaes} />
          <FlexContent endpoint={sneaker} />
          <Stories story={story} />
        </main>
        <Footer footerAPI={footerAPI} />
     </>
  )
}

export default App