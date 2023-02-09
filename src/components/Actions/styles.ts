import styled from 'styled-components'

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme['gray-400']};
  gap: 0.25rem;
  padding: 0.75rem;
  border-radius: 0.375rem;

  span {
    width: 1rem;
    display: flex;
    justify-content: center;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme['purple-500']};
  cursor: pointer;
`
