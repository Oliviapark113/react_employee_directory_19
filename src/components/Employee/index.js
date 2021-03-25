import React from "react";
import "./style.css";
// import Search from "./Search"

function Employee (props) {
 return(
  props.results.map(result =>(
         (  <table className ="table table-striped" >
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
            <img src={result.picture.large} key ={result.id.value}/>
           </div>
           </th>
           <td key={result.id.value}>{`${result.name.first} ${result.name.last}`}</td>
           <td key={result.id.name} >{result.phone}</td>
           <td key={result.login.uuid}>{result.email}</td>
           <td key={result.login.username}>{result.dob.date}</td>
         </tr>

       </tbody>
     </table>
     )
  ) 

 )
 )

       
  
}

export default Employee;