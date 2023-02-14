import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { CardTitle } from '../CardTitle'

import * as S from './styles'

export function AddressFormSection() {
  const colors = useTheme()

  return (
    <S.AddressContainer>
      <CardTitle
        title="Endereço de entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        icon={<MapPinLine size="22" color={colors['yellow-700']} />}
      />

      <S.InputsContainer>
        <S.Input variantSize="small" placeholder="CEP" />
        <S.Input variantSize="full" placeholder="Rua" />

        <S.InputsGroup>
          <S.Input variantSize="small" type="number" placeholder="Número" />
          <S.InputWrapper>
            <S.complementInput placeholder="Complemento" />
            <p>Opcional</p>
          </S.InputWrapper>
        </S.InputsGroup>
        <S.InputsGroup>
          <S.Input variantSize="small" placeholder="Bairro" />
          <S.Input variantSize="large" placeholder="Cidade" />
          <S.Input variantSize="tiny" placeholder="UF" />
        </S.InputsGroup>
      </S.InputsContainer>
    </S.AddressContainer>
  )
}
