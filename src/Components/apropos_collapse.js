import React from "react";
import { useState } from "react";
import { aproposList } from "./apropos_data";

function AproposCollapse() {
    const [showMore, setShowMore] = useState(false);
    function handleArrowClick() {
        setShowMore(!showMore);
    }

    const ListItems = aproposList.map(collapse =>
        <>
            <div key={collapse.id} tabIndex={0} className="aproposCollapse">
                <div className="collapse_title-Div">
                    <p>{collapse.title}</p>
                    <div onClick={handleArrowClick}>
                        <i class="fa-solid fa-chevron-up"></i>
                    </div>
                </div>
                <div>
                    {showMore && <div className="collapse_description-Div"><p>{collapse.description}</p></div>}
                </div>
            </div>
        </>
        );

    return (
        <>
            { ListItems }
        </>
    )
}

export default AproposCollapse