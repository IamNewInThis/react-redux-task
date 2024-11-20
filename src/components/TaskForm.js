import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask } from '../features/tasks/Task.Slice';
import {v4 as uuid} from 'uuid'
import { useNavigate, useParams } from 'react-router-dom';

function TaskForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const tasks = useSelector(state => state.tasks)

    const [task, setTask] = useState({
        title: '',
        description: ''
    })  

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubit = (e) => {
        e.preventDefault();
        if(params.id){
            dispatch(updateTask({
                id: params.id,
                title: e.target[0].value,
                description: e.target[1].value
            }))
        }
        else{
            dispatch(addTask({
                id: uuid(),
                title: e.target[0].value,
                description: e.target[1].value,
                completed: false
            }))
    }
        navigate('/')
    }

    useEffect(() => {
        if(params.id){
            setTask(tasks.find(task => task.id === params.id))
        }
    },[params.id, tasks])


    return (
        <form onSubmit={handleSubit} className='bg-zinc-800 max-w-sm p-4'>
            <label htmlFor='title' className='block text-xl font-bold'>Task:</label>
            <input 
                type="text" 
                placeholder="Write a Task" 
                name='title' onChange={handleChange} value={task.title}
                className='w-full p-2 rounded-md bg-zinc-600'
            />

            <label htmlFor='description' className='block text-xl font-bold'>Description:</label>
            <textarea 
                placeholder="Write a Description" 
                name='description' onChange={handleChange} value={task.description}
                className='w-full p-2 rounded-md bg-zinc-600'
            ></textarea>
            
            <button type="submit" className='bg-indigo-600 px-2 py-1 rounded-sm'>Save Task</button>
        </form>
    )
}

export default TaskForm