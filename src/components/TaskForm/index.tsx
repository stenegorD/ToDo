import React, { useEffect, useState } from 'react';
import { TaskFormProps } from '../../types';
import { Button } from '../Button';


export function TaskForm({ task, handleSave }: TaskFormProps) {
    const [title, setTitle] = useState(task?.title ?? "");
    const [description, setDescription] = useState(task?.description ?? "");
    const [file, setFile] = useState<File | undefined>(task?.file);

    useEffect(() => {
        if (task) {
            setTitle(task?.title)
            setDescription(task?.description)
            setFile(task?.file)
        }
    }, [task])

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (title && description) {
            handleSave({
                id: task ? task.id : Date.now(),
                title,
                description,
                status: task ? task.status : false,
                file,
            });
        }
        handleCancel();
    };

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFile(e.target?.files?.[0])
    }

    const handleCancel = (): void => {
        setTitle("")
        setDescription("")
        setFile(undefined)
    }

    const handleRemoveFile = (): void => {
        setFile(undefined)
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleCancel} autoComplete='off' className="bg-white p-4 shadow rounded-lg mb-4 basis-1/2">
            <div className="mb-4">
                <label htmlFor='title' className="block text-gray-700">Назва</label>
                <input
                    id='title'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                    required
                    placeholder='Назва завдання'
                />
            </div>
            <div className="mb-4">
                <label htmlFor='description' className="block text-gray-700">Опис</label>
                <textarea
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 p-2 border rounded w-full min-h-32 max-h-80"
                    required
                    placeholder='Опис завдання'
                />
            </div>
            <div className="mb-4">
                <label htmlFor='file' className="block text-gray-700">Файл</label>
                <div className='flex items-center gap-4'>
                    <div className='flex relative w-max flex-shrink-0'>
                        <input
                            id='file'
                            type="file"
                            accept=".png, .jpeg, .jpg, .webp, .doc, .docx, .pdf"
                            onChange={handleChangeFile}
                            className="w-full"
                            title='Обрати файл'
                        />
                        <Button type="button" className="bg-indigo-100 text-gray-600 p-2 rounded hover:text-white">Додати файл</Button>
                    </div>
                    {file ?
                        <>
                            <span className='text-sm'>{file?.name}</span>
                            <Button type="button" onClick={handleRemoveFile} className="flex items-center justify-center min-h-fit text-lg p-1 rounded leading-none hover:bg-gray-300 hover:text-red-500">&times;</Button>
                        </>
                        : null}
                </div>
            </div>
            <div className="flex justify-end">
                <Button type="reset" className="mr-2 bg-gray-500 text-white px-4 py-2 rounded border-transparent border-solid border-2 hover:bg-white hover:text-gray-500 hover:border-gray-500">Відмнити</Button>
                <Button type="submit" className="bg-sky-700 text-white px-4 py-2 rounded border-transparent border-solid border-2 hover:bg-white hover:text-sky-700 hover:border-sky-700">{task ? "Редагувати" : "Додати"} завдання</Button>
            </div>
        </form>
    );
};