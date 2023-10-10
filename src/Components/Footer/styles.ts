import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(180deg, #63B2BB, #E07D2594);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 680px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    @media only screen and (min-width: 768px) {
        min-height: 340px;
    }

    @media only screen and (min-width: 1200px) {
        min-height: 600px;
    }
`

export const ContainerGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 100px;
    }

    @media (min-width: 1200px) {
        margin-bottom: 40px;
    }
`

export const ContainerGrid1 = styled.div`
    @media only screen and (min-width: 768px) {
        grid-column-start: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export const ContainerGrid2 = styled.div`
    @media only screen and (min-width: 768px) {
        grid-column-start: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export const TitleWhite = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 28px;
    color: #FFFFFF;
    margin-bottom: 15px;

    @media (min-width: 992px) {
        font-size: 36px;
    }

    @media (min-width: 1200px) {
        font-size: 42px;
    }
`

export const Text = styled.p`
    font-size: 16px;
    text-align: center;
    margin-bottom: 10px;

    @media (min-width: 1200px) {
        font-size: 24px;
    }
`

export const FooterText = styled.p`
    font-size: 8px;
    position: absolute;
    bottom: 12px;

    @media (min-width: 992px) {
        font-size: 12px;
    }

    @media (min-width: 1200px) {
        font-size: 18px;
    }
    
`