import React from "react";
import {FaTimesCircle} from "react-icons/fa";
import "./App.css";

const ToDoList = (props) =>{

   

    return(
        <>
    <div className="new-line">
        <FaTimesCircle 
        //uscallback function
         onClick={()=>{
            props.onSelect(props.id)
         }}/>
        
    <li> {props.text} </li>
    </div>
    </> 
    );
      
}
export default ToDoList;