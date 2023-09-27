import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #272643;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  background: #f56038;
  border-radius: 10px;
  padding: 20px 30px;
  width: 30rem;

  div{
    margin: 10px 0;
    font-weight: 900;
  }
`;

export const ButtonBack = styled.button`
  background: #272643;
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  height: 40px;
  width: 100%;
  margin-top: 20px;
`;
