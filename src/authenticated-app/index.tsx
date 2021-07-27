import styled from '@emotion/styled';

import { ProjectListScreen } from '../screens/projectlist-list';
import { Header } from './page-header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { ProjectScreen } from 'screens/project';
const Main = styled.main`
  height: calc(100vh - 6rem);
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem calc(100vh - 6rem);
`;
export const AuthenticatedApp = () => {
  return (
    <Container>
      <Header></Header>
      <Main>
        <Router>
          <Routes>
            <Route path="/" element={<ProjectListScreen />}></Route>
            <Route path="/projects" element={<ProjectListScreen />}></Route>
            <Route
              path="/projects/:projectId/*"
              element={<ProjectScreen />}
            ></Route>
          </Routes>
        </Router>
      </Main>
    </Container>
  );
};
