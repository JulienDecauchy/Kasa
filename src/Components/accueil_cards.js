import React from "react";
import { NavLink } from "react-router-dom";
import jsonLogement from "../logements.json";

function AccueilCards() {
    const listItems = jsonLogement.map(cards =>
            <div key={cards.id} className="NavCards">
                <NavLink to={`/Logement/${cards.id}`}>
                    <div className="cards-div_img">
                        <img
                            src={cards.cover}
                            alt="Image de couverture de la location"
                        />
                        <div className="cards-div_p">
                            <p>{cards.title}</p>
                        </div>
                    </div>
                </NavLink>
            </div>
        )

    return (
        <>
            { listItems }
        </>
    );
};

export default AccueilCards