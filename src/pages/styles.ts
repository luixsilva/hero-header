import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    width: 50%;
  }

  h1 {
    color: #1e255e;
    font-weight: bold;
    font-size: 56px;
  }

  h6 {
    margin-top: 25px;
    color: #1e255eb2;
    font-size: 16px;
    font-weight: normal;
    padding-right: 150px;
  }
`;

export const ColumnImage = styled.div`
  text-align: right;
  position: relative;
  img {
    width: 407px;
    margin-left: 192px;
  }
`;
