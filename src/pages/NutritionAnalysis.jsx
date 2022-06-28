import React, { useState } from "react";
import axios from "axios";
import $ from 'jquery';

import { BiReset } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClear, AiFillSignal } from "react-icons/ai";

function NutritionAnalysis() {

    const [ingreKey, setIngreKey] = useState([1]);
    const [result, setResult] = useState([]);
    const [existData, setExistData] = useState(false)

    const seizeIngredient = () => {

        return '2%20egg';
    }

    const analyze = () => {
        const INGREDIENTS = seizeIngredient();
        const APP_ID =  process.env.REACT_APP_EDAMAM_API_ID_NUTRITION;
        const APP_KEY =  process.env.REACT_APP_EDAMAM_API_KEY_NUTRITION;
        axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=cooking&ingr=${INGREDIENTS}`)
        .then(response => {
            setResult(response.data.calories);
            console.log(result);
            setExistData(true);
            // console.log(response)
        })
        .catch(error => {
            console.error(error);
        })
    }

    const addIngre = () => {
        setIngreKey([...ingreKey, ingreKey[ingreKey.length-1] + 1]);
    }
    const delIngre = (key) => {
        let delKey = key;
        setIngreKey([...ingreKey.filter(n => n !== delKey)]);
    }
    const clear = (key) => { 
        $(`#ingredient-${key}`).val('');
        $(`#quentity-${key}`).val('');
        $(`#unit-${key}`).val('');
    }
    const reset = () => {
        $("input").val('');
        setIngreKey([1]);
        setResult([]);
        setExistData(false);
    }

    return (
        <section  className='page-nutrition'>
            <div className="nutrition-input">
                <p className="nutrition-notice">Please enter the ingredients and quantity for the dish.</p>
                <div className="ingredient-btn">
                    <h2>Ingredients</h2>
                    <div className="btn-group">
                        <button className="btn-add" onClick={addIngre}><AiOutlinePlus/></button>
                        <button className="btn-reset" onClick={reset}><BiReset/></button>
                        <button className="btn-analyze" onClick={analyze}><AiFillSignal/></button>
                    </div>
                </div>
                <ul className="ingredient-list">
                    {  ingreKey.map((key) => {
                            return (
                                <li className="ingredient-item" key={key}>
                                    <div className="input-group">
                                        <div className="input-container">
                                            <label htmlFor="ingredient">Ingredient</label>
                                            <input type="text" id={`ingredient-${key}`} name="ingredient"
                                                placeholder="Ingredient" />
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="quentity">Quentity</label>
                                            <input type="number" id={`quentity-${key}`} name="quentity"
                                                placeholder="Quentity" />
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="unit">Unit</label>
                                            <input type="text" id={`unit-${key}`} name="unit" placeholder="Unit" />
                                        </div>
                                    </div>
                                    <button className="btn-clear" onClick={()=> clear(key)}>
                                        <AiOutlineClear /></button>
                                    <button className="btn-delete" onClick={()=> delIngre(key)}>
                                        <AiOutlineMinus /></button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="nutrition-result">
                {/* <h2>Carrot Cake</h2> */}
                <h2>Nutrition Facts</h2>
                { !existData && (<p className="nodata-sign">No Data</p>)}
                { existData && (
                    <div className="result">
                        <dl className="calories">
                            <dt><span>Amount Per Serving</span>Calories</dt>
                            <dd>125822</dd>
                        </dl>
                        <dl className="fat">
                            <dt>Total Fat</dt>
                            <dd>6703.6 g</dd>
                            <dd>10313 %</dd>
                            <dt>Saturated Fat</dt>
                            <dd>6703.6 g</dd>
                            <dd>10313 %</dd>
                            <dt>Trans Fat</dt>
                            <dd>-</dd>
                        </dl>
                        <dl className="cholesterol">
                            <dt>Cholesterol</dt>
                            <dd>20626.6 mg</dd>
                            <dd>6876 %</dd>
                        </dl>
                        <dl className="sodium">
                            <dt>Sodium</dt>
                            <dd>20626.6 mg</dd>
                            <dd>6876 %</dd>
                        </dl>
                        <dl className="carbohydrate">
                            <dt>Sodium</dt>
                            <dd>20626.6 mg</dd>
                            <dd>6876 %</dd>
                        </dl>
                        <dl className="protein">
                            <dt>Total Fat</dt>
                            <dd>6703.6 g</dd>
                            <dd>10313 %</dd>
                        </dl>
                        <dl className="vitaminD">
                            <dt>Vitamin D</dt>
                            <dd>6703.6 g</dd>
                            <dd>10313 %</dd>
                        </dl>
                        <dl className="calcium">
                            <dt>Calcium</dt>
                            <dd>6703.6 g</dd>
                            <dd>10313 %</dd>
                        </dl>
                    </div>
                )}
            </div>
        </section>
    );
}

export default NutritionAnalysis;