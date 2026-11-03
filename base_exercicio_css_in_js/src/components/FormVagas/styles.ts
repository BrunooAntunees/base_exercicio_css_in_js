import styled from 'styled-components'
import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  InputHTMLAttributes
} from 'react'

export const Form = styled.form<FormHTMLAttributes<HTMLFormElement>>`
  width: min(100%, 720px);
  margin: 32px auto 0;
  padding: 16px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  background: var(--cor-secundaria);
  border-radius: 4px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 12px;
  }
`

export const Campo = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  width: 100%;
  min-width: 0;
  height: 42px;
  padding: 0 14px;
  color: #333;
  background: #fff;
  border: 1px solid #d8c4c9;
  border-right: 0;
  border-radius: 4px 0 0 4px;
  outline-color: var(--cor-principal);

  &::placeholder {
    color: #888;
  }

  @media (max-width: 520px) {
    border-right: 1px solid #d8c4c9;
    border-radius: 4px;
  }
`

export const BotaoPesquisar = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement>
>`
  height: 42px;
  padding: 0 20px;
  border: 1px solid var(--cor-principal);
  border-radius: 0 4px 4px 0;
  background: var(--cor-principal);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.92);
  }
  &:focus-visible {
    outline: 2px solid #55343c;
    outline-offset: 2px;
  }

  @media (max-width: 520px) {
    border-radius: 4px;
  }
`
