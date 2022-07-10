import React, { useEffect } from "react";
import axios from 'axios';

const KakaoRedirectHandler = () => {
  useEffect(()=> {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    let grant_type = "authorization_code";
    let client_id = process.env.REACT_APP_KAKAO_API_KEY;

    axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${code}`,
    // axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://savinpark.github.io/Eat-Healthy/oauth/callback/kakao&code=${code}`,
    {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((res) => {
        window.localStorage.setItem('TOKEN', res.data.access_token);
        console.log('로그인 완료')
        document.location.href = 'http://localhost:3000/Eat-Healthy';
        // document.location.href = 'https://savinpark.github.io/Eat-Healthy';
    }).catch(function (error) {
        console.log('Error >> ', error);
    });
  }, [])

  // 이 페이지는 크게 의미 없음. 로직이 끝나면 첫 화면으로 이동시켜주면 됨
};

export default KakaoRedirectHandler;