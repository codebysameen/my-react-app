function StudentsList(){
    const students =  ['Ali', 'Ahmed', 'Sara', 'Sameen', 'Usman'];
    return(
        <ul>
            {students.map((student) => (
                <li key={student}>{student}</li>
            ))}
        </ul>
    )
}
export default StudentsList;