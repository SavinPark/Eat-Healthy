import './scss/style.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import KakaoRedirectHandler from './components/KakaoRedirectHandler';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MyRecipe from "./pages/MyRecipe";
import NutritionAnalysis from "./pages/NutritionAnalysis";
import RecipeSearch from "./pages/RecipeSearch";
import User from "./pages/User";
import Login from "./pages/Login";
import RecipePopup from './components/RecipePopup';


function App() {

  const TOKEN = window.localStorage.getItem('TOKEN');
  useEffect(()=> {
    console.log(window.localStorage.getItem('TOKEN'));
  }, [])

  // 저장한 레시피
  const [savedRecipes, setSavedRecipes] = useState([]);
    useEffect(() => {
        async function fetchSaveRecipe() {
            try {
                let response = await axios.get('https://4fd65212-d94c-4f4f-9512-1e10fae6f2b3.mock.pstmn.io/saverecipe');
                setSavedRecipes(response.data);
              // console.log(response.data);
            } catch (error) {
                alert("Error!");
                console.error(error);
            }
        }
        fetchSaveRecipe();
        return () => { setSavedRecipes([]) }
    }, []);
  // 나의 레시피
  const [myRecipes, setMyRecipes] = useState([]);
    useEffect(() => {
        async function fetchMyRecipe() {
            try {
                let response = await axios.get('https://56cd18cb-b7b3-4bd4-8ef2-d9cf923fe93c.mock.pstmn.io/myrecipe');
                setMyRecipes(response.data);
              // console.log(response.data);
            } catch (error) {
                alert("Error!");
                console.error(error);
            }
        }
        fetchMyRecipe();
        return () => { setMyRecipes([]) }
    }, []);

  return (
    <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/Eat-Healthy" exact={true} element={<Home token={TOKEN} />}></Route>
            <Route path="/Eat-Healthy/User" exact={true} element={<User token={TOKEN} savedRecipes={savedRecipes} myRecipes={myRecipes}/>}></Route>
            <Route path="/Eat-Healthy/MyRecipe" exact={true} element={<MyRecipe token={TOKEN} myRecipes={myRecipes}/>}></Route>
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
