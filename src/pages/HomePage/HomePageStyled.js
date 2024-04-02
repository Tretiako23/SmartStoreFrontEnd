import styled from "styled-components";

export const AboutUs = styled.section`
  margin-top: 20px;
  & > h2 {
    font-size: 36px;
  }
`;

export const AboutUsDescription = styled.p`
  margin-top: 20px;
  font-size: 20px;

  & > span {
    display: block;
  }

  & > span:not(:first-child) {
    margin-top: 20px;
  }
`;
