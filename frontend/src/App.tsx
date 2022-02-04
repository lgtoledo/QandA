/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './Store';
import logo from './logo.svg';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { fontFamily, fontSize, gray2 } from './Styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';
import { SignOutPage } from './SignOutPage';
import { AuthProvider } from './Auth';
import { AuthorizedPage } from './AuthorizedPage';

const AskPage = React.lazy(() => import('./AskPage'));

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <div
            css={css`
              font-family: ${fontFamily};
              font-size: ${fontSize};
              color: ${gray2};
            `}
          >
            <Header />
            <Routes>
              <Route path="" element={<HomePage />} />
              <Route
                path="ask"
                element={
                  <React.Suspense
                    fallback={
                      <div
                        css={css`
                          margin-top: 100px;
                          text-align: center;
                        `}
                      >
                        Loading...
                      </div>
                    }
                  >
                    <AuthorizedPage>
                      <AskPage />
                    </AuthorizedPage>
                  </React.Suspense>
                }
              />
              <Route path="search" element={<SearchPage />} />
              <Route path="signin" element={<SignInPage action="signin" />} />
              <Route
                path="/signin-callback"
                element={<SignInPage action="signin-callback" />}
              />
              <Route
                path="signout"
                element={<SignOutPage action="signout" />}
              />
              <Route
                path="/signout-callback"
                element={<SignOutPage action="signout-callback" />}
              />
              <Route path="questions/:questionId" element={<QuestionPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
