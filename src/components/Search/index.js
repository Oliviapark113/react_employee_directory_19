import React from "react";
import "./style.css";


const Search =props=> {
   return(
            <div className="col-md-12 input-container text-center">
                <div className="row name-search">
                    <div className="name-input">
                    <input type="text" 
                            name="searchByName"
                            value={props.searchByName}
                            placeholder="Enter Full Name"
                            onChange={props.handleInputChange}/>
                    </div>
                    <div className="name-btn">
                        <button 
                        type="button" 
                        className="query_btn btn btn-default btn-sm search-btn"
                        onClick={props.handleSubmit}>Search by Name</button>
                    </div>
                    </div>
                    <div className="row dob-search">
                    <div className="name-input">
                    <input type="text" 
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