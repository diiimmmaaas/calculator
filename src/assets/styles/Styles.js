import styled from 'styled-components';

export const CalculatorStyles = styled.div`
  background-color: #202020;
  max-width: 100%;
  height: 100vh;
  display: grid;
  justify-items: center;
  grid-template-areas:
    'display'
    'numbers';

  button {
    width: 100%;
    height: 80px;
    border-radius: 20px;
    font-size: 2rem;
    color: white;
    font-family: 'Orbitron', serif;
    background: #2b2b2b;
    border: none;
    position: relative;

    &:focus {
      outline: none;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: rgb(255, 255, 255);
      border-radius: 20px;
      transition: all 0.5s ease-out;
      opacity: 0.4;
    }

    &:active {
      background: radial-gradient(hsl(0, 4%, 59%), hsl(0, 5%, 65%));
      box-shadow: -2px 4px hsl(0, 0%, 75%),
        0px -1px hsl(0, 0%, 75%),
      inset 0 1px 2px hsl(0, 0%, 95%),
      inset 0 -1px 2px hsl(0, 0%, 95%);
      transition: all 0.5s ease-out;
    }

    &:hover:before {
      height: 80px;
    }
  }

  .display {
    font-family: 'Orbitron', serif;
    font-weight: 700;
    grid-area: display;

    h1 {
      font-size: 4rem;
      color: white;
      text-align: center;
      margin: 40px 0;
    }
  }

  .number-pad {
    grid-area: numbers;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 0px 30px;
    width: 700px;

    .button-div:focus {
      outline: none;
    }
  }

  .zero-button {
    grid-column: 1/3;
  }
`;

export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 50px;
  grid-template-columns: 1fr;
  margin: 10px;
  width: 700px;
  align-items: center;
  border-radius: 20px;
  background: #2b2b2b;
  h2,
  p {
    text-align: center;
    color: white;
  }
  h2 {
    font-size: 3rem;
    margin: 0;
    text-align: right;
    border-bottom: 4px solid white;
    padding: 15px 20px;
  }
  p {
    margin: 5px 0;
  }
`;