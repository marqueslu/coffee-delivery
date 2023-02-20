import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import 'react-toastify/dist/ReactToastify.css'

import { moneyFormat } from '../../../../utils/money-format'
import { Actions } from '../../../../components/Actions'

import * as S from './styles'
import { Coffee } from '../../../../data/coffee-list'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { toast, ToastContainer } from 'react-toastify'

type CoffeeCardProps = {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { price, imageName, tags, name, description } = coffee
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  const { addCoffeeToCart } = useContext(CoffeesContext)

  const formattedPrice = moneyFormat(price).slice(3)
  const defaultPathImages = `./coffeeImages/`

  function handleIncreaseAmount() {
    setCoffeeAmount((state) => state + 1)
  }

  function handleDecreaseAmount() {
    if (coffeeAmount > 1) setCoffeeAmount((state) => state - 1)
  }

  function handleAddToCart() {
    addCoffeeToCart({ ...coffee, amount: coffeeAmount })
    setCoffeeAmount(1)
    toast.success('Item adicionado ao carrinho')
  }

  return (
    <S.CardContainer>
      <img src={defaultPathImages + imageName} alt={coffee.name} />

      <S.TagsContainer>
        {tags.map((tag) => (
          <S.Tag key={tag}>{tag}</S.Tag>
        ))}
      </S.TagsContainer>

      <S.Title>{name}</S.Title>
      <S.Description>{description}</S.Description>

      <S.ActionsCartContainer>
        <S.PriceContainer>
          <span>R$</span>
          <span>{formattedPrice}</span>
        </S.PriceContainer>

        <S.ActionsContainer>
          <Actions
            amount={coffeeAmount}
            increase={handleIncreaseAmount}
            decrease={handleDecreaseAmount}
          />

          <S.AddToCartButton onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </S.AddToCartButton>
        </S.ActionsContainer>
      </S.ActionsCartContainer>
    </S.CardContainer>
  )
}
