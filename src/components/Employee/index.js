import React from "react";
import "./style.css";
// import Search from "./Search"

function Employee (props) {
  return (
   props.results.map(result =>(
     console.log(result)
     <table className ="table table-striped" >
       <thead>
         <tr>
           <th scope="col">Photo</th>
           <th scope="col">Name</th>
           <th scope="col">Phone</th>
           <th scope="col">Email</th>
           <th scope="col">DOB</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <th scope="row">                          
           <div className="img-container">
            <img src={result.picture.thumbnail}/>
           </div>
           </th>
           <td>{`${result.name.first} ${result.name.last}`}</td>
           <td>{result.phone}</td>
           <td>{result.email}</td>
           <td>{result.dob}</td>
         </tr>

       </tbody>
     </table>

   )
   ) 

  )
}

export default Employee;