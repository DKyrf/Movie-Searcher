import React from "react";
import "./PageSelector.css"

export default function PageSelector(props){
    const pageArray = []
    for(let i = 0; i < props.pages; i++){
      pageArray.push(i)
    } 

    function getPage(e){
        props.sendPage(e.target.value);
    }

 return (
    <div className="selector">
    Select page:
    <select onChange={getPage}>
    { pageArray.map((el, ind) => 
        <option key={ind}>{el + 1}</option>
    )}
    </select>
    </div>
 )
}