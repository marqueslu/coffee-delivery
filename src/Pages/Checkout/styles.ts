import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  margin-top: 6.4rem;

  padding: 2.5rem 10rem 10rem;

  @media (max-width: 1180px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;

  @media (max-width: 1180px) {
    flex-wrap: wrap;
  }
`

export const OrderWrapper = styled.section`
  @media (min-width: 1180px) {
    width: 65%;
  }

  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  @media (max-width: 1180px) {
    width: 100%;
  }
`

export const SelectedCoffeesWrapper = styled.section`
  @media (min-width: 1180px) {
    width: 45%;
  }

  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  @media (max-width: 1180px) {
    width: 100%;
  }
`

export const PaymentContainer = styled.div``

export const SectionTitle = styled.h1`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-weight: 700;
`
