import React from "react";
import './index.css';

const EventList = (props) => {
return(
    <div>Event List
        <ul className="event-list">
            {props.List.map(event => (
                <li key={event.show.id}>{event.show.name}</li>
            ))}
            
        </ul>
    </div>
)}
export default EventList;