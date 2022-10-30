import React from "react"
import useStats from "../hooks/useStats"
import styled from "styled-components"
import { formatNumber } from "../utils/helper"

const StatsSection = () => {
  const {
    pRate,
    iRate,
    currentPrice,
    redemptionPrice,
    currentRedemptionRate,
  } = useStats()

  const stats = [
    { name: "Market Price", value: currentPrice ? currentPrice + " USD" : "-" },
    {
      name: "Redemption Price",
      value: redemptionPrice ? redemptionPrice + " USD" : "-",
    },
    {
      name: "Redemption Rate",
      value: currentRedemptionRate ? currentRedemptionRate + "%" : "-",
    },
    {
      name: "pRate",
      value: pRate ? formatNumber(pRate.toString(), 3) + "%" : "-",
    },
    {
      name: "iRate",
      value: iRate ? formatNumber(iRate.toString(), 3) + "%" : "-",
    },
  ]
  return (
    <Container>
      <Content className="wow fadeInUp" data-wow-delay="0.1s">
        <Title>
          <span>Money</span> God Stats
        </Title>
        <Row>
          {stats.map(stat => (
            <Col key={stat.name}>
              <ColInner>
                <p>{stat.name}</p>
                <h3>{stat.value}</h3>
              </ColInner>
            </Col>
          ))}
        </Row>
      </Content>
    </Container>
  )
}

export default StatsSection

const Container = styled.div`
  padding: 4rem 15px 5rem;
  background: ${props => props.theme.colors.background};
  ${({ theme }) => theme.mediaWidth.upToMedium`
   padding:3rem 1rem 2rem;
`}
`

const Content = styled.div`
  max-width: 80vw;
  border-radius: 28px;
  margin: 0 auto;
  position: relative;
`
const Title = styled.div`
  color: ${props => props.theme.colors.neutral};
  font-size: 50px;
  font-weight: 600;
  font-family: "Inter-Medium";
  text-align: center;
  span {
    color: ${props => props.theme.colors.blueish};
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 25px;
  `}
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 80px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`

const Col = styled.div`
  flex: 0 0 32.3%;
  @media (max-width: 991px) {
    flex: 0 0 100%;
    min-width: 100%;
  }
`
const ColInner = styled.div`
  position: relative;
  padding: 20px;
  background: ${props => props.theme.colors.foreground};
  border-radius: ${props => props.theme.global.borderRadius};
  text-align: center;
  p {
    color: ${props => props.theme.colors.customSecondary};
  }
  h3 {
    font-family: "Montserrat", sans-serif;
    color: ${props => props.theme.colors.neutral};
    font-size: 25px;
  }
  &.mid {
    margin: 20px 0;
  }
  &.table {
    > div {
      align-items: center;
      flex-direction: row !important;
    }
    &.table-head {
      background: transparent;
      font-style: italic;
      position: absolute;
      width: 100%;
      top: 40px;
      z-index: 3;
      right: 0px;
      padding: 0 50px;

      .tableCell {
        color: #046772;
        font-family: inherit;
      }
      .inner {
        background: transparent;
      }
      @media (max-width: 991px) {
        top: 20px;
        padding: 0 30px;
      }
    }
  }
`
