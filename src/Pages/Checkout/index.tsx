import { AddressFormSection } from './components/AddressFormSection'
import { CoffeeListFormSection } from './components/CoffeeListFormSection'
import { PaymentFormSection } from './components/PaymentFormSection'

import * as S from './styles'

export function Checkout() {
  return (
    <S.CheckoutContainer>
      <S.CheckoutForm>
        <S.OrderWrapper>
          <S.SectionTitle>Complete seu pedido</S.SectionTitle>
          <AddressFormSection />
          <PaymentFormSection />
        </S.OrderWrapper>
        <S.SelectedCoffeesWrapper>
          <S.SectionTitle>Cafés selecionados</S.SectionTitle>
          <CoffeeListFormSection />
        </S.SelectedCoffeesWrapper>
      </S.CheckoutForm>
    </S.CheckoutContainer>
  )
}
