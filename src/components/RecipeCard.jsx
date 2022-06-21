import React from "react";
import { BiAlarm, BiDish,  } from "react-icons/bi";
import { HiFire } from "react-icons/hi";

function RecipeCard () {

    return (
        <div className='recipe-card'>
            <div className='thumbnail'>
                {/* <img src={} alt='' /> */}
            </div>
            <div className='details'>
                <h3>Chicken Vesuvio</h3>
                <ul className='cook-info'>
                    <li>
                        <BiAlarm />
                        <span>60 min</span>
                    </li>
                    <li>
                        <BiDish />
                        <span>Italian</span>
                    </li>
                    <li>
                        <HiFire />
                        <span>4278 Kcal</span>
                    </li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Diam eu nibh amet, quisque maecenas congue eget neque sed. 
                    Congue eros, morbi sollicitudin mauris egestas risus molestie velit, et. 
                    Volutpat magna turpis id mauris auctor.
                </p>
                <ul className="tag-list">
                    <li className="tag-item">#Diary-Free</li>
                    <li className="tag-item">#Egg-Free</li>
                    <li className="tag-item">#Gluten-Free</li>
                    <li className="tag-item">#Wheat-Free</li>
                </ul>
            </div>
        </div>
    )
}

export default RecipeCard;