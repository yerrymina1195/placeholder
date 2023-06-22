




import { useContext } from "react";
import {useState} from "react";
import { placeContext } from "./contextProvider";



export const InputSearching = () =>{
  const {filter,update}= useContext(placeContext);
  const [newSearch, setNewTask]= useState("");


const changemet= (event)=>{
 update()
  setNewTask(event.target.value)
}

const handle = (e) =>{
  e.preventDefault()
  const num= Number(newSearch)
  
  if (num >= 0) {
    return  filter(num)
  }
  else{
    alert('nombre seulement')
  }
 
}

    return(
        <form onSubmit={handle}   className=" new-item-form d-flex justify-content-center mb-5 g-1">
        <input
        placeholder="search by id"
        value={newSearch}
          onChange={changemet}
          type="text"
          id="item"
        />
      <button  className=" gtr">Search</button>
    </form>
    )
} 