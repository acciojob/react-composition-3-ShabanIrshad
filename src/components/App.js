import Tooltip from "./Tooltip";
import React from "react";
import './../styles/App.css';

const App = () => {
  const textArray=['This is tooltip text','This is another tooltip text']
  return (
    <div>
       {textArray.map((tip,i)=><Tooltip key={i} text={tip}/>)}
    </div>
  )
}

export default App
