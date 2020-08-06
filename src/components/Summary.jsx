import React from 'react';
import styled from '@emotion/styled';
import { firstUpperCase } from '../helpers';

const ContainerSummary = styled.div`
    background-color: #00838F;
    padding: 1rem;
    text-align: center;
    color: #FFF;
    margin-top: 1rem;
`;


const Summary = ({data}) => {

    const {brand, year, plan} = data;

    if (brand === '' || year === '' || plan === '') return null;

    return ( 
        <ContainerSummary>
            <h1>Resumen de contización</h1>
            <ul>
                <li>Marca: {firstUpperCase(brand)}</li>
                <li>Tipo de seguro: {firstUpperCase(plan)}</li>
                <li>Año: {year}</li>
            </ul>
        </ContainerSummary>
     );
}
 
export default Summary;