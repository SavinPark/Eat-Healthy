import React from "react";
import axios from "axios";

function NutritionAnalysis() {
    const Q = 'chicken';
    const APP_ID =  process.env.REACT_APP_EDAMAM_API_ID_NUTRITION;
    const APP_KEY =  process.env.REACT_APP_EDAMAM_API_KEY_NUTRITION;
    // axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=${Q}`,{
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // })
    // .then(response => {
    //     console.log(response)
    // })
    // .catch(error => {
    //     console.error(error)
    // })
    return (
        <section  className='page-nutrition'>
            <p>Nutrition Analysis</p>
        </section>
    );
}

export default NutritionAnalysis;