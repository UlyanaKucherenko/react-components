import {css} from 'styled-components';

const Reset = css`
  * {
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  .active {
    background-color: #cbcbfc;
    border-color: #cbcbfc;
  }
`;

export {Reset};
