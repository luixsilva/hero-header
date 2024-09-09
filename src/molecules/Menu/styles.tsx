import styled from "styled-components";

export const MenuList = styled.ul`
  margin-left: auto;
`;

export const ItemList = styled.li`
  display: inline-block;
  margin-right: 25px;
  font-weight: 500;

  a {
    color: #1e255e;
  }

  &:hover {
    a {
      transition: color 0.25s ease;
      color: #17a4d0;
    }
  }
`;
