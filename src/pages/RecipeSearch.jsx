import React from "react";
import {useEffect, useState} from 'react';
import $ from 'jquery';
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

import { GoSearch } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import EdamamBadge from '../images/Edamam_Badge.svg';

function RecipeSearch() {

    const getURL = () => {
        // env 적용하면 X , 노출 시키면 O
        // const APP_ID =  'd1649c03';
        // const APP_KEY =  '27d7dd8154b5984a64997ccadf516b13';
        const APP_ID = process.env.REACT_APP_EDAMAM_API_ID_RECIPE;
        const APP_KEY = process.env.REACT_APP_EDAMAM_API_KEY_RECIPE;

        let Q = $('#keyword').val();
        let URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=${Q}`

        if($('#meal-type').val() !== 'None') {
            URL += `&mealType=${$('#meal-type').val()}`
        }
        if($('#cuisine-type').val() !== 'None') {
            URL += `&cuisineType=${$('#cuisine-type').val()}`
        }
        if($('#dish-type').val() !== 'None') {
            URL += `&dishType=${$('#dish-type').val()}`
        }
        if($('#diet').val() !== 'None') {
            URL += `&diet=${$('#diet').val()}`
        }
        if($('#health').val() !== 'None') {
            URL += `&health=${$('#health').val()}`
        }
        if($('#min_kcal').val() !== '' && $('#max_kcal').val() !== '') {
            URL += `&calories=${$('#min_kcal').val()}-${$('#max_kcal').val()}`
        } else if ($('#min_kcal').val() === '' && $('#max_kcal').val() !== '') {
            URL += `&calories=${$('#max_kcal').val()}`
        } else if ($('#min_kcal').val() !== '' && $('#max_kcal').val() === '') {
            URL += `&calories=${$('#min_kcal').val()}+`
        }
        return URL;
    }

    let html = '';
    const renderRecipeCard = (label, time, cuisine, kcal) => {
        // $('#recipe-list')[0].innerHTML = html;
        html += `<li className='recipe-item'>
                    ${label} ${time} ${cuisine} ${kcal}
                </li>`
        console.log(label, time, cuisine, kcal)
    }

    const onSearch = () => {
        let url = getURL();
        console.log(url);
        axios.get(url, {
            // headers: {
            //     'Access-Control-Allow-Origin': '*'
            // }
        })
        .then(response => {
            console.log(response)
            response.data.hits.forEach(ele => {
                renderRecipeCard(ele.recipe.label, 60, ele.recipe.cuisineType[0], ele.recipe.calories)
            })
            $('#recipe-list')[0].innerHTML = html;
        })
        .catch(error => {
            alert('Make sure your query is correct.');
            console.error(error)
        })

    }
    useEffect(()=>{
        $('.search').keypress((event) => {
            if (event.keyCode === 13) onSearch();
        });
    })

    const onPopup = () => {
        console.log('Popup Card!');
        // 함수 말고 Router로 연결...?
        // 팝업 카드 방법
        // [1] 함수 클릭하면 props 전달해서 팝업카드 렌더링
        // [2] 카드에 Link 연결해서 여기서 Router로 보여주기
    }

    return(
        <section className="page-recipes">
            <div className='search'>
                <input id='keyword' placeholder="Search"/>
                <button onClick={onSearch}><GoSearch/></button>
            </div>
            <div className="contents">
                <ul className='recipe-list' id='recipe-list'>
                    <li className='recipe-item' onClick={onPopup}>
                        <RecipeCard label='Chicken' time='60' cuisine='Italian' kcal='4000'/>
                    </li>
                    {/* <Link to=''><RecipeCard /></Link> */}
                </ul>
                <div className='filter'>
                    <h2>Filter</h2>
                    <ul className='filter-list'>
                        <li className='filter-item'>
                            <h3>Meal Type</h3>
                            <select id='meal-type' defaultValue='None'>
                                <option value='None'>None</option>
                                <option value='Breakfast'>Breakfast</option>
                                <option value='Lunch'>Lunch</option>
                                <option value='Dinner'>Dinner</option>
                                <option value='Snack'>Snack</option>
                                <option value='Teatime'>Teatime</option>
                            </select>
                        </li>
                        <li className='filter-item'>
                        <h3>Cuisine Type</h3>
                            <select id='cuisine-type' defaultValue='None'>
                                <option value='None'>None</option>
                                <option value='American'>American</option>
                                <option value='Asian'>Asian</option>
                                <option value='British'>British</option>
                                <option value='Caribbean'>Caribbean</option>
                                <option value='Central%20Europe'>Central Europe</option>
                                <option value='Chinese'>Chinese</option>
                                <option value='Eastern%20Europe'>Eastern Europe</option>
                                <option value='French'>French</option>
                                <option value='Indian'>Indian</option>
                                <option value='Italian'>Italian</option>
                                <option value='Japanese'>Japanese</option>
                                <option value='Kosher'>Kosher</option>
                                <option value='Mediterranean'>Mediterranean</option>
                                <option value='Maxican'>Maxican</option>
                                <option value='Middle%20Eastern'>Middle Eastern</option>
                                <option value='Nordic'>Nordic</option>
                                <option value='South%20American'>South American</option>
                                <option value='South%20East%20Asian'>South East Asian</option>
                            </select>
                        </li>
                        <li className='filter-item'>
                        <h3>Dish Type</h3>
                            <select id='dish-type' defaultValue='None'>
                                <option value='None'>None</option>
                                <option value='Biscuits%20and%20cookies'>Biscuits and cookies</option>
                                <option value='Bread'>Bread</option>
                                <option value='Cereals'>Cereals</option>
                                <option value='Condiments%20and%20sauces'>Condiments and sauces</option>
                                <option value='Desserts'>Desserts</option>
                                <option value='Drinks'>Drinks</option>
                                <option value='Main%20course'>Main course</option>
                                <option value='Pancake'>Pancake</option>
                                <option value='Preps'>Preps</option>
                                <option value='Preserve'>Preserve</option>
                                <option value='Salad'>Salad</option>
                                <option value='Sandwiches'>Sandwiches</option>
                                <option value='Side%20dish'>Side dish</option>
                                <option value='Soup'>Soup</option>
                                <option value='Starter'>Starter</option>
                                <option value='Sweets'>Sweets</option>
                            </select>
                        </li>
                        <li className='filter-item'>
                            <h3>Calories</h3>
                            <div>
                                <label htmlFor="min">Min</label>
                                <input id='min_kcal' name='min' type='number' placeholder='Positive number'/>
                            </div>
                            <div>
                                <label htmlFor='max'>Max</label>
                                <input id='max_kcal' name='max' type='number' placeholder='Positive number'/>
                            </div>
                            {/* <input type='range' id="calories" name="calories"  min="0" max="1000" step="100" /> */}
                        </li>
                        <li className='filter-item'>
                            <h3>Diet</h3>
                            <select id='diet' defaultValue='None'>
                                <option value='None'>None</option>
                                <option value='balanced'>balanced</option>
                                <option value='high-fiber'>high-fiber</option>
                                <option value='high-protein'>high-protein</option>
                                <option value='low-card'>low-card</option>
                                <option value='low-fat'>low-fat</option>
                                <option value='low-sodium'>low-sodium</option>
                            </select>
                        </li>
                        <li className='filter-item'>
                            <h3>Health</h3>
                            <select id='health' defaultValue='None'>
                            <option value='None'>None</option>
                                <option value='alcohol-cocktail'>alcohol-cocktail</option>
                                <option value='alcohol-free'>alcohol-free</option>
                                <option value='celery-free'>celery-free</option>
                                <option value='crustacean-free'>crustacean-free</option>
                                <option value='dairy-free'>dairy-free</option>
                                <option value='DASH'>DASH</option>
                                <option value='egg-free'>egg-free</option>
                                <option value='fish-free'>fish-free</option>
                                <option value='fodmap-free'>fodmap-free</option>
                                <option value='gluten-free'>gluten-free</option>
                                <option value='immuno-supportive'>immuno-supportive</option>
                                <option value='keto-friendly'>keto-friendly</option>
                                <option value='kidney-friendly'>kidney-friendly</option>
                                <option value='kosher'>kosher</option>
                                <option value='low-fat-abs'>low-fat-abs</option>
                                <option value='low-potassium'>low-potassium</option>
                                <option value='low-sugar'>low-sugar</option>
                                <option value='lupine-free'>lupine-free</option>
                                <option value='Mediterranean'>Mediterranean</option>
                                <option value='mollusk-free'>mollusk-free</option>
                                <option value='mustard-free'>mustard-free</option>
                                <option value='no-oil-added'>no-oil-added</option>
                                <option value='paleo'>paleo</option>
                                <option value='peanut-free'>peanut-free</option>
                                <option value='pescatarian'>pescatarian</option>
                                <option value='pork-free'>pork-free</option>
                                <option value='red-meat-free'>red-meat-free</option>
                                <option value='sesame-free'>sesame-free</option>
                                <option value='shellfish-free'>shellfish-free</option>
                                <option value='soy-free'>soy-free</option>
                                <option value='sugar-conscious'>sugar-conscious</option>
                                <option value='sulfite-free'>sulfite-free</option>
                                <option value='tree-nut-free'>tree-nut-free</option>
                                <option value='vegan'>vegan</option>
                                <option value='vegetarian'>vegetarian</option>
                                <option value='wheat-free'>wheat-free</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <div id="edamam-badge" data-color="badge"></div>
            <img src={EdamamBadge} alt='Edamam Badge'/> */}
        </section>
    );
}

export default RecipeSearch;