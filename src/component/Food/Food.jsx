import { useLoaderData } from "react-router-dom";
import FoodDetails from "../FoodDetails/FoodDetails";
import NotFound from "../NotFound/NotFound";

const Food = () => {
    const categories = useLoaderData();
    return (
        <div className="grid grid-cols-3 gap-3 m-3 p-3">
            {
                categories.meals ? categories.meals.map(category => <FoodDetails category={category}></FoodDetails>) :
                <NotFound></NotFound>
            }
        </div>
    );
};

export default Food;