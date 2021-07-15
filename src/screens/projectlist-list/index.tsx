import { useState, useEffect, ReactElement, FC } from 'react';
import { List } from './list';
import { SearchPanel } from './search-panel';
import { cleanObject } from '../../utils';
import { useMount, useDebounce } from '../../utils';
import { useHttp } from 'utils/http';
export const ProjectListScreen: FC = (): ReactElement => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);
  const debouncedParam = useDebounce(param, 1000);
  const client = useHttp();
  useMount(() => {
    client('users').then(setUser);
  });
  useEffect(() => {
    client('projects', { data: cleanObject(debouncedParam) }).then(setList);
    // eslint-disable-next-line
  }, [debouncedParam]);
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} user={user}></SearchPanel>
      <List list={list} user={user}></List>
    </div>
  );
};
