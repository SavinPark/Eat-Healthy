import React from "react";
import bgImg from "../images/home-bg.png";
import KakaoLogin from '../images/kakao_login_medium_wide_ko.png';

function Login() {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY
    const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao"
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const closePopup = () => {
        document.querySelector('#opacity').classList.add('close')
        document.location.href = 'http://localhost:3000/Eat-Healthy';
    }
    return(
        <section className='login'>
            <div id="opacity">
                <div className="popup-login">
                    <a href={KAKAO_AUTH_URL}>
                        <div className='kakao_btn'>
                            <img src={KakaoLogin} alt="카카오 로그인 버튼" />
                        </div>
                    </a>
                    <div className="btn-close" onClick={closePopup}>취소</div>
                </div>
            </div>
            <h2>EAT HEALTHY</h2>
            <img className="bgImg" src={bgImg} alt='배경 이미지'/>
        </section>
    );
}

export default Login;