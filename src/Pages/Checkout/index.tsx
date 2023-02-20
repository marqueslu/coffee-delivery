import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { AddressFormSection } from './components/AddressFormSection'
import { CoffeeListFormSection } from './components/CoffeeListFormSection'
import { PaymentFormSection } from './components/PaymentFormSection'

import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { useContext, useState } from 'react'

const newOrderFormValidationSchema = zod.object({
  cep: zod
    .string({
      required_error: 'Informe o CEP',
    })
    .min(7, 'CEP tem no mínimo 7 caracteres'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod
    .number({
      invalid_type_error: 'Por favor insira um número válido',
    })
    .min(1, 'Número deve ser maior que 0')
    .nonnegative(),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod
    .string({
      required_error: 'Informe a UF',
    })
    .max(2, 'Não pode inserir mais de 2 caract')
    .min(2, 'Não pode inserir menos de 2 caract'),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('')
  const navigate = useNavigate()
  const { cartItems, resetCart } = useContext(CoffeesContext)

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })
  const { handleSubmit, reset } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    const finalData = {
      data,
      cartItems,
      paymentMethod,
    }

    reset()
    resetCart()
    navigate('/success', {
      state: finalData,
    })
  }

  return (
    <S.CheckoutContainer>
      <FormProvider {...newOrderForm}>
        <S.CheckoutForm onSubmit={handleSubmit(handleCreateNewOrder)}>
          <S.OrderWrapper>
            <S.SectionTitle>Complete seu pedido</S.SectionTitle>
            <AddressFormSection />
            <PaymentFormSection addPaymentMethod={setPaymentMethod} />
          </S.OrderWrapper>
          <S.SelectedCoffeesWrapper>
            <S.SectionTitle>Cafés selecionados</S.SectionTitle>
            <CoffeeListFormSection />
          </S.SelectedCoffeesWrapper>
        </S.CheckoutForm>
      </FormProvider>
    </S.CheckoutContainer>
  )
}
