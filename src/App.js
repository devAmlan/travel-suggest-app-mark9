import React,{useState} from 'react';
import './App.css';
import travelDb from './api/TravelDb';
import {AiFillGithub,AiOutlineTwitter} from 'react-icons/ai'
function App() {
  const [selectedseason, setSelectedseason] = useState("Summer")
  const selectHandler =(season)=>{
    setSelectedseason(season)
  }
  return (
    <div className="App">
    <div className="heading"><h3>Welcome to Travel Recommendations app</h3></div>
    <div className="seasons"> 
    {
       Object.keys(travelDb).map((season)=>{
       return(
         <><button onClick={()=>{selectHandler(season)}}
         >{season}</button></>
       )
      })
    }
    </div>
    <div className="travelinfo">
    <div className="places">
     {
       travelDb[selectedseason].map((elem)=>{
        return(<>
        <div className="place">
        <h4>Months : {elem.duration}</h4>
        <h3>Place to visit : {elem.place}</h3>
        </div>
        </>)
       }) 
     } 
    </div>
    </div>
    <div className="footer">
     <a href="https://github.com/devAmlan/travel-suggest-app-mark9" 
     target="_blank" rel="noreferrer"> <h3>Github repo <AiFillGithub 
      style={{color:"#000000",fontSize:"35px",cursor:"pointer"}}/></h3></a>
    <a href="https://twitter.com/AmlanjyotiSaho5" target="_blank" rel="noreferrer">
    <h3>Connect with me <AiOutlineTwitter
       style={{color:"#000000",fontSize:"35px",cursor:"pointer"}}
      /></h3>
    </a>
    </div>
    </div>
  );
}

export default App;
