import React from "react";
import KakaoLogin from '../images/kakao_login_medium_wide_ko.png';

function Home({token}) {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY
    const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao"
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const logout = () => {
        // document.querySelector('#opacity').classList.add('close')
        // document.location.href = 'http://localhost:3000/Eat-Healthy';
        console.log("LOGOUT")
        console.log(token)
    }
    console.log(token)

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
                        <div className="logout_btn" onClick={logout}>LOGOUT</div>
                    </div>)
                }
            </div>
        </section>
    );
}

export default Home;