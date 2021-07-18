import { Form, Input } from 'antd';
import { useAuth } from 'context/auth-context';
import { FC, ReactElement } from 'react';
import { LongButton } from 'unauthenticated-app';

interface IProps {}
export const RegisterScreen: FC<IProps> = (): ReactElement => {
  const { register } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };
  return (
    <>
      <Form name="basic" onFinish={handleSubmit}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="请输入用户名" id={'username'} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="请输入密码" id={'password'} />
        </Form.Item>
        <Form.Item>
          <LongButton type="primary" htmlType="submit">
            注册
          </LongButton>
        </Form.Item>
      </Form>
    </>
  );
};