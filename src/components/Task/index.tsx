import { TaskProps } from '../../types';
import { Button } from '../Button';



export function Task({ task, handleEdit, handleDelete, handleStatusChange }: TaskProps) {

    return (
        <div className={`flex flex-col justify-between gap-2 p-4 bg-white shadow rounded-lg ${task.status ? 'border-2 border-solid border-green-500' : 'border-2 border-solid border-transparent'}`}>
            <div className="flex justify-between gap-4">
                <div>
                    <h3 className={`font-bold  ${task.status ? 'line-through' : ''}`}>{task.title}</h3>
                    <p className='text-sm break-words py-1'>{task.description}</p>
                    {task.file && <a className='text-sm font-medium text-indigo-700 underline' href={URL.createObjectURL(task.file)} target='_blank'>{task.file.name}</a>}
                </div>
                <div className='flex items-center self-start gap-2 flex-shrink-0'>
                    <label className='font-semibold fill-stone-600'>{task.status ? 'Виконано' : 'Не виконано'}</label>
                    <input type="checkbox" onChange={() => handleStatusChange(task.id)} className="text-blue-500 px-2 py-1 rounded border-solid border-2 border-blue-500" />
                </div>
            </div>
            <div className='flex self-end gap-2'>
                <Button type="button"  onClick={() => handleEdit(task.id)} disabled={task.status} className="text-yellow-500 px-2 py-1 rounded border-solid border-2 border-yellow-600 hover:bg-yellow-600 hover:text-white disabled:bg-gray-400 disabled:text-white disabled:border-gray-400">Редагувати</Button>
                <Button type="button"  onClick={() => handleDelete(task.id)} className="text-red-500 px-2 py-1 rounded border-solid border-2 border-red-600 hover:bg-red-500 hover:text-white">Видалити</Button>
            </div>
        </div>
    );
};

