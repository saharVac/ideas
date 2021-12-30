import './App.css';
import React, { useState } from "react";
import AddSection from './Components/AddSection'
import IdeasSection from './Components/IdeasSection'


// Minimal Viable Product
// TODO: store data

function App() {

  const [ideas, setIdeas] = useState([])

  const createIdea = (value) => {

    // check idea is not empty
    if (value) {

      console.log('idea ', value)

      // check idea doesn't already exist
      if (ideas.every(idea => idea.idea !== value)) {
        setIdeas([
          ...ideas,
          {
            idea: value,
            key: value,
            definitions: []
          }
        ])
      }
    }
  }

  const addIdeaDefinition = (definition, key) => {
    console.log('definition, ', definition)
    setIdeas(ideas.map(idea => {
      return {
        idea: idea.idea,
        key: idea.key,
        definitions: key === idea.key ? [...idea.definitions, definition] : idea.definitions
      }
    })) 
  }

  const removeIdea = (key) => {
    setIdeas(ideas.filter(idea => key !== idea.key))
  }

  return (
    <div className="App">
      <h1>Ideas!</h1>

      {/* area to add idea */}
      <AddSection add={createIdea} />


      {/* area for ideas to be shown with the ability to  */}
      <IdeasSection addIdeaDefinition={addIdeaDefinition} removeIdea={removeIdea} ideas={ideas} />

    </div>
  );
}

export default App;
