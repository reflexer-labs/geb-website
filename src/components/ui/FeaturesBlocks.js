import React from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import useHomeFeature from "../../hooks/useHomeFeature"
import { ExternalLinkArrow } from "../../styles/GlobalStyle"
import getPrefixedPath from "../../utils/getPrefixPath"

const FeaturesBlocks = () => {
  const homeFeature = useHomeFeature().map(item => item.node)

  return (
    <>
      {homeFeature.map(item => (
        <Container key={item.id}>
          <SplitBlocks>
            <Row>
              <Col className="left">
                <Title>{item.title}</Title>
                <Text>{documentToReactComponents(item.content.json)}</Text>
                <Link href={item.link.url} target="_blank">
                  {item.link.name}{" "}
                  <img src={getPrefixedPath("/arrow.svg")} alt="" />
                </Link>
              </Col>
              <Col>
                <ImgContainer>
                  <img src={item.image.file.url} alt={item.title} />
                </ImgContainer>
              </Col>
            </Row>
          </SplitBlocks>
        </Container>
      ))}
    </>
  )
}

export default FeaturesBlocks

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
  text-align: center;
  img {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    
    margin: 0 auto 40px auto;
  `}
`

const Title = styled.div`
  font-size: 38px;
  font-weight: 600;
  font-family: "Inter-Medium";
  color: ${props => props.theme.colors.primary};
  letter-spacing: -0.33px;
  max-width: 80%;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 25px;
    text-align:center;
    max-width:100%;
  `}
`

const Text = styled.div`
  font-size: 18px;
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

const Container = styled.div`
  padding: 160px 0;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   padding: 80px 0;
  `}
  background: ${props => props.theme.colors.foreground};
  &:nth-child(even) {
    background: ${props => props.theme.colors.neutral};
    ${Row} {
      ${Col} {
        &:first-child {
          order: 2;
        }
      }
    }
  }
`
