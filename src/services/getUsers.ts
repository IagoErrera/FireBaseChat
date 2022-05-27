import { collection, getDocs } from 'firebase/firestore';

import { db } from '../firebase';

export const getUsers = async (): Promise<string[]> => {
    const chatsRef = collection(db, 'users');

    const querySnapshot = await getDocs(chatsRef);

    const users: string[] = [];
    querySnapshot.forEach((user) => users.push(user.id));

    return users;
};
