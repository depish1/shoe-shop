import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, Firestore } from "firebase/firestore";
import firebaseConfig from "utils/firebase/firebaseConfig";

class FirebaseHelper {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;

  constructor(config: any) {
    this.app = initializeApp(config);
    this.auth = getAuth();
    this.db = getFirestore();
  }

  async authUser(email: string, password: string): Promise<any> {
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
      throw new Error(error);
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

export const authUser = async (
  email: string,
  password: string
): Promise<any> => {
  const auth = getAuth();
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      email: userCredentials.user.email,
      uid: userCredentials.user.uid,
    };
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getDocumentById = async (
  docId: string,
  collectionName: string
): Promise<any> => {
  const db = getFirestore();
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap;
  } else {
    return null;
  }
};
