import React, { useState } from 'react'
import "./App.css";
import ToDoList from './ToDoList';


const App = () => {

  const [inputList, setinputList] = useState("");
  const [items, setitems] = useState([]);

  const dataChange = (event) => {
    setinputList(event.target.value);

  };

  const listOfItems = () => {
    // spred oprator store the data one by one
    //this is an actual array
    setitems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList('');
  };

  //onclick delete the todolist functionality
  const deleteItems = (id) => {
    console.log("deleted")

    setitems((olditems) =>{
      return olditems.filter((arrElem, index) =>{
        return  index !== id;

      })
    })
  }



  return (
    <>
      <div className="main-div">
        <div className="center-div">

          <br />
          <h1>TODO LIST</h1>
          <br />
          <input type='text'
            value={inputList}
            placeholder='Add Any Items' onChange={dataChange} />


          <button onClick={listOfItems}
            type="button" class="btn btn-primary">
            Enter</button>


          <ol>
            {items.map((itemval, index) => {
              return <ToDoList key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}
              />;

            })
            }
          </ol>

        </div>

      </div>


    </>
  )
}

export default App
