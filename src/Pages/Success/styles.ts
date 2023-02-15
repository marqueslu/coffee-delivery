import styled, { css } from 'styled-components'

export const SuccessContainer = styled.main`
  position: absolute;
  padding: 2rem 10rem 9.85rem;
  margin-top: 11.5rem;
  width: 100%;

  @media (max-width: 1180px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['yellow-700']};
  }

  > p {
    font-size: 20px;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const DeliveryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2.5rem;
  gap: 7rem;
  max-height: 16.875rem;
  @media (max-width: 740px) {
    img {
      display: none;
    }
  }
`

export const DeliveryInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  width: 33rem;

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    border-top-left-radius: 6px;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 6px;
    border: 1px solid transparent;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%)
      border-box;
    -webkit-mask: linear-gradient(${(props) => props.theme['gray-100']} 0 0)
        padding-box,
      linear-gradient(${(props) => props.theme['gray-100']} 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

interface DeliveryInfoItemProps {
  variant: string
}

export const DeliveryInfoItem = styled.div<DeliveryInfoItemProps>`
  display: flex;
  gap: 0.75rem;

  span {
    ${({ variant }) => css`
      background: ${variant};
    `}

    padding: 0.5rem;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.white};
  }
`
