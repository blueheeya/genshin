/* eslint-disable */
import { BrowserRouter, Router, Route } from 'react-router-dom';
import React,{Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
function App () {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;