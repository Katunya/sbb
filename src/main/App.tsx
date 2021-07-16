import styled from 'styled-components';
import React from "react";
import AllTasks from "./Tasks/AllTasks";
import { Filter } from './SidebarFilter/Filter';

const Container = styled.div`
    height: 100%;
    display: grid;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: minmax(170px,350px) minmax(540px, 1fr ) minmax(240px, 1fr);
  height: 100%;
  position: relative;
`;

const SidebarFilter  =styled.div`
  padding-top: 30px;
  padding-right: 30px;
  padding-left: 60px;
`;

const NavBar = styled.div`
`;

export default () => {

    return (
      <Container>
        <Section>
          <NavBar/>
          <AllTasks/>
          <SidebarFilter>
              <Filter/>
          </SidebarFilter>
        </Section>
      </Container>
  );
}
