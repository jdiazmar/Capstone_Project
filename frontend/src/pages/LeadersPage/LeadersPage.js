import React from 'react';
import LeaderImage from '../../components/LeaderImage/LeaderImage';
import QImage from '../../components/QImage/QImage';

const LeadersPage = () => {
    return ( 
        <div className='container' >
            <div class='row' >
                <div class='col' >
                    <QImage />
                </div>
                <div class='col' >
                    <LeaderImage />
                </div>
            </div>
        </div>
     );
}
 
export default LeadersPage;