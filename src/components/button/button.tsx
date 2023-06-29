import React, { InputHTMLAttributes } from "react";

export interface IOwnProps extends InputHTMLAttributes<HTMLButtonElement> {};

const ButtonWrapper: React.FC<IOwnProps> = ({ children, onClick }) => {
    return (
        <div>
            <button onClick={onClick} >{children}</button>
        </div>
    )
};

export default ButtonWrapper;