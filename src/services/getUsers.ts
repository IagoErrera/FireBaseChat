import { collection, onSnapshot } from 'firebase/firestore';

import { db } from '../firebase';

interface IUser {
    id: string;
    name: string;
}

interface IConfig {
    setUsers(data: IUser[]): void;
}

export const getUsers = async ({ setUsers }: IConfig): Promise<void> => {
    const usersRef = collection(db, 'users');

    const unsubscribe = onSnapshot(usersRef, (querySnapshot) => {
        const users: IUser[] = [];

        querySnapshot.forEach((user) =>
            // eslint-disable-next-line no-underscore-dangle
            users.push({ id: user.data()._id, name: user.data().name })
        );

        setUsers(users);
    });
};
