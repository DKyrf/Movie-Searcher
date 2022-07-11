import React, { useState } from "react";
import Search from "./Search";
import SearchResultHeading from "./SearchResultHeading"
import CardData from "./CardData";
import Wrapper from "./UI/Wrapper";

export default function SearchItem(props){
    const [searchStarted, setCondition] = useState(false);
    const [data, setData] = useState("")

    function searchData(data){
        console.log(data);
      const searchData = {
        id: Math.random(),
        type: data.title.value,
        yearRange: {
            min: data.yearMin.value,
            max: data.yearMax.value,
        },
        markRange: {
            min: data.markMin.value,
            max: data.markMax.value,
        },
      }

      setData(searchData);
      setCondition(true)

    }

    function hideHandler(){
        setCondition(true)
    }
    function showHandler(){
        setCondition(false)
    }


    return (
        <div>
          {!searchStarted 
          ? <Search 
            sendData={searchData}
            hideResponse={hideHandler}
            /> 
          : <Wrapper>
          <SearchResultHeading 
              searchResult={data}
              researchResponse={showHandler}
            /> 
            <CardData 
                fetchIt={data}                
            />

          </Wrapper>
            }
        </div>
    )
}