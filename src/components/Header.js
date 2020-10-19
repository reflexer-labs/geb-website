import React, { useState } from "react"
import styled from "styled-components"
import Brand from "./ui/Brand"
import NavLinks from "./ui/NavLinks"
import SideMenu from "./ui/SideMenu"

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  return (
    <Container>
      <Left>
        <Brand />
      </Left>
      <HideMobile>
        <NavLinks />
      </HideMobile>
      <RightSide>
        <MenuBtn onClick={() => setIsSideMenuOpen(true)}>
          <RectContainer>
            <Rect />
            <Rect />
            <Rect />
          </RectContainer>
        </MenuBtn>
      </RightSide>
      <SideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  height: 68px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 0px #eef3f9;
  padding: 0 40px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.background};
  ${({ theme }) => theme.mediaWidth.upToSmall`
     padding: 0 20px;
  `}
`

const MenuBtn = styled.div`
  margin-right: -20px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  display: none;
  border-left: 1px solid ${props => props.theme.colors.border};
  cursor: pointer;
  &:hover {
    div {
      div {
        background: ${props => props.theme.colors.gradient};
      }
    }
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: flex;
  `}
`

const RectContainer = styled.div``

const Rect = styled.div`
  width: 15px;
  border-radius: 12px;
  height: 3px;
  margin-bottom: 2px;
  background: ${props => props.theme.colors.secondary};
  transition: all 0.3s ease;
  &:last-child {
    margin-bottom: 0;
  }
`

const RightSide = styled.div`
  display: flex;
  align-items: center;
  min-width: 194px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   min-width:auto;
  `}
`

const HideMobile = styled.div`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `}
`

const Left = styled.div`
  min-width: 194px;
  display: flex;
  align-items: center;
`
