import { UseRequestProvider } from 'ahooks';
import { ReactNode } from 'react';
import { useHttp } from 'utils/http';
export const RequestProvider = ({ children }: { children: ReactNode }) => {
  const client = useHttp();
  return (
    <UseRequestProvider
      value={{
        requestMethod: (param) => {
          return client(param.url, { ...param });
        },
      }}
    >
      {children}
    </UseRequestProvider>
  );
};
