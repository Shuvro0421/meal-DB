import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from 'react-icons/md';



const Instruction = ({ instruction }) => {
    const navigate = useNavigate();
    const { strInstructions, strMealThumb, strMeal } = instruction;

    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={strMealThumb} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl spiral text-rose-500 font-bold">{strMeal}</h1>
                    <p className="py-6">{strInstructions}</p>
                    <button className="btn text-white" onClick={handleGoBack}><MdOutlineArrowBackIos></MdOutlineArrowBackIos></button>
                </div>
            </div>
        </div>
    );
};

export default Instruction;