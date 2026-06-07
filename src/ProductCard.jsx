
function ProductCard (props) {
    return(
    <div className="flex justify-center items-center"> 
        <div className="border border-stone-600 p-5 m-4 rounded-full shadow flex flex-col justify-center items-center bg-green-100 w-96">
            <h1 className="text-2xl font-bold text-gray-800">{props.title}</h1>
            <p className="text-xl text-green-600 font-semibold">{props.price}</p>
            <p className="text-lg text-gray-600">{props.category}</p>
        </div>
    </div>
       
    )
}
export default ProductCard;