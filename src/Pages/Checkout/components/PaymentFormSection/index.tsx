import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useTheme } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { CardTitle } from '../CardTitle'

import * as S from './styles'
import { ReactNode } from 'react'

type PaymentMethod = {
  label: string
  icon: ReactNode
}

interface PaymentFormSectionProps {
  addPaymentMethod: (method: string) => void
}
export function PaymentFormSection({
  addPaymentMethod,
}: PaymentFormSectionProps) {
  const colors = useTheme()
  const paymentMethods: PaymentMethod[] = [
    {
      label: 'Cartão de Crédito',
      icon: <CreditCard size={22} color={colors['purple-500']} />,
    },
    {
      label: 'Cartão de Débito',
      icon: <Bank size={22} color={colors['purple-500']} />,
    },
    {
      label: 'Dinheiro',
      icon: <Money size={22} color={colors['purple-500']} />,
    },
  ]

  function setPaymentMethod(method: string) {
    addPaymentMethod(method)
  }

  return (
    <S.PaymentContainer>
      <CardTitle
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        icon={<CurrencyDollar size={22} color={colors['purple-500']} />}
      />
      <S.PaymentMethodsWrapper>
        <RadioGroup.Root
          defaultValue="money"
          onValueChange={(method: string) => setPaymentMethod(method)}
        >
          {paymentMethods.map((payment) => (
            <S.PaymentOptionButton key={payment.label} value={payment.label}>
              {payment.icon}
              <span>{payment.label}</span>
            </S.PaymentOptionButton>
          ))}
        </RadioGroup.Root>
      </S.PaymentMethodsWrapper>
    </S.PaymentContainer>
  )
}
