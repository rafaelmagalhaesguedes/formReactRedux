import styled from 'styled-components';

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  background: #272643;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Form = styled.form`
  background: #f56038;
  border-radius: 10px;
  padding: 30px;
  width: 30rem;

  .button-form {
    background: #272643;
    color: white;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    height: 40px;
    width: 100%;
    margin-top: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: black;
  margin: 20px 0;
`;
