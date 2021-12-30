import './App.css';
import React, { useState } from "react";
import AddSection from './Components/AddSection'
import IdeasSection from './Components/IdeasSection'


// Minimal Viable Product
// TODO: ability to add ideas
// TODO: ability to define ideas
// TODO: store data

function App() {

  const [ideas, setIdeas] = useState([])

  const createIdea = (idea) => {
    setIdeas([
      ...ideas,
      idea
    ])
  }

  return (
    <div className="App">
      <h1>Ideas!</h1>

      {/* area to add idea */}
      <AddSection add={createIdea} />


      {/* area for ideas to be shown with the ability to  */}
      <IdeasSection ideas={ideas} />

    </div>
  );
}

export default App;
