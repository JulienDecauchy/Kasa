import React from "react";
import jsonLogement from "../logements.json";
import { useNavigate } from "react-router-dom";

function AccueilCards() {
    
    const navigate = useNavigate();
    const handleNavigationClick = () => {
        navigate("/Logement/:id")
    }

    const listItems = jsonLogement.map(cards =>
            <div key={cards.id}>
                    <div className="cards" onClick={handleNavigationClick}>
                        <img
                            src={cards.cover}
                            alt="Image de couverture de la location"
                        />
                        <p>{cards.title}</p>
                    </div>
            </div>
        )

    return (
        <>
            { listItems }
        </>
    );
};

export default AccueilCards