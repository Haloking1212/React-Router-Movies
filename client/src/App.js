import React, { useState } from 'react';
import { Route } from "react-router-dom"


//Components
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" render={ () => <MovieList />} />
      <Route path="/movies:id" render={ () => <Movie />} />
    </div>
  );
};

export default App;