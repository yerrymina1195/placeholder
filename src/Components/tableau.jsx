
import { Liste } from "./liste";
import { useContext } from "react";
import { placeContext } from "./contextProvider";
export const Tableau = () =>{
    const {table,newSearch}= useContext(placeContext)
console.log(newSearch);
    return(
        <table className="table table-striped text-center   "  >
        <thead>
          <tr>
            <th>userid</th>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody >
            {table.filter((el)=>{
              if (newSearch ==="") {
                return el
              }else if (Number(newSearch) === el.id) {
                return el
              }
              return false 
            }).map(({userId,id,title,completed})=>
(
<Liste key={id} id={id} title={title} userId={userId} completed={completed} />
) 
)

            }
         
     
        </tbody>
      </table>
    )

}