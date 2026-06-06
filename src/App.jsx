import PasswordToggle from './PasswordToggle'
import StudentCard from './StudentCard'
import StudentsList from './studentsList'

function App() {
  return (
    <div>
      <PasswordToggle />
      <StudentsList/>
      <div>
         <StudentCard name="John Doe" age={20} />
      <StudentCard name="Jane Smith" age={22} />
      <StudentCard name="Alice Johnson" age={19} />
      </div>
      
    </div>
  )
}

export default App