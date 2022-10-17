import React from 'react';
import LeaderImage from '../../components/LeaderImage/LeaderImage';
import QImage from '../../components/QImage/QImage';

const LeadersPage = () => {
    return ( 
        <div className='container' >
            <div class='row' >
                <h3>Meet the Youth Pastors!</h3>
                <div class='col' >
                    <QImage />
                    <p>Email:pastorq@lakeviewindy.com</p>
                    <p>Phone:317-243-9396</p>
                </div>
                <div class='col' >
                    <LeaderImage />
                    <p>Email:mattiew@lakeviewindy.com</p>
                    <p>Phone:317-243-9396</p>
                </div>
            </div>
        </div>
     );
}
 
export default LeadersPage;