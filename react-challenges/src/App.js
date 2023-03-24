import React from 'react';
import './App.css';
import BasicInfo from './components/medium/BasicInfo';

// Very easy
class App extends React.Component {
// Easy
// You need a constructor in your class component where you want the data to be updated/your local state 
  constructor(props) {
      super(props);
      // this.state = {
      //   person: {}
      // };

      // Hard - Create an array and iterate through it in return()
      this.state = {
          people: [
          {
            id: 1,
            name: 'Cheyenne',
            number: '10',
            dateOfBirth: 'Sept'
          },
          {
            id: 2,
            name: 'Astrid',
            number: '11',
            dateOfBirth: 'Dec'
          }
        ]
      };
  }
  
  render() {
    // Very Easy
    // return(
    //   <div>
    //     <p>Cheyenne</p>
    //     <p>10</p>
    //     <p>Sept</p>
    //   </div>
    // );

    // Two different ways to return();
    // return(
    //   // passing state into the BasicInfo component
    //   this.state.people.map((person) => {
    //     return (
    //       <BasicInfo
    //       p={person} />
    //       // p is our prop, which is our objects in the people array
    //     );
    //   })
    // )
    return(
      this.state.people.map(person => <BasicInfo key={person.id} p={person} />)
    );
  }
}

export default App;