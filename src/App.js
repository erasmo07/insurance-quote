import React, { useState } from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  const [result, setResult] = useState({
    quotation: '',
    data: {
      brand: '', year: '', type: ''
    }
  });

  return (
    <Container>
      <Header title='Cotizador de seguros'/>
      <ContainerForm>
        <Form setResult={setResult}/>
        <Summary data={result.data}/>
      </ContainerForm>
    </Container>
  );
}

export default App;
