import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 220px;
    height: 24px;
    margin-bottom: 34px;

    @media (min-width: 1200px) {
        width: 350px;
        height: 40px;
        margin-bottom: 42px;
    }

    input {
        width: 220px;
        height: 24px;
        margin-top: 2px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: 0px 1.16px 1.16px 0px #525252 25%;

        @media (min-width: 1200px) {
            width: 350px;
            height: 40px;
            margin-top: 2px;
            border-radius: 5px;
            box-shadow: 0px 2px 2px 0px #52525240;
        }
    }
`

export const TextField = styled.div`
    width: 220px;
    height: 48px;
    margin-bottom: 34px;

    @media (min-width: 1200px) {
        width: 350px;
        height: 80px;
        margin-bottom: 42px;
    }

    textarea {
        width: 220px;
        padding: 5px;
        height: 48px;
        margin-top: 2px;
        resize: none;
        border-radius: 3px;
        box-shadow: 0px 1.16px 1.16px 0px #52525240;

        @media (min-width: 1200px) {
            width: 350px;
            height: 80px;
            margin-top: 2px;
            border-radius: 5px;
            box-shadow: 0px 2px 2px 0px #52525240;
        }
    }
`

export const LabelText = styled.label`
    font-size: 12px;

        @media (min-width: 1200px) {
            font-size: 18px;
        }

`

export const ErrorText = styled.p`
    color: #DC143C;
    font-size: 11px;
    margin-left: 8px;
    margin-bottom: 8px;
    margin-top: -12px;

    @media (min-width: 1200px) {
        font-size: 12px;
    }
`