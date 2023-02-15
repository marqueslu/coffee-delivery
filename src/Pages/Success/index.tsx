import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import deliveryIllustration from '../../assets/delivery-illustration.svg'

import * as S from './styles'

export function Success() {
  const colors = useTheme()

  return (
    <S.SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <S.DeliveryContainer>
        <S.DeliveryInfo>
          <S.DeliveryInfoItem variant={colors['purple-500']}>
            <span>
              <MapPin weight="fill" size={16} />
            </span>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelly, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </S.DeliveryInfoItem>

          <S.DeliveryInfoItem variant={colors['yellow-500']}>
            <span>
              <Timer weight="fill" size={16} />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </S.DeliveryInfoItem>

          <S.DeliveryInfoItem variant={colors['yellow-700']}>
            <span>
              <CurrencyDollar size={24} />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </S.DeliveryInfoItem>
        </S.DeliveryInfo>
        <img src={deliveryIllustration} alt="" />
      </S.DeliveryContainer>
    </S.SuccessContainer>
  )
}
