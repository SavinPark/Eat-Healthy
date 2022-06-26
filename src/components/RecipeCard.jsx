import React from "react";
import { BiAlarm, BiDish,  } from "react-icons/bi";
import { HiFire } from "react-icons/hi";

function RecipeCard ({ label, thumbnail, time, dishType, cuisine, kcal, tags }) {

    const capitalize = (str) => {
        let result = '';
        str.split(' ').forEach(word => {
            result += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
        });
        return result.substr(0, result.length-1);
    } 

    return (
        <div className='recipe-card'>
            <div className='thumbnail'>
                <img src={thumbnail} alt='thumbnail' />
            </div>
            <div className='details'>
                <h3>{label}</h3>
                <ul className='cook-info'>
                    <li>
                        <BiAlarm />
                        <span>{time} min</span>
                    </li>
                    <li>
                        <BiDish />
                        {dishType.map((ele, idx) => {return (<span key={idx}>{ele}</span>)})}
                    </li>
                    <li>
                        <BiDish />
                        <span>{capitalize(cuisine)}</span>
                    </li>
                    <li>
                        <HiFire />
                        <span>{Math.round(kcal)} Kcal</span>
                    </li>
                </ul>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Diam eu nibh amet, quisque maecenas congue eget neque sed.
                </p> */}
                <ul className="tag-list">
                    { tags.map((tag, key) => {
                        return (<li key={key} className="tag-item">#{tag}</li>)
                    }) }
                    {/* <li className="tag-item">#Diary-Free</li> */}
                </ul>
            </div>
        </div>
    )
}

export default RecipeCard;