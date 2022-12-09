import {
    collection,
    limit,
    orderBy,
    query,
    getDocs,
    Timestamp,
    where,
    startAt
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

interface IConfig {
    chatId: string;
    // start: number;
    limitNumber: number;
}

export const getMessages = async ({ chatId, limitNumber }: IConfig) => {
    const messagesRef = collection(db, 'message');

    const messagesQuery = query(
        messagesRef,
        limit(limitNumber),
        orderBy('createdAt', 'desc'),
        where('chatId', '==', chatId)
        startAt(start)
    );

    const querySnapshot = await getDocs(messagesQuery);

    const data: IMessage[] = [];
    querySnapshot.forEach((message) =>
        data.push({
            data: message.data() as IData,
            id: message.id
        })
    );

    // console.log(data);
    return data;
};
