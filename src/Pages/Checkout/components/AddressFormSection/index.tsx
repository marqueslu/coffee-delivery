import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { CardTitle } from '../CardTitle'

import * as S from './styles'

export function AddressFormSection() {
  const colors = useTheme()

  const { register } = useFormContext()

  return (
    <S.AddressContainer>
      <CardTitle
        title="Endereço de entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        icon={<MapPinLine size="22" color={colors['yellow-700']} />}
      />

      <S.InputsContainer>
        <S.Input variantSize="small" placeholder="CEP" {...register('cep')} />
        <S.Input variantSize="full" placeholder="Rua" {...register('street')} />

        <S.InputsGroup>
          <S.Input
            variantSize="small"
            type="number"
            placeholder="Número"
            {...register('number', {
              valueAsNumber: true,
            })}
          />
          <S.InputWrapper>
            <S.complementInput
              placeholder="Complemento"
              {...register('complement')}
            />
            <p>Opcional</p>
          </S.InputWrapper>
        </S.InputsGroup>
        <S.InputsGroup>
          <S.Input
            variantSize="small"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <S.Input
            variantSize="large"
            placeholder="Cidade"
            {...register('city')}
          />
          <S.Input variantSize="tiny" placeholder="UF" {...register('uf')} />
        </S.InputsGroup>
      </S.InputsContainer>
    </S.AddressContainer>
  )
}
