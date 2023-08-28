import React, { useState, useEffect } from 'react';
import { aproposList } from "./apropos_data";
import Vector from "../assets/img/vectorBas.svg";

function AproposCollapse() {

    const [showMore, setShowMore] = useState([]);
    useEffect(() => {
        // Initialiser l'état showMore avec des valeurs par défaut false
        const defaultShowMore = aproposList.map(() => false);
        setShowMore(defaultShowMore);
    }, []);

    function handleArrowClick(index) {
        const newShowMore = [...showMore];
        newShowMore[index] = !newShowMore[index];
        setShowMore(newShowMore);
    }

    const ListItems = aproposList.map((collapse, index) =>
            <div key={collapse.id} tabIndex={0} className="aproposCollapse">
                <div className="collapse_title-Div">
                    <p>{collapse.title}</p>
                    <div onClick={() => handleArrowClick(index)}>
                        <img
                            className={ showMore[index] ? "chevron rotation" : "chevron"}
					        src={Vector}
					        alt="Vector"
				        />
                    </div>
                </div>
                <div className={ showMore[index] ? "collapse_description-Div animatedText" : "collapse_description-Div"}>
                    {showMore[index] &&
                        <p aria-hidden={showMore[index] ? "false" : "true"} >{collapse.description}</p>
                    }
                </div>
            </div>
        );

    return (
        <>
            { ListItems }
        </>
    )
}

export default AproposCollapse