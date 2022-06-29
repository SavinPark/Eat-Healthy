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
    const url=`https://api.edamam.com/api/recipes/v2/${FOOD_ID}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await axios.get(url);
                setData(response.data.recipe)
                // console.log(response.data)
            } catch (error) {
                alert("Error!");
                console.error(error);
            }
        }
        fetchData();
        return () => { setData([]) }
    }, []);

    const [save, setSave] = useState(false)
    const saveRecipe = () => {
        setSave(!save);
        if (!save) {
            axios.post('https://4fd65212-d94c-4f4f-9512-1e10fae6f2b3.mock.pstmn.io/saverecipe', {
                    "key": FOOD_ID,
                    "label": data.label,
                    "date": new Date()
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        // axios.get('https://4fd65212-d94c-4f4f-9512-1e10fae6f2b3.mock.pstmn.io/saverecipe')
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    return (
        <div className='recipe-popup'>
            <Link to="/Eat-Healthy/RecipeSearch">
                <IoIosClose className='btn-close'/>
            </Link>
            <div className='popup-inner popup-left'>
                <h2>{ data.label }</h2>
                <div className='popup-img'>
                    {data.images && (<img src={data.images.REGULAR.url} alt={data.label} />)}
                </div>
                <div className="star">
                    <button onClick={saveRecipe}>
                        {save ? <BsStarFill color="#ffd427"/> : <BsStar color="rgba(0, 0, 0, .2)"/>}
                    </button>
                </div>
                <ul className='info'>
                    <li><ImAlarm className="popup-icon"/> {data.totalTime ? data.totalTime : 0} minutes</li>
                    <li><BiDish className="popup-icon"/> {data.dishType ? data.dishType[0] : '-'}</li>
                    <li><ImMap2 className="popup-icon"/> {data.cuisineType ? data.cuisineType[0] : '-'}</li>
                    <li><ImFire className="popup-icon"/> {data.calories ? Math.round(data.calories) : 0} Kcal</li>
                </ul>
            </div>
            <div className='popup-inner popup-right'>
                <div className='right-inner recipe-link'>
                    <h3><ImGlass className="popup-icon" />Recipe Link</h3>
                    {data.shareAs ? <a href={data.shareAs}><IoIosLink className="popup-icon" />Click here!</a> : <h3><IoIosIceCream />No Link</h3>}
                </div>
                <div className='right-inner meal-type'>
                    <h3><ImGlass className="popup-icon" />Meal Type</h3>
                    <ul>
                        {data.mealType && data.mealType.map((ele, idx) => { 
                            return (<li key={idx}>{ele}</li>)
                        })}
                    </ul>
                </div>
                <div className='right-inner ingredient'>
                    <h3><ImGlass className="popup-icon" />Ingredients</h3>
                    <ul>
                        { data.ingredients && data.ingredients.map((ele, idx) => { 
                            return (<li key={idx}>{ele.food} : {ele.quantity} {ele.measure==='<unit>' ? '' : ele.measure}</li>)
                        })}
                    </ul>
                </div>
                <div className='right-inner diets'>
                    <h3><ImGlass className="popup-icon" />Diet Labels</h3>
                    <ul className='diet-labels'>
                        { data.dietLabels && data.dietLabels.map((ele, idx) => { return (<li key={idx}>#{ele}</li>)})}
                    </ul>
                </div>
                <div className='right-inner health'>
                    <h3><ImGlass className="popup-icon"/>Health Labels</h3>
                    <ul className='health-labels'>
                        { data.healthLabels && data.healthLabels.map((ele, idx) => { return (<li key={idx}>#{ele}</li>)})}
                    </ul>
                </div>
            </div>
            {/* {recipe.label}
            {recipe.ingredients} */}
        </div>
    )
}

export default RecipePopup;