import React from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/Task.Slice';
import { Link } from 'react-router-dom';

function TaskList() {
    const dispatch = useDispatch();

    const task = useSelector(state => state.tasks)
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    
    return (
        <div className='w-4/6'>
            <header className='flex justify-between items-center py-4'>
                <h1>Task List {task.length}</h1>
                <Link to='/create-task' className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'>Create Task</Link>
            </header>

            <div className='grid grid-cols-3 gap-4'>
                {task.map(task => (
                    <div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
                        <header className='flex justify-between'>
                            <h2>{task.title}</h2>
                            <div className='flex gap-2'>
                                <Link to={`/edit-task/${task.id}`} className='bg-zinc-600 px-2 py-1 rounded-md'>Edit</Link>
                                <button onClick={() => handleDelete(task.id)} 
                                    className='bg-red-500 px-2 py-1 text-xs rounded-md'
                                    >
                                    Delete
                                </button>
                            </div>
                        </header>
                        <p>{task.description}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaskList