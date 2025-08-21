import React from 'react';

const NotesList: React.FC<{ notes: string[] }> = ({ notes }) => {
  return (
    <div className="space-y-2">
      {notes.length === 0 ? (
        <p>No notes available. Start adding some!</p>
      ) : (
        notes.map((note, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded">
            {note}
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
