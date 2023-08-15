import React from "react";
import { Link } from "react-router-dom";
import jsonLogement from "../logements.json";

function AccueilCards() {
    const listItems = jsonLogement.map((cards, index) =>
            <div key={cards.id}>
                <Link to={`/Logement/${cards.id}`}>
                    <div className="cards">
                        <img
                            src={cards.cover}
                            alt="Image de couverture de la location"
                        />
                        <p>{cards.title}</p>
                    </div>
                </Link>
            </div>
        )

    return (
        <>
            { listItems }
        </>
    );
};

export default AccueilCards