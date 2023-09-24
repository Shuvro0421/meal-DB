import { useLoaderData } from "react-router-dom";
import Instruction from "../Instruction/Instruction";


const Instructions = () => {
    const instructions = useLoaderData();
    return (
        <div>
            {
                instructions.meals.map(instruction => <Instruction instruction={instruction}></Instruction>)
                
            }
        </div>
    );
};

export default Instructions;