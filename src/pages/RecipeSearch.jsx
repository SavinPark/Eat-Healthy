import React from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

import { GoSearch } from "react-icons/go";
import EdamamBadge from '../images/Edamam_Badge.svg';

function RecipeSearch() {
    const Q = 'chicken';
    // env 적용하면 X , 노출 시키면 O
    // const APP_ID =  process.env.REACT_APP_EDAMAM_API_ID_RECIPE;
    // const APP_KEY =  process.env.REACT_APP_EDAMAM_API_KEY_RECIPE;
    const APP_ID =  'd1649c03';
    const APP_KEY =  '27d7dd8154b5984a64997ccadf516b13';
    // axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=${Q}`,{
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // })
    // .then(response => {
    //     console.log(response)
    //     // response.data.hits.forEach(ele => {
    //     //   //  ...
    //     // })
    // })
    // .catch(error => {
    //     console.error(error)
    // })

    const onPopup = () => {
        console.log('Popup Card!');
        // 함수 말고 Router로 연결...?
        // 팝업 카드 방법
        // [1] 함수 클릭하면 props 전달해서 팝업카드 렌더링
        // [2] 카드에 Link 연결해서 여기서 Router로 보여주기
    }

    return(
        <section className="page-recipes">
            {/* <p>Recipe 검색</p> */}
            <div className='search'>
                <input placeholder="Search"/>
                <button><GoSearch/></button>
            </div>
            <ul className='recipe-list'>
                <li className='recipe-item' onClick={onPopup}>
                    <RecipeCard />
                    {/* <Link to=''><RecipeCard /></Link> */}
                </li>
                <li className='recipe-item'>
                    <RecipeCard />
                </li>
                <li className='recipe-item'>
                    <RecipeCard />
                </li>
                <li className='recipe-item'>
                    <RecipeCard />
                </li>
                <li className='recipe-item'>
                    <RecipeCard />
                </li>
            </ul>

            {/* <div id="edamam-badge" data-color="badge"></div>
            <img src={EdamamBadge} alt='Edamam Badge'/> */}
        </section>
    );
}

export default RecipeSearch;