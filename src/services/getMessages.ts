import {
    collection,
    limit,
    orderBy,
    query,
    getDocs,
    Timestamp,
    where
} from 'firebase/firestore';

import { db } from '../firebase';

interface IData {
    text: string;
    owner: string;
    createdAt: Timestamp;
}

interface IMessage {
    data: IData;
    id: string;
}

export const getMessages = async (chatId: string) => {
    const messagesRef = collection(db, 'message');

    const messagesQuery = query(
        messagesRef,
        limit(100),
        orderBy('createdAt'),
        where('chatId', '==', chatId)
    );

    const querySnapshot = await getDocs(messagesQuery);

    const data: IMessage[] = [];
    querySnapshot.forEach((message) =>
        data.push({
            data: message.data() as IData,
            id: message.id
        })
    );
    return data;
};
