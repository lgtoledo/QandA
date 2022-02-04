import React from 'react';
import { Page } from './Page';
import { useAuth } from './Auth';

export const AuthorizedPage: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return (
      <Page title="Not Authorized">
        <h1>You are not authorized to view this page</h1>
      </Page>
    );
  }
};
