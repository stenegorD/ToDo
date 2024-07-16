import { useState } from 'react';
import { ITask } from '../../types';

import { TaskForm } from '../TaskForm';
import { TaskList } from '../TaskList';



export function TaskManager() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [editingTask, setEditingTask] = useState<ITask | undefined>(undefined);

    const handleSave = (task: ITask): void => {
        setTasks((prevTasks) => {
            const existingTaskIndex = prevTasks.findIndex((t) => t.id === task.id);
            if (existingTaskIndex !== -1) {
                const updatedTasks = [...prevTasks];
                updatedTasks[existingTaskIndex] = task;
                return updatedTasks;
            }
            return [...prevTasks, task];
        });
        setEditingTask(undefined);
    };

    const handleDelete = (id: number): void => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const handleEdit = (id: number): void => {
        const task = tasks.find((task) => task.id === id);
        if (task) {
            setEditingTask(task);
        }
    };

    const handleStatusChange = (id: number): void => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, status: !task.status } : task
            )
        );
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Менеджер завдань</h1>
            <div className='flex items-start gap-4'>
                <TaskForm task={editingTask} handleSave={handleSave} />
                <TaskList tasks={tasks} handleEdit={handleEdit} handleDelete={handleDelete} handleStatusChange={handleStatusChange} />
            </div>
        </div>
    );
};