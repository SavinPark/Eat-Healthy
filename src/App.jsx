import './scss/style.scss';
import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import KakaoRedirectHandler from './components/KakaoRedirectHandler';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {

  return (
    <div className="App">
        <Navigation />
        <div>
          <Routes className="page-area">
            <Route path="/" exact={true} element={<Home/>}></Route>
            <Route path="/login" exact={true} element={<Login/>}></Route> 
            <Route path="/oauth/callback/kakao" exact={true} element={<KakaoRedirectHandler/>}></Route>
          </Routes>
        </div>
        {/* <Footer /> */}
    </div>
  );
}

export default App;

// https://han-py.tistory.com/417
// https://han-py.tistory.com/415
