

const Beef = ({ beef }) => {
    const { strMeal, strMealThumb , strArea } = beef;
    return (
        <div>
            <div className=" ">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="" src={strMealThumb} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center text-xl font-semibold text-rose-500 spiral">{strMeal}</h2>
                        <p ><span className="spiral text-amber-400">Area:</span> {strArea}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Beef;