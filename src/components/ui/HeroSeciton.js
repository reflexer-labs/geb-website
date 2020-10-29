import React from "react"
import styled from "styled-components"

const HeroSeciton = () => {
  return (
    <Container>
      <Content>
        <Heading>Leverage ETH at Fixed Interest Rates</Heading>
        <Text>
          Fermentum sit egestas amet ornare cras. Et donec eu nulla egestas.
          Ornare vitae faucibus sit pellentesque tellus posuere potenti id.
        </Text>
      </Content>
    </Container>
  )
}

export default HeroSeciton

const Container = styled.div`
  min-height: calc(80vh);
  background: ${props => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  min-height:auto;
    display:block;
    padding:120px 0 170px 0;
  `}
`

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 20px;
`

const Heading = styled.div`
  font-size: 65px;
  font-weight: 600;
  font-family: "Inter-Medium";
  color: ${props => props.theme.colors.neutral};
  letter-spacing: -0.69px;
  line-height: 80px;
  font-style: italic;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size:50px;
    line-height: 60px;
  `}

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size:35px;
    line-height: 40px;
  `}
`

const Text = styled.div`
  color: ${props => props.theme.colors.neutral};
  font-size: ${props => props.theme.font.large};
  margin-top: 20px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
 
    font-size: ${props => props.theme.font.default};
  `}
`
