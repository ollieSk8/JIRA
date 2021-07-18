import styled from '@emotion/styled';
import { Row } from 'components/lib';
import { useAuth } from 'context/auth-context';
import { ProjectListScreen } from 'screens/projectlist-list';
import { ReactComponent as SoftwareLogo } from 'assets/software-logo.svg';
import { Menu, Dropdown, Button } from 'antd';
const PageHeader = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
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
  const { user, logout } = useAuth();
  return (
    <Container>
      <PageHeader between={true}>
        <PageHeaderLeft gap={true}>
          <SoftwareLogo width={'18rem'} color="{rgb(38,132,255)}" />
          <h2>项目</h2>
          <h2>用户</h2>
        </PageHeaderLeft>
        <PageHeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={'logout'}>
                  <Button onClick={logout} type={'link'}>
                    登出
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            <Button
              type={'link'}
              onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                e.preventDefault()
              }
            >
              Hi, {user?.name}
            </Button>
          </Dropdown>
        </PageHeaderRight>
      </PageHeader>
      <Main>
        <ProjectListScreen></ProjectListScreen>
      </Main>
    </Container>
  );
};
