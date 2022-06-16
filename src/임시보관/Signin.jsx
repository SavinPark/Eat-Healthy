import React from "react";
import KakaoLogin from '../images/kakao_login_medium_wide_ko.png';

function Signin() {

    // const REST_API_KEY = 'f7a8a6fd41763fe1da5cd61a0b9e6499';
    const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
    const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <div>
            <a href={KAKAO_AUTH_URL}>
                <div className='kakao_btn'>
                    <img src={KakaoLogin} alt="카카오 로그인 버튼" />
                </div>
            </a>
        </div>
    );
}

export default Signin;