import firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseConfig } from './FirebaseConfig';
//Initializa Firebase
!firebase.apps.length && firebase.initializeApp(firebaseConfig);
export const dbStorage = firebase.firestore();