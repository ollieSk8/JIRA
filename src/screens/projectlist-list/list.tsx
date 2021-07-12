import { FC, ReactElement } from 'react';
import { projects, User } from '../../types';
interface IProps {
  list: projects[];
  user: User[];
}
export const List: FC<IProps> = ({ list, user }): ReactElement => {
  console.log('render List');
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {
                user.find((user: { id: any }) => user.id === project.personId)
                  ?.name
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
