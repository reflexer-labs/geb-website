import React from "react"
import styled from "styled-components"
import { ExternalLinkArrow } from "../../styles/GlobalStyle"

const DeveloperBlock = () => {
  return (
    <Container>
      <SplitBlocks>
        <Row>
          <Col className="left">
            <Title>
              Developer
              <br />
              Documentation
            </Title>
            <Text>
              Vel, malesuada dis quam morbi sit. Lorem a luctus mauris odio
              risus. Et neque molestie etiam nullam facilisi volutpat amet.
              Velit nulla fringilla mollis dui, amet. Tristique consectetur
              lorem laoreet enim. Enim, aliquet scelerisque cursus scelerisque
              cursus. Tortor a lacinia egestas quis venenatis dictum est.
            </Text>
            <Link href={"/"}>
              View Program <img src={"/img/arrow.svg"} alt="" />
            </Link>
          </Col>
          <Col>
            <ImgContainer>
              <img src={"/img/placeholder.png"} alt="" />
            </ImgContainer>
          </Col>
        </Row>
      </SplitBlocks>
    </Container>
  )
}

export default DeveloperBlock

const Container = styled.div`
  padding: 80px 20px;
`
const SplitBlocks = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`
const Row = styled.div`
  margin: 0 -10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Col = styled.div`
  padding: 0 10px;
  flex: 0 0 50%;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  flex: 0 0 100%;
  &.left {
      order:1;
  }
  `}
`

const ImgContainer = styled.div`
  border: 1px dashed #d7d7d7;
  img {
    width: 100%;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-bottom:30px; 
  `}
`

const Title = styled.div`
  font-size: 48px;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  letter-spacing: -0.33px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 32px;
    text-align:center;
  `}
`

const Text = styled.div`
  font-size: ${props => props.theme.font.small};
  color: ${props => props.theme.colors.secondary};
  line-height: 24px;
  letter-spacing: -0.18px;
  margin-top: 20px;
  margin-bottom: 20px;
`
const Link = styled.a`
  ${ExternalLinkArrow}
`
