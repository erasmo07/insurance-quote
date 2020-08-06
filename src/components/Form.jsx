import React, {useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


import {
    calculateDiferentYear,
    calculateByBrand,
    calculateTyple } from '../helpers';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1pk solid #e1e1e1;
    --webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: backound-color .3s ease; 
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;


const Form = ({setResult}) => {
    const actualYear = new Date().getFullYear();
    const years = Array.from(Array(10), (_, i) => actualYear - i);

    const [data, setData] = useState({
        brand: '', year: '', plan: ''
    });

    const [error, setError] = useState(false);

    const handleChange = e => {
        setData({
            ...data, [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {brand, plan, year} = data;
        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        let baseAmount = 2000;

        const diferentYear = calculateDiferentYear(year);

        baseAmount -= ((diferentYear * 3) * baseAmount) / 100;
        baseAmount = calculateByBrand(brand) * baseAmount;

        let incremento = calculateTyple(plan)
        let quotation = parseFloat(baseAmount * incremento).toFixed(2);
        setResult({quotation, data})
    }

    return ( 
        <form onSubmit={handleSubmit}>
            {error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Field>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={data.brand}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccionar --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Field>
            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={data.year}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccionar --</option>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value='basic'
                    checked={data.plan === 'basic'}
                    onChange={handleChange}
                />Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value='full'
                    checked={data.plan === 'full'}
                    onChange={handleChange}
                    />Completo
            </Field>
            <Button typ='submit'>Cotizar</Button>
        </form>
     );
}

Form.propTypes = {
    setResult: PropTypes.func.isRequired
}
 
export default Form;