import React from "react";
import { Link } from 'react-router-dom';

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

    return(
        <nav>
            <ul>
                <li>
                    <Link to='/Eat-Healthy'><div className="menu-btn active"><img className="menu-icon home" src={HomeIcon} alt='Home' /></div></Link>
                </li>
                <li>
                    <Link to='/Eat-Healthy/User'><div className="menu-btn"><img className="menu-icon user" src={UserIcon} alt='User' /></div></Link>
                </li>
                <li>
                    <Link to='/Eat-Healthy/FoodDatabase'><div className="menu-btn"><img className="menu-icon foodDB" src={FoodIcon} alt='Food Database' /></div></Link>
                </li>
                <li>
                    <Link to='/Eat-Healthy/NutritionAnalysis'><div className="menu-btn"><img className="menu-icon nutrition" src={NutritionIcon} alt='Nutrition Analysis' /></div></Link>
                </li>
                <li>
                    <Link to='/Eat-Healthy/RecipeSearch'><div className="menu-btn"><img className="menu-icon recipes" src={RecipeIcon} alt='Recipe Search' /></div></Link>
                </li>
                {/* <li>
                    <Link to='/Eat-Healthy'><div className="menu-btn"></div></Link>
                </li> */}
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