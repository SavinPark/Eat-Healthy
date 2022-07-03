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


    // const [myRecipe, setMyRecipe] = useState([]);
    // useEffect(() => {
    //     async function fetchMyRecipe() {
    //         try {
    //             let response = await axios.get('https://56cd18cb-b7b3-4bd4-8ef2-d9cf923fe93c.mock.pstmn.io/myrecipe');
    //         setMyRecipe(response.data);
    //         // console.log(response);
    //         console.log(response.data);
    //         } catch (error) {
    //             alert("Error!");
    //             console.error(error);
    //         }
    //     }
    //     fetchMyRecipe();
    //     return () => { setMyRecipe([]) }
    // }, []);

    // const [saveRecipe, setSaveRecipe] = useState([]);
    // useEffect(() => {
    //     async function fetchSaveRecipe() {
    //         try {
    //             let response = await axios.get('https://4fd65212-d94c-4f4f-9512-1e10fae6f2b3.mock.pstmn.io/saverecipe');
    //             setSaveRecipe(response.data);
    //             // console.log(response);
    //         console.log(response.data);
    //         } catch (error) {
    //             alert("Error!");
    //             console.error(error);
    //         }
    //     }
    //     fetchSaveRecipe();
    //     return () => { setSaveRecipe([]) }
    // }, []);

    return (
        <section className='page-user'>
            {/* <p>MY Information</p> */}

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