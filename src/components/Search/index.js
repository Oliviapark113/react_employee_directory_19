import React from "react";
import "./style.css";

function Search(){
    return(
        <div className="col-md-12 input-container text-center">
            <div className="row name-search">
                <div className="name-input">
                <input type="text" placeholder="Enter Full Name"/>
                </div>
                <div className="name-btn">
                    <button type="button" className="query_btn btn btn-default btn-sm search-btn">Search by Name</button>
                </div>
                </div>
                <div className="row dob-search">
                <div className="name-input">
                <input type="text" placeholder="Enter Full Name"/>
                </div>
                <div className="name-btn">
                    <button type="button" className="query_btn btn btn-default btn-sm search-btn">Search by DOB</button>
                </div>
              
                </div>
        </div>       
    
        
       
    )
}

export default Search;