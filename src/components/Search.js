import React, { useState } from "react";
import "./Search.css"
import Wrapper from "./UI/Wrapper";
import options from "../options";

export default function Search(props){
  function getData(form){
    form.preventDefault()
    props.sendData(form.target)

  }

  function onHideButton(btn){
    btn.preventDefault()
    props.hideResponse()
  }

    return (
    <Wrapper>
      <form onSubmit={(e) => {getData(e)}}>
        <div className="search__selector">
        <div className="search__option">
          <label>Type:</label>
          {/* <input /> */}
          <select name="title">
            {options.map((el, ind) => <option key={ind}>{el.name}</option>)}
          </select>
        </div>
        <div className="search__option">
          <label>Year:</label>
          <div className="range">
            <input name="yearMin" placeholder="min"/>
            <input name="yearMax" placeholder="max"/>
          </div>

        </div>
        <div className="search__option">
          <label>Marks:</label>
          <div className="range">
            <input name="markMin" type="number" min="1"  max="10" placeholder="min"/>
            <input name="markMax" type="number" min="1" max="10" placeholder="max"/>
          </div>
        </div>
        </div>
        <div className="operator">
          <button onClick={onHideButton} className="search__button">Hide</button>
          <button className="search__button">Search</button>
        </div>

      </form> 
     </Wrapper>
    )
}