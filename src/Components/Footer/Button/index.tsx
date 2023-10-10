import React from 'react';
import { ButtonContainer } from "./styles";

interface ButtonProps {
    title: string;
    type?: "submit" | "button" | "reset";
}

const Button: React.FC<ButtonProps> = ({title, type = "button"}) => {
    return(
        <ButtonContainer>
            <button type={type}>{title}</button>
        </ButtonContainer>
    )
}

export { Button }