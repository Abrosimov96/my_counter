import {ReactNode} from 'react';

type ButtonProps = {
    children: ReactNode
    onClick: () => void
    disable?: boolean
};
export const Button = ({children, onClick, disable}: ButtonProps) => {
    return (
        <button onClick={onClick} disabled={disable}>
            {children}
        </button>
    );
};