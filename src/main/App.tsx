import styled from 'styled-components';
import React from "react";
import AllTasks from "./Tasks/AllTasks";
import Filter from './SidebarFilter/Filter';


const Container = styled.div`
  display: grid;
  grid-template: auto / minmax(170px,300px) 1fr;
  height: 100%;
`;

const SidebarFilter  =styled.div`
  padding-top: 30px;
  padding-right: 30px;
  padding-left: 60px;
`;

const NavBar = styled.div`
  height: 1000px;
  background: linear-gradient(180deg, #272D30 0%, #375767 100%);
`;

const HeaderContainer = styled.div`
  background: #E5EEF0;
  padding: 10px 15px 10px;
`;

const HeaderTitle  = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.5px;
  color: #212121;
`;
const MainContainer = styled.div`
  grid-auto-rows: 50px 1fr ;
`;
const ContainerNew = styled.div`
  display: grid;
  grid-template-columns: minmax(800px, 1fr ) minmax(240px, 1fr);
`;


export default () => {
    return (
        <Container>
          <NavBar/>
          <MainContainer>
          <HeaderContainer>
              <HeaderTitle>Создание задачи</HeaderTitle>
          </HeaderContainer>
              <ContainerNew>
                  <AllTasks/>
                  <SidebarFilter>
                      <Filter/>
                  </SidebarFilter>
              </ContainerNew>
          </MainContainer>
        </Container>
  );
}
