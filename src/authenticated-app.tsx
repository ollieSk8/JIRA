import styled from '@emotion/styled';
import { Row } from 'components/lib';
import { useAuth } from 'context/auth-context';
import { ProjectListScreen } from 'screens/projectlist-list';
const PageHeader = styled(Row)`
  height: 6rem;
`;
const PageHeaderLeft = styled(Row)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const PageHeaderRight = styled.div``;
const Main = styled.main`
  height: calc(100vh - 6rem);
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem calc(100vh - 6rem);
`;
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <PageHeader between={true}>
        <PageHeaderLeft gap={true}>
          <h2>logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </PageHeaderLeft>
        <PageHeaderRight>
          <button onClick={logout}>登出</button>
        </PageHeaderRight>
      </PageHeader>
      <Main>
        <ProjectListScreen></ProjectListScreen>
      </Main>
    </Container>
  );
};
