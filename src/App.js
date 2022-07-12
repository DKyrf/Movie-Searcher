import { useState } from 'react';
import SearchItem from './components/SearchItem';
import CardData from "./components/CardData"

function App() {
  const [searchData, setData] = useState("")

  function searchItem(e){
   setData(e);
  }

  return (
    <div className="App">
      <SearchItem 
        dataSaver = {searchItem} 
      />
      <CardData 
        searchResult={searchData}
      />
    </div>
  );
}

export default App;
