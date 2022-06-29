import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function User() {
    const [myInfo, setMyInfo] = useState([]);
    useEffect(() => {
        async function fetchMyInfo() {
            try {
                let response = await axios.get('https://3aa17991-a9e7-49fa-90cc-81e0edcbe82f.mock.pstmn.io/myinfo');
            setMyInfo(response.data[0]);
            // console.log(response);
            console.log(response.data[0]);
            } catch (error) {
                alert("Error!");
                console.error(error);
            }
        }
        fetchMyInfo();
        return () => { setMyInfo([]) }
    }, []);


    const [myRecipe, setMyRecipe] = useState([]);
    useEffect(() => {
        async function fetchMyRecipe() {
            try {
                let response = await axios.get('https://3aa17991-a9e7-49fa-90cc-81e0edcbe82f.mock.pstmn.io/myrecipe');
            setMyRecipe(response.data);
            // console.log(response);
            // console.log(response.data);
            } catch (error) {
                alert("Error!");
                console.error(error);
            }
        }
        fetchMyRecipe();
        return () => { setMyRecipe([]) }
    }, []);

    const [savedRecipe, setSavedRecipe] = useState([]);
    useEffect(() => {
        async function fetchMyRecipe() {
            try {
                let response = await axios.get('https://3aa17991-a9e7-49fa-90cc-81e0edcbe82f.mock.pstmn.io/myrecipe');
            setMyRecipe(response.data);
            // console.log(response);
            // console.log(response.data);
            } catch (error) {
                alert("Error!");
                console.error(error);
            }
        }
        fetchMyRecipe();
        return () => { setMyRecipe([]) }
    }, []);

    return (
        <section className='page-user'>
            <p>MY Information</p>
            <div className="user-info">
                <table>
                    { myInfo && (
                    <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{myInfo.name}</td>
                            </tr>
                            <tr>
                                <th>Birth</th>
                                <td>{myInfo.birth}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{myInfo.email}</td>
                            </tr>
                            <tr>
                                <th>My Recipe</th>
                                <td>{myRecipe.length}</td>
                            </tr>
                    </tbody>
                    )}
                </table>

            </div>
            <div className="user-save">

            </div>
            <div className="user-board">
                <table>
                    <thead>
                        <tr>
                        <th>My Recipes</th>
                        <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                    { myRecipe && myRecipe.map((ele, idx) => { 
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

        </section>
    );
}

export default User;