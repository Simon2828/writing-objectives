import React from 'react';
import gif from '../../../src/gifs/charlie_brown.gif';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
const WellDone = () => (
  <>
    <Wrapper>
        <img src={gif} alt="Charlie Brown says good job!" />
    </Wrapper>
  </>
)

export default WellDone;