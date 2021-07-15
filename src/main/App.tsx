import './App.css';
import styled from 'styled-components';
import Group from './main/SidebarFilter/Group';
import React from "react";
import { Filter } from './main/SidebarFilter/Filter';
import {taskCard} from "./core/data";
import {ITaskCard, TTaskCard} from "./core/types";
import AllTask from "././main/Tasks/AllTasks"

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



export interface ITypeGroup {
    name: string,
    value: string
}

const typeGroup: Array<ITypeGroup> = [
    { name: 'Типу', value: 'type' },
    { name: 'Автору', value: 'creator' },
    { name: 'Статусу', value: 'statusTask' },
];

const processStatus: Array<ITypeGroup> = [
    { name: 'Все', value: 'all' },
    { name: 'Новая', value: 'new' },
    { name: 'В работе', value: 'inWork' },
    { name: 'Завершена', value: 'completed' },
];

const filterTypeValues: Array<ITypeGroup> = [
    { name: 'Совещание отдела', value: 'Совещание отдела' },
    { name: 'Встреча', value: 'Встреча' },
    { name: 'Конференция', value: 'Конференция' },
];

const closeType: Array<ITypeGroup>  = [
        { name: 'Вручную', value: 'manual' },
        { name: 'Автоматически', value: 'automatic' },
];

function App() {
    return (
      <Container>
        <Section>
          <NavBar/>
          <AllTask/>
          <SidebarFilter>
              <Group typeGroup={typeGroup} />
              <Filter
                  filterTypeValues={filterTypeValues}
                  closeType={closeType}
                  processStatus={processStatus}/>
          </SidebarFilter>
        </Section>
      </Container>
  );
}

export default () => {
  return <App />
}