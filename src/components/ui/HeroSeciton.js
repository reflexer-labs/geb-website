import React from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import useHome from "../../hooks/useHome"
import getPrefixedPath from "../../utils/getPrefixPath"
import LinkButton from "./LinkButton"
import ReactTooltip from "react-tooltip"

const floatsAttr = {
  0: {
    style: { top: "-70%", left: "30%" },
    className: "wow fadeInUp",
    "data-wow-delay": "0.2s",
    href: "https://app.barnbridge.com/smart-yield/stats?m=aave/v2&t=RAI",
    target: "_blank",
    "data-tip": "Barnbridge",
  },
  1: {
    style: { top: "50px", left: "-20%" },
    className: "wow fadeInLeft",
    "data-wow-delay": "0.3s",
    href: "https://app.uniswap.org/#/pool",
    target: "_blank",
    "data-tip": "Uniswap",
  },
  2: {
    style: { bottom: "-70%", left: "20px" },
    className: "wow fadeInDown",
    "data-wow-delay": "0.4s",
    href: "https://beta.idle.finance/#/dashboard/best/RAI",
    target: "_blank",
    "data-tip": "Idle",
  },
  3: {
    style: { top: "-40%", right: "-20%" },
    className: "wow fadeInUp",
    "data-wow-delay": "0.5s",
    href:
      "https://app.sushi.com/lend/0xA7c3304462b169C71F8EdC894Ea9d32879Fb4823",
    target: "_blank",
    "data-tip": "SushiSwap",
  },
  4: {
    style: { top: "50%", right: "-30%" },
    className: "wow fadeInRight",
    "data-wow-delay": "0.6s",
    href: "https://app.aave.com/reserve-overview/RAI?pool=AaveV2",
    target: "_blank",
    "data-tip": "Aave",
  },
  5: {
    style: { bottom: "-50%", right: "-10%" },
    className: "wow fadeInDown",
    "data-wow-delay": "0.7s",
    href: "https://www.coinbase.com/",
    target: "_blank",
    "data-tip": "Coinbase",
  },
}

const HeroSeciton = () => {
  const { allContentfulHomeHero } = useHome()
  const homeHero = allContentfulHomeHero.edges.map(item => item.node)

  return (
    <Container>
      <Content>
        <Heading className="wow fadeInUp" data-wow-delay="0.1s">
          {homeHero[0].title}
        </Heading>
        <Text className="wow fadeInUp" data-wow-delay="0.3s">
          {documentToReactComponents(JSON.parse(homeHero[0].content.raw))}
        </Text>
        {Array.from({ length: 6 }).map((_x, i) => {
          return (
            <Int key={`intFloat` + i} {...floatsAttr[i]}>
              <img src={getPrefixedPath(`/float${i + 1}.svg`)} alt="" />
            </Int>
          )
        })}

        <BtnContainer>
          <LinkButton
            className="wow fadeInLeft"
            data-wow-delay="0.5s"
            text={"Mint RAI"}
            url="https://app.reflexer.finance"
            isExternal
            withArrow
          />
          <LinkButton
            className="wow fadeInRight"
            data-wow-delay="0.5s"
            text={"RAI Incentives"}
            url="https://app.reflexer.finance/#/earn/incentives"
            isExternal
            withArrow
          />
        </BtnContainer>
        <ReactTooltip multiline type="light" data-effect="float" place="top" />
      </Content>
    </Container>
  )
}

export default HeroSeciton

const Container = styled.div`
  min-height: calc(100vh);
  background: url(${getPrefixedPath("/mainbg.jpg")});
  background-size: cover;
  background-position: center;
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
  position: relative;
`

const Heading = styled.div`
  font-size: 58px;
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
    font-size:28px;
    line-height: 40px;
  `}
`

const Text = styled.div`
  color: ${props => props.theme.colors.neutral};
  font-size: 26px;
  max-width: 600px;
  line-height: 36px;
  margin-top: 20px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
 
    font-size: ${props => props.theme.font.default};
  `}
`

const Int = styled.a`
  position: absolute;
  text-decoration: none;
  color: inherit;
  img {
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }
  &:hover {
    img {
      border: 2px solid #41c1d0;
      border-radius: 50%;
    }
  }
  @media (max-width: 1024px) {
    position: static;
    margin: 0 7px;
    margin-top: 30px;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      img {
        max-width: 30px;
      }
  `}
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  a {
    font-size: 16px;
    min-width: 180px;
    margin: 0 10px;
    background: ${props => props.theme.colors.blueish};
    &:first-child {
      background: ${props => props.theme.colors.greenish};
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;

    a {
      margin-bottom: 20px;
      max-width: 180px;
    }
  }
`
