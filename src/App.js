// import logo from './logo.svg';
// import './App.css';


import React from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Employee from './components/Employee';
import Search from './components/Search';
// import Employee from './components/Employee';


class App extends React.Component {
  // state = {
  //   employeeList: employee
  // }

  // handleSearch = gender =>{
  //   const genderEmployeeList = 
  //   this.state.employeeList.filter(employee => employee.gender )
  //   this.setState ({employeeList: genderEmployeeList})

  // }

  render(){

    return (
    
      <Wrapper>
           <Title>Employee Directory</Title>
           <Search />
      
          <Employee/>
        {/* {this.state.employeeList.map(employee => 
            (
              <Employee
              id = {employee.id}
              name={employee.name}
              image={employee.image}
              occupation={friend.occupation}
              location={friend.location}
              key ={employee.id}
              handleSearch = {this.handleSearch}
            />
            )
        )} */}
      
  
      </Wrapper>
    );

  }

}

export default App;



