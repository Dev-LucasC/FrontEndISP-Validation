import styled from 'styled-components'

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    Button {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        margin-top: 1.125rem;
        height: 24px;
        width: 100px;
        color:#FFFFFF;
        background: linear-gradient(180deg, #FE904C 0%, #FF7017 100%);
        border-radius: 3.5px;
        box-shadow: 0px 1.36px 1.36px 0px #000000 15%;

        transition: all .4s ease-in-out;
        cursor: pointer;

        &:hover {
            opacity: .7;
        }

        @media (min-width: 1200px) {
        width: 150px;
        height: 35px;
        box-shadow: 0px 2.05px 2.05px 0px #00000026;

    }
}
`