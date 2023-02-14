import { Minus, Plus } from 'phosphor-react'

import * as S from './styles'

interface ActionsProps {
  amount: number
  decrease: () => void
  increase: () => void
}

export function Actions({ amount, increase, decrease }: ActionsProps) {
  return (
    <S.ActionsWrapper>
      <S.Button type="button" onClick={decrease}>
        <Minus size={14} />
      </S.Button>

      <span>{amount}</span>

      <S.Button type="button" onClick={increase}>
        <Plus size={14} />
      </S.Button>
    </S.ActionsWrapper>
  )
}
