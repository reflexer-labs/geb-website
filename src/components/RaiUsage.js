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
      <Content>
        <Title>
          <Dimmed>Try RAI</Dimmed>
          Projects and interfaces that accept RAI
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
                <SwiperSlide style={{ background: "transparent" }}>
                  <ItemsRow>
                    {items[key].map(item => {
                      return (
                        <Link href={item.link.link} target="_blank">
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
      </Content>
    </Container>
  )
}

export default RaiUsage

const Container = styled.div`
  padding: 0 30px;
  padding: 160px 0;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   padding: 80px 0;
  `}
  background: ${props => props.theme.colors.foreground};
`
const Content = styled.div`
  max-width: 1280px;
  padding: 0 30px;
  margin: 0 auto;
`
const Title = styled.div`
  font-weight: bold;
  margin: 0px 0 30px 0;
  font-size: 35px;
  font-weight: 600;
  font-family: "Inter-Medium";
  color: ${props => props.theme.colors.primary};
  letter-spacing: -0.33px;
  max-width: 400px;
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
  width: 100%;
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
  min-width: 33.3%;
  padding: 0 10px;
  margin-bottom: 30px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
   flex: 0 0 100%;
   min-width:100%;
  `}
`
const ItemBox = styled.div`
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.global.borderRadius};
  padding: 40px;
  transition: all 0.3s ease;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  &:hover {
    background: ${props => props.theme.colors.neutral};
    box-shadow: 0px 16px 24px rgb(0 0 0 / 8%);
  }
`

const ItemTitle = styled.h4`
  text-align: left;
`

const ItemContent = styled.div`
  text-align: left;
  font-size: ${props => props.theme.font.small};
  line-height: 1.6;
`
