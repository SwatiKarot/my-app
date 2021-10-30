import React, { Component } from "react";
import EventList from "../../Components/EventList";

class Events extends Component{
    state = {
        events: []
      }
    
      componentDidMount(){
        // fetch('https://api.tvmaze.com/search/shows?q=Vikings')
        // .then(response => response.json())
        // .then(json => this.setState({ events: json})) 
        // const events = ["test1", "test2"];
        // setTimeout(() => {
        //   this.setState({events})
        // }, 3000);
      }
      onEventInputChange = e => {
          

        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({ events: json})) 
          console.log(e)
          console.log(e.target.value)
      }
      sayHello() {
        alert('You clicked me!');
      }

    render(){
    return (
        <div>The Length of events is: {this.state.events.length}
        <div>
            <input type ="text" onChange={this.onEventInputChange} />
            <button onClick={this.sayHello}>Search</button>
        </div>
        <EventList List = {this.state.events} />
        </div>
    )
}
}
export default Events;