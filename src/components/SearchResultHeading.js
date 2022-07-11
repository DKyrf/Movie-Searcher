import React, { useEffect, useState } from "react";
import "./SearchResultHeading.css"

export default function SearchResultHeading(props){

    const [isClicked, setCondition] = useState(false)

    useEffect(()=>{setCondition(false)},[])

    function getBack(){
    props.researchResponse()
    setCondition(true)
  }

    return (
        <div className="search-header">
          {!isClicked && <div>
            <h2>{props.searchResult.type}</h2>
            <p>{props.searchResult.yearRange.min} - {props.searchResult.yearRange.max}</p>
            <button onClick={getBack}>Research</button>
          </div>}
        </div>
    
    )

}