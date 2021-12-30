import React, { useRef } from "react";

function AddSection({ add }) {

    const ideaRef = useRef()

    const addIdea = () => {
        const ideaText = ideaRef.current.value
        add(ideaText)
    }

    return (
        <div className="add-idea-section">
            
            Idea:
            <input ref={ideaRef} type="text"/>

            <button onClick={() => addIdea()} className="add-idea-button">Add Idea</button>

        </div>
    )

}

export default AddSection