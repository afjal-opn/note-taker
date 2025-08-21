import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState<string[]>([]);

  const addNoteHandler = (note: string) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Note Taker</h1>
      <NoteForm onAddNote={addNoteHandler} />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
