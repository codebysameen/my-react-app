

function StudentCard(props){
    return(
        <div className="border rounded-lg p-4 m-2 shadow">
            <h1 className="text-4xl text-blue-500 font-bold">{props.name}</h1>
            <p className="text-lg text-gray-700">Age: {props.age}</p>
        </div>
    )
}
export default StudentCard;