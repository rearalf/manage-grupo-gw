import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import { firebaseConfig } from './FirebaseConfig';
//Initializa Firebase
!firebase.apps.length && firebase.initializeApp(firebaseConfig);
export const dbFireStore = firebase.firestore();
export const dbStorage = firebase.storage();
