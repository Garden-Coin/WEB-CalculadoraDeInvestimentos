"use client"

import React, { useEffect, useState } from 'react'
import * as S from './styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { SimulationResponse } from '@/app/interfaces/simulation';

const Result = (props: {result?: SimulationResponse}) => {
    const calculateRealProfitability = () => {
        if(props.result?.finalValue !== undefined && props.result?.initialValue !== undefined) {
            return (parseFloat(props.result?.finalValue.toString()) - parseFloat(props.result.initialValue.toString())).toFixed(2);
        }
    }
    return(
        <S.ResultBody>
            <S.Titulo> Resultado </S.Titulo>
            <S.Content>
                <S.ContentLine >
                    <Card id="InvestingTotalValue" className='me-2'>
                        <Card.Body>
                            <Card.Title className='fs-6 fw-bold text-center'>Total Investido</Card.Title>
                            <Card.Text className='fs-4 fw-bold text-center'>
                                R$ {props.result?.initialValue}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card id="RealProfitability" className='ms-2'>
                        <Card.Body>
                            <Card.Title className='fs-6 fw-bold text-center text-primary'>Total em Juros</Card.Title>
                            <Card.Text className='fs-4 fw-bold text-center text-primary'>
                                R$ {calculateRealProfitability()}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </S.ContentLine>

                <Card id="FinalValue" >
                    <Card.Body >
                        <Card.Title className='fs-5 fw-bold text-center text-success'>Valor total final</Card.Title>
                        <Card.Text className='fs-3 fw-bold text-center text-success'>
                            R$ {props.result?.finalValue}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </S.Content>
        </S.ResultBody>
        )
}

export default Result;