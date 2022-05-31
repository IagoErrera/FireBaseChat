import { collection, addDoc, query, getDocs, where } from 'firebase/firestore';
import { db } from '../firebase';

export const createUser = async (id: string, name: string | null) => {
    const usersRef = collection(db, 'users');

    const usersQuery = query(usersRef, where('_id', '==', id));

    const querySnapshot = await getDocs(usersQuery);

    let exist = false;

    querySnapshot.forEach(() => {
        exist = true;
    });

    if (!exist) {
        await addDoc(usersRef, {
            _id: id,
            name
        });
    }
};
