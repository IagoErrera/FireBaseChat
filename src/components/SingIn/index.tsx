import { Dispatch, SetStateAction } from 'react';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    User
} from 'firebase/auth';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { createUser } from 'services/createUser';
import { getUsers } from 'services/getUsers';

import { createChat } from 'services/createChat';
import * as S from './styles';

interface IUser {
    setUser: Dispatch<SetStateAction<null | User>>;
}

const SignIn: React.FC<IUser> = ({ setUser }) => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            setUser(result.user);
            createUser(result.user.uid);
        });

        let users: string[] = [];

        getUsers().then((u: string[]) => {
            users = u;
        });

        createChat({ members: users, name: 'Grupo 1' });
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
