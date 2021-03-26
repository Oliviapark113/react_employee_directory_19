
import React from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Employee from './components/Employee';
import Search from './components/Search';
import axios from 'axios'
// import API from './components/utils/API'



class App extends React.Component {
   state ={
    //Where you can find default value
    searchByGender:"",
    searchByDOB:"",
    results: []
  }

  componentDidMount(){
   this.searchByEmployee()
  }

 searchByEmployee(){
    axios.get('https://randomuser.me/api/?results=20')
    .then(response => {
    
      this.setState({results: response.data.results})
     })
    .catch(err => console.error(err))
   }

  searchAPIbyGender = ()=>{
    axios.get(`https://randomuser.me/api/?gender=${this.state.searchByGender}`)
    .then(response =>{
      console.log(response.data.results)
      this.setState({results:response.data.results })
    })


  }

  handleInputChange = (e)=>{
  
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value)
   this.setState({[name]: value})

 }

 handleSubmit = e =>{
  e.preventDefault()
  console.log("Submitting....", this.state.searchByGender, this.state.searchByDOB)
  if(this.state.searchByGender==="" && this.state.searchByDOB===""){
      alert("Please enter correct search term")

  }
  localStorage.setItem("search", `${this.state.searchByGender} ${this.state.searchByDOB}`)
}

  render(){

    return (
    
      <Wrapper>
           <Title>Employee Directory</Title>
           <Search 
            searchByGender={this.state.searchByGender}
             searchByDOB={this.state.searchByDOB}
             handleInputChange={this.handleInputChange}
             handleSubmit={this.handleSubmit}
             searchAPIbyGender={this.searchAPIbyGender}
             
           />
      
          <Employee
          results = {this.state.results}/>
  
      </Wrapper>
    );

  }

}

export default App;



