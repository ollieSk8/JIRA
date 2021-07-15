import { Table } from 'antd';
import { FC, ReactElement } from 'react';
import { projects, User } from '../../types';
interface IProps {
  list: projects[];
  user: User[];
}
export const List: FC<IProps> = ({ list, user }): ReactElement => {
  return (
    <Table
      dataSource={list}
      columns={[
        {
          title: '名称',
          dataIndex: 'name',
          sorter: (a, b) => {
            return a.name.localeCompare(b.name);
          },
        },
        {
          title: '负责人',
          render(project) {
            return user.find(
              (user: { id: any }) => user.id === project.personId
            )?.name;
          },
        },
      ]}
    />
  );
};
