import { collection, query, where, onSnapshot } from 'firebase/firestore';

import { db } from '../firebase';

interface IChat {
    id: string;
    name: string;
}

interface IConfig {
    id: string;
    setChats(data: IChat[]): void;
}

const getChats = async ({ id, setChats }: IConfig) => {
    const chatsRef = collection(db, 'chats');

    const chatsQuery = query(chatsRef, where('members', 'array-contains', id));

    const unsubscribe = onSnapshot(chatsQuery, (querySnapshot) => {
        const chats: IChat[] = [];
        querySnapshot.forEach((chat) =>
            chats.push({ id: chat.id, name: chat.data().name })
        );

        setChats(chats);
    });
};

export default getChats;
