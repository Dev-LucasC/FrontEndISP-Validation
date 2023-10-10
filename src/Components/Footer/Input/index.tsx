import React from 'react';
import { InputContainer, TextField, ErrorText, LabelText } from "./styles";
import { Controller, Control } from 'react-hook-form';
import { FormFields } from '../types'

interface InputProps {
    type: string;
    name: keyof FormFields;
    errorMessage?: string;
    control: Control<FormFields>;
}

const Input: React.FC<InputProps> = ({type, name, errorMessage, control, ...rest}) => {
    return(
        <>
            <InputContainer>
                <LabelText>{type}</LabelText>
                <Controller
                        name={name}
                        control={control}
                        render={({ field: {value, onChange} }) => (<input value={value} onChange={onChange} {...rest} />)}
                />
            </InputContainer>
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    )
}

interface TextAreaProps {
    type: string;
    name: keyof FormFields;
    errorMessage?: string;
    control: Control<FormFields>;
}

const TextArea: React.FC<TextAreaProps> = ({type, name, errorMessage, control, ...rest}) => {
    return (
        <>
            <TextField>
                <LabelText>{type}</LabelText>
                <Controller
                        name={name}
                        control={control}
                        render={({ field: {value, onChange} }) => (<textarea value={value} onChange={onChange} {...rest} />)}
                />
            </TextField>
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    )
}

export { Input, TextArea }