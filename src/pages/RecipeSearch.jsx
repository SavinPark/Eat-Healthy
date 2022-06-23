import React from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

import { GoSearch } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import EdamamBadge from '../images/Edamam_Badge.svg';

function RecipeSearch() {
    const Q = 'chicken';
    // env 적용하면 X , 노출 시키면 O
    // const APP_ID =  process.env.REACT_APP_EDAMAM_API_ID_RECIPE;
    // const APP_KEY =  process.env.REACT_APP_EDAMAM_API_KEY_RECIPE;
    const APP_ID =  'd1649c03';
    const APP_KEY =  '27d7dd8154b5984a64997ccadf516b13';
    // axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=${Q}`,{
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // })
    // .then(response => {
    //     console.log(response)
    //     // response.data.hits.forEach(ele => {
    //     //   //  ...
    //     // })
    // })
    // .catch(error => {
    //     console.error(error)
    // })

    const onPopup = () => {
        console.log('Popup Card!');
        // 함수 말고 Router로 연결...?
        // 팝업 카드 방법
        // [1] 함수 클릭하면 props 전달해서 팝업카드 렌더링
        // [2] 카드에 Link 연결해서 여기서 Router로 보여주기
    }

    return(
        <section className="page-recipes">
            {/* <p>Recipe 검색</p> */}
            <div className='search'>
                <input placeholder="Search"/>
                <button><GoSearch/></button>
            </div>
            <div className="contents">
                <ul className='recipe-list'>
                    <li className='recipe-item' onClick={onPopup}>
                        <RecipeCard />
                        {/*
                        <Link to=''>
                        <RecipeCard />
                        </Link> */}
                    </li>
                    <li className='recipe-item'>                        
                        <RecipeCard />
                    </li>
                    <li className='recipe-item'>                        
                        <RecipeCard />
                    </li>
                    <li className='recipe-item'>                        
                        <RecipeCard />
                    </li>
                </ul>
                <div className='filter'>
                    <h2>Filter</h2>
                    <ul className='filter-list'>
                        <li className='filter-item'>
                            <h3>Meal Type</h3>
                            <select>
                                <option>Breakfast</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                                <option>Snack</option>
                                <option>Teatime</option>
                            </select>
                        </li>
                        <li className='filter-item'>
                        <h3>Cusine Type</h3>
                            <select>
                                <option>American</option>
                                <option>Asian</option>
                                <option>British</option>
                                <option>Caribbean</option>
                                <option>Central Europe</option>
                                <option>Chinese</option>
                                <option>Eastern Europe</option>
                                <option>French</option>
                                <option>Indian</option>
                                <option>Italian</option>
                                <option>Japanese</option>
                                <option>Kosher</option>
                                <option>Mediterranean</option>
                                <option>Maxican</option>
                                <option>Middle Eastern</option>
                                <option>Nordic</option>
                                <option>South American</option>
                                <option>South East Asian</option>
                            </select>
                        </li>
                        <li className='filter-item'>
                        <h3>Dish Type</h3>
                            <select>
                                <option>Biscuits and cookies</option>
                                <option>Bread</option>
                                <option>Cereals</option>
                                <option>Condiments and sauces</option>
                                <option>Desserts</option>
                                <option>Drinks</option>
                                <option>Main course</option>
                                <option>Pancake</option>
                                <option>Preps</option>
                                <option>Preserve</option>
                                <option>Salad</option>
                                <option>Sandwiches</option>
                                <option>Side dish</option>
                                <option>Soup</option>
                                <option>Starter</option>
                                <option>Sweets</option>
                            </select>
                        </li>
                        <li className='filter-item'>
                            <h3>Calories</h3>
                            <input type='range' id="calories" name="calories"  min="0" max="1000" step="50" />
                        </li>
                        <li className='filter-item'>
                            <h3>Diet</h3>
                            <ul className='tag-list'>
                                <li className='tag-item active'>balanced</li>
                                <li className='tag-item'>high-fiber</li>
                                <li className='tag-item'>high-protein</li>
                                <li className='tag-item'>low-card</li>
                                <li className='tag-item'>low-fat</li>
                                <li className='tag-item'>low-sodium</li>
                            </ul>
                        </li>
                        <li className='filter-item'>
                            <h3>Health</h3>
                            <ul className='tag-list'>
                            <li className='tag-item'>alcohol-cocktail</li>
                            <li className='tag-item'>alcohol-free</li>
                            <li className='tag-item'>celery-free</li>
                            <li className='tag-item'>crustacean-free</li>
                            <li className='tag-item'>dairy-free</li>
                            <li className='tag-item'>DASH</li>
                            <li className='tag-item'>egg-free</li>
                            <li className='tag-item'>fish-free</li>
                            <li className='tag-item'>fodmap-free</li>
                            <li className='tag-item'>gluten-free</li>
                            <li className='tag-item'>immuno-supportive</li>
                            <li className='tag-item'>keto-friendly</li>
                            <li className='tag-item'>kidney-friendly</li>
                            <li className='tag-item'>kosher</li>
                            <li className='tag-item'>low-fat-abs</li>
                            <li className='tag-item'>low-potassium</li>
                            <li className='tag-item'>low-sugar</li>
                            <li className='tag-item'>lupine-free</li>
                            <li className='tag-item'>Mediterranean</li>
                            <li className='tag-item'>mollusk-free</li>
                            <li className='tag-item'>mustard-free</li>
                            <li className='tag-item'>no-oil-added</li>
                            <li className='tag-item'>paleo</li>
                            <li className='tag-item'>peanut-free</li>
                            <li className='tag-item'>pescatarian</li>
                            <li className='tag-item'>pork-free</li>
                            <li className='tag-item'>red-meat-free</li>
                            <li className='tag-item'>sesame-free</li>
                            <li className='tag-item'>shellfish-free</li>
                            <li className='tag-item'>soy-free</li>
                            <li className='tag-item'>sugar-conscious</li>
                            <li className='tag-item'>sulfite-free</li>
                            <li className='tag-item'>tree-nut-free</li>
                            <li className='tag-item'>vegan</li>
                            <li className='tag-item'>vegetarian</li>
                            <li className='tag-item'>wheat-free</li>
                            </ul>
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