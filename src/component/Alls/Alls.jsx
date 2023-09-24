import { useLoaderData } from "react-router-dom";
import All from "../All/All";

const Alls = () => {
    const allDatas = useLoaderData();
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 m-7">
            {
                allDatas.categories.map(allData => <All allData={allData}></All>)
            }
        </div>
    );
};

export default Alls;