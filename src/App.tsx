import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const includesQuery = (text: string) => text.toLowerCase()
    .includes(query.toLowerCase());

  const renderingMovie = moviesFromServer.filter(
    movie => includesQuery(movie.title) || includesQuery(movie.description),
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={renderingMovie} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};