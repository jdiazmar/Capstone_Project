import React, { useState } from 'react';


const AddStudent = ({addNewStudentProp}) => {

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [grade, setGrade] = useState('');
    const [school, setSchool] = useState('');

    function handleSubmit(event){
        event.prevenDefault();
        let newStudent = {
            first_name: first_name,
            last_name: last_name,
            grade: grade,
            school: school
        };
        addNewStudentProp(newStudent);

    }


    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input type='text' value={first_name} onChange={(event) => setFirst_name(event.target.value)}/>
                
                <label>Last Name</label>
                <input type='text' value={last_name} onChange={(event) => setLast_name(event.target.value)}/>
                
                <label>Grade</label>
                <input type='text' value={grade} onChange={(event) => setGrade(event.target.value)}/>
                
                <label>School</label>
                <input type='text' value={school} onChange={(event) => setSchool(event.target.value)}/>

                <button type='submit'>Add</button>
            </div>
        </form>
     );
}
 
export default AddStudent;