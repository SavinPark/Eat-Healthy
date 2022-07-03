import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function User({token, savedRecipes, myRecipes}) {
    // const [myInfo, setMyInfo] = useState([]);
    // useEffect(() => {
    //     async function fetchMyInfo() {
    //         try {
    //             let response = await axios.get('https://3aa17991-a9e7-49fa-90cc-81e0edcbe82f.mock.pstmn.io/myinfo');
    //         setMyInfo(response.data[0]);
    //         // console.log(response);
    //         console.log(response.data[0]);
    //         } catch (error) {
    //             alert("Error!");
    //             console.error(error);
    //         }
    //     }
    //     fetchMyInfo();
    //     return () => { setMyInfo([]) }
    // }, []);

    return (
        <section className='page-user'>
            { token === null ? 
                (<div className="login-first">
                    <p>Login is required.</p>
                </div>) : 
                (<div className="user-container">
                    <div className="user-inner user-info">
                        <div className="profile-img"></div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>myInfo.name</td>
                                </tr>
                                <tr>
                                    <th>Birth</th>
                                    <td>myInfo.birth</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>myInfo.email</td>
                                </tr>
                                <tr>
                                    <th>My Recipe</th>
                                    <td>{myRecipes.length}</td>
                                </tr>
                                <tr>
                                    <th>Saved Recipe</th>
                                    <td>{savedRecipes.length}</td>
                                </tr>
                            </tbody>
                            {/* )} */}
                        </table>
                    </div>

                    <div className="user-inner user-saveRecipe">
                        <table>
                            <thead>
                                <tr>
                                    <th>Saved Recipes</th>
                                    <th>date</th>
                                </tr>
                            </thead>
                            <tbody>
                                { savedRecipes && savedRecipes.map((ele, idx) => {
                                return (
                                <tr key={idx}>
                                    <td>{ele.label}</td>
                                    <td>{ele.date}</td>
                                </tr>
                                )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="user-inner user-myRecipe">
                        <table>
                            <thead>
                                <tr>
                                    <th>My Recipes</th>
                                    <th>date</th>
                                </tr>
                            </thead>
                            <tbody>
                                { myRecipes && myRecipes.map((ele, idx) => {
                                return (
                                <tr key={idx}>
                                    <td>{ele.label}</td>
                                    <td>{ele.date}</td>
                                </tr>
                                )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>)
            }
        </section>
    );
}

export default User;