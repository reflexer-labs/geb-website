import React from "react"
import styled from "styled-components"
import LinkButton from "./ui/LinkButton"

const InfoBoxes = () => {
  return (
    <Container>
      <Content>
        <Box className="wow fadeInLeft">
          <InnerBox className="animated-rai">
            <div>
              <SVGBox>
                <svg viewBox="0 0 600 300">
                  <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="50%" dy=".35em">
                      RAI?
                    </text>
                  </symbol>

                  <use xlinkHref="#s-text" className="text"></use>
                  <use xlinkHref="#s-text" className="text"></use>
                  <use xlinkHref="#s-text" className="text"></use>
                  <use xlinkHref="#s-text" className="text"></use>
                  <use xlinkHref="#s-text" className="text"></use>
                </svg>
              </SVGBox>
              <p>
                RAI is an ETH backed stable asset. You can use it to take out
                loans against your ETH at a small interest rate
              </p>
            </div>
            <LinkButton
              text={"Take a loan"}
              url="https://app.reflexer.finance/"
              isExternal
              withArrow
            />
          </InnerBox>
        </Box>
        <Box className="wow fadeInRight">
          <InnerBox className="hasBg">
            <div>
              <h3>
                Developer <br /> Documentation
              </h3>
              <p>Build dApps using a true decentralized stablecoin</p>
            </div>
            <LinkButton
              text={"React the Docs"}
              url="https://docs.reflexer.finance/"
              isExternal
              withArrow
            />
          </InnerBox>
        </Box>
      </Content>
      <Content
        style={{ padding: "20px 15px" }}
        className="wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <Col>
          <Inner>
            <Heading>
              <Main>TVL</Main>
              <Side>
                <div>$150</div>Million
              </Side>
            </Heading>
            <p>This is the total value of the ETH locked in the RAI protocol</p>

            <LinkButton
              text={"View RAI stats"}
              url="https://stats.reflexer.finance/"
              isExternal
              withArrow
            />
          </Inner>
        </Col>
        <Col className="dashed">
          <Inner>
            <Heading>
              <Main>24</Main>
              <Side>
                <div>KNOWN</div>PROJECTS
              </Side>
            </Heading>
            <p>These are projects and interfaces that accept RAI</p>

            <LinkButton text={"Take a look"} url="/integrations" withArrow />
          </Inner>
        </Col>
      </Content>
    </Container>
  )
}

export default InfoBoxes

const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  ${({ theme }) => theme.mediaWidth.upToMedium`
   flex-direction:column;
   max-width: 100%;
`}
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaWidth.upToMedium`
   flex-direction:column;
`}
`

const InnerBox = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  height: 100%;
  > div {
    flex-grow: 1;
  }
  a {
    margin-top: 20px;
    align-self: flex-start;
    span {
      flex-grow: 1;
      text-align: center;
    }
  }

  &.hasBg {
    background: url("/docs-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  &.animated-rai {
    background: #05284c;
    p {
      max-width: 80%;
      text-align: center;
      margin: 0 auto;
    }
    a {
      background: #d9960a;
      color: #040c20;
      margin: 20px auto 0;
    }
  }
  border-radius: 25px;
`

const Box = styled.div`
  flex: 0 0 50%;
  min-height: 100%;
  padding: 15px;

  h3 {
    font-size: 2.5rem;
    color: white;
    margin: 0;
    ${({ theme }) => theme.mediaWidth.upToSmall`
   font-size: 2rem;
`}
  }
  p {
    max-width: 60%;
    color: white;
    font-size: 13px;
    line-height: 1.2rem;
  }
  a {
    min-width: 160px;
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex: 0 0 100%;
    min-width:100%;
`}
`

const SVGBox = styled.div`
  svg {
    width: 60%;
    margin: 0 auto;
    display: block;
    text-transform: uppercase;
  }
  font: 800 14.5em/1 "Open Sans";

  .text {
    fill: none;
    stroke-width: 6;
    stroke-linejoin: round;
    stroke-dasharray: 70 330;
    stroke-dashoffset: 0;
    -webkit-animation: stroke 6s infinite linear;
    animation: stroke 6s infinite linear;
  }
  .text:nth-child(5n + 1) {
    stroke: #f2385a;
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }
  .text:nth-child(5n + 2) {
    stroke: #f5a503;
    -webkit-animation-delay: -2.4s;
    animation-delay: -2.4s;
  }
  .text:nth-child(5n + 3) {
    stroke: #e9f1df;
    -webkit-animation-delay: -3.6s;
    animation-delay: -3.6s;
  }
  .text:nth-child(5n + 4) {
    stroke: #56d9cd;
    -webkit-animation-delay: -4.8s;
    animation-delay: -4.8s;
  }
  .text:nth-child(5n + 5) {
    stroke: #3aa1bf;
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
  }

  @-webkit-keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
  @keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Main = styled.div`
  font-family: "unicode_impact";
  font-size: 100px;
`
const Side = styled.div`
  font-style: italic;
  color: white;
  font-size: 40px;
  line-height: 40px;
  font-weight: 900;
  font-family: "Inter-Medium";
  div {
    color: ${props => props.theme.colors.background};
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size:35px;
`}
`

const Inner = styled.div`
  position: relative;
  z-index: 3;
`

const Col = styled.div`
  flex: 0 0 50%;
  background: ${props => props.theme.colors.blueish};
  border-radius: 25px 0 0 25px;
  padding: 40px;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: 100px;
    height: 100%;
    top: 0;
    right: 0px;
    background: ${props => props.theme.colors.blueish};
    transform: skew(-15deg);
    transform-origin: bottom left;
    z-index: 1;
  }
  a {
    margin: 20px auto 0;
    max-width: 190px;
    font-size: 17px;
    background: ${props => props.theme.colors.background};
    span {
      flex-grow: 1;
      text-align: center;
    }
  }
  p {
    color: white;
  }
  ${Main} {
    color: ${props => props.theme.colors.background};
  }
  &.dashed {
    border: 4px dashed ${props => props.theme.colors.blueish};
    background: ${props => props.theme.colors.background};
    border-radius: 0 25px 25px 0;
    a {
      background: ${props => props.theme.colors.blueish};
    }
    &:before {
      display: none;
    }
    ${Main} {
      color: ${props => props.theme.colors.blueish};
    }
    ${Side} {
      div {
        color: ${props => props.theme.colors.blueish};
        letter-spacing: 2px;
      }
      ${({ theme }) => theme.mediaWidth.upToExtraSmall`
          font-size:30px;
      `}
    }
  }
  @media (min-width: 1024px) {
    p {
      max-width: 60%;
      text-align: center;
      margin: 10px auto 0;
    }
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    &:before {
        display:none; 
    }
    border-radius:25px !important;
    &:last-child {
        margin-top:35px;
    }
    p {
        max-width:80%;
        margin:0 auto;
    }
`}
`
