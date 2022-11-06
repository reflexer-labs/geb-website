import React, { useState } from "react"
import { Play, X } from "react-feather"
import YouTube from "@u-wave/react-youtube"
import styled from "styled-components"

const VideoSection = () => {
  const [paused, setPaused] = useState(true)
  const [muted, setMuted] = useState(true)
  const [isMain, setIsMain] = useState(true)

  const handleShowVideo = () => {
    setPaused(false)
    setTimeout(() => {
      setMuted(false)
    }, 20)
  }

  const handleClose = () => {
    setPaused(true)
    setMuted(true)
  }
  return (
    <Container>
      <Content className="wow fadeInUp" data-wow-delay="0.1s">
        <img src="/ph.jpg" alt="" />
        {paused ? (
          <Placeholder>
            <PlayBtn
              onClick={() => {
                setIsMain(true)
                handleShowVideo()
              }}
            >
              <Play />
            </PlayBtn>
            <Text className="wow fadeIn" data-wow-delay="0.4s">
              <h3>FIND OUT</h3>
              <h3>MORE ABOUT</h3>
              <h2>RAI</h2>
            </Text>
          </Placeholder>
        ) : (
          <IframeContainer>
            <CloseBtn>
              <X onClick={handleClose} />
            </CloseBtn>
            {isMain ? (
              <YouTube video="b5iHO14XU4k" autoplay muted={muted} />
            ) : (
              <YouTube
                video="exTMCr7QeLY"
                autoplay
                muted={muted}
                startSeconds={3300}
              />
            )}
          </IframeContainer>
        )}
      </Content>
      {paused ? (
        <Content className="wow fadeInUp" data-wow-delay="0.1s">
          <EventVideo>
            <Placeholder>
              <PlayBtn
                onClick={() => {
                  setIsMain(false)
                  handleShowVideo()
                }}
                className={"small"}
              >
                <Play />
              </PlayBtn>
              <SmallText>
                RAI on <span>Devcon</span>
              </SmallText>
            </Placeholder>
            <img src="/event.jpeg" alt="" />
          </EventVideo>
        </Content>
      ) : null}
    </Container>
  )
}

export default VideoSection

const Container = styled.div`
  padding: 7rem 15px 6rem;
  background: ${props => props.theme.colors.background};
  ${({ theme }) => theme.mediaWidth.upToMedium`
   padding:7rem 1rem 2rem;
`}
`

const Content = styled.div`
  max-width: 800px;
  border-radius: 28px;
  margin: 0 auto;
  position: relative;

  img {
    border-radius: 28px;
    width: 100%;
  }
`

const Text = styled.div`
  position: absolute;
  z-index: 3;
  right: -25%;
  top: 50%;
  transform: translateY(-45%);
  h3 {
    color: ${props => props.theme.colors.neutral};
    font-size: 3rem;
    line-height: 0;
    font-weight: 900;
    font-family: "Inter-Medium";
  }
  h2 {
    color: ${props => props.theme.colors.blueish};
    font-size: 7rem;
    font-weight: 900;
    line-height: 0;
    font-family: "Inter-Medium";
    transform: translate(-4px, -20px);
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
        top:20%;
        left:0;
        width:100%;
        padding-left:35%;
        h3 {
            font-size:2rem;
        }
        h2 {
            font-size:5rem;
            
        }
  `}

  @media(max-width:1200px) {
    right: -15%;
  }
  @media (max-width: 1024px) {
    top: 8%;
    left: 0;
    width: 100%;
    padding-left: 35%;
  }

  @media (max-width: 400px) {
    top: -10%;
    left: 0;
    width: 100%;
    padding-left: 35%;
    h3 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 3rem;
      margin-bottom: 0;
      transform: translate(-4px, -10px);
    }
  }
`

const Placeholder = styled.div``

const PlayBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    color: ${props => props.theme.colors.blueish};
    width: 100px;
    height: 100px;
    fill: ${props => props.theme.colors.blueish};
  }
  &:hover {
    background: ${props => props.theme.colors.blueish};
    svg {
      fill: white;
      color: white;
    }
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
        width:100px;
        height:100px;
        svg {
            width: 40px;
            height: 40px;   
        }
  `}
  &.small {
    width: 50px;
    height: 50px;
    svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 767px) {
    &.small {
      width: 100px;
      height: 100px;
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
`

const IframeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
`

const CloseBtn = styled.div`
  position: absolute;
  cursor: pointer;
  top: -40px;
  right: 0;
  width: 30px;
  height: 30px;
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
  &:hover {
    border-color: ${props => props.theme.colors.blueish};
    svg {
      color: ${props => props.theme.colors.blueish};
    }
  }
`

const EventVideo = styled.div`
  position: absolute;
  bottom: -50px;
  left: -150px;
  max-width: 300px;
  img {
    opacity: 0.5;
  }
  @media (max-width: 767px) {
    position: static;
    max-width: 100%;
    margin-top: 40px;
  }
`

const SmallText = styled.div`
  color: #fff;
  span {
    color: ${props => props.theme.colors.blueish};
  }
  font-size: 40px;
  font-weight: 900;
  font-family: "Inter-Medium";
  margin-left: 10px;
  position: absolute;
  z-index: 5;
  @media (max-width: 767px) {
    text-align: center;
    right: 0;
    left: 0;
  }
`
