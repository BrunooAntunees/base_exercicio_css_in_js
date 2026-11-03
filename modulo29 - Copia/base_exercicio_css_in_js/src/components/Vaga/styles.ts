import styled from 'styled-components'
import { AnchorHTMLAttributes, LiHTMLAttributes } from 'react'

export const VagaContainer = styled.li<LiHTMLAttributes<HTMLLIElement>>`
  min-width: 0;
  min-height: 220px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  background: var(--cor-secundaria);
  border: 1px solid #d7b9c0;
  border-radius: 6px;
  color: var(--cor-principal);
  transition: background-color 0.2s ease, color 0.2s ease;

  p,
  li {
    font-size: 13px;
    line-height: 1.45;
  }

  &:hover {
    background: var(--cor-principal);
    color: #fff;
  }

  &:hover a {
    background: #fff;
    color: var(--cor-principal);
  }
`

export const VagaTitulo = styled.h3`
  margin-bottom: 12px;
  font-size: 17px;
  line-height: 1.25;
  font-weight: 700;
`

export const VagaLink = styled.a<AnchorHTMLAttributes<HTMLAnchorElement>>`
  display: inline-block;
  align-self: flex-start;
  padding: 8px 12px;
  border-radius: 4px;
  background: var(--cor-principal);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  @media (max-width: 520px) {
    align-self: stretch;
    text-align: center;
  }
`
