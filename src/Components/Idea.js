import React from "react";

function Idea({ idea, removeIdea }) {


    return (
        <div className="idea">
            <p>{idea}</p>
            <button onClick={() => removeIdea()} className="delete-idea-btn">Delete</button>  
        </div>
    )

}

export default Idea