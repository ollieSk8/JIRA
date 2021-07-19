import { useAuth } from 'context/auth-context';
import { ReactElement } from 'react';
import { AuthenticatedApp } from './authenticated-app';
import { UnAuthenticatedApp } from './unauthenticated-app';
import { ErrorBoundary } from 'react-error-boundary';
import { FullPageErrorFallback } from 'components/lib';
function App(): ReactElement {
  const { user } = useAuth();
  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <div>{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}</div>
    </ErrorBoundary>
  );
}

export default App;
