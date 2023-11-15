import styled from 'styled-components';

export const CalculatorBody = styled.div`
    width: 65%;
    height: 480px;
    background: #09131B;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-right: 2%;
`;

export const Titulo = styled.h1 `
    width: 90%;
    color: white;
`

export const Content = styled.div`
    width: 90%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.button`
    width: 15%;
    height: 2em;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    color: white;
    background-color: #E55F14;
    border: none;
    border-radius: 8px;
`