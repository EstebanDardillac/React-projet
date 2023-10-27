import { BrowserRouter, useLocation, Link, Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';
import AnimeList from "./ListAnime";
import List from "./TodoList";
import Compteur from "./compteur";
import Profil from "./ProfilePage";
import Home from "./Welcome";
import { Navbar } from './Navbar';

export default function App() {

  return (

      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todolist" element={<List />} />
            <Route path="/clicker" element={<Compteur />} />
            <Route path="/user/:id" element={<Profil />} />
            <Route path="/anime" element={<AnimeList/>}/>
          </Routes>
       
      </BrowserRouter>
   
  );
}
