import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './auth-context';
import { RequestProvider } from './requestProvider';
export const AuthProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        <RequestProvider>{children} </RequestProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
