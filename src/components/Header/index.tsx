import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { Actions, HeaderContainer, Location, CartLink } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="home">
          <img
            src={logoCoffeeDelivery}
            alt="Logo da marca escrito coffe delivery e contém um copo de café roxo"
          />
        </NavLink>
        <Actions>
          <Location>
            <MapPin weight="fill" size={22} />
            Jundiaí, SP
          </Location>
          <NavLink to="/" title="cart">
            <CartLink>
              <ShoppingCart size={22} weight="fill" />
              <span>3</span>
            </CartLink>
          </NavLink>
        </Actions>
      </nav>
    </HeaderContainer>
  )
}
