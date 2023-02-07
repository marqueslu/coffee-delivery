import { ReactNode } from 'react'

import { IconContainer, TextContainer, Wrapper } from './styles'

type IconWithTextProps = {
  text?: string
  icon: ReactNode
  backgroundColor: string
}

export function IconWithText({
  text,
  icon,
  backgroundColor,
}: IconWithTextProps) {
  return (
    <Wrapper>
      <IconContainer backgroundColor={backgroundColor}>{icon}</IconContainer>
      {!!text && <TextContainer>{text}</TextContainer>}
    </Wrapper>
  )
}
