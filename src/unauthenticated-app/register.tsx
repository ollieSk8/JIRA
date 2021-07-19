import { useRequest } from 'ahooks';
import { Form, Input } from 'antd';
import { useAuth } from 'context/auth-context';
import { FC, ReactElement } from 'react';
import { LongButton } from 'unauthenticated-app';

interface IProps {
  onSetError: (error: Error) => void;
}
export const RegisterScreen: FC<IProps> = ({ onSetError }): ReactElement => {
  const { register } = useAuth();
  const { run, loading } = useRequest(register, {
    manual: true,
    throwOnError: true,
    onError: (error: Error) => {
      onSetError(error);
    },
  });
  const handleSubmit = async ({
    cpassword,
    ...values
  }: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    if (cpassword !== values.password) {
      onSetError(new Error('请确认输入两次密码相同'));
      return;
    }
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
        <Form.Item
          name="cpassword"
          rules={[{ required: true, message: '请确认密码' }]}
        >
          <Input.Password placeholder="请确认密码" id={'cpassword'} />
        </Form.Item>
        <Form.Item>
          <LongButton loading={loading} type="primary" htmlType="submit">
            注册
          </LongButton>
        </Form.Item>
      </Form>
    </>
  );
};
