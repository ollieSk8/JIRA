import { useAuth } from 'context/auth-context';
import { FC, FormEvent, ReactElement } from 'react';

interface IProps {}
export const LoginScreen: FC<IProps> = (): ReactElement => {
  const [user, login] = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <>
      登录成功:用户名{user?.name}
      <div style={{ width: '800px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor={'username'}>用户名</label>
            <input type="text" id={'username'} />
          </div>
          <div>
            <label htmlFor={'password'}>密码</label>
            <input type="password" id={'password'} />
          </div>
          <button type={'submit'}>登录</button>
        </form>
      </div>
    </>
  );
};
