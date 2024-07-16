
import { ButtonProps } from "../../types";


export function Button({ children, type, ...props }: ButtonProps) {
    return (
        <button type={type} {...props}>{children}</button>
    )
}