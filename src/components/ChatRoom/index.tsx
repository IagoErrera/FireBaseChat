import { Timestamp } from '@firebase/firestore-types';
import ChatList from 'components/ChatList';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { sendMessage } from 'services/sendMessage';
import { getMessages } from '../../services/getMessages';

import * as S from './styles';

interface IData {
    text: string;
    owner: string;
    createdAt: Timestamp;
}

interface IMessage {
    data: IData;
    id: string;
}

interface IChatRoom {
    user: User;
}

const ChatRoom: React.FC<IChatRoom> = ({ user }) => {
    const [messages, setMessages] = useState([] as IMessage[]);
    const [newMessage, setNewMessage] = useState('');
    const [selectedChat, setSelectedChat] = useState('');

    useEffect(() => {
        const handleGetChats = async () => {
            await getMessages({
                chatId: selectedChat,
                setMessages: (data: IMessage[]) => setMessages(data)
            });
        };

        handleGetChats();
    }, [selectedChat, newMessage, user.uid]);

    return (
        <S.Wrapper>
            <S.ChatArea>
                <ChatList userId={user.uid} setSelectedChat={setSelectedChat} />
            </S.ChatArea>
            <S.ChatArea>
                <S.SendArea>
                    <S.Field
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <S.SendButton
                        onClick={() => {
                            sendMessage({
                                text: newMessage,
                                owner: user.uid,
                                chatId: selectedChat
                            });
                            setNewMessage('');
                        }}
                    />
                </S.SendArea>
                <S.MessagesArea>
                    {selectedChat !== '' &&
                        messages.map((message) => {
                            if (message.data.owner !== user.uid)
                                return (
                                    <S.OtherWrapper>
                                        <S.OtherMessageContainer>
                                            <S.OtherMessageText
                                                key={message.id}
                                            >
                                                {message.data.text}
                                            </S.OtherMessageText>
                                        </S.OtherMessageContainer>
                                    </S.OtherWrapper>
                                );
                            return (
                                <S.MyWrapper>
                                    <S.MyMessageContainer>
                                        <S.MyMessageText key={message.id}>
                                            {message.data.text}
                                        </S.MyMessageText>
                                    </S.MyMessageContainer>
                                </S.MyWrapper>
                            );
                        })}
                </S.MessagesArea>
                {/* <S.MoreMessagesButton onClick={handleGetChats}>
                    <S.MyMessageText>+</S.MyMessageText>
                </S.MoreMessagesButton> */}
            </S.ChatArea>
        </S.Wrapper>
    );
};

export default ChatRoom;
