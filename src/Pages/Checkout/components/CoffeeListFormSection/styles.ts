import styled, { css } from 'styled-components'

export const CoffessListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  margin-top: 1rem;

  border-top-left-radius: 6px;
  border-bottom-left-radius: 44px;
  border-top-right-radius: 44px;
  border-bottom-right-radius: 6px;

  @media (max-width: 500px) {
    padding: 1rem;
  }
`

export const CoffeeItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 545px) {
    flex-wrap: wrap;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  max-height: 80px;

  img {
    max-width: 80px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    color: ${(props) => props.theme['gray-800']};
  }
`

export const RemoveCoffeeButon = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 4px;
  background: ${(props) => props.theme['gray-400']};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 12px;
  color: ${(props) => props.theme['gray-700']};
  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }
`

export const PriceLabel = styled.h4`
  display: flex;
  align-items: right;
  width: 100%;
  justify-content: flex-end;
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const HorizontalLine = styled.hr`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${(props) => props.theme['gray-400']};
`

export const TotalAmountGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  font-size: 0.875rem;
`

interface TotalAmountItemProps {
  isFontBigger?: boolean
}

export const TotalAmountItem = styled.div<TotalAmountItemProps>`
  display: flex;
  justify-content: space-between;

  > span:last-child {
    font-size: 1rem;
  }

  ${(props) =>
    props.isFontBigger &&
    css`
      font-weight: 700;
      font-size: 1.25rem;
      color: ${props.theme['gray-800']};

      > span:last-child {
        font-size: 1.25rem;
      }
    `}
`

export const OrderConfirmationButton = styled.button`
  background: ${(props) => props.theme['yellow-500']};
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  border: none;
  margin-top: 1.5rem;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  text-transform: uppercase;
`
