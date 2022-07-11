import React, { useEffect, useState } from "react";
import PageSelector from "./PageSelector";
import MediaCard from "./MediaCard";
import options from "../options"

export default function CardData(props){
    const [page, setPage] = useState(1)
    const [newData, setData] = useState("")

    useEffect(()=>{
        if(props.fetchIt === undefined){
        }else{
        async function getData(){

    try {
        const type = props.fetchIt.type.toLowerCase();
        
        const title = options.filter(el => el.name === type);

        const token = "ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06";
        const field1 = "rating.kp";
        const search1 = await (props.fetchIt.markRange.min + "-" + props.fetchIt.markRange.max);
        const field2 = "year";
        const search2 = await (props.fetchIt.yearRange.min + "-" + props.fetchIt.yearRange.max);
        const field3 = "typeNumber";  //movie or series
        const search3 = title[0].id;  
        //1-movie, 2-series, 3-cartoon, 4-anime, 5-animated-series, 6-tv-show, 7-mini-series, 8-video;
        const searchField1 = "year";
        const sortType = "-1";
        const searchField2 = "votes.imdb";
        const sortType2 = "1";
        // pages
        // limit 

        const url = `https://api.kinopoisk.dev/movie?field=${field1}&search=${search1}&field=${field2}&search=${search2}&field=${field3}&search=${search3}&sortField=${searchField1}&sortType=${sortType}&sortField=${searchField2}&sortType=${sortType2}&page=${page}&token=${token}`;

        const fetchingData = await fetch(url)
        const data = await fetchingData.json()
        setData(data)

    } catch (error) {console.log(error)}
  }       
        getData()
        }
    }, [page])

    let anchor = newData.pages === undefined;

    function getPage(e){
        setPage(e);
    }

    return (
        <div>


        {!anchor && <div>
            <PageSelector 
            pages = {newData.pages}
            sendPage = {getPage}
        />
            <MediaCard 
            render = {newData}
        />
        </div>}


        
        </div>
    )
} 