import { ReactNode } from 'react'
import * as S from './styles'

type CardTtitleProps = {
  title: string
  subtitle: string
  icon: ReactNode
}

export function CardTitle({ title, subtitle, icon }: CardTtitleProps) {
  return (
    <S.AddressTitleContainer>
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </S.AddressTitleContainer>
  )
}
