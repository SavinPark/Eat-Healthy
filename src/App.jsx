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
import User from "./pages/User";
import Login from "./pages/Login";
import RecipePopup from './components/RecipePopup';


function App() {

  return (
    <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/Eat-Healthy" exact={true} element={<Home/>}></Route>
            <Route path="/Eat-Healthy/User" exact={true} element={<User/>}></Route>
            <Route path="/Eat-Healthy/FoodDatabase" exact={true} element={<FoodDatabase/>}></Route>
            <Route path="/Eat-Healthy/NutritionAnalysis" exact={true} element={<NutritionAnalysis/>}></Route>
            <Route path="/Eat-Healthy/RecipeSearch" exact={true} element={<RecipeSearch/>}></Route>
            <Route path="/Eat-Healthy/RecipeSearch/view/:key" exact={true} element={<RecipePopup/>}></Route>
            <Route path="/login" exact={true} element={<Login/>}></Route> 
            <Route path="/oauth/callback/kakao" exact={true} element={<KakaoRedirectHandler/>}></Route>
          </Routes>
        </main>
        {/* <Routes>
          <Route path="/Eat-Healthy/RecipeSearch/recipe" exact={true} element={<RecipePopup/>}></Route>
        </Routes> */}

        {/* <Footer /> */}
    </div>
  );
}

export default App;

// https://han-py.tistory.com/417
// https://han-py.tistory.com/415
