import styled from 'styled-components'

export const MapContainer = styled.div`
    width: 230px;
    margin: 20px auto 0px auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: center;
`

export const Maps = styled.div`
    margin-top: 30px;
    margin-bottom: 10px; 
    width: 230px;
    height: 6.25rem;
    display: flex;
    align-items: center;

    @media (min-width: 1200px) {
        width: 390px;
    }

    iframe {
        width: 230px;
        border: 0;

        @media (min-width: 1200px) {
        width: 390px;
    }
    }
`

export const MapText = styled.div`
    width: 230px;
    height: 96px;
    font-size: 10.5px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;

    @media (min-width: 1200px) {
        width: 390px;
        font-size: 16px;
        margin-top: 10px;
    }
`