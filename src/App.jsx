import StudentsList from "./StudentsList";
import {useState} from 'react';

function App(){
  const students = [
    {id:1, name:"John", subject:"Math", Marks:85},
    {id:2, name:"Jane", subject:"Science", Marks:90},
    {id:3, name:"Alice", subject:"English", Marks:45},
    {id:4, name:"Bob", subject:"History", Marks:80},
    {id:5, name:"Charlie", subject:"Geography", Marks:32},
  ]

   const[search, setSearch] =useState ("");

   const filtered= students.filter((student)=> 
    student.name.toLocaleLowerCase().includes(search.toLowerCase()))

   const count= students.filter((s)=> s.Marks>=50).length;

  return(

     
    <div>
     <h2  className="p-6">PassStudents={count}/{students.length}</h2> 
    
            <input placeholder="Search" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />


    {filtered.map((student)=>(
        <StudentsList
          key={student.id}
          student={student.name}
          subject={student.subject}
          marks={student.Marks}
        />
      ))}
    </div>
  )
}
export default App;