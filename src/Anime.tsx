import React from 'react';
import './App.css';

interface AnimeProps {
    id: number;
    titre: string;
    realisateur: string;
    annee: number;
    description: string;
}

const Anime: React.FC<AnimeProps> = ({ titre, realisateur, annee, description }) => {
    return (
        <div>
            <h2>{titre} ({annee})</h2>
            <p>Réalisé par : {realisateur}</p>
            <p>{description}</p>
        </div>
    );
};

export default Anime;
