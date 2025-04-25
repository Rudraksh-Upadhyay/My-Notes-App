import { useEffect } from 'react';

import { useState } from 'react';
import './style.css';

function App() {

  useEffect( () => {
    document.title = "My Notes App";
  }, []);



  const [notes, setNotes] = useState([
    "Learn React",
    "Build an Application",
    "Deploye it online"
  ]);


  const [newNote, setNewNote] = useState('');

  const handleAddNode = () =>{
    if(newNote.trim() !== ''){
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };


  const handleDeleteNote = (deleteIndex) =>{
    const updateNotes = notes.filter((_, index) => index !== deleteIndex);
    setNotes(updateNotes);
  };


  return (
    <div className="container">
      <h1>Notes App 🗒️</h1>

      <input 
        type="text" 
        value={newNote} 
        onChange={(e) => setNewNote(e.target.value)} 
        placeholder="Write a note..."
      />
      <button className='add-button' onClick={handleAddNode}>Add Note</button>

      <ul>
        {notes.map((note, index) => (
          <li key = {index}>
            {note}
            <button className='delete-button' onClick={ () => handleDeleteNote(index)}>❌</button>
          </li>
        ))}
      </ul>

    </div>
    
  );
}

export default App;
