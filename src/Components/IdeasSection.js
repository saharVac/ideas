import React from "react";

function IdeasSection({ ideas }) {

    return (
        <div className="ideas-section">
            {
                ideas.map(idea => {
                    return <p>{idea}</p>
                })
            }
        </div>
    )

}

export default IdeasSection