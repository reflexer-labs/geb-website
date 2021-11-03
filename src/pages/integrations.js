import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import IntegrationItem from "../components/ui/IntegrationItem"
import OutlineHeader from "../components/ui/OutlineHeader"
import useRaiUse from "../hooks/useRaiUse"

const Integrations = () => {
  const [selected, setSelected] = useState("dashboards")
  const raiUsage = useRaiUse().map(item => item.node)

  const items = raiUsage.reduce((acc, item) => {
    acc[item.category.category]
      ? acc[item.category.category].push(item)
      : (acc[item.category.category] = [item])
    return acc
  }, {})

  const ordered = ["dashboards", "dapps", "earn", "swap"]

  const orderedItems = ordered.reduce((acc, key) => {
    acc[key] = items[key]
    return acc
  }, {})

  return (
    <Layout
      customTitle={"Try RAI"}
      headerStyle={{ position: "absolute", width: "100%", top: "20px" }}
      isWhiteLogo
      onlyBrand
      hasBackground
    >
      <Container>
        <OutlineHeader outline="Try" text="RAI" color="greenish" />
        <Subtitle className="wow fadeInUp" data-wow-delay="0.3s">
          Projects and interfaces that accept RAI
        </Subtitle>
        <Tabs className="wow fadeInUp" data-wow-delay="0.5s">
          {ordered.map(o => {
            return (
              <TabItem
                key={o}
                className={selected === o ? "active" : ""}
                onClick={() => setSelected(o)}
              >
                {o}
              </TabItem>
            )
          })}
        </Tabs>
      </Container>
      <Content className="wow fadeInUp" data-wow-delay="0.6s">
        {orderedItems[selected].map((x, i) => {
          const item = { node: x }
          return (
            <IntegrationItem
              className="int-item"
              x={item}
              i={i}
              key={item.id}
            />
          )
        })}
      </Content>
    </Layout>
  )
}

export default Integrations

const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  padding: 100px 15px 0;
  ${({ theme }) => theme.mediaWidth.upToMedium`
 flex-direction:column;
 max-width: 100%;
`}
`
const Subtitle = styled.div`
  font-size: 22px;
  text-align: center;
  color: ${props => props.theme.colors.neutral};
`

const Tabs = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 50px auto;
  justify-content: space-between;
`
const TabItem = styled.div`
  border-radius: 25px;
  background: ${props => props.theme.colors.foreground};
  padding: 8px 13px;
  min-width: 120px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  text-transform: capitalize;
  color: ${props => props.theme.colors.neutral};
  &.active {
    background: ${props => props.theme.colors.greenish};
  }
  @media (max-width: 767px) {
    min-width: auto;
  }
`

const Content = styled.div`
  max-width: 80vw;
  margin: 0 auto 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  .int-item {
    .box {
      margin: 20px 10px;
    }
  }
  flex-wrap: wrap;
`
