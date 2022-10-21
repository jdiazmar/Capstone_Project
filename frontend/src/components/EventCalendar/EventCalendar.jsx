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
            {title: 'SHFT Night @7pm', date: '2022-10-05'},
            {title: 'MDWK Huddle @7pm', date: '2022-10-12'},
            {title: 'MDWK Huddle @7pm', date: '2022-10-19'},
            {title: 'MDWK Huddle @7pm', date: '2022-10-26'},
            { title: '6th Grade Boys: Service', date: '2022-10-02' },
            { title: '6th Grade Girls: Early Childhood', date: '2022-10-02' },
            { title: '7/8th Grade Boys: B101', date: '2022-10-02' },
            { title: '7th Grade Girls: Game Room Loft', date: '2022-10-02' },
            { title: '8th Grade Girls: Elementary', date: '2022-10-02' },
            { title: 'High School Boys: YC Cafe', date: '2022-10-02' },
            { title: 'High School Girls: NCU Room', date: '2022-10-02' },
            { title: '6th Grade Boys: NCU Room', date: '2022-10-09' },
            { title: '6th Grade Girls: Game Room Loft', date: '2022-10-09' },
            { title: '7/8th Grade Boys: Early Childhood', date: '2022-10-09' },
            { title: '7th Grade Girls: B111', date: '2022-10-09' },
            { title: '8th Grade Girls: YC Cafe', date: '2022-10-09' },
            { title: 'High School Boys: Service', date: '2022-10-09' },
            { title: 'High School Girls: Elementary', date: '2022-10-09' },
            { title: '6th Grade Boys: B101', date: '2022-10-16' },
            { title: '6th Grade Girls: Service', date: '2022-10-16' },
            { title: '7/8th Grade Boys: Game Room Loft', date: '2022-10-16' },
            { title: '7th Grade Girls: Elementry', date: '2022-10-16' },
            { title: '8th Grade Girls: Early Childhood', date: '2022-10-16' },
            { title: 'High School Boys: Youth Cafe', date: '2022-10-16' },
            { title: 'High School Girls: NCU Room', date: '2022-10-16' },
            { title: '6th Grade Boys: Early Childhood', date: '2022-10-23' },
            { title: '6th Grade Girls: Elementary', date: '2022-10-23' },
            { title: '7/8th Grade Boys: Youth Cafe', date: '2022-10-23' },
            { title: '7th Grade Girls: Game Room Loft', date: '2022-10-23' },
            { title: '8th Grade Girls: B111', date: '2022-10-23' },
            { title: 'High School Boys: B101', date: '2022-10-23' },
            { title: 'High School Girls: NCU Room', date: '2022-10-23' },
            { title: 'STUDENT SECTION SUNDAY', date: '2022-10-30' },
            {title: 'Friendsgiving @7pm', date: '2022-11-02'},
            {title: 'MDWK Huddle @7pm', date: '2022-11-09'},
            {title: 'MDWK Huddle @7pm', date: '2022-11-16'},
            {title: 'MDWK Huddle @7pm', date: '2022-11-23'},
            {title: 'MDWK Huddle @7pm', date: '2022-11-30'},
            { title: '6th Grade Boys: Service', date: '2022-10-02' },
            { title: '6th Grade Girls: Early Childhood', date: '2022-11-06' },
            { title: '7/8th Grade Boys: B101', date: '2022-11-06' },
            { title: '7th Grade Girls: Game Room Loft', date: '2022-11-06' },
            { title: '8th Grade Girls: Elementary', date: '2022-11-06' },
            { title: 'High School Boys: YC Cafe', date: '2022-11-06' },
            { title: 'High School Girls: NCU Room', date: '2022-11-06' },
            { title: '6th Grade Boys: NCU Room', date: '2022-11-13' },
            { title: '6th Grade Girls: Game Room Loft', date: '2022-11-13' },
            { title: '7/8th Grade Boys: Early Childhood', date: '2022-11-13' },
            { title: '7th Grade Girls: B111', date: '2022-11-13' },
            { title: '8th Grade Girls: YC Cafe', date: '2022-11-13' },
            { title: 'High School Boys: Service', date: '2022-11-13' },
            { title: 'High School Girls: Elementary', date: '2022-11-13' },
            { title: '6th Grade Boys: B101', date: '2022-11-20' },
            { title: '6th Grade Girls: Service', date: '2022-11-20' },
            { title: '7/8th Grade Boys: Game Room Loft', date: '2022-11-20' },
            { title: '7th Grade Girls: Elementry', date: '2022-11-20' },
            { title: '8th Grade Girls: Early Childhood', date: '2022-11-20' },
            { title: 'High School Boys: Youth Cafe', date: '2022-11-20' },
            { title: 'High School Girls: NCU Room', date: '2022-11-20' },
            { title: '6th Grade Boys: Early Childhood', date: '2022-11-27' },
            { title: '6th Grade Girls: Elementary', date: '2022-11-27' },
            { title: '7/8th Grade Boys: Youth Cafe', date: '2022-11-27' },
            { title: '7th Grade Girls: Game Room Loft', date: '2022-11-27' },
            { title: '8th Grade Girls: B111', date: '2022-11-27' },
            { title: 'High School Boys: B101', date: '2022-11-27' },
            { title: 'High School Girls: NCU Room', date: '2022-11-27' },
        ]}
      />
    )
  }
}
    
