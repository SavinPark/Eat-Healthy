import './scss/style.scss';
import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import KakaoRedirectHandler from './components/KakaoRedirectHandler';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FoodDatabase from "./pages/FoodDatabase";
import NutritionAnalysis from "./pages/NutritionAnalysis";
import RecipeSearch from "./pages/RecipeSearch";
import My from "./pages/My";
import Login from "./pages/Login";


function App() {

  return (
    <div className="App">
        <Navigation className=''/>
        <main className=''>
          <Routes>
            <Route path="/Eat-Healthy" exact={true} element={<Home/>}></Route>
            <Route path="/Eat-Healthy/My" exact={true} element={<My/>}></Route>
            <Route path="/Eat-Healthy/FoodDatabase" exact={true} element={<FoodDatabase/>}></Route>
            <Route path="/Eat-Healthy/NutritionAnalysis" exact={true} element={<NutritionAnalysis/>}></Route>
            <Route path="/Eat-Healthy/RecipeSearch" exact={true} element={<RecipeSearch/>}></Route>
            <Route path="/login" exact={true} element={<Login/>}></Route> 
            <Route path="/oauth/callback/kakao" exact={true} element={<KakaoRedirectHandler/>}></Route>
          </Routes>
        </main>
        {/* <Footer /> */}
    </div>
  );
}

export default App;

// https://han-py.tistory.com/417
// https://han-py.tistory.com/415
