import { Input, Select } from 'antd';
import { FC, ReactElement } from 'react';
import { User } from '../../types';
const { Option } = Select;
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
    <>
      <Input.Group compact>
        <Input
          style={{ width: '50%' }}
          placeholder="Basic usage"
          value={param.name}
          onChange={(ev) =>
            setParam({
              ...param,
              name: ev.target.value,
            })
          }
        />
        <Select
          value={param.personId}
          style={{ width: 120 }}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          {user.map((item) => (
            <Option value={item.id}>{item.name}</Option>
          ))}
        </Select>
      </Input.Group>
    </>
  );
};
