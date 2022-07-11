import React from "react";
import "./Wrapper.css"

export default function Wrapper(props){
  const style = " globalWrapper " + props.className;
return(
    <div className={style}>
        {props.children}
    </div>
)
}