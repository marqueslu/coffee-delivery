import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -1.2rem;
  }
`

export const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 5.25rem;
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: 700;
  color: ${(props) => props.theme['yellow-700']};
  background-color: ${(props) => props.theme['yellow-100']};
`

export const TagsContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  flex-wrap: wrap;
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme['gray-800']};
  margin-top: 1rem;
`

export const Description = styled.p`
  font-size: 0.875rem;
  padding: 0.5rem 1.25rem 0;
  text-align: center;
  line-height: 18.2px;
  color: ${(props) => props.theme['gray-600']};
`

export const ActionsCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 1.5rem;
  width: 100%;
  margin-top: 2.125rem;
  padding: 0 1.5rem 1.25rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const AddToCartButton = styled.button`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['purple-900']};
  border-radius: 0.375rem;
  padding: 0.5rem;
  border: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  line-height: 130%;

  > span:first-child {
    font-size: 0.875rem;
  }

  > span:last-child {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
  }
`
