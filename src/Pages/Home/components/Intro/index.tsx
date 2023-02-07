import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { IconWithText } from '../../../../components/IconWithText'

import { BenefitsContainer, IntroContainer, Subtitle, Title } from './styles'

import coffeImage from '../../../../assets/coffee-image.svg'

export function Intro() {
  const colors = useTheme()

  return (
    <IntroContainer>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>

        <BenefitsContainer>
          <IconWithText
            icon={<ShoppingCart size={16} weight="fill" color={colors.white} />}
            text="Compra simples e segura"
            backgroundColor={colors['yellow-700']}
          />
          <IconWithText
            icon={<Package size={16} weight="fill" color={colors.white} />}
            text="Embalagem mantém o café intacto"
            backgroundColor={colors['gray-700']}
          />
          <IconWithText
            icon={<Timer size={16} weight="fill" color={colors.white} />}
            text="Entrega rápida e rastreada"
            backgroundColor={colors['yellow-500']}
          />
          <IconWithText
            icon={<Coffee size={16} weight="fill" color={colors.white} />}
            text="O café chega fresquinho até você"
            backgroundColor={colors['purple-500']}
          />
        </BenefitsContainer>
      </div>

      <img src={coffeImage} alt="imagem do nosso copo de café" />
    </IntroContainer>
  )
}
