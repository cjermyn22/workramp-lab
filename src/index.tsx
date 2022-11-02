import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {asyncWithLDProvider} from "launchdarkly-react-client-sdk";

//TODO these would be pulled from a /users api and integrate with our login session
const userMap = new Map();
userMap.set('1', {id: '1', roles: ['admin']});
userMap.set('2', {id: '2', roles: ['read', 'write']});
userMap.set('3', {id: '3', roles: ['read']});

(window as any).renderLdDemo = async (
) => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  //TODO would replace this with session based login in a real app
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let userId = ''
  if (urlParams.get('userId')) {
    userId = urlParams.get('userId') as string
  }
  const user = userMap.get(userId);
  const LDProvider = await asyncWithLDProvider({
    //TODO replace with LaunchDarkly client side ID For project
    clientSideID: '636237476c73040c47a4bf2c',
    user: {
      key: user.id,
      custom: {
        roles: user.roles
      }
    },
    options: {},
  });
  root.render(
    <React.StrictMode>
      <LDProvider>
        <App/>
      </LDProvider>

    </React.StrictMode>
  );
}

(window as any).renderLdDemo();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
