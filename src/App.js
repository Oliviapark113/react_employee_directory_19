
import React from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Employee from './components/Employee';
import Search from './components/Search';
import axios from 'axios'



class App extends React.Component {
   state ={
    //Where you can find default value
    searchByName:"",
    searchByDOB:"",
    results: []
  }

  componentDidMount(){
   axios.get('https://randomuser.me/api/?results=20')
   .then(response => {
     console.log("app",response.data.results)
     this.setState({results: response.data.results})
    })
   .catch(err => console.error(err))
  }

  handleInputChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
   this.setState({[name]: value})

 }

 handleSubmit = e =>{
  e.preventDefault()
  console.log("Submitting....", this.state.searchByName, this.state.searchByDOB)
  if(this.state.searchByName==="" && this.state.searchByDOB===""){
      alert("Please enter correct search term")

  }
  localStorage.setItem("search", `${this.state.searchByName} ${this.state.searchByDOB}`)
}

  render(){

    return (
    
      <Wrapper>
           <Title>Employee Directory</Title>
           <Search 
             searchByName={this.state.searchByName}
             searchByDOB={this.state.searchByDOB}
             handleInputChange={this.handleInputChange}
             handleSubmit={this.handleSubmit}
           />
      
          <Employee
          results = {this.state.results}/>
  
      </Wrapper>
    );

  }

}

export default App;



