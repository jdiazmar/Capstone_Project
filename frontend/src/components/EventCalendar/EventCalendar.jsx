import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


 
export default class EventCalendar extends Component {

    rendr(){
        return (
            <FullCalendar 
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            />
        )
    }
    
}