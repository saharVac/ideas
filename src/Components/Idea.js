import React, { useRef } from "react";
import IdeasSection from "./IdeasSection";

function Idea({ idea, removeIdea, addIdeaDefinition }) {

    const ideaDefinitionRef = useRef()

    return (
        
        <div className="idea">

            <h2>{idea.idea}</h2>
            
            {
                idea.definitions.map(definition => {
                    return <p>{definition}</p>
                })
            }
            <input ref={ideaDefinitionRef} className="idea-definition-input" type="text"/>
            <button onClick={() => addIdeaDefinition(ideaDefinitionRef.current.value, idea.key)} className="add-idea-definition-button">+</button>

            <br />
            <br />
            <button onClick={() => removeIdea()} className="delete-idea-btn">Delete</button>  

        </div>
    )

}

export default Idea