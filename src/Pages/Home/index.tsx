import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'

import { CoffeeList } from '../../data/coffee-list'

import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer>
      <Intro />

      <S.CoffeesContainer>
        <S.CoffeeSectionTitle>Nossos cafés</S.CoffeeSectionTitle>
        <S.CoffeeCardsList>
          {CoffeeList.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              imageName={coffee.imageName}
              name={coffee.name}
              tags={coffee.tags}
              description={coffee.description}
              price={coffee.price}
            />
          ))}
        </S.CoffeeCardsList>
      </S.CoffeesContainer>
    </S.HomeContainer>
  )
}
