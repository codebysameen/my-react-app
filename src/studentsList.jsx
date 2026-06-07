
function StudentsList(props) {
    const isPassed = props.marks >= 50 ? "passed" : "failed";
    return (
        <div className="border p-4 m-2 rounded-lg shadow w-72">

            <h1 className="text-xl font-bold">{props.student}</h1>
            <p> {props.subject}</p>
            <p> {props.marks}</p>
            <p className={isPassed ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
        {isPassed ? '✅ Pass' : '❌ Fail'}
      </p>
        </div>
    )
}
     
export default StudentsList;