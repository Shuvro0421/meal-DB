import { Link, Outlet, useLoaderData } from "react-router-dom";
import AllData from "../AllData/AllData";
import Header from "../Header/Header";

const Home = () => {

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;