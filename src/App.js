import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PageBody from "./components/PageBody/PageBody";
import AppPreview from "./components/AppPreview/AppPreview";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navContainer">
          <Navbar />
        </div>
        <PageBody />
        <AppPreview />
        <div className="previewSpacer" />
        <DescriptionSection />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
