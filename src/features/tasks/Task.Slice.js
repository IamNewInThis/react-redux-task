import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: 'Task 1',
        description: 'This is task 1',
        completed: false
    },
    {
        id: "2",
        title: 'Task 2',
        description: 'This is task 2',
        completed: false
    },
    {
        id: "3",
        title: 'Task 3',
        description: 'This is task 3',
        completed: false
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask:(state, action) => {
            state.push(action.payload)
            
        },
        deleteTask:(state, action) => {
            return state.filter(task => task.id !== action.payload)
        },
        updateTask:(state, action) => {
            const task = state.find(task => task.id === action.payload.id)
            task.title = action.payload.title
            task.description = action.payload.description
        }
    }
})

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer