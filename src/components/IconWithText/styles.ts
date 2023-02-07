import styled from 'styled-components'

type IconContainerProps = {
  backgroundColor: string
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
`

export const IconContainer = styled.span<IconContainerProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
  padding: 8px;
  display: flex;
`

export const TextContainer = styled.span`
  color: ${(props) => props.theme['gray-700']};
`
