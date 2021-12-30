import React from 'react'
import styled from 'styled-components'
import Stories from './Stories'
import { AllIcon, Heading, IconContainer, StyledHeader, I, Search, Container } from './styles/Header.styled'

const Profile = styled.div`
    height : 25px;
    width: 25px;
    border-radius: 50%;
    border: 1px solid gray;
    background: url('https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png') no-repeat center center/cover;
`

function Header() {
    return (
        <Container>                                             
            <StyledHeader>
                <Heading>Instagram</Heading>
                <Search placeholder='search'></Search>

                <AllIcon>
                    <IconContainer><I className="fa-solid fa-house"></I></IconContainer>
                    <IconContainer><I className="fa-brands fa-facebook-messenger"></I></IconContainer>
                    <IconContainer><I className="fa-regular fa-square-plus"></I></IconContainer>
                    <IconContainer><I className="fa-regular fa-compass"></I></IconContainer>
                    <IconContainer><I className="fa-regular fa-heart"></I></IconContainer>
                    <IconContainer><Profile /></IconContainer>
                </AllIcon>

            </StyledHeader>
        </Container>
    )
}

export default Header
