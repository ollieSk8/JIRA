import { useState, useEffect, ReactElement, FC } from 'react';
import { List } from './list';
import { SearchPanel } from './search-panel';
import { cleanObject } from '../../utils';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { useRequest, useTitle } from 'ahooks';
const Container = styled.div`
  padding: 3.2rem;
`;
export const ProjectListScreen: FC = (): ReactElement => {
  useTitle('项目列表', { restoreOnUnmount: true });
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const getUser = useRequest({
    url: 'users',
    method: 'get',
  });
  const getProject = useRequest(
    {
      url: 'projects',
      method: 'get',
      data: cleanObject(param),
    },
    {
      debounceInterval: 1000,
    }
  );
  useEffect(() => {
    getProject.run();
    // eslint-disable-next-line
  }, [param]);
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel
        param={param}
        setParam={setParam}
        user={getUser.data || []}
      ></SearchPanel>
      {getProject.error ? (
        <Typography.Text type="danger">
          {getProject.error.message}
        </Typography.Text>
      ) : null}
      <List
        loading={getProject.loading}
        dataSource={getProject.data || []}
        user={getUser.data || []}
      ></List>
    </Container>
  );
};
