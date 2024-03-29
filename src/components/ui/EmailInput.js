import React from "react"
import styled from "styled-components"
import Button from "./Button"
import Loader from "./Loader"

const EmailInput = ({
  label,
  placeholder,
  icon,
  value,
  onChange,
  disabled,
  handleEmailClick,
  error,
  isSubmitting,
}) => {
  const handleChange = e => {
    const val = e.target.value
    onChange(val)
  }

  return (
    <Container>
      <Label>{label}</Label>
      <Content>
        {icon ? <Icon src={icon} /> : null}
        <CustomInput
          placeholder={placeholder || "Enter your email"}
          type={"text"}
          value={value || ""}
          onChange={handleChange}
        />
        {isSubmitting ? (
          <Loader />
        ) : (
          <Button
            withArrow
            disabled={disabled}
            text={"Submit"}
            onClick={handleEmailClick}
          />
        )}
      </Content>
      {error && <Error dangerouslySetInnerHTML={{ __html: error }} />}
    </Container>
  )
}

export default EmailInput

const Container = styled.div`
  max-width: 300px;
  position: relative;
`

const Label = styled.div`
  line-height: 21px;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.font.small};
  letter-spacing: -0.09px;
  margin-bottom: 4px;
  text-transform: capitalize;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${props => props.theme.global.borderRadius};
  transition: all 0.3s ease;
  background: ${props => props.theme.colors.background};
  padding: 10px 16px;
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 20px;
`

const CustomInput = styled.input`
  font-size: ${props => props.theme.font.small};
  transition: all 0.3s ease;
  width: calc(100% - 67px);
  padding-right: 10px;
  border: none;
  border-radius: 0;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.customSecondary};
  line-height: 21px;
  outline: none;
  &:disabled {
    cursor: not-allowed;
  }
`

const Error = styled.p`
  color: ${props => props.theme.colors.dangerColor};
  font-size: ${props => props.theme.font.extraSmall};
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  margin: 0;
`
