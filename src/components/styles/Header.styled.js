import styled from "styled-components";


export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
`

export const StyledHeader = styled.header`
    border: 1px solid black;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: Space-between;
    background: white;
`

export const Heading = styled.h1`
    display: flex;
    align-items: center;
    padding-left: 170px;
    font-family: 'Grand Hotel', cursive;
`

export const AllIcon = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
    padding-right: 200px;
`

export const IconContainer = styled.div`
    padding: 10px;
`

export const I = styled.i`
    font-size: 1.5rem;
    background: white;
`

export const Search = styled.input`
    padding: 8px;
    border-radius: 5px;
    outline: none;
    width: 250px;
    border: 1px solid #eee;
`