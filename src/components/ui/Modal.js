import React from "react"
import { X } from "react-feather"
import styled from "styled-components"

const Modal = ({ img, setIsShowModal }) => {
  return (
    <Container>
      <Inner>
        <ModalContent>
          <XContainer>
            <X size={25} color={"#fff"} onClick={() => setIsShowModal(false)} />
          </XContainer>
          <ImgContainer>
            <img src={img} alt={img} />
          </ImgContainer>
        </ModalContent>
      </Inner>
      <Overlay />
    </Container>
  )
}

export default Modal

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow-y: auto;
  overflow-x: hidden;
`
const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  padding: 50px 0;
  z-index: 2;
  @media (max-width: 767px) {
    padding: 50px 15px;
  }
`
const ModalContent = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: 15px;
  border: 1px solid #08223e;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
`

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const ImgContainer = styled.div`
  background: #fff;
  padding: 20px;
  img {
    width: 100%;
  }
`

const XContainer = styled.div`
  text-align: right;
  margin-bottom: 10px;
  svg {
    cursor: pointer;
  }
`
