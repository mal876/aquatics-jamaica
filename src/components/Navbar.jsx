import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './Navbar.css';

import Home from '../page/Home';
import About from '../page/About';
import MyCalendar from '../page/MyCalendar';
import Events from '../page/Events';
import News from '../page/News';
import Resources from '../page/Resources';
import Login from '../page/Login';
import Contact from '../page/Contact';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <header className="flex justify-between w-full sticky top-0 z-50 relative mx-auto bg-white/30 backdrop-blur-3xl font-semibold items-center text-slate-800 py-1 px-8 md:px-32 drop-shadow-lg">
        <Link to="/">
          <img src="/asaj-logo.png" alt="Logo" className="w-28" />
        </Link>

       
          <ul className="xl:flex items-center gap-12 text-base hidden">
            <li className="p-2 transition-all cursor-pointer hover:scale-110 duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="p-2 transition-all cursor-pointer hover:scale-110 duration-300">
              <Link to="/events">Events</Link>
            </li>
            <li className="p-2 transition-all cursor-pointer hover:scale-110 duration-300">
              <Link to="/calendar">Calendar</Link>
            </li>
            <li className="p-2 transition-all cursor-pointer hover:scale-110 duration-300">
              <Link to="/news">News</Link>
            </li>
            <li className="p-2 transition-all cursor-pointer hover:scale-110 duration-300">
              <Link to="/resources">Resources</Link>
            </li>
          </ul>

          <div className="relative md:flex items-center justify-center gap-3">
            <button className="px-4 py-2 border w-28 shadow-xl text-white font-semibold cursor-pointer hover:scale-110 duration-300">
              <Link to="/login">Log In</Link>
            </button>
          </div>
       

        {/* Hamburger Button for Mobile */}
        <button
          className="xl:hidden block text-5xl cursor-pointer text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <i className="bx bx-menu"></i>
        </button>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`absolute top-0 left-0 w-full h-screen bg-green-800 flex flex-col items-center gap-6 font-semibold text-lg transform transition-all duration-500 ease-in-out 
            ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
          `}
          style={{ transition: "transform 0.5s ease, opacity 0.5s ease" }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-4xl"
          >
            <i className="bx bx-x"></i>
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col items-center gap-6 text-white">
            <li className="p-3 transition-all cursor-pointer hover:scale-105 hover:shadow-xl duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="p-3 transition-all cursor-pointer hover:scale-105 hover:shadow-xl duration-300">
              <Link to="/events">Events</Link>
            </li>
            <li className="p-3 transition-all cursor-pointer hover:scale-105 hover:shadow-xl duration-300">
              <Link to="/calendar">Calendar</Link>
            </li>
            <li className="p-3 transition-all cursor-pointer hover:scale-105 hover:shadow-xl duration-300">
              <Link to="/news">News</Link>
            </li>
            <li className="p-3 transition-all cursor-pointer hover:scale-105 hover:shadow-xl duration-300">
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="resources" element={<Resources />} />
          <Route path="events" element={<Events />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="calendar" element={<MyCalendar />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Navbar;
