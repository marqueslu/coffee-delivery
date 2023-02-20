import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'

import { CoffeeList } from '../../data/coffee-list'

import * as S from './styles'
import { ToastContainer } from 'react-toastify'

export function Home() {
  return (
    <S.HomeContainer>
      <Intro />

      <S.CoffeesContainer>
        <S.CoffeeSectionTitle>Nossos cafés</S.CoffeeSectionTitle>
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
        <S.CoffeeCardsList>
          {CoffeeList.map((coffee) => (
            <CoffeeCard coffee={coffee} key={coffee.id} />
          ))}
        </S.CoffeeCardsList>
      </S.CoffeesContainer>
    </S.HomeContainer>
  )
}
