import {useEffect, useState, createContext} from "react";

export const placeContext = createContext()

export const ContextProvider = (props) =>{


    const [table, setTable]= useState([]);
    const [newSearch, setNewTask]= useState("");
    console.log(table);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/").then((response)=>response.json()).then((data)=>{
            
            setTable(data)
        })

    },[])


    return(
        <>
        <h1 className="display-1 text-danger"> Placeholder</h1>
        <placeContext.Provider value={{table,newSearch,setNewTask}}>

            {props.children}

        </placeContext.Provider>
        </>
    )

}