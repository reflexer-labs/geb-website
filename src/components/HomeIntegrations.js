import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import useRaiUse from "../hooks/useRaiUse"

const SVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <line className="top" x1="0" y1="0" x2="900" y2="0" />
    <line className="left" x1="0" y1="420" x2="0" y2="-840" />
    <line className="bottom" x1="300" y1="420" x2="-600" y2="420" />
    <line className="right" x1="300" y1="0" x2="300" y2="1260" />
  </svg>
)
const HomeIntegrations = () => {
  const integrations = useRaiUse().slice(0, 3)
  return (
    <Container>
      <Inner>
        <Header>
          <div className="wow fadeInDown" data-wow-delay="0.2s">
            <HeaderLabel>Checkout our</HeaderLabel>
            <Title>Recent Integrations</Title>
            <Border></Border>
          </div>
          <Text className="wow fadeInLeft" data-wow-delay="0.4s">
            To find out the projects and interfaces that accept RAI, check out
            the <Link to="/faq">integrations page.</Link>
          </Text>
        </Header>

        <Content>
          {integrations.map((x, i) => {
            return (
              <a
                className={`customLink wow fadeInUp`}
                data-wow-delay={`${0.4 + (i + 1) * 0.3}s`}
                href={x.node.link.link}
                key={x.node.id}
                target="_blank"
                rel="noreferrer"
              >
                <div className="box">
                  <SVG />
                  <div className="int-image">
                    <img src={x.node.image.file.url} alt={x.node.title.title} />
                  </div>
                  <h3>{x.node.title.title}</h3>
                  <span>{x.node.content.content}</span>
                </div>
              </a>
            )
          })}
        </Content>
      </Inner>
    </Container>
  )
}

export default HomeIntegrations

const Container = styled.div`
  padding: 80px 0 60px 0;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   padding: 60px 0 60px 0;
  `};
`

const Inner = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  padding: 0 15px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
   flex-direction:column;
   max-width: 100%;
`}
`

const Header = styled.div`
  text-align: left;
`
const HeaderLabel = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.blueish};
`
const Border = styled.div`
  height: 1px;
  width: 40px;
  background: ${props => props.theme.colors.blueish};
`

const Title = styled.div`
  color: ${props => props.theme.colors.neutral};
  font-size: 50px;
  font-weight: 600;
  font-family: "Inter-Medium";
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 25px;
  `}
`

const Text = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: 14px;
  margin-top: 20px;
  a {
    color: ${props => props.theme.colors.blueish};
  }
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
  .customLink {
    color: inherit;
    text-decoration: none;
  }
  .box {
    width: 300px;
    height: 420px;
    position: relative;
    display: inline-block;
    margin: 0px 30px 20px;
    cursor: pointer;
    background: ${props => props.theme.colors.foreground};
    color: #2c3e50;
    padding: 20px;
    text-align: center;
    box-shadow: inset 0 0 0 3px #2c3e50;
    -webkit-transition: background 0.4s 0.5s;
    transition: background 0.4s 0.5s;

    @media (max-width: 1150px) and (min-width: 1024px) {
      margin: 0px 5px 20px;
    }

    @media (max-width: 500px) {
      margin: 0 0 20px;
    }
  }

  .box:hover {
    background: rgba(255, 255, 255, 0);
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }

  .box span {
    display: block;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 15px;
    padding: 5px;
    line-height: 23px;
  }

  .box h3 {
    font-weight: bold;
    font-family: "inter-medium";
  }

  .box h3,
  .box span {
    -webkit-transition: color 0.4s 0.5s;
    transition: color 0.4s 0.5s;
  }

  .box:hover h3,
  .box:hover span {
    color: #fff;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }

  .box svg {
    position: absolute;
    top: 0;
    left: 0;
    fill: blue;
  }

  .box svg line {
    stroke-width: 3;
    stroke: ${props => props.theme.colors.foreground};
    fill: none;
    -webkit-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;
  }

  .box:hover svg line {
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
    stroke: ${props => props.theme.colors.blueish};
  }

  .box svg line.top,
  .box svg line.bottom {
    stroke-dasharray: 330 240;
  }

  .box svg line.left,
  .box svg line.right {
    stroke-dasharray: 455 350;
  }

  /* Frame */
  .box {
    color: #fff;
    box-shadow: none;
    -webkit-transition: background 0.3s;
    transition: background 0.3s;
  }

  .box:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  .box h3,
  .box span {
    -webkit-transition: none;
    transition: none;
  }

  .box svg line {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .box:hover svg line {
    stroke-width: 10;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }

  .box:hover svg line.top {
    -webkit-transform: translateX(-300px);
    transform: translateX(-300px);
  }

  .box:hover svg line.bottom {
    -webkit-transform: translateX(300px);
    transform: translateX(300px);
  }

  .box:hover svg line.left {
    -webkit-transform: translateY(420px);
    transform: translateY(420px);
  }

  .box:hover svg line.right {
    -webkit-transform: translateY(-420px);
    transform: translateY(-420px);
  }

  .int-image {
    width: 175px;
    height: 175px;
    margin: 20px auto 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 120px;
      height: 120px;
    }
  }
`
