import { useState } from "react";

const All = ({ allData }) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = allData;
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="bg-rose-500">
                <img src={strCategoryThumb} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title spiral">{strCategory}</h2>
                <div className="">
                    {showFullDescription ? (
                        <p>{strCategoryDescription} <span><button onClick={toggleDescription} className="font-semibold text-rose-500"> Read less</button></span></p>
                    ) : (
                        <div>
                            {
                                strCategoryDescription.length >= 300 ? <p>{`${strCategoryDescription.slice(0, 300)}...`}<span><button onClick={toggleDescription} className="font-semibold text-rose-500">Read more</button></span></p> : 
                                <p>{strCategoryDescription}</p>
                            }
                            
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default All;
;