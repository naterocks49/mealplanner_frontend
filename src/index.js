import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from './context/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId='909821368859-gp4umoaie1o107gksgj8h1p0fu71gas9.apps.googleusercontent.com'>
        <Provider>
            <App />
        </Provider>
    </GoogleOAuthProvider>
);
