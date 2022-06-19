import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {

    // let client_id = 'f7a8a6fd41763fe1da5cd61a0b9e6499';
    let client_id = process.env.REACT_APP_KAKAO_API_KEY;
    let LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${client_id}&logout_redirect_uri=http://localhost:3000`;

    const Logout = () => {
        alert('로그아웃 하시겠습니까?')
        window.localStorage.clear();
    }

    return(
        <nav className="nav-area">
            <ul>
                <li>
                    <Link to='/Eat-Healthy/RecipeSearch'><span>레시피</span></Link>
                </li>
                <li>
                    <Link to='/Eat-Healthy/FoodDatabase'><span>푸트 DB</span></Link>
                </li>
                <li>
                    <Link to='/Eat-Healthy'><span>영양정보</span></Link>
                </li>
                <li>
                    <Link to='/Eat-Healthy'><span>메뉴</span></Link>
                </li>
                { window.localStorage.getItem("TOKEN") && (
                    <li>
                        <Link to='/Eat-Healthy/My'><span>MY</span></Link>
                    </li>
                )}
                { !window.localStorage.getItem("TOKEN") &&  (
                    <li><Link to='/login'><span>로그인</span></Link></li>
                )}
                { window.localStorage.getItem("TOKEN") && (
                    <a href={LOGOUT_URL}>
                        <span onClick={Logout}>로그아웃</span>
                    </a>
                )}
            </ul>
        </nav>
    );
}

export default Navigation;