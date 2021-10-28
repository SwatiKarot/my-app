import React, { Component } from 'react';
import './App.css';
import Intro  from '../Intro';
import 'whatwg-fetch';
import Events from '../../Containers/Events';

class App extends Component{
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
       <h1 className="App-title">Web Analytics</h1>
         
        </header>
        <Intro message = "Here you can find all of you user behavioral analytics"/>
      <Events />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//      <h1 className="App-title">Web Analytics</h1>
       
//       </header>
//       <intro />
//     </div>
//   );
// }

export default App;
