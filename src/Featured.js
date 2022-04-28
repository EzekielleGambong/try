import React from 'react'
import {BiCaretRight} from 'react-icons/bi';
import {BiPlus} from 'react-icons/bi';
import "./Featured.css";
import daredevil from './images/daredevil.jpg';

function Featured(){
    return(
        <div className="containerbanner">
            <img src={daredevil} height={500} alt="" className="banner_image"/>
            <h3>NETFLIX <small>MOVIES</small></h3>
            <h1>DAREDEVIL</h1>

            <div className="btn">
                <button className="playbtn">
                    <BiCaretRight/>
                </button>
                <button className="addbtn">
                    <BiPlus/>
                </button>
            </div>

            <div className="first_container">
                <p className="first">
                A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil. Edit Report This. As a child Matt Murdock was blinded by a chemical spill in a freak accident. Instead of limiting him it gave him superhuman senses that enabled him to see the world in a unique and powerful way.
                </p>
            </div>

        </div>
    )
}

export default Featured;