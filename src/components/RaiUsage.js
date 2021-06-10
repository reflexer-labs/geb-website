import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core"
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import useRaiUse from "../hooks/useRaiUse"

// install Swiper modules
SwiperCore.use([Pagination])
const RaiUsage = () => {
  const raiUsage = useRaiUse().map(item => item.node)

  const items = raiUsage.reduce((acc, item) => {
    acc[item.category.category]
      ? acc[item.category.category].push(item)
      : (acc[item.category.category] = [item])
    return acc
  }, {})
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const cat = Object.keys(items).reverse()[index]
      return '<span class="' + className + '">' + cat + "</span>"
    },
  }

  return (
    <Container>
      <Title>
        <Dimmed>Try RAI</Dimmed>
        Community-built interfaces integrating the protocol
      </Title>
      <Swiper
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        pagination={pagination}
      >
        {Object.keys(items)
          .reverse()
          .map(key => {
            return (
              <SwiperSlide>
                <ItemsRow>
                  {items[key].map(item => {
                    return (
                      <Link href={item.link.link}>
                        <ItemBox>
                          <img src={item.image.file.url} alt="item.title" />
                          <ItemTitle>{item.title.title}</ItemTitle>
                          <ItemContent>{item.content.content}</ItemContent>
                        </ItemBox>
                      </Link>
                    )
                  })}
                </ItemsRow>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </Container>
  )
}

export default RaiUsage

const Container = styled.div`
  max-width: 1300px;
  padding: 0 30px;
  margin: 0 auto 50px auto;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding: 0 15px;
   
  `}
`
const Title = styled.div`
  font-weight: bold;
  margin: 100px 0 30px 0;
  font-size: 35px;
  font-weight: 600;
  font-family: "Inter-Medium";
  color: ${props => props.theme.colors.primary};
  letter-spacing: -0.33px;
  max-width: 600px;
  width: 100%;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 22px;
    text-align:center;
    max-width:100%;
  `}
`

const Dimmed = styled.div`
  opacity: 0.4;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   margin-bottom:20px;
   
  `}
`
const ItemsRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   flex-direction: column;
   
  `}
`

const Link = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  flex: 0 0 33.3%;
  padding: 0 10px;
  margin-top: 30px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   fflex: 0 0 100%;
   
  `}
`
const ItemBox = styled.div`
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.global.borderRadius};
  padding: 40px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`

const ItemTitle = styled.h4`
  text-align: left;
`

const ItemContent = styled.div`
  text-align: left;
  font-size: ${props => props.theme.font.small};
`
