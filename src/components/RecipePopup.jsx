import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import { BsStar, BsStarFill } from "react-icons/bs";
import { BiDish } from "react-icons/bi";
import { IoIosClose, IoIosLink, IoIosIceCream } from "react-icons/io";
import { GiCook, GiChefToque } from "react-icons/gi";
import { ImSpoonKnife, ImGlass2, ImGlass, ImFire, ImAlarm, ImMap2 } from "react-icons/im";
import { useEffect } from "react";

function RecipePopup () {

    let [data, setData] = useState([]);
    const FOOD_ID = window.location.pathname.split('/')[4];
    const APP_ID = process.env.REACT_APP_EDAMAM_API_ID_RECIPE;
    const APP_KEY = process.env.REACT_APP_EDAMAM_API_KEY_RECIPE;

    const getRecipe = async () => {
        let url=`https://api.edamam.com/api/recipes/v2/${FOOD_ID}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`;
        try {
            let response = await axios.get(url);
            // console.log(response.data.recipe);
            return response.data.recipe
        } catch (error) {
            alert("Error!");
            console.error(error);
        }
    }

    const getLabel = () => {
        getRecipe().then((recipe) => {
            console.log(recipe.label)
            return recipe.label
        })
    }

    const goBack = () => {
        // location
        console.log('back');
    }

    return (
        <div className='recipe-popup'>
            <Link to="/Eat-Healthy/RecipeSearch">
                <IoIosClose className='btn-close' onClick={goBack}/>
            </Link>
            <div className='popup-inner popup-left'>
                <h2>{ getLabel() }</h2>
                <div className='popup-img'>
                    {/* <img src={data.images.REGULAR.url} alt={data.label} /> */}
                </div>
                <div className="star">
                    <BsStar />
                    <BsStarFill />
                </div>
                <div className='info'>
                    <p><ImAlarm /> 25 minutes</p>
                    <p><BiDish /> Desserts</p>
                    <p><ImMap2 /> Eastern Europe</p>
                    <p><ImFire /> 1483 Kcal</p>
                </div>
            </div>
            <div className='popup-inner popup-right'>
                <div className='recipe-link'>
                    <h3><IoIosIceCream />Recipe Link <IoIosLink /></h3>
                </div>
                <hr />
                <div className='ingredient'>
                    <h3><ImGlass />Ingredients</h3>
                    <ul>
                        <li>sweetened condensed milk : 39 grams</li>
                        <li>water : 2.5 cups</li>
                        <li>butter : 4 tablespoon</li>
                    </ul>
                </div>
                <hr />
                <div className='diets'>
                    <h3><GiCook />Diet Labels</h3>
                    <ul className='diet-labels'>
                        <li># Balanced</li>
                        <li># High-Fiber</li>
                        <li># High-Protein</li>
                        <li># Low-Carb</li>
                        <li># Low-Fat</li>
                        <li># Low-Sodium</li>
                    </ul>
                </div>
                <hr />
                <div className='nutrients'>
                    <h3><GiCook />Total Nutrients</h3>
                    <ul className="nutrients">
                        <li>Calcium 230g</li>
                        <li>Calcium 230g</li>
                        <li>Calcium 230g</li>
                        <li>Calcium 230g</li>
                    </ul>
                </div>
                <hr />
                <div className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam reiciendis corporis odio ea consectetur officia explicabo error magni nobis, ad recusandae laudantium adipisci voluptas molestiae debitis, voluptatum, unde libero.</div>
            </div>
            {/* {recipe.label}
            {recipe.ingredients} */}
        </div>
    )
}

export default RecipePopup;