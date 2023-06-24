




import { useContext } from "react";

import { placeContext } from "./contextProvider";



export const InputSearching = () =>{
  const {newSearch,setNewTask}= useContext(placeContext);
  


const changemet= (event)=>{

  setNewTask(event.target.value)
}

const handle = (e) =>{
  e.preventDefault()

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
    
    </form>
    )
} 