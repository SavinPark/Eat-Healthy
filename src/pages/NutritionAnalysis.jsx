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
        let ingres = '';
        ingreKey.forEach((key, idx) => {
            if (idx + 1 === ingreKey.length) {
                ingres += $(`#quantity-${key}`).val() + $(`#unit-${key}`).val() + "%20" + $(`#ingredient-${key}`).val();
            } else {
                ingres += $(`#quantity-${key}`).val() + $(`#unit-${key}`).val() + "%20" + $(`#ingredient-${key}`).val() + "%20";
            }
        })
        return ingres;
    }

    const analyze = () => {
        const INGREDIENTS = seizeIngredient();
        const APP_ID =  process.env.REACT_APP_EDAMAM_API_ID_NUTRITION;
        const APP_KEY =  process.env.REACT_APP_EDAMAM_API_KEY_NUTRITION;
        axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=cooking&ingr=${INGREDIENTS}`)
        .then(response => {
            setExistData(true);
            setResult(response.data);
            console.log(response.data)
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
        $(`#quantity-${key}`).val('');
        $(`#unit-${key}`).val('');
    }
    const reset = () => {
        $("input").val('');
        setIngreKey([1]);
        setResult([]);
        setExistData(false);
    }


    const mathRound = (number) => {
        return  Math.round(( number + Number.EPSILON) * 100) / 100
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
                                            <label htmlFor="quentity">Quantity</label>
                                            <input type="number" id={`quantity-${key}`} name="quantity"
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
                <h2>Nutrition Facts</h2>
                { !existData && (<p className="nodata-sign">No Data</p>)}
                { existData && (
                    <div className="result">
                        <dl className="calories">
                            <dt>
                                <p>Amount Per Serving</p>
                                <p>Calories</p>
                            </dt>
                            <dd>{mathRound(result.calories)}</dd>
                        </dl>
                        <dl className="daily-value">
                            <dd>% Daily Value *</dd>
                        </dl>
                        <dl className="fat">
                            <dt>Total Fat</dt>
                            <dd>{mathRound(result.totalNutrients.FAT.quantity)} {result.totalNutrients.FAT.unit}</dd>
                            <dd>{mathRound(result.totalDaily.FAT.quantity)} {result.totalDaily.FAT.unit}</dd>
                            <dt>Saturated Fat</dt>
                            <dd>{mathRound(result.totalNutrients.FASAT.quantity)} {result.totalNutrients.FASAT.unit}</dd>
                            <dd>{mathRound(result.totalDaily.FASAT.quantity)} {result.totalDaily.FASAT.unit}</dd>
                            <dt>Trans Fat</dt>
                            <dd>{mathRound(result.totalNutrients.FATRN.quantity)} {result.totalNutrients.FATRN.unit}</dd>
                        </dl>
                        <dl className="cholesterol">
                            <dt>Cholesterol</dt>
                            <dd>{mathRound(result.totalNutrients.CHOLE.quantity)} {result.totalNutrients.CHOLE.unit}</dd>
                            <dd>{mathRound(result.totalDaily.CHOLE.quantity)} {result.totalDaily.CHOLE.unit}</dd>
                        </dl>
                        <dl className="sodium">
                            <dt>Sodium</dt>
                            <dd>{mathRound(result.totalNutrients.NA.quantity)} {result.totalNutrients.NA.unit}</dd>
                            <dd>{mathRound(result.totalDaily.NA.quantity)} {result.totalDaily.NA.unit}</dd>
                        </dl>
                        <dl className="carbohydrate">
                            <dt>Total Carbohydrate</dt>
                            <dd>{mathRound(result.totalNutrients.NA.quantity)} {result.totalNutrients.NA.unit}</dd>
                            <dd>{mathRound(result.totalDaily.NA.quantity)} {result.totalDaily.NA.unit}</dd>
                            <dt>Dietary Fiber</dt>
                            <dd>{mathRound(result.totalNutrients.FIBTG.quantity)} {result.totalNutrients.FIBTG.unit}</dd>
                            <dt>Total Sugars</dt>
                            <dd>{mathRound(result.totalNutrients.SUGAR.quantity)} {result.totalNutrients.SUGAR.unit}</dd>
                        </dl>
                        <dl className="protein">
                            <dt>Protein</dt>
                            <dd>{mathRound(result.totalNutrients.PROCNT.quantity)} {result.totalNutrients.PROCNT.unit}</dd>
                            <dd>{mathRound(result.totalDaily.PROCNT.quantity)} {result.totalDaily.PROCNT.unit}</dd>
                        </dl>
                        <dl className="vitaminD">
                            <dt>Vitamin D</dt>
                            <dd>{mathRound(result.totalNutrients.VITD.quantity)} {result.totalNutrients.VITD.unit}</dd>
                            <dd>{mathRound(result.totalDaily.VITD.quantity)} {result.totalDaily.VITD.unit}</dd>
                        </dl>
                        <dl className="calcium">
                            <dt>Calcium</dt>
                            <dd>{mathRound(result.totalNutrients.CA.quantity)} {result.totalNutrients.CA.unit}</dd>
                            <dd>{mathRound(result.totalDaily.CA.quantity)} {result.totalDaily.CA.unit}</dd>
                        </dl>
                        <dl className="iron">
                            <dt>Iron</dt>
                            <dd>{mathRound(result.totalNutrients.FE.quantity)} {result.totalNutrients.FE.unit}</dd>
                            <dd>{mathRound(result.totalDaily.FE.quantity)} {result.totalDaily.FE.unit}</dd>
                        </dl>
                        <dl className="potassium">
                            <dt>Potassium</dt>
                            <dd>{mathRound(result.totalNutrients.K.quantity)} {result.totalNutrients.K.unit}</dd>
                            <dd>{mathRound(result.totalDaily.K.quantity)} {result.totalDaily.K.unit}</dd>
                        </dl>
                    </div>
                )}
            </div>
        </section>
    );
}

export default NutritionAnalysis;