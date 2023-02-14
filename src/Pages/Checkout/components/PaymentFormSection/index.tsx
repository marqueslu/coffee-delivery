import { CreditCard, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { CardTitle } from '../CardTitle'

import * as S from './styles'

export function PaymentFormSection() {
  const colors = useTheme()

  return (
    <S.PaymentContainer>
      <CardTitle
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        icon={<CurrencyDollar size={22} color={colors['purple-500']} />}
      />

      <S.PaymentMethodsWrapper>
        <RadioGroup.Root defaultValue="Dinheiro">
          <S.PaymentOptionButton value="Cartão de Crédito">
            <CreditCard size={16} color={colors['purple-500']} />
            <span>Cartão de Crédito</span>
          </S.PaymentOptionButton>

          <S.PaymentOptionButton value="Cartão de Débito">
            <CreditCard size={16} color={colors['purple-500']} />
            <span>Cartão de Débito</span>
          </S.PaymentOptionButton>

          <S.PaymentOptionButton value="Dinheiro">
            <CreditCard size={16} color={colors['purple-500']} />
            <span>dinheiro</span>
          </S.PaymentOptionButton>
        </RadioGroup.Root>
      </S.PaymentMethodsWrapper>
    </S.PaymentContainer>
  )
}
