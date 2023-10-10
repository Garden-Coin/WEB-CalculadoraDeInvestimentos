"use client"

import React from 'react'
import * as S from './styled';
import { Button, ButtonGroup, ButtonToolbar, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Calculator() {
    return (
        <S.CalculatorBody>
            <S.Titulo> Calculadora - Juros Compostos</S.Titulo>
            <S.Content>
                <div className="w-100 d-flex flex-row">
                    <Form.Group className="me-4 w-50">
                        <Form.Label className="text-white" htmlFor="initialValue">Valor Inicial</Form.Label>
                        <InputGroup id="initialValue" className="mb-2">
                            <InputGroup.Text >R$</InputGroup.Text>
                            <Form.Control type='number' placeholder="00,00" aria-label="Text input with dropdown button" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="ms-2 w-50">
                        <Form.Label className="text-white" htmlFor="initialValue">Taxa de Juros</Form.Label>
                        <InputGroup id="taxes">
                            <InputGroup.Text >%</InputGroup.Text>
                            <Form.Control type='number' aria-label="Text input with dropdown button" />

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
                <div className="w-100 d-flex flex-row justify-content-around">
                    <Form.Group className="me-4 w-50">
                        <Form.Label className="text-white" htmlFor="periodValue">Aporte</Form.Label>
                        <InputGroup id="initialValue" className="mb-2">
                            <InputGroup.Text >R$</InputGroup.Text>
                            <Form.Control type='number' placeholder="00,00" aria-label="Text input with dropdown button" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="ms-2 w-50">
                        <Form.Label className="text-white" htmlFor="initialValue">Período</Form.Label>
                        <InputGroup id="period">
                            <Form.Control type='number' aria-label="Text input with dropdown button" />

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
                <div className='d-flex flex-row-reverse w-100'>
                    <S.Button> Simular</S.Button>

                </div>
            </S.Content>
        </S.CalculatorBody>
    )
}