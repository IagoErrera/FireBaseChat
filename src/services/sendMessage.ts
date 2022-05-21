import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface ISendMessage {
    text: string;
    owner: string;
}

export const sendMessage = async ({ text, owner }: ISendMessage) => {
    try {
        if (text)
            await addDoc(collection(db, 'message'), {
                text,
                owner,
                createdAt: new Date()
            });
        return true;
    } catch (e) {
        return false;
    }
};
