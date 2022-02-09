import React from "react";
import styled from "styled-components";

let ajd = new Date().toLocaleDateString().slice(0, 20);

export default function Header() {
  return (
    <ComponentContainer>
      {/* <HeaderText>TP CESI (To-Do)</HeaderText>
      <HeaderList>      Corentin</HeaderList> */}
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: white;
  font-family: RobotoBold;
  font-size: 30px;
  margin-top : 40px;
  z-index: -111;
`;

const HeaderList = styled.Text`
  color: white;
  font-family: RobotoBold;
  font-size: 20px;
  margin-right: 20px;
  margin-top : 40px;
`;