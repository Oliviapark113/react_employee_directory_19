import React from "react";
import "./style.css";


const Search =props=> {
   return(

       <div className="container input-container text-center">
           <div className="row search">

               <div className="col-md-3 gender-btn">
                   <button
                       value="male"
                       type="button"
                       className="query_btn btn btn-default btn-sm search-btn"
                       onClick={props.searchAPIbyGender}>Search male</button>
                </div>

                <div className="col-md-3">
                       <button
                       value="female"
                       type="button"
                       className="query_btn btn btn-default btn-sm search-btn"
                       onClick={props.searchAPIbyGender}>Search female</button>
                </div>
   

               <div className="col-md-3 date-input">
                   <input type="date"
                       name="searchByDOB"
                       value={props.seachByDOB}
                       placeholder="dd/mm/yyyy"
                       onChange={props.handleInputChange} />
                </div>

                <div className="col-md-3">
                    <button
                       type="button"
                       className="query_btn btn btn-default btn-sm search-btn"
                       onClick={props.handleSubmit}>Search by DOB</button>
                </div>
  
              

            </div>
          
       </div>          
           
        )

    }


export default Search;