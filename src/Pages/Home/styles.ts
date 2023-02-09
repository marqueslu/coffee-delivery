import styled from 'styled-components'

export const HomeContainer = styled.main`
  position: absolute;
  width: 100%;
`

export const CoffeesContainer = styled.section`
  padding: 2rem 10rem 9.85rem;

  @media (max-width: 1180px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`

export const CoffeeCardsList = styled.div`
  margin-top: 3.5rem;
  display: grid;
  gap: 2.5rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-template-rows: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CoffeeSectionTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme['gray-800']};
`
