import React from 'react';
import './App.css';
import BasicInfo from './components/medium/BasicInfo';

// Very easy
class App extends React.Component {
// Easy
// You need a constructor in your class component where you want the data to be updated/your local state 
  constructor(props) {
      super(props);
      // Hard - Create an array and iterate through it in return()
      this.state = {
          people: [
          {
            name: 'Cheyenne',
            number: '10',
            dateOfBirth: 'Sept'
          },
          {
            name: 'Lyndsey',
            number: '11',
            dateOfBirth: 'Dec'
          }
        ]
      };
  }
  
  render() {
    return(
      this.state.people.map((person) => {
        return (
          <BasicInfo
          p={person} />
          // p is our prop, which is our objects in the people array
        );
      })
    )
  }
}

export default App;