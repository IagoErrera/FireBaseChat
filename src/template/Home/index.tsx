import { useState } from 'react';
import { User } from 'firebase/auth';

import ChatRoom from 'components/ChatRoom';
import SignIn from 'components/SingIn';

import * as S from './styles';

const HomeTemplate = () => {
    const [user, setUser] = useState(null as User | null);
    return (
        <S.Container>
            {user ? <ChatRoom user={user} /> : <SignIn setUser={setUser} />}
        </S.Container>
    );
};
export default HomeTemplate;
