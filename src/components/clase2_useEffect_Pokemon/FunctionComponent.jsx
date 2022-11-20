import React, { useState, useEffect } from "react";
import axios from "axios"
import { Button, ButtonContainer, CardContainer } from '../style'

const FunctionComponent = () => {
    const [index, setIndex] = useState(1);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then(res => setCharacter(res.data))
        .catch(err => console.log(err))
    }, [index])

    const incrementCount = (e) => {
        switch (e.target.innerText){
            case 'NEXT':
                setIndex(prev => prev === 905 ? 1 : prev + 1);
                break;
            default:
            case 'PREV':
                setIndex(prev => prev === 1 ? 905 : prev - 1);
                break;
        }
    }

    return (
        <CardContainer>
            <img src={character?.sprites.other["official-artwork"].front_default} alt={character?.name} />
            <h1>{character?.name}</h1>
            <ButtonContainer>
                <Button onClick={incrementCount}>PREV</Button>
                <Button onClick={incrementCount} main={true}>NEXT</Button>
            </ButtonContainer>
        </CardContainer>
    )
}

export default FunctionComponent