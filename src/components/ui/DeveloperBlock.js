import React from "react"
import styled from "styled-components"
import { ExternalLinkArrow } from "../../styles/GlobalStyle"
import getPrefixedPath from "../../utils/getPrefixPath"

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
              View Program <img src={getPrefixedPath("/arrow.svg")} alt="" />
            </Link>
          </Col>
          <Col>
            <ImgContainer>
              <img src={getPrefixedPath("/placeholder.png")} alt="" />
            </ImgContainer>
          </Col>
        </Row>
      </SplitBlocks>
    </Container>
  )
}

export default DeveloperBlock

const Container = styled.div`
  padding: 160px 0;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   padding: 80px 0;
  `}
`
const SplitBlocks = styled.div`
  max-width: 1280px;
  padding: 0 30px;
  margin: 0 auto;
`
const Row = styled.div`
  margin: 0 -30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Col = styled.div`
  padding: 0 20px;
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
    margin-bottom:40px; 
  `}
`

const Title = styled.div`
  font-size: 48px;
  font-weight: 600;
  font-family: "Inter-Medium";
  color: ${props => props.theme.colors.primary};
  letter-spacing: -0.33px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 32px;
    text-align:center;
  `}
`

const Text = styled.div`
  font-size: ${props => props.theme.font.default};
  color: ${props => props.theme.colors.secondary};
  line-height: 24px;
  letter-spacing: -0.18px;
  margin-top: 20px;
  margin-bottom: 20px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  font-size: ${props => props.theme.font.default};
  `}
`
const Link = styled.a`
  ${ExternalLinkArrow}
`
