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
import NewsData from './datbase/NewsData';
import AllData from './datbase/AllData';
import EventData from './datbase/EventData';
import NoticeData from './datbase/NoticeData'
import NewsList from './page/NewsList';
import NewsDB from './datbase/NewsDB';


function App () {

  return (
    <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/world" element={<World />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/news" element={<News aData={AllData} newData={NewsData} nData={NoticeData} eData={EventData} newsData={NewsList} />} />
          <Route path="/illustrations" element={<Illustrations />} />
        </Routes>
      <Footer />
    </>
  );
}
export default App;