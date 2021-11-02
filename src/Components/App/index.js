import React , { Component }from 'react';
import './App.css';
import Intro from '../Intro';
import 'whatwg-fetch';
import storeProvider from '../../hoc/storeProvider';
import configureStore from '../../store/configureStore';


import Highlight from 'react-highlight';
// get the tracker
import trackingMiddleware from '../../tracking/trackingMiddleware';
import configuredTracker from '../../tracking/configureTracker';
import { TrackerProvider } from 'react-tracker'
import { ToastContainer, toast } from 'react-toastify';
import Events from '../../Containers/Events';
import SeriesStore from '../../Containers/SeriesStore/seriesstore';
import Routes from '../../routes';
import {  BrowserRouter as Router } from "react-router-dom";
import Navigation from '../Navbar/navbar';
export { default as Product } from '../Product';
export { default as ProductList } from '../ProductList';

// Configure the store, with tracking middleware.
const store = configureStore({}, trackingMiddleware(configuredTracker));


const provideStore = storeProvider(store);
const SeriesStoreWIthStore = provideStore(SeriesStore);

// Component to format JSON and display it!
const DisplayJson = dataLayer => (
  <Highlight className="json">
    {JSON.stringify(dataLayer, null, 2)}
  </Highlight>
)

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <ToastContainer />
        <section>
          <TrackerProvider tracker={configuredTracker}>
            <SeriesStoreWIthStore />
          </TrackerProvider>
        </section>
        <section>
          <h3>DataLayer :</h3>
          <DisplayJson data={this.state.dataLayer} />
        </section>
      </div>
    );
  }

//   render() {
// return (
//   <Router>
//     <div className="App">
//       <header className="App-header">
//         <h1 className="App-title">Web Analytics</h1>

//       </header>
//       <Intro />
//       <Events />
//       <div className="wrapper">
//       <ToastContainer />
//       <section>
//         <TrackerProvider tracker={configuredTracker}>
//           <SeriesStoreWIthStore />
//         </TrackerProvider>
//       </section>
//       <section>
//         <h3>DataLayer :</h3>
//         <DisplayJson data={this.state.dataLayer} />
//       </section>
//     </div>

//       <Navigation />
//       <Routes />
//     </div>
//   </Router>
// );
//   }
}


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Web Analytics</h1>

//         </header>
//         <Intro />
//         <Events />

//         <Navigation />
//         <Routes />
//       </div>
//     </Router>
//   );
// }

export default App;
