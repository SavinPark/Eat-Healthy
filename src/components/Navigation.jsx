import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import Cutlery from '../images/icons/cutlery.png';
import HomeIcon from '../images/icons/home.png';
import UserIcon from '../images/icons/user.png';
import FoodIcon from '../images/icons/healthy-food.png';
import NutritionIcon from '../images/icons/nutrition.png';
import RecipeIcon from '../images/icons/recipe-book.png';

function Navigation() {

    // let client_id = 'f7a8a6fd41763fe1da5cd61a0b9e6499';
    let client_id = process.env.REACT_APP_KAKAO_API_KEY;
    let LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${client_id}&logout_redirect_uri=http://localhost:3000`;

    const Logout = () => {
        alert('로그아웃 하시겠습니까?')
        window.localStorage.clear();
    }

    const [menu, setMenu] = useState('home');


    return(
        <nav>
            <Link to='/Eat-Healthy'>
                <img className="nav-logo" src={Cutlery} alt='Logo' />
            </Link>
            <ul>
                <li>
                    <Link to='/Eat-Healthy'>
                        <div onClick={()=>{setMenu('home')}} className={menu === 'home' ? "menu-btn active" : "menu-btn"}>
                            <img className="menu-icon home" src={HomeIcon} alt='Home' />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/Eat-Healthy/User'>
                        <div onClick={()=>{setMenu('user')}} className={menu === 'user' ? "menu-btn active" : "menu-btn"}>
                            <img className="menu-icon user" src={UserIcon} alt='User' />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/Eat-Healthy/FoodDatabase'>
                        <div onClick={()=>{setMenu('foodDB')}} className={menu === 'foodDB' ? "menu-btn active" : "menu-btn"}>
                            <img className="menu-icon" src={FoodIcon} alt='Food Database' />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/Eat-Healthy/NutritionAnalysis'>
                        <div  onClick={()=>{setMenu('nutrition')}} className={menu === 'nutrition' ? "menu-btn active" : "menu-btn"}>
                            <img className="menu-icon" src={NutritionIcon} alt='Nutrition Analysis' />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/Eat-Healthy/RecipeSearch'>
                        <div  onClick={()=>{setMenu('recipes')}} className={menu === 'recipes' ? "menu-btn active" : "menu-btn"}>
                            <img className="menu-icon" src={RecipeIcon} alt='Recipe Search' />
                        </div>
                    </Link>
                </li>

                {/* { window.localStorage.getItem("TOKEN") && (
                    <li>
                        <Link to='/Eat-Healthy/My'><div className="menu-btn">My</div></Link>
                    </li>
                )}
                { !window.localStorage.getItem("TOKEN") &&  (
                    <li><Link to='/login'><span>로그인</span></Link></li>
                )}
                { window.localStorage.getItem("TOKEN") && (
                    <a href={LOGOUT_URL}>
                        <span onClick={Logout}>로그아웃</span>
                    </a>
                )} */}
            </ul>
        </nav>
    );
}

export default Navigation;