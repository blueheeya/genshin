/* eslint-disable */
import React ,{useState} from 'react';
import { BrowserRouter, Route, Link, Routes,} from 'react-router-dom';
import './assets/css/style.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Updates from './components/Updates';
import World from './components/World';
import Characters from './components/Characters';
import News from './components/News';
import Illustrations from './components/Illustrations';

function App () {

  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/updates" Component={Updates} />
          <Route path="/world" Component={World} />
          <Route path="/characters" Component={Characters} />
          <Route path="/news" Component={News} />
          <Route path="/illustrations" Component={Illustrations} />
        </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}
export default App;