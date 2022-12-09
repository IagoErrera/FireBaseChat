import {
    collection,
    limit,
    orderBy,
    query,
    onSnapshot,
    getDocs,
    Timestamp,
    where
    // startAfter
} from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';

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

interface IConfig {
    chatId: string;
    // setMessages: Dispatch<SetStateAction<IMessage[]>>;
    setMessages(data: IMessage[]): void;
    // start?: number;
    // limitNumber: number;
}

export const getMessages = async ({ chatId, setMessages }: IConfig) => {
    const messagesRef = collection(db, 'message');
    const messagesQuery = query(
        messagesRef,
        limit(100),
        orderBy('createdAt', 'desc'),
        where('chatId', '==', chatId)
        // startAfter(start ? start - 1 : 0)
    );

    const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
        const data: IMessage[] = [];
        querySnapshot.forEach((message) =>
            data.push({
                data: message.data() as IData,
                id: message.id
            } as IMessage)
        );
        setMessages(data);
    });

    // const querySnapshot = await getDocs(messagesQuery);

    // const data: IMessage[] = [];
    // querySnapshot.forEach((message) =>
    //     data.push({
    //         data: message.data() as IData,
    //         id: message.id
    //     })
    // );
};
