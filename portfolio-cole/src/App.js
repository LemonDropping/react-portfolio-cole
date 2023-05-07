import React from 'react';
import { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navigation/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import './styles/App.css';

export default function App() {
  return (
    <main classname="text-gray-400 bg-gray-900 body-font">
      <Header />
      <Navbar />
      <AboutMe />
      <Portfolio />
      <Portfolio />
      <AboutMe />
      <Resume />
      <Footer />
    </main>
  );
}