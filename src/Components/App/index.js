import React from 'react';
import './App.css';
import Intro from '../Intro';
import 'whatwg-fetch';
import Events from '../../Containers/Events';
import Routes from '../../routes';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navigation from '../Navbar/navbar';


// class App extends Component {

//   render() {
//     return (

//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Web Analytics</h1>

//         </header>
//         <Intro message="Here you can find all of you user behavioral analytics" />
//         <Events />

//         <Navigation />
//         <Routes />
//       </div>
//     );
//   }
// }

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Web Analytics</h1>

        </header>
        <Intro />
        <Events />

        <Navigation />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
