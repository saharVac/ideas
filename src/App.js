import './App.css';
import React, { useState } from "react";
import AddSection from './Components/AddSection'
import IdeasSection from './Components/IdeasSection'


// Minimal Viable Product
// TODO: ability to define ideas
// TODO: store data
// TODO: test commit

function App() {

  const [ideas, setIdeas] = useState([])

  const createIdea = (value) => {

    // check idea is not empty
    if (value) {

      console.log('idea ', value)

      // check idea doesn't already exist
      if (ideas.every(idea => idea.idea != value)) {
        setIdeas([
          ...ideas,
          {
            idea: value,
            key: value
          }
        ])
      }

    }

    
  }

  const removeIdea = (key) => {
    setIdeas(ideas.filter(idea => key != idea.key))
  }

  return (
    <div className="App">
      <h1>Ideas!</h1>

      {/* area to add idea */}
      <AddSection add={createIdea} />


      {/* area for ideas to be shown with the ability to  */}
      <IdeasSection removeIdea={removeIdea} ideas={ideas} />

    </div>
  );
}

export default App;
