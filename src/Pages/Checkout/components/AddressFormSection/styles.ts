import styled, { css } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 0.375rem;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
`

export const InputsGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  @media (max-width: 720px) {
    flex-wrap: wrap;
  }
`

export const baseInput = styled.input`
  background: ${(props) => props.theme['gray-300']};
  height: 2.625rem;
  padding: 0.75rem;
  border-radius: 0.2rem;
  border: 1px solid ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-700']};
  font-size: 0.875rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-700']};
  }
`

interface InputProps {
  variantSize: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'full'
}

const inputModifiers = {
  tiny: () => css`
    width: 10%;
  `,
  small: () => css`
    width: 30%;
  `,
  medium: () => css`
    width: 50%;
  `,
  large: () => css`
    width: 60%;
  `,
  xlarge: () => css`
    width: 70%;
  `,
  full: () => css`
    width: 100%;
  `,
}

export const Input = styled(baseInput)<InputProps>`
  ${({ variantSize }) => css`
    ${!!variantSize && inputModifiers[variantSize]()}
  `}

  @media (max-width: 720px) {
    width: 100%;
  }
`

export const InputWrapper = styled.div`
  border-radius: 0.2rem;
  border: 1px solid ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-700']};
  font-size: 0.875rem;
  width: 70%;

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  &:focus-within {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-700']};
  }

  background: ${(props) => props.theme['gray-300']};
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-style: italic;
    padding: 0.75rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-600']};
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`

export const complementInput = styled(baseInput)`
  border: none;

  &:focus {
    box-shadow: none;
    border: none;
  }

  @media (max-width: 720px) {
    width: 80%;
  }
`
