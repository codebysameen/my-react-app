function Alert(props){
    const bgColor = props.type=="success" ? "bg-green-100" : "bg-red-100";
    return(
        <div className={bgColor}>
            <h1>{props.message}</h1>
        </div>
    )
}
export default Alert;