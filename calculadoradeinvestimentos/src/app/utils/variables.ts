import { SimulationResponse } from "../interfaces/interfaces";

export const passData = (data: SimulationResponse) => {
    ObjetoTeste = data;
}

export let ObjetoTeste: SimulationResponse = {
    finalValue: 0,
    initialValue: 0,
    period: 0,
    profitability: 0,
    profitabilityType: 0,
    realProfitability: 0
};
