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

    // create user with email and pass 
    const handleEmailPasswordRegister = (data, navigate, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, data.email, data.password1)
            .then((user) => {
                saveUser(data);
                updateProfile(auth.currentUser, {
                    displayName: data.fullName
                }).then(() => {

                }).catch((error) => {
                });
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => {
                navigate(location);
                setIsLoading(false);
            })
    };

    // Login user with email and pass 
    const handleEmailPasswordLogin = (email, password, history, location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {

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

    //save user to db
    const saveUser = data => {
        // const { img, ...rest } = data;

        // const formData = new FormData();
        // formData.append('image', img[0]);
        // formData.append('title', rest.title);
        // formData.append('vendor', rest.vendor);
        // formData.append('price', rest.price);
        // formData.append('flavour', rest.flavour);
        // formData.append('description', rest.description);

        // axios.post('https://savon-server-sider-api.herokuapp.com/users')
        //     .then()
        console.log(data)

    };

    return ({
        user,
        error,
        isLoading,
        handleLogOut,
        handleEmailPasswordRegister
    }
    );
};

export default useFirebase;