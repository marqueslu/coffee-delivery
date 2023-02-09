import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { moneyFormat } from '../../../../utils/money-format'
import { Actions } from '../../../../components/Actions'

import * as S from './styles'

type CoffeeCardProps = {
  imageName: string
  name: string
  tags: string[]
  description: string
  price: number
}

export function CoffeeCard({
  imageName,
  name,
  tags,
  description,
  price,
}: CoffeeCardProps) {
  const [coffeeAmount, setCoffeAmount] = useState(1)

  const formattedPrice = moneyFormat(price).slice(3)

  function handleIncreaseAmount() {
    setCoffeAmount((state) => state + 1)
  }

  function handleDecreaseAmount() {
    if (coffeeAmount > 1) setCoffeAmount((state) => state - 1)
  }

  const defaultPathImages = `./coffeeImages/`

  return (
    <S.CardContainer>
      <img src={defaultPathImages + imageName} alt="Expresso tradicional" />

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

          <S.AddToCartButton>
            <ShoppingCart size={22} weight="fill" />
          </S.AddToCartButton>
        </S.ActionsContainer>
      </S.ActionsCartContainer>
    </S.CardContainer>
  )
}
