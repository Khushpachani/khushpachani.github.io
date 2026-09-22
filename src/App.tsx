import React from "react";
import {
  MatrixRain,
  Navigation,
  Main,
  About,
  Expertise,
  Timeline,
  Achievements,
  Project,
  Certifications,
  Footer,
} from "./components";
import './index.scss';

function App() {
  return (
    <>
      <MatrixRain />
      <div className="scanlines" aria-hidden="true" />
      <Navigation />
      <main className="page">
        <Main />
        <About />
        <Expertise />
        <Timeline />
        <Achievements />
        <Project />
        <Certifications />
        <Footer />
      </main>
    </>
  );
}

export default App;
