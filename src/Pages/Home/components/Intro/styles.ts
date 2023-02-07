import styled from 'styled-components'

import background from '../../../../assets/background.svg'

export const IntroContainer = styled.section`
  margin-top: 6.4rem;
  width: 100%;

  padding: 5.857rem 10rem 6.75rem;
  background: url(${background});
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 1180px) {
    img {
      display: none;
    }

    padding-right: 2rem;
    padding-left: 2rem;
  }
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;
  color: ${(props) => props.theme['gray-900']};
  line-height: 3.9rem;
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme['gray-800']};
  line-height: 1.625rem;
  margin-top: 1rem;
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4.125rem;
  gap: 1.25rem;
`
