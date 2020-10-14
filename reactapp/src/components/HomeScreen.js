import React from 'react';
import { ToastProvider } from 'react-toast-notifications'
import Contact from './contact/Contact';
import Description from './description/Description';
import Footer from './footer/Footer';
import Header from './header/Header';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Works from './works/Works';
import '../App.css';

export default function HomeScreen () {
  return (
    <>
      <Header />
      <Description />
      <Skills />
      <Projects />
      <Works />
      <ToastProvider>
      <Contact />
      </ToastProvider>
      <Footer />
    </>
  );
}
