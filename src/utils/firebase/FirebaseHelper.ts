import { FirebaseApp, initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from "firebase/firestore";
import firebaseConfig from "utils/firebase/firebaseConfig";

interface IuserDataToFirestore {
  name: string;
}

export enum IErrorCodes {
  EMAIL_IN_USE = "auth/email-already-in-use",
  WRONG_PASSWORD = "auth/wrong-password",
  USER_NOT_FOUND = "auth/user-not-found",
}

class FirebaseHelper {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;

  constructor(config: any) {
    this.app = initializeApp(config);
    this.auth = getAuth();
    this.db = getFirestore();
  }

  async authUser(
    email: string,
    password: string
  ): Promise<{ email: string | null; uid: string }> {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return {
        email: userCredentials.user.email,
        uid: userCredentials.user.uid,
      };
    } catch (error: any) {
      throw new Error(error.code);
    }
  }

  async createNewUser(
    email: string,
    password: string,
    userData: IuserDataToFirestore
  ): Promise<void> {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const uid = userCredentials.user.uid;
      await setDoc(doc(this.db, "userData", uid), userData);
    } catch (error: any) {
      switch (error.code) {
        case IErrorCodes.EMAIL_IN_USE:
          throw new Error("Adres jest już zajęty. Spróbuj się zalogować.");
        default:
          throw new Error(
            "Wystąpił niespodziewany problem. Spróbuj ponownie później "
          );
      }
    }
  }

  async getDocumentById(docId: string, collectionName: string): Promise<any> {
    const docRef = doc(this.db, collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  }
}

export const FirebaseMethods = new FirebaseHelper(firebaseConfig);
