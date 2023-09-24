import { NavLink } from "react-router-dom";


const FoodDetails = ({ category }) => {
    const { strMeal, strMealThumb, idMeal, strArea } = category;
    return (
        <div className=" ">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="" src={strMealThumb} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center text-xl font-semibold text-rose-500 spiral">{strMeal}</h2>
                    <p ><span className="spiral text-amber-400">Area:</span> {strArea}</p>
                    <div className="card-actions justify-end">
                        <NavLink to={`/recipe/${idMeal}`} className="text-center text-xl font-semibold text-rose-500 spiral">see recipe</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;