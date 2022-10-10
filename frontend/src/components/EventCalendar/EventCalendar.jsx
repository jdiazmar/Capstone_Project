import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
            { title: '6th Grade Boys: B101', date: '2022-10-16' },
            { title: '6th Grade Girls: Service', date: '2022-10-16' },
            { title: '7/8th Grade Boys: Game Room Loft', date: '2022-10-16' },
            { title: '7th Grade Girls: Elementry', date: '2022-10-16' },
            { title: '8th Grade Girls: Early Childhood', date: '2022-10-16' },
            { title: 'High School Boys: Youth Cafe', date: '2022-10-16' },
            { title: 'High School Girls: NCU Room', date: '2022-10-16' },
        ]}
      />
    )
  }
}
    
