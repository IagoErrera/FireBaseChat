import { Dispatch, SetStateAction } from 'react';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    User
} from 'firebase/auth';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import * as S from './styles';

interface IUser {
    setUser: Dispatch<SetStateAction<null | User>>;
}

const SignIn: React.FC<IUser> = ({ setUser }) => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider);
        setUser(auth.currentUser);
    };

    return (
        <S.Wrapper>
            <S.Button
                onClick={() => {
                    signInWithGoogle();
                }}
            >
                Sign In
            </S.Button>
        </S.Wrapper>
    );
};

export default SignIn;
