import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
//   justify-content: space-between;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  border: 1px solid #c1c1c1;
  border-radius: 1rem;
  overflow: hidden;

  button {
    background-color: #ffa500;
    color: #000;
    font-weight: bold;
    &:hover {
      background-color: #ffa599;
    }
  }

  img {
    object-fit: cover;
    max-height: 250px;
  }
  h2 {
    text-align: center;
    font-family: arial;
    font-size: 1.2rem;
    padding:0;
  }
  p {
    padding: 0 0.5rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height:100%;
  }
`;
