import { useRequest } from 'ahooks';
import { Form, Input } from 'antd';
import { AuthForm, useAuth } from 'context/auth-context';
import { FC, ReactElement } from 'react';
import { LongButton } from 'unauthenticated-app';

interface IProps {
  onSetError: (error: Error) => void;
}
export const LoginScreen: FC<IProps> = ({ onSetError }): ReactElement => {
  const { login } = useAuth();
  const { run, loading } = useRequest(login, {
    manual: true,
    throwOnError: true,
    onError: (error: Error) => {
      onSetError(error);
    },
  });
  const handleSubmit = async (values: AuthForm) => {
    await run(values);
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
          <LongButton loading={loading} type="primary" htmlType="submit">
            登录
          </LongButton>
        </Form.Item>
      </Form>
    </>
  );
};
