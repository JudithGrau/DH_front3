import styled from "styled-components";


export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    align-items: center;
    justify-content: space-between;
    max-height: 400px;
    border: 2px solid #3a9111;
    border-radius: 15px;
    padding: 10px;
    & > img {
        width: 200px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`


export const Button = styled.button`
    border: 2px solid ${({main}) => main ? '#53bd23' : '#e5dd0d'};
    border-radius: 15px;
    font-size: 1.5rem;
    padding: 5px 10px;
    background-color: ${({main}) => main ? '#e5dd0d' : '#53bd23'};
    color: white;
`