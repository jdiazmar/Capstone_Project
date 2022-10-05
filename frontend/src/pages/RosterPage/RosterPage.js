// Generic Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Component Imports
import AddStudent from '../../components/AddStudent/AddStudent';

const RosterPage = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getAllStudents();
    }, [addStudent]);

    async function getAllStudents(){
        const response = await axios.get('http://127.0.0.1:8000/students/');
        setStudents(response.data);
    };

    async function addStudent(newStudent){
        const response = await axios .post('http://127.0.0.1:8000/students/', newStudent);
        if(response.status === 201){
            await getAllStudents();
        }
    };

    return ( 
        <div>
            
        </div>
     );
}
 
export default RosterPage;