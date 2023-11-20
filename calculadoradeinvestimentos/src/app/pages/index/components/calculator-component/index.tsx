"use client"

import React, { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styled';
import { Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '@/app/services/api';
import { SimulationRequest, SimulationResponse, FormSimulationData, SimulationResponseProps } from '@/app/interfaces/interfaces';

const Calculator: React.FC<SimulationResponseProps> = ({onObjectChange}) =>  {
    const [result, setResult] = useState<SimulationResponse>();
    const [objForm, setObjForm] = useState<SimulationRequest>({
        period: 0,
        profitability: 0,
        profitabilityType: 0,
        initialValue: 0
    });
    
    useEffect(() => {
        console.log("Gerar novo calculo")
    }, [objForm]);

    useEffect(() => {
        console.log("Gerar novo calculo")
        onObjectChange(result);
    }, [result]);

    const passData = () => {
        let objSimular: SimulationRequest = {
            period: objForm.period,
            profitability: objForm.profitability,
            profitabilityType: 1,
            initialValue: objForm.initialValue
        }
        setObjForm(objSimular);

        console.log("Objeto para calcular: ", objForm);
        
        api.post('/simulacao/juros-compostos', objForm).then((response) => {
            const formattedResponse: SimulationResponse ={
                period: response.data.period,
                profitability: response.data.profiability,
                realProfitability: response.data.realProfiability,
                profitabilityType: response.data.profiabilityType,
                initialValue: response.data.initialValue,
                finalValue: response.data.finalValue
            }
            setResult(formattedResponse);
            console.log("Result", result)
            onObjectChange(result);
            
        });         
    };

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;

        setObjForm({ ...objForm, [id]: parseFloat(value) });        
    }

    return (
        <S.CalculatorBody>
            <S.Titulo> Calculadora - Juros Compostos</S.Titulo>
            <S.Content>
                <div className="w-100 d-flex flex-row">
                    <Form.Group className="me-4 w-50">
                        <Form.Label className="text-white" htmlFor="initialValue">Valor Inicial</Form.Label>
                        <InputGroup  className="mb-2">
                            <InputGroup.Text >R$</InputGroup.Text>
                            <Form.Control id="initialValue" onChange={handleInputChange} type='number' placeholder="00,00" aria-label="Text input with dropdown button" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="ms-2 w-50">
                        <Form.Label className="text-white" htmlFor="profitability">Taxa de Juros</Form.Label>
                        <InputGroup >
                            <InputGroup.Text >%</InputGroup.Text>
                            <Form.Control onChange={handleInputChange} id="profitability" type='number' aria-label="Text input with dropdown button" />
                            <DropdownButton
                                variant="outline-secondary"
                                title="Mensal"
                                id="input-group-dropdown-2"
                                align="end"
                            >
                                <Dropdown.Item href="#">Mensal</Dropdown.Item>
                                <Dropdown.Item href="#">Anual</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </Form.Group>
                </div>
                <div className="w-100 d-flex flex-row justify-content-around" >
                    <Form.Group className="me-4 w-50">
                        <Form.Label className="text-white" htmlFor="periodValue">Aporte</Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text >R$</InputGroup.Text>
                            <Form.Control onChange={handleInputChange} id="periodValue" type='number' placeholder="00,00" aria-label="Text input with dropdown button" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="ms-2 w-50">
                        <Form.Label className="text-white" htmlFor="period">Período</Form.Label>
                        <InputGroup >
                            <Form.Control onChange={handleInputChange} id="period" type='number' aria-label="Text input with dropdown button" />
                            <DropdownButton
                                variant="outline-secondary"
                                title="Mensal"
                                id="profitabilityType"
                                align="end"
                            >
                                <Dropdown.Item href="#">Mensal</Dropdown.Item>
                                <Dropdown.Item href="#">Anual</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </Form.Group>
                </div>
                <div className='d-flex flex-row-reverse w-100'>
                    <S.Button onClick={passData}> Simular</S.Button>
                </div>
            </S.Content>
        </S.CalculatorBody>
    )
}

export default Calculator;