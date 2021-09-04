import React from 'react'
import firebase from 'firebase/app';
import ChatUI from "./ChatUI"
import { useSelector } from 'react-redux';
import Signin from '../components/Signin';

function SignIn({ auth, user }) {

    const userSignin = useSelector(state => state.userSignin)
    const { loading, error, userInfo } = userSignin

    const signIn = (e) => {
        e.preventDefault();

        // const provider=new firebase.auth.GoogleAuthProvider();
        // auth.signInWithPopup(provider);
    }

    return (
        <div>{userInfo ?
            <>
                <ChatUI user={userInfo} />
            </>
            :
            <div></div>
            }
        </div>
    )
}

export default SignIn
