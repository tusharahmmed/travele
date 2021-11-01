import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init";

// initialize app
initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    // google sign in
    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();

        // get user
        return signInWithPopup(auth, googleProvider)
    }



    // log out
    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({});
            // Sign-out successful.
        }).catch((error) => {
            setError(error.message)
            // An error happened.
        });

    }

    // on auth state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    return {
        user,
        error,
        handleGoogleSignIn,
        handleLogOut
    }

}

export default useFirebase;