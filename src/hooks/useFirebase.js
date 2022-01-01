import axios from "axios";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from '../Firebase/firebase.init';

firebaseAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    // auth
    const auth = getAuth();
    const databaseUri = 'http://localhost:5000';

    // create user with email and pass 
    const handleEmailPasswordRegister = (data, navigate, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, data.email, data.password1)
            .then((user) => {
                saveUser(data);
                updateNewUser(data.fullName);
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => {
                navigate(location);
                setIsLoading(false);
            })
    };
    //save user to db
    const saveUser = data => {
        axios.post(`${databaseUri}/users`, data)
            .then(res => console.log(res))


    };

    //update user
    const updateNewUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {
        });
    }

    // Login user with email and pass 
    const handleEmailPasswordLogin = (email, password, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                navigate('/');
                setIsLoading(false);
            })
    };

    // observer
    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    // sign out user 
    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setUser({});
            setError(error.message);
        });
    };

    // upload image to imgBB

    const uploadImage = img => {
        let body = new FormData()
        body.set('key', '7e550a7fc902522e5934b0e3e9a410d8')
        body.append('image', img)

        return axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        });
    };

    return ({
        user,
        error,
        setError,
        isLoading,
        databaseUri,
        uploadImage,
        setIsLoading,
        handleLogOut,
        updateNewUser,
        handleEmailPasswordLogin,
        handleEmailPasswordRegister
    }
    );
};

export default useFirebase;