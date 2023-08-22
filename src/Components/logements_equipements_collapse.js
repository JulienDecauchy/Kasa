import React, { useState, useEffect } from 'react';
import jsonLogement from "../logements.json"
import { useParams } from 'react-router-dom';
import Vector from "../assets/img/vectorBas.svg";

function LogementsÉquipementsCollapse() {
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
            <div key={collapse.id} tabIndex={0} className="aproposCollapse" id='collapse_logement-right'>
                <div className="collapse_logement-div">
                    <p>Équipements</p>
                    <div onClick={() => handleArrowClick(index)}>
                        <img
					        src={Vector}
					        alt="Vector"
				        />
                    </div>
                </div>
                <div>
                    {showMore[index] && <div className="collapse_logement-detail-div">
                        <ul>
                            <li>
                                {collapse.equipments}
                            </li>
                        </ul>
                    </div>}
                </div>
            </div>
        );

    return (
        <>
            { ListItems }
        </>
    )
}

export default LogementsÉquipementsCollapse