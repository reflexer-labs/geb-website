import React from "react"
import styled from "styled-components"
import NavLinks from "./NavLinks"

const SideMenu = ({ isOpen, setIsOpen }) => {
  return isOpen ? (
    <Container>
      <Inner>
        <Overlay onClick={() => setIsOpen(false)} />

        <InnerContainer>
          <AccountBalance>
            <ConnectBtnContainer>
              <Icon src={"/img/LogoIcon.png"} />
              <Title>Welcome to Reflexer</Title>
            </ConnectBtnContainer>
          </AccountBalance>
          <NavLinks />
        </InnerContainer>
      </Inner>
    </Container>
  ) : null
}

export default SideMenu

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 997;
  overflow-y: auto;

  &.fade-appear {
    opacity: 0;
  }
  &.fade-appear-active {
    opacity: 1;
    transition: all 300ms;
  }
`

const Inner = styled.div`
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`

const InnerContainer = styled.div`
  min-height: 100vh;
  width: calc(100% - 50px);
  background: ${props => props.theme.colors.background};
  padding-bottom: 1rem;
  position: relative;
  z-index: 2;
  margin-left: auto;
`

const ConnectBtnContainer = styled.div`
  text-align: center;
  width: 100%;
`

const AccountBalance = styled.div`
  padding: 30px 20px 20px 25px;
  margin-bottom: 15px;
`

const Icon = styled.img`
  max-width: 60px;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`
