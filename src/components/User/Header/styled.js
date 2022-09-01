import styled, { css } from 'styled-components';

const Wrap = styled.div(({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding: 10px;
  color: ${theme.primary};
  border-bottom: 1px solid ${theme.grey};
`);

const Button = styled.button(({ theme, active }) => css`
  display: block;
  width: 100px;
  height: 30px;
  border: 1px solid ${theme.grey};
  margin: 0 8px;
  cursor: pointer;
  background-color: ${active ? theme.primary : '#efefef'};
  
  &:hover {
    background-color: #ccc;
  }
  
  // ${active && css`
  //   color: green;
  //   background-color: ${theme.primary};
  // `};
`);

export { Wrap, Button };
