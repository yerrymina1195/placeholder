import {useEffect, useState, createContext} from "react";

export const placeContext = createContext()

export const ContextProvider = (props) =>{


    const [table, setTable]= useState([]);
    console.log(table);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/").then((response)=>response.json()).then((data)=>{
            
            setTable(data)
        })

    },[])
    const update= ()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/").then((response)=>response.json()).then((data)=>{
            
        setTable(data)
    })
    }

    const filter=(num)=>{
       
        const newTable = table.filter(({id})=> id == num);
        setTable(newTable)
     }



    return(
        <>
        <h1 className="display-1 text-danger"> Placeholder</h1>
        <placeContext.Provider value={{table,filter,update}}>

            {props.children}

        </placeContext.Provider>
        </>
    )

}