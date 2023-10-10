"use client"

import React from 'react'
import * as S from './styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

export default function Result() {
    return(
        <S.ResultBody>
            <S.Titulo> Resultado </S.Titulo>
            <S.Content>
                <S.ContentLine >
                    <Card id="InvestingTotalValue" className='me-2'>
                        <Card.Body>
                            <Card.Title className='fs-6 fw-bold text-center'>Total Investido</Card.Title>
                            <Card.Text className='fs-4 fw-bold text-center'>
                                R$ 246.640,67
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card id="InvestingTotalValue" className='ms-2'>
                        <Card.Body>
                            <Card.Title className='fs-6 fw-bold text-center text-primary'>Total em Juros</Card.Title>
                            <Card.Text className='fs-4 fw-bold text-center text-primary'>
                                R$ 96.409,49
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </S.ContentLine>

                <Card id="InvestingTotalValue" >
                    <Card.Body >
                        <Card.Title className='fs-5 fw-bold text-center text-success'>Valor total final</Card.Title>
                        <Card.Text className='fs-3 fw-bold text-center text-success'>
                            R$ 343.050,16
                        </Card.Text>
                    </Card.Body>
                </Card>
            </S.Content>
        </S.ResultBody>
        )
}