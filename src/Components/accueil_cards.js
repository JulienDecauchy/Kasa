import React from "react";
import logements from '../logements.json';
import { useNavigate } from "react-router-dom";


function AccueilCards() {
    const navigate = useNavigate();
    const leavePage = () => {
        navigate("/Logement/:id", {
            state: {
                id: logements.id
            }
        });
    }

    const listItems = logements.map(cards =>
            <div key={cards.id} className="cards" onClick={leavePage}>
                <img
                    src={cards.cover}
                    alt="Image de couverture de la location"
                />
                <p>{cards.title}</p>
            </div>
        )

    return (
        <>
            { listItems }
        </>
    );
};

export default AccueilCards