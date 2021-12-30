import React from "react";
import Idea from './Idea'

function IdeasSection({ ideas, removeIdea }) {

    return (
        <div className="ideas-section">
            {
                ideas.map(idea => {
                    return <Idea removeIdea={() => removeIdea(idea.key)} key={idea.key} idea={idea.idea} />
                })
            }
        </div>
    )

}

export default IdeasSection