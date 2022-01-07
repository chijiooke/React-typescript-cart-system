import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  &:hover {
    transform: scale(1.01);
    transition: 0.6s;
  }

  button {
    background-color: #ffa500;
    color: #000;
    font-weight: bold;
    padding: 1rem;
    bottom: 0;
    &:hover {
      background-color: #ffa599;
    }
  }

  img {
    object-fit: cover;
    min-height: 250px;
    max-height: 250px;
  }
  h2 {
    font-family: arial;
    font-size: 1.2rem;
    padding: 0;
  }
  p {
    padding: 0 0.2rem;
    margin: 0;
    margin-top: 0.2rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100%;
  }
`;
