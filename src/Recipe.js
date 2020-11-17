import React from 'react'
import style from './recipe.module.css'
import Button from '@material-ui/core/Button';

function Recipe({title, calories, image, ingredients, url, serving, health, diet}) {

    const cals = Math.round(calories);
    const hLabels = health.join(', ');
    const dLabels = diet.join(', ');


    return (
        <div>
            <div className={style.recipe}>
                <div className={style.each_recipe}>
                    <div className={style.recipe_main}>
                        <a href={url}>
                            <img className={style.image} src={image} alt="" />
                        </a>
                    </div>
                <ul>
                    <h1 className={style.title}>{title}</h1>
                    <p className={style.ingredient_title}><strong>Ingredients:</strong></p>
                    {ingredients.map(ingredient => (
                        <li className={style.ingredient_list}>{ingredient.text}</li>
                    ))}
                    <hr></hr>
                    <div className={style.ingredient_footer}>
                        <h5 className={style.calories}>{cals} calories</h5>
                        <h4>{serving} servings</h4>
                    </div>
                    <hr></hr>
                    <p className={style.health}><strong>Diet:</strong> {dLabels}</p>
                    <p className={style.health}><strong>Health:</strong> {hLabels}</p>
                    <div className={style.recipe_footer}>
                        <div>
                        <Button className={style.button} variant="contained" color="primary"><a href={url}><strong>View Recipe</strong></a></Button>
                        </div>
                    </div>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Recipe;
