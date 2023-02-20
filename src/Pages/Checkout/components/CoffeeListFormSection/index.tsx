import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import { useTheme } from 'styled-components'
import { Actions } from '../../../../components/Actions'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { moneyFormat } from '../../../../utils/money-format'
import * as S from './styles'

export interface Coffee {
  id: number
  imageName: string
  name: string
  price: number
  quantity: number
}

export function CoffeeListFormSection() {
  const colors = useTheme()
  const {
    cartItems,
    removeItemFromcart,
    increaseCoffeeAmount,
    decreaseCoffeeAmount,
  } = useContext(CoffeesContext)

  const totalPrice = cartItems.reduce(
    (previousValue, currentValue) =>
      currentValue.price * currentValue.amount + previousValue,
    0,
  )

  const deliveryFee = 3.5

  return (
    <S.CoffessListContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{ boxShadow: 'none' }}
      />
      {cartItems.map((coffee) => (
        <div key={coffee.id}>
          <S.CoffeeItem>
            <S.CoffeeInfo>
              <img src={'./coffeeImages/' + coffee.imageName} alt="" />

              <S.Details>
                <h4>{coffee.name}</h4>

                <S.ActionsContainer>
                  <Actions
                    amount={coffee.amount}
                    increase={() => increaseCoffeeAmount(coffee.id)}
                    decrease={() => decreaseCoffeeAmount(coffee.id)}
                  />

                  <S.RemoveCoffeeButon
                    type="button"
                    onClick={() => removeItemFromcart(coffee.id)}
                  >
                    <Trash size={16} color={colors['purple-500']} />
                    <span>Remover</span>
                  </S.RemoveCoffeeButon>
                </S.ActionsContainer>
              </S.Details>
            </S.CoffeeInfo>

            <S.PriceLabel>
              R$ {moneyFormat(coffee.price * coffee.amount).slice(3)}
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

      <S.OrderConfirmationButton type="submit">
        Confirmar pedido
      </S.OrderConfirmationButton>
    </S.CoffessListContainer>
  )
}
