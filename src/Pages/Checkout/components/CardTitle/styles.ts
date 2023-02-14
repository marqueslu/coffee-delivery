import styled from 'styled-components'

export const AddressTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  div {
    h3 {
      line-height: 130%;
      font-weight: 400;
      color: ${(props) => props.theme['gray-800']};
    }

    p {
      font-size: 0.875rem;
      line-height: 130%;
    }
  }
`
