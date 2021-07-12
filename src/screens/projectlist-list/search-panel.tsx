import { FC, ReactElement } from 'react';
import { User } from '../../types';
export interface IProps {
  user: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: IProps['param']) => void;
}
export const SearchPanel: FC<IProps> = ({
  user,
  param,
  setParam,
}): ReactElement => {
  console.log('render SearchPanel');
  return (
    <form action="">
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(ev) =>
            setParam({
              ...param,
              name: ev.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(ev) =>
            setParam({
              ...param,
              personId: ev.target.value,
            })
          }
        >
          <option value={''}>负责人</option>
          {user.map((user: User) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
