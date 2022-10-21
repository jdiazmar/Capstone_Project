const DisplayStudents = (props) => {


    return ( 
        <div>
        <table className="table" >
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Grade</th>
                    <th>School</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {props.parentEntries.map((entry) => {
                    return (

                        <tr className="font-weight-bold" >
                            <td>{entry.first_name}</td>
                            <td>{entry.last_name}</td>
                            <td>{entry.grade}</td>
                            <td>{entry.school}</td>
                            <td>{entry.age}</td>
                            <td>{entry.email}</td>
                            <td>{entry.phone_number}</td>
                            <td> <button type="submit" className='btn btn-primary btn-sm'  onClick={() => props.deleteStudentProp(entry)} >Delete</button> </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
     );
}
 
export default DisplayStudents;