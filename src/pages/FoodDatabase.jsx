import React from "react";
import axios from "axios";

function FoodDatabase() {
    // https://developer.edamam.com/food-database-api-docs
    // INGR & UPC 둘 중에 하나는 필수 항목
    const INGR = 'chicken';
    const UPC = 'chicken';
    const APP_ID =  process.env.REACT_APP_EDAMAM_API_ID_FOOD;
    const APP_KEY =  process.env.REACT_APP_EDAMAM_API_KEY_FOOD;
    axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=chicken&nutrition-type=cooking`,{
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.error(error)
    })
    return (
        <section>
            <p>Food Database</p>
        </section>
    );
}

export default FoodDatabase;