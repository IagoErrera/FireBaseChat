import { useEffect, useState } from 'react';
import { createChat } from 'services/createChat';
import { getUsers } from 'services/getUsers';

import getChats from '../../services/getChats';

import * as S from './styles';

interface Props {
    userId: string;
    setSelectedChat: React.Dispatch<React.SetStateAction<string>>;
}

interface IChat {
    id: string;
    name: string;
}

interface IUser {
    id: string;
    name: string;
}

const ChatList: React.FC<Props> = ({ userId, setSelectedChat }) => {
    const [chats, setChats] = useState([] as IChat[]);
    const [users, setUsers] = useState([] as IUser[]);
    const [isChat, setIsChat] = useState(true);
    const [search, setSearch] = useState('');
    useEffect(() => {
        const handleGetChats = async () => {
            await getChats({ id: userId, setChats });
        };
        const handleGetUsers = async () => {
            await getUsers({ setUsers });
        };
        handleGetUsers().then();
        handleGetChats().then();
    }, [userId, isChat]);

    return (
        <S.Wrapper>
            <S.SearchContainer>
                <S.Search
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <S.AddChatButton onClick={() => setIsChat(!isChat)} />
            </S.SearchContainer>
            {isChat &&
                chats.map((chat) => {
                    return (
                        <>
                            <S.Chats onClick={() => setSelectedChat(chat.id)}>
                                <S.ChatName>{chat.name}</S.ChatName>
                            </S.Chats>
                        </>
                    );
                })}
            {!isChat &&
                users.map((user) => {
                    if (user.id !== userId)
                        return (
                            <>
                                <S.Chats
                                    onClick={() => {
                                        createChat({
                                            members: [userId, user.id],
                                            name: search
                                        });
                                        setIsChat(true);
                                        setSearch('');
                                    }}
                                >
                                    <S.ChatName>{user.name}</S.ChatName>
                                </S.Chats>
                            </>
                        );
                })}
        </S.Wrapper>
    );
};

export default ChatList;
