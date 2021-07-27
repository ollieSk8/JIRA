import { Table, TableProps } from 'antd';
import dayjs from 'dayjs';
import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { projects, User } from '../../types';
interface IProps extends TableProps<projects> {
  user: User[];
}
export const List: FC<IProps> = ({ user, ...props }): ReactElement => {
  return (
    <Table
      rowKey={'id'}
      {...props}
      columns={[
        {
          title: '名称',
          render(value, project) {
            return <Link to={project.id + ''}>{project.name}</Link>;
          },
          sorter: (a, b) => {
            return a.name.localeCompare(b.name);
          },
        },
        {
          title: '部门',
          dataIndex: 'organization',
        },
        {
          title: '负责人',
          render(project) {
            return user.find(
              (user: { id: any }) => user.id === project.personId
            )?.name;
          },
        },
        {
          title: '创建时间',
          render(project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format('YYYY-MM-DD')
                  : '无'}
              </span>
            );
          },
        },
      ]}
    />
  );
};
