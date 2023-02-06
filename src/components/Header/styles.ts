import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.theme.white};
  z-index: 1;

  nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1024px) {
    padding-right: 10rem;
    padding-left: 10rem;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
`

const baseActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem;
`

export const Location = styled(baseActions)`
  color: ${(props) => props.theme['purple-900']};
  background-color: ${(props) => props.theme['purple-100']};
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const CartLink = styled(baseActions)`
  background-color: ${(props) => props.theme['yellow-100']};
  position: relative;

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  span {
    background-color: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme.white};
    border-radius: 50%;
    font-weight: bold;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -10px;
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 12px;
  }
`
