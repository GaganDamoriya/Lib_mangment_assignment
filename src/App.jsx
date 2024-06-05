import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import BookShelf from "./BookShelf/BookShelf";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mybookshelf" element={<BookShelf />} />
      </Routes>
    </div>
  );
}

export default App;
