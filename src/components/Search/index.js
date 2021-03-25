import React, {Component} from "react";
import "./style.css";


class Search extends Component {
   state ={
       searchByName:"",
       searchByDOB:""
   }

   handleInputChange = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
     this.setState({[name]: value})

   }


    render(){
        return(
            <div className="col-md-12 input-container text-center">
                <div className="row name-search">
                    <div className="name-input">
                    <input type="text" 
                            name="searchByName"
                            value={this.state.searchByName}
                            placeholder="Enter Full Name"
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="name-btn">
                        <button 
                        type="button" 
                        className="query_btn btn btn-default btn-sm search-btn">Search by Name</button>
                    </div>
                    </div>
                    <div className="row dob-search">
                    <div className="name-input">
                    <input type="text" 
                            name="searchByDOB"
                            value={this.state.searchByDOB}
                            placeholder="Enter Full Name"
                            onChange= {this.handleInputChange}/>
                    </div>
                    <div className="name-btn">
                        <button 
                        type="button" 
                        className="query_btn btn btn-default btn-sm search-btn">Search by DOB</button>
                    </div>
                  
                    </div>
            </div>          
           
        )

    }
}

export default Search;