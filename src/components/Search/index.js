import React from "react";
import "./style.css";


const Search =props=> {
   return(
            <div className="col-md-12 input-container text-center">
                <div className="row name-search">
 
                    <div className="name-btn">
                        <button 
                        value="male"
                        type="button" 
                        className="query_btn btn btn-default btn-sm search-btn"
                        onClick={props.searchAPIbyGender}>Search male</button>

                        <button
                        value="female"
                       type="button"
                       className="query_btn btn btn-default btn-sm search-btn"
                       onClick={props.searchAPIbyGender}>Search female</button>


                    </div>
                    </div>
                    <div className="row dob-search">
                    <div className="name-input">
                    <input type="date" 
                            name="searchByDOB"
                            value={props.seachByDOB}
                            placeholder="Enter Full Name"
                            onChange= {props.handleInputChange}/>
                    </div>
                    <div className="name-btn">
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