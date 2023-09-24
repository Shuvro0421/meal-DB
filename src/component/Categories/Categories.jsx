import { Outlet, useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {
    const categories = useLoaderData();
    return (
        <div>
            <div className="flex items-center justify-center shadow-xl p-1 text-white font-medium mx-7 rounded-md bg-rose-500 gap-10">
                {
                    categories.meals.map(category => <Category category={category}></Category>)
                }
            </div>
                <Outlet></Outlet>
        </div>
    );
};

export default Categories;