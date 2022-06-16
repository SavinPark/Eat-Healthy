import React, { useEffect } from "react";
import axios from 'axios';

const KakaoRedirectHandler = () => {
  useEffect(()=> {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    let grant_type = "authorization_code";
    // let client_id = 'f7a8a6fd41763fe1da5cd61a0b9e6499';
    let client_id = process.env.REACT_APP_KAKAO_API_KEY;

    axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${code}`,
    {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((res) => {
        console.log(res)
        window.localStorage.setItem('TOKEN', res.data.access_token);
        console.log('로그인 완료')
        document.location.href = '/';
    }).catch(function (error) {
        console.log('Error >> ', error);
    });
  }, [])

  return <div>사실 이페이지는 크게 의미 없다. 첫화면으로 로직이 끝나면 이동시켜주면 된다.</div>;
};

export default KakaoRedirectHandler;