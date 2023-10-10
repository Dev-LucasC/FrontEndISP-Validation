import styled from 'styled-components'

export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;

    @media (min-width: 1200px) {
        width: 390px;
        margin-top: 20px;
        gap: 24px;
    }
`

export const SocialIcons = styled.a`
    color: #F5F5F5;
    font-size: 32px;
    transition: .3s ease-in-out;

    &:hover {
        transform: scale(1.3);
    }

    @media (min-width: 1200px) {
        font-size: 42px;
    }
`