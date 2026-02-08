// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./NavBar";
// Create these placeholder components for the example
import Bio from "./Bio";
import Hero from "./Hero";
import NewContent from "./NewContent";
import './App.css'
import MusicDownloads from "./MusicDownloads";
import YouTubePlayer from "./VIdoePlayer";
import ContactForm from "./ContactForm";


function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero/>
            <Bio/>
            <NewContent/>
            <MusicDownloads/>
            <YouTubePlayer/>
            <ContactForm/>
        </div>
    );
}

export default App;