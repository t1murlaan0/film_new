import React from "react";
import './film-genre.css'

export default function FilmGenre( {genre} ) {
   return(
    <span className="film-genres">{genre}</span>
   )
}