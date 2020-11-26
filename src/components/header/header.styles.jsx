import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    background-color: black;
    color: white;

    box-shadow: 0 10px 20px rgba(black, 0.3);
  }
`;
