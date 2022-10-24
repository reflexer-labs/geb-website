import React, { useState, useRef, useEffect } from "react"
import { ArrowUpRight, ChevronDown } from "react-feather"
import styled from "styled-components"

const Dropdown = props => {
  const wrapperRef = useRef(null)
  const {
    itemSelected,
    items,
    padding,
    minWidth,
    width,
    extraWord,
    fontSize,
    getSelectedItem,
    label,
    itemPadding,
    imgSize,
    dropSelection,
  } = props
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(itemSelected)

  const handleItemClick = selected => {
    setIsOpen(!isOpen)
    if (dropSelection) {
      return
    }
    setSelectedItem(selected)
    if (typeof selected === "string") {
      getSelectedItem && getSelectedItem(selected)
    } else {
      getSelectedItem && getSelectedItem(selected.item)
    }
  }

  const handleClickOutside = event => {
    const wrapper = wrapperRef.current
    if (!wrapper.contains(event.target)) {
      setTimeout(() => {
        setIsOpen(false)
      }, 10)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })

  useEffect(() => {
    setSelectedItem(itemSelected)
  }, [itemSelected])

  return (
    <Container
      className={isOpen ? "isOpen" : ""}
      style={{ width: width || "100%" }}
    >
      {label ? <Label>{label}</Label> : null}
      <InnerContainer ref={wrapperRef}>
        <DropdownBtn
          style={{
            padding: padding || "20px",
            fontSize: fontSize || "16px",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text">
            <span>{extraWord}</span>{" "}
            {typeof selectedItem === "string" ? (
              selectedItem
            ) : (
              <ItemImg>
                <img
                  src={selectedItem.img}
                  alt=""
                  style={{
                    width: imgSize || "20px",
                  }}
                />{" "}
                {selectedItem.href ? (
                  <Link
                    href={selectedItem.href}
                    target={selectedItem.isExternal ? "_blank" : ""}
                  >
                    {selectedItem.item} <ArrowUpRight width={17} height={17} />
                  </Link>
                ) : (
                  selectedItem.item
                )}
              </ItemImg>
            )}
          </span>

          {items.length > 0 ? <ChevronDown size="16" /> : null}
        </DropdownBtn>
        {items.length > 0 ? (
          <DropdownMenu
            style={{
              display: isOpen ? "block" : "none",
              minWidth: minWidth || "100%",
            }}
          >
            {items.map((item, index) => (
              <DropDownItem
                key={index}
                onClick={() => handleItemClick(item)}
                style={{ padding: itemPadding || "20px" }}
              >
                {typeof item === "string" ? (
                  item
                ) : (
                  <ItemImg>
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: imgSize || "20px",
                      }}
                    />{" "}
                    {item.item}
                  </ItemImg>
                )}
              </DropDownItem>
            ))}
          </DropdownMenu>
        ) : null}
      </InnerContainer>
    </Container>
  )
}

export default Dropdown

const Container = styled.div`
  display: inline-block;
  &.isOpen {
    position: relative;
    z-index: 305;
  }
`

const InnerContainer = styled.div`
  position: relative;
  z-index: 300;
`
const DropdownBtn = styled.button`
  border: 1px solid #05284c;
  box-shadow: none;
  background: #08223e;
  color: ${props => props.theme.colors.neutral};
  border-radius: 10px;
  outline: none;
  text-align: left;
  cursor: pointer;
  width: 100%;
  display: flex;
  .text {
    display: inline-block;
    vertical-align: middle;
  }
  svg {
    position: absolute;
    top: 36%;
    right: 20px;
  }
`

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  border-radius: 15px;
  background: #08223e;
  border: 1px solid #05284c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);
  text-align: left;
  z-index: 5;
  max-height: 280px;
  overflow-y: auto;
`

const DropDownItem = styled.div`
  padding: 5px 15px;
  color: ${props => props.theme.colors.neutral};
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.foreground};
  }
`

const Label = styled.div`
  line-height: 21px;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.font.small};
  letter-spacing: -0.09px;
  margin-bottom: 4px;
  text-transform: capitalize;
`

const ItemImg = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
`

const Link = styled.a`
  color: inherit;
  text-decoration: underline;
  display: flex;
  align-items: center;
  svg {
    position: static !important;
  }
  &:hover {
    color: ${props => props.theme.colors.inputBorderColor};
  }
`
