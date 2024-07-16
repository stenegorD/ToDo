import { TaskListProps } from "../../types";
import { Task } from "../Task";



export function TaskList({ tasks, handleEdit, handleDelete, handleStatusChange }: TaskListProps) {
    return (
        <div className="flex flex-col gap-2 p-1 basis-1/2 overflow-auto h-[calc(100vh-80px)]">
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleStatusChange={handleStatusChange}
                />
            ))}
        </div>
    )
}