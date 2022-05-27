import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface ICreateChat {
    members: string[];
    name: string;
}

export const createChat = async ({ members, name }: ICreateChat) => {
    try {
        if (members)
            await addDoc(collection(db, 'chats'), {
                members,
                name
            });
        return true;
    } catch (e) {
        return false;
    }
};
