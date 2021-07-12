import { useState, useEffect } from 'react';
import { List } from './list';
import { SearchPanel } from './search-panel';
import qs from 'qs';
import { cleanObject } from '../../utils';
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        let data = await res.json();
        setUser(data);
      }
    });
  }, []);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (res) => {
        if (res.ok) {
          let data = await res.json();
          setList(data);
        }
      }
    );
  }, [param]);
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} user={user}></SearchPanel>
      <List list={list} user={user}></List>
    </div>
  );
};
