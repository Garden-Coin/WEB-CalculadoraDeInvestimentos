export interface SimulationRequest { 
    period: number,
    profitability: number,
    profitabilityType: number,
    initialValue: number
}

export interface SimulationResponse {
    period: number,
    profitability: number,
    realProfitability: number,
    profitabilityType: number,
    initialValue: number,
    finalValue: number
}

export interface SimulationResponseProps {
    onObjectChange: (obj: any) => void;
}

export interface FormSimulationData {
    period: number,
    profitability: number,
    initialValue: number
}