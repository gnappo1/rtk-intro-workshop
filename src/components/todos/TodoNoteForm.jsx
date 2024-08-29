/* eslint-disable react/prop-types */
import { useState } from 'react'


const TodoNoteForm = ({ handleNewNote }) => {
    const [note, setNote] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNewNote(note);
        setNote("");
    };

    return (
        <div>
            <h2>Add a temporary note</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="note"
                    id="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
                <input type="submit" value="Add Note" />
            </form>
        </div>
    );
};

export default TodoNoteForm