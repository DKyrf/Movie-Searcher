import React, { useState } from "react";
import "./MediaCard.css"

export default function MediaCard(props){
const [showDescription, setCondition] = useState(false)
    return (
        <div>
            {props.render.docs.map((el, ind) => {
                return (
                    <div key={ind} className="card-wrapper" >
                        <h2 className="ru-title">{el.name}</h2>
                        <h3 className="rating">(kinopoisk mark: {el.rating.kp})</h3>
                        <img className="poster" src={el.poster.url}></img>
                        <div>
                        <button 
                        className="description-button"
                        onClick={()=>{setCondition(!showDescription)}}
                        >{!showDescription ? "Show" : "Hide"} description</button>
                        </div>
                        {showDescription && <p className="description">{el.description}</p>}
                    </div>
                )
            })}
        </div>
    )
}