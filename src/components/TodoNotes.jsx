/* eslint-disable react/prop-types */

import { useState } from "react";

const TodoNotes = ({note}) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen((current) => !current)}>
                {open ? "Hide Note" : "Show Note"}
            </button>
            {open && (
                <>
                    <h2>Temporary Note</h2>
                    <span>{note}</span>
                </>
            )}
        </div>
    );
}

export default TodoNotes