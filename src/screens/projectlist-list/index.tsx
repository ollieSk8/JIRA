import { useState, useEffect, ReactElement, FC } from 'react';
import { List } from './list';
import { SearchPanel } from './search-panel';
import { cleanObject } from '../../utils';
import { useHttp } from 'utils/http';
import { useDebounce, useMount } from 'ahooks';
import styled from '@emotion/styled';
const Container = styled.div`
  padding: 3.2rem;
`;
export const ProjectListScreen: FC = (): ReactElement => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);
  const debouncedParam = useDebounce(param, { wait: 300 });
  const client = useHttp();
  useMount(() => {
    client('users').then(setUser);
  });
  useEffect(() => {
    client('projects', { data: cleanObject(debouncedParam) }).then(setList);
    // eslint-disable-next-line
  }, [debouncedParam]);
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} user={user}></SearchPanel>
      <List list={list} user={user}></List>
    </Container>
  );
};
