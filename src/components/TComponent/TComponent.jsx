import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TComponentStyles.css";

const TComponent = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

 const generateRandom = (() => {
    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`)
      .then((response) => {
        // console.log(response.data)
        setPopularRecipes(response.data.recipes);
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    generateRandom()
  },[])

  return (
    <div className="tcomponent">
      <div className="container">
          <h2>Do not know what to cook? Generate a random recipe...</h2>
          <button onClick={generateRandom}>Random Recipe</button>
          {/* <div className="flex"> */}
        {popularRecipes.map((recipe) => (
            <div className="img-container cards" key={recipe.id}>
              <img src={recipe.image} alt="/" />
              <div className="card">
                <h3>
                  <b>{recipe.title}</b>
                </h3>
                <p>Servings: {recipe.servings}</p>
                <p>Instructions: {recipe.instructions}</p>
                <p>Ingredients: {recipe.extendedIngredients.name}</p>
              </div>
            </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default TComponent;
