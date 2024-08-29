import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
    todos: [],
    error: "",
    status: "idle",
    note: ""
}

export const fetchTodosAsync = createAsyncThunk(
    "fetchTodos",
    async () => {
        try {
            const response = await fetch(`http://localhost:3000/todos`);
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || data.message || data.msg); // Throwing the error will reject the promise
            }

            return data;
        } catch (error) {
            throw new Error(error || error.message);
        }
    }
)

export const todoSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        save: (state, action) => {
            state.note = action.payload
        },
        reset: (state) => {
            state.note = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodosAsync.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
            state.status = "idle"
            state.todos = action.payload
        })
        builder.addCase(fetchTodosAsync.rejected, (state, action) => {
            state.status = "idle"
            state.error = action.payload
        })
    }
})

export default todoSlice.reducer;
export const { save, reset } = todoSlice.actions;
export const todosSelector = (state) => state.todo.todos