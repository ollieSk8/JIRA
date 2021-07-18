import { Form, Input, Select } from 'antd';
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
      <Form layout={'inline'} style={{ marginBottom: '2rem' }}>
        <Form.Item>
          <Input
            placeholder="请输入用户名"
            value={param.name}
            onChange={(ev) =>
              setParam({
                ...param,
                name: ev.target.value,
              })
            }
          />
        </Form.Item>
        <Form.Item>
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
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </>
  );
};
