import React, { useState, useEffect } from 'react';
import jsonLogement from "../logements.json"
import { useParams } from 'react-router-dom';

function LogementsDescriptionCollapse() {
    const { id } = useParams();
    const jsonFilter = jsonLogement.filter(filter => filter.id === id)

    const [showMore, setShowMore] = useState([]);
    useEffect(() => {
        // Initialiser l'état showMore avec des valeurs par défaut false
        const defaultShowMore = jsonFilter.map(() => false);
        setShowMore(defaultShowMore);
    }, []);

    function handleArrowClick(index) {
        const newShowMore = [...showMore];
        newShowMore[index] = !newShowMore[index];
        setShowMore(newShowMore);
    }

    const ListItems = jsonFilter.map((collapse, index) =>
            <div key={collapse.id} tabIndex={0} className="aproposCollapse">
                <div className="collapse_title-Div">
                    <p>Description</p>
                    <div onClick={() => handleArrowClick(index)}>
                        <i className="fa-solid fa-chevron-up"></i>
                    </div>
                </div>
                <div>
                    {showMore[index] && <div className="collapse_description-Div"><p>{collapse.description}</p></div>}
                </div>
            </div>
        );

    return (
        <>
            { ListItems }
        </>
    )
}

export default LogementsDescriptionCollapse