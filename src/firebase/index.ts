import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import 'firebase/compat/firestore';

const app = initializeApp({
    apiKey: 'AIzaSyAwdLRSQgzyBx-B6k9uays0QVfPpcX-odM',
    authDomain: 'fir-chattest-84614.firebaseapp.com',
    projectId: 'fir-chattest-84614',
    storageBucket: 'fir-chattest-84614.appspot.com',
    messagingSenderId: '64048074250',
    appId: '1:64048074250:web:e52430f0a59659491559f3',
    measurementId: 'G-RXB2JQ0L3X'
});

export const db = getFirestore(app);
