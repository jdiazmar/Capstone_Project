// Generic Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Component Imports
import AddStudent from '../../components/AddStudent/AddStudent';
import SearchBar from '../../components/SearchBar/SearchBar';
import DisplayStudents from '../../components/DisplayStudents/DisplayStudents';

const RosterPage = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getAllStudents();
    }, []);

    async function getAllStudents(){
        const response = await axios.get(`http://127.0.0.1:8000/api/students/`);
        setStudents(response.data);
    };

    async function addStudent(newStudent){
        const response = await axios .post(`http://127.0.0.1:8000/api/students/`, newStudent);
        if(response.status === 201){
            await getAllStudents();
        }
    };

    async function deleteStudent(entry){
        let response = await axios.delete(`/students/${entry.id}/`, null);
        if(response.status === 204){
            await getAllStudents();
        }
    }

    function searchStudent(query){
        let newArray = []
        for(let i = 0; i < students.length; i++){
            if(students[i].first_name.toLowerCase().includes(query) ||
            students[i].last_name.toLowerCase().includes(query) ||
            students[i].grade.toLowerCase().includes(query) ||
            students[i].school.toLowerCase().includes(query)){
                newArray.push(students[i]);
            }
        }setStudents(newArray)
    }

    return ( 
    <div className='container'>
        <div className='container-event'>
            <SearchBar queryData={searchStudent} />
            <DisplayStudents parentEntries={students} deleteStudentProp={deleteStudent} />
            <AddStudent addNewStudentProp={addStudent} />
        </div>
    </div>
     );
}
 
export default RosterPage;