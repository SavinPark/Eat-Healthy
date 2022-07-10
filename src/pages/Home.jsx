import React from "react";
import KakaoLogin from '../images/kakao_login_medium_wide_ko.png';

function Home({token}) {

    const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY
    // // login
    const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
    // const REDIRECT_URI = "http://savinpark.github.io/Eat-Healthy/oauth/callback/kakao";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    // // logout
    let LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=http://localhost:3000/Eat-Healthy`;
    // let LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=http://savinpark.github.io/Eat-Healthy`;

    const Logout = () => {
        alert('로그아웃 하시겠습니까?')
        window.localStorage.clear();
    }
    const logout = () => {
        alert('로그아웃 하시겠습니까?')
        window.localStorage.clear();
    }

    return (
        <section className='page-home'>
            <div className="home-container">
                <h1>Eat Healthy</h1>
                <p>Search for recipes</p>
                <p>and analyze the nutrients</p>
                <p>for your health!</p>
                {
                    token === null ? 
                    (<div className="login">
                        <a href={KAKAO_AUTH_URL}>
                        <div className='kakao_btn'>
                            <img src={KakaoLogin} alt="카카오 로그인 버튼" />
                        </div>
                        </a>
                    </div>) :
                    (<div className="logout">
                        <a href={LOGOUT_URL}><div className="logout_btn" onClick={logout}>LOGOUT</div></a>
                    </div>)
                }
            </div>
        </section>
    );
}

export default Home;