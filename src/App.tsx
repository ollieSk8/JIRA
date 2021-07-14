import { useAuth } from 'context/auth-context';
import { ReactElement } from 'react';
import { AuthenticatedApp } from './authenticated-app';
import { UnAuthenticatedApp } from './unauthenticated-app';
function App(): ReactElement {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </div>
  );
}

export default App;
