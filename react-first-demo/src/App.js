import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  
  state ={
    person:[
          {name:'sumit',age:22 },
          {name:'mahesh',age:23},
          {name:'sagar',age:25}
        ]
  }
  
  switchNameHandler= () =>
  {
    console.log("button clicked!!");

    this.setState({
      person:[
        {name:'sham',age:22 },
        {name:'mahesh',age:23},
        {name:'sagar',age:30}
      ]

    })
  }
  
  render() {
    return (
      <div className="App">
       <h1>hi , i am the react </h1>
      <p>this is working</p>
      <button onClick={this.switchNameHandler}>Switch name</button>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
      <Person name={this.state.person[1].name} age={this.state.person[1].age}>My hobbies :I like swiming. </Person>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}></Person>
      </div>

      //return  React.createElement('div',{className:'App'},React.createElement('h1',null,'does this work now'));
    );}
}

export default App;
