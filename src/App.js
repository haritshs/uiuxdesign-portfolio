import './App.css';
import './style/style.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/NavigationBar';
import Work from './components/Work';
import Contact from './components/Contact';
import NavPage from './components/NavPage';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FullWorks from './components/FullWorks';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavPage></NavPage>
        <Navbar></Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
