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

export const Forms = styled.form`
  background: #f56038;
  border-radius: 10px;
  padding: 30px;
  width: 30rem;

  .button-form-pro {
    background: #272643;
    color: white;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    height: 40px;
    width: 100%;
    margin-top: 20px;
  }

  .textarea {
    width: 100%;
    height: 100px;
  }
`;
