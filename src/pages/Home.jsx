import React from "react";
import bgImg from "../images/home-bg.png";

function Home() {

    return (
        <div className='home'>
            <a href="http://localhost:3000/Eat-Healthy"><h2>EAT HEALTHY</h2></a>
            <img className="bgImg" src={bgImg} alt='배경 이미지'/>
        </div>
    );
}

export default Home;