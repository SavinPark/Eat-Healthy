import React, { useState } from "react";

function MyRecipe({token, myRecipes}) {

    const [recipes, setRecipes] = useState([...myRecipes])

    return (
        <section className='page-myrecipes'>
            { token !== null ? 
                (<div className="login-first">
                    <p>Login is required.</p>
                </div>) :
                (<div className="myrecipes-container">
                    <h2>MY RECIPES</h2>
                    <ul className="myrecipes-list">
                        {recipes && recipes.map((ele) => { return (
                        <li key={ele.key}>
                            <div className="myrecipes-item">
                                {console.log(ele.label)}
                                <p>{ele.label}</p>
                            </div>
                        </li>
                        )})}
                    </ul>
                    <div className="btn-group">
                        <button>ADD</button>
                        <button>DEL</button>
                        <button>EDIT</button>
                    </div>
                </div>)
            }
        </section>
    );
}

export default MyRecipe;