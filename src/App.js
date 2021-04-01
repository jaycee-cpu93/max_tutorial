import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person.js'

const App = (props) =>{
  const [personsState, setPersonState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephine', age: 25}
    ],
  })
  const [otherState, setOtherState] = useState('some values');
  console.log(personsState, otherState)

  const switchNameHandler = () => {
    //console.log("this was clicked")
    setPersonState({
     persons: [
       {name: 'Maximilllan Real name', age: 28},
       {name: 'Manu', age: 29},
       {name: 'Stephine', age: 26}
     ],
     otherState: personsState.otherState
    });
  
  }
 

  return (
    <div className="App">
      
      <h1> Hi, I'm a react App</h1>
      <p>This is really working</p>
      <button onClick ={switchNameHandler}>Switch Name</button>
      <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
      <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}> My hobbies: Racing</Person>
      <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
    </div>
  );
  
  //return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'does it work now?'))
}

export default App;


