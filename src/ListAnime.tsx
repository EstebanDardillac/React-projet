import React from 'react';
import animeData from './anime.json';
import Anime from './Anime';
import './App.css';

const ListeFilms: React.FC = () => {
  return (
    <div>
      <h1>Liste des Animes</h1>
      {animeData.map((anime) => (
        <Anime key={anime.id} titre={anime.titre} realisateur={anime.realisateur} annee={anime.annee} description={anime.description} id={0} />
      ))}
    </div>
  );
};

export default ListeFilms;