import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: process.env.REACT_APP_API_KEY,
  // eslint-disable-next-line no-undef
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // eslint-disable-next-line no-undef
  projectId: process.env.REACT_APP_PROJECT_ID,
  // eslint-disable-next-line no-undef
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // eslint-disable-next-line no-undef
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // eslint-disable-next-line no-undef
  appId: process.env.REACT_APP_APP_ID,
};

export const app = initializeApp(firebaseConfig);
