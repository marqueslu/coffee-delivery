import { Trash } from 'phosphor-react'
import { FormEvent } from 'react'
import { useTheme } from 'styled-components'
import { Actions } from '../../../../components/Actions'
import { moneyFormat } from '../../../../utils/money-format'
import * as S from './styles'

export interface Coffee {
  id: number
  imageName: string
  name: string
  price: number
  quantity: number
}

const mockedCoffeList: Coffee[] = [
  {
    id: 1,
    imageName: 'expresso-tradicional.svg',
    name: 'Expresso Tradicional',
    price: 9.9,
    quantity: 3,
  },
  {
    id: 2,
    imageName: 'expresso-americano.svg',
    name: 'Expresso Americano',
    price: 9.9,
    quantity: 4,
  },
  {
    id: 3,
    imageName: 'expresso-cremoso.svg',
    name: 'Expresso Cremoso',
    price: 9.9,
    quantity: 1,
  },
]

export function CoffeeListFormSection() {
  const colors = useTheme()
  const totalPrice = mockedCoffeList.reduce(
    (previousValue, currentValue) =>
      currentValue.price * currentValue.quantity + previousValue,
    0,
  )
  const deliveryFee = 3.5

  function handleIncreseCoffeAmout() {}

  function handleDecreaseCoffeAmount() {}

  function onRemoveCoffeeItem(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <S.CoffessListContainer>
      {mockedCoffeList.map((coffee) => (
        <div key={coffee.id}>
          <S.CoffeeItem>
            <S.CoffeeInfo>
              <img src={'./coffeeImages/' + coffee.imageName} alt="" />

              <S.Details>
                <h4>{coffee.name}</h4>

                <S.ActionsContainer>
                  <Actions
                    amount={coffee.quantity}
                    increase={handleIncreseCoffeAmout}
                    decrease={handleDecreaseCoffeAmount}
                  />

                  <S.RemoveCoffeeButon
                    type="button"
                    onClick={onRemoveCoffeeItem}
                  >
                    <Trash size={16} color={colors['purple-500']} />
                    <span>Remover</span>
                  </S.RemoveCoffeeButon>
                </S.ActionsContainer>
              </S.Details>
            </S.CoffeeInfo>

            <S.PriceLabel>
              R$ {moneyFormat(coffee.price * coffee.quantity).slice(3)}
            </S.PriceLabel>
          </S.CoffeeItem>
          <S.HorizontalLine />
        </div>
      ))}

      <S.TotalAmountGroup>
        <S.TotalAmountItem>
          <span>Total de itens</span>
          <span>R$ {moneyFormat(totalPrice).slice(3)}</span>
        </S.TotalAmountItem>

        <S.TotalAmountItem>
          <span>Entrega</span>
          <span>R$ {moneyFormat(deliveryFee).slice(3)}</span>
        </S.TotalAmountItem>

        <S.TotalAmountItem isFontBigger>
          <span>Total</span>
          <span>R$ {moneyFormat(totalPrice + deliveryFee).slice(3)}</span>
        </S.TotalAmountItem>
      </S.TotalAmountGroup>

      <S.OrderConfirmationButton type="button">
        Confirmar pedido
      </S.OrderConfirmationButton>
    </S.CoffessListContainer>
  )
}
