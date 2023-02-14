import styled from 'styled-components'

import { Item } from '@radix-ui/react-radio-group'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 0.375rem;
`

export const PaymentMethodsWrapper = styled.div`
  div {
    display: flex;
    flex-direction: row;

    gap: 1rem;
    width: 100%;
    margin-top: 2rem;

    @media (max-width: 720px) {
      flex-wrap: wrap;
    }
  }
`

export const PaymentOptionButton = styled(Item)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  border-radius: 0.375rem;
  border: none;

  background: ${(props) => props.theme['gray-400']};
  transition: background 0.4s;
  cursor: pointer;

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['gray-700']};

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme['purple-100']};
    border: 1px solid ${(props) => props.theme['purple-500']};
  }
`
