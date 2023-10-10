import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import '../../FirebaseConfig';

const AuthContex = createContext();

export function useAuth() {
  return useContext(AuthContex);
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  //handle setLoading it's a side effect
  useEffect(() => {
    const auth = getAuth();
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubcribe;
  }, []);

  //signup
  async function singUp(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    //update User Profile
    await updateProfile(auth.currentUser, { displayName: username });

    //set local state currentuser
    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  //login
  function logIn(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  //logout
  function logOut() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = {
    loading,
    setLoading,
    currentUser,
    singUp,
    logIn,
    logOut,
  };

  return (
    <AuthContex.Provider value={value}>
      {!loading && children}
    </AuthContex.Provider>
  );
}
