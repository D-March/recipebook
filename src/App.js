import React,  { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const App = () => {

  const APP_ID = "a616cbf1";
  const APP_KEY = "f95e97d6243e54d55896d398da568845";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('beef');

  useEffect(  () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value)
};

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return (
    <div className="App">
      <div className="title">
        <h1>recipebook</h1>
      </div>
      <div className="subtitle">
        <p><strong>Discover food you'll love from our list of 1000s of recipes</strong></p>
      </div>
      <form className="search-form" onSubmit={getSearch}>
        <TextField
          type="text"
          className="search-bar"
          id="outlined-full-width"
          label="Discover Recipes"
          style={{ margin: 8 }}
          placeholder="Search for any ingredient or dish..."
          margin="normal"
          helperText="Press Enter to find recipes"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={search} 
          onChange={updateSearch}
        />
        </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title = {recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
            serving={recipe.recipe.yield}
            health={recipe.recipe.healthLabels}
            diet={recipe.recipe.dietLabels}
            />
        ))} 
      </div>
    </div>
  );
}

export default App;
