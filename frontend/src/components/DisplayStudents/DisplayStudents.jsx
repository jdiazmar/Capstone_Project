const DisplayStudents = (props) => {


    return ( 
        <div>
        <table className="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Grade</th>
                    <th>School</th>
                </tr>
            </thead>
            <tbody>
                {props.parentEntries.map((entry) => {
                    return (

                        <tr class="font-weight-bold" >
                            <td>{entry.first_name}</td>
                            <td>{entry.last_name}</td>
                            <td>{entry.grade}</td>
                            <td>{entry.school}</td>
                            {/* <td> <button type="submit" onClick={() => props.deleteSongProperty(entry)} class="btn btn-primary btn-sm" >Delete Song</button> </td> */}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
     );
}
 
export default DisplayStudents;