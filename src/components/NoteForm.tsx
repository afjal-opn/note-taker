import React, { useState } from 'react';

const NoteForm: React.FC<{ onAddNote: (note: string) => void }> = ({ onAddNote }) => {
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (note.trim()) {
      onAddNote(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
        className="w-full p-2 border border-gray-300 rounded"
        rows={4}
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
