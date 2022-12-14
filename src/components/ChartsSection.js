import React, { useState } from "react"
import styled from "styled-components"
import Dropdown from "./ui/Dropdown"
import Modal from "./ui/Modal"

const Buttons = [
  "RAI History: last 180 days",
  "Extrapolation: Constant market price",
  "Extrapolation: Immediate Convergence",
  "Extrapolation: Convergence after 2 weeks",
  "Extrapolation: Constant Error",
  "Extrapolation: Zero Rates",
  "Extrapolation: Overcorrection",
  "Extrapolation: Overcorrection plus constant error",
  "Extrapolation: Compined",
]
const Images = [
  "https://reflexer-labs.github.io/geb-data-science/controller/output/controller_monitoring_small.png",
  "https://reflexer-labs.github.io/geb-data-science/controller/output/extrapolation_constant_market_small.png",
  "https://reflexer-labs.github.io/geb-data-science/controller/output/extrapolation_constant_convergence_small.png",
  "https://reflexer-labs.github.io/geb-data-science/controller/output/extrapolation_constant_convergence_2w_rates_small.png",
  "https://reflexer-labs.github.io/geb-data-science/controller/output/extrapolation_constant_market_error.png",
  "https://reflexer-labs.github.io/geb-data-science/controller/output/extrapolation_zero_rates_small.png",
  "https://reflexer-labs.github.io/geb-data-science/controller/output/controller_extrapolation_1_steps_small.png",
  "https://reflexer-labs.github.io/geb-data-science/controller/output/extrapolation_constant_overcorrection_small.png",
  "https://reflexer-labs.github.io/geb-data-science/controller/output/extrapolation_all.png",
]

const ChartsSection = () => {
  const [index, setIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  return (
    <Container>
      <div style={{ display: "none" }}>
        {Images.map(img => (
          <img key={img} src={img} alt={img} />
        ))}
      </div>
      {showModal ? (
        <Modal img={Images[index]} setIsShowModal={setShowModal} />
      ) : null}
      <Content className="wow fadeInUp" data-wow-delay="0.1s">
        <Title>
          <span>Money</span> God Guidance
        </Title>
        <Row>
          <Col className="fourty">
            <BtnBlock>
              {Buttons.map((btn, i) => {
                return (
                  <Button
                    key={btn}
                    className={index === i ? "active" : ""}
                    onClick={() => {
                      setIndex(i)
                    }}
                  >
                    {btn}
                  </Button>
                )
              })}
            </BtnBlock>

            <DropdownContainer>
              <Dropdown
                width="100%"
                items={Buttons}
                itemSelected={Buttons[0]}
                getSelectedItem={item => {
                  setIndex(Buttons.findIndex(x => x === item))
                }}
              />
            </DropdownContainer>
          </Col>
          <Col>
            <ImgContainer>
              <Inner onClick={() => setShowModal(true)}>
                <img src={Images[index]} alt={Buttons[index]} />
              </Inner>
            </ImgContainer>
          </Col>
        </Row>
      </Content>
    </Container>
  )
}

export default ChartsSection

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
  margin: 0 auto 100px;
  position: relative;

  img {
    border-radius: 28px;
    width: 100%;
  }
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
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  @media (max-width: 767px) {
    margin-top: 50px;
  }
`

const Col = styled.div`
  flex: 0 0 56%;
  &.fourty {
    flex: 0 0 40%;
    @media (max-width: 991px) {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 991px) {
    flex: 0 0 100%;
  }
`
const BtnBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    display: none;
  }
`
const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  font-size: 18px;
  box-shadow: none;
  border-radius: 50px;
  border: 1px solid #08223e;
  background: #05284c;
  color: ${props => props.theme.colors.secondary};
  transition: all 0.3s ease;
  width: fit-content;
  margin: 5px 0;
  &:hover {
    border: 1px solid #05284c;
    background: #08223e;
  }
  &.active {
    background: ${props => props.theme.colors.blueish};
    color: ${props => props.theme.colors.neutral};
    &:hover {
      background: ${props => props.theme.colors.blueish};
      color: ${props => props.theme.colors.neutral};
    }
  }
  @media (max-width: 991px) {
    font-size: 14px;
    margin-right: 5px;
  }
`

const ImgContainer = styled.div`
  padding: 20px;
  border-radius: 15px;
  background: #05284c;
  color: ${props => props.theme.colors.secondary};
`

const Inner = styled.div`
  background: #fff;
  padding: 20px 0;
  cursor: pointer;
  img {
    width: 100%;
  }
`

const DropdownContainer = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    width: 80vw;
    z-index: 100;
  }
`
