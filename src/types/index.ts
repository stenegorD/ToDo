import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITask {
    id: number;
    title: string;
    description: string;
    status: boolean;
    file?: File;
}

export interface TaskListProps {
    tasks: ITask[];
    handleEdit: (id: number) => void;
    handleDelete: (id: number) => void;
    handleStatusChange: (id: number) => void;
}

export interface TaskProps {
    task: ITask;
    handleEdit: (id: number) => void;
    handleDelete: (id: number) => void;
    handleStatusChange: (id: number) => void;
}

export interface TaskFormProps {
    task?: ITask;
    handleSave: (task: ITask) => void;
}

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    type: "reset" | "submit" | "button";
    disabled?: boolean;
}