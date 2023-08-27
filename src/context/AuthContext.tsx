import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth";

import { auth } from "../config/firebaseConfig";

export type User = {
  name: string;
  email: string;
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  createUser: (
    auth: Auth,
    email: string,
    password: string
  ) => Promise<UserCredential>;
  logout: () => void;
  signIn: (
    auth: Auth,
    email: string,
    password: string
  ) => Promise<UserCredential>;
  googleSignIn: () => void;
}

const defaultState = {
  user: {
    name: "",
    email: "",
  },
  // I dont need this
  setUser: (user: User) => {
    console.log(user);
  },
} as UserContextInterface;

const UserContext = createContext(defaultState);

type AuthContextProps = {
  children: ReactNode;
};

export const AuthContext = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
  });

  const createUser = (
    auth: Auth,
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (
    auth: Auth,
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = (): void => {
    const googleAuth = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuth)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({
          name: user.displayName || "",
          email: user.email || "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = (): void => {
    signOut(auth);
    setUser({
      name: "",
      email: "",
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "",
          email: currentUser.email || "",
        });
      } else {
        setUser({
          name: "",
          email: "",
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        createUser,
        logout,
        signIn,
        googleSignIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
