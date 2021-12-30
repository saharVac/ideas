import React from "react";
import Idea from './Idea'

function IdeasSection({ ideas, removeIdea, addIdeaDefinition }) {

    return (
        <div className="ideas-section">
            {
                ideas.map(idea => {
                    return <Idea addIdeaDefinition={addIdeaDefinition} removeIdea={() => removeIdea(idea.key)} key={idea.key} idea={idea} />
                })
            }
        </div>
    )

}

export default IdeasSection