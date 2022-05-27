import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface ISendMessage {
    text: string;
    owner: string;
    chatId: string;
}

export const sendMessage = async ({ text, owner, chatId }: ISendMessage) => {
    try {
        if (text)
            await addDoc(collection(db, 'message'), {
                text,
                owner,
                chatId,
                createdAt: new Date()
            });
        return true;
    } catch (e) {
        return false;
    }
};
