import { collection, query, getDocs, where } from 'firebase/firestore';

import { db } from '../firebase';

interface IChat {
    id: string;
    name: string;
}

export const getChats = async (id: string) => {
    const chatsRef = collection(db, 'chats');

    const chatsQuery = query(chatsRef, where('members', 'array-contains', id));

    const querySnapshot = await getDocs(chatsQuery);

    const chats: IChat[] = [];
    querySnapshot.forEach((chat) =>
        chats.push({ id: chat.id, name: chat.data().name })
    );

    return chats;
};
