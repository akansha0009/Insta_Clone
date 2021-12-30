import React from 'react';
import styled from 'styled-components';
import FeedCard from './FeedCard';
import Story from './Story';
import Suggestions from './Suggestion';

const Container = styled.div`
    display: flex;
`

const Leftcontainer = styled.div`

`

const RightContainer = styled.div`
    height: 500px;
    width: 400px;
    margin: 5px;
`

function Card() {
    return (
      <Container>
          <Leftcontainer>
                <Story></Story>
                <FeedCard />
          </Leftcontainer>
          <RightContainer>
                <Suggestions>

                </Suggestions>
          </RightContainer>
      </Container>
    )
}

export default Card
