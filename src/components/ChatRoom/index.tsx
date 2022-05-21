import { Timestamp } from '@firebase/firestore-types';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { sendMessage } from 'services/sendMessage';
import { getMessages } from '../../services/getMessages';

import * as S from './styles';

interface IData {
    text: string;
    createdAt: Timestamp;
    owner: string;
}

interface IMessage {
    data: IData;
    id: string;
}

interface IUser {
    user: User;
}

const ChatRoom: React.FC<IUser> = ({ user }) => {
    const [messages, setMessages] = useState([] as IMessage[]);
    const [newMessage, setNewMessage] = useState('');

    const handleGetMessages = () => {
        getMessages().then((data) => {
            setMessages(data);
        });
    };

    useEffect(() => {
        handleGetMessages();
    }, [newMessage]);

    return (
        <S.Wrapper>
            <S.SendArea>
                <S.Field
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <S.SendButton
                    onClick={() => {
                        sendMessage({ text: newMessage, owner: user.uid });
                        setNewMessage('');
                    }}
                />
            </S.SendArea>
            <S.MessagesArea>
                {messages.map((message) => {
                    if (message.data.owner !== user.uid)
                        return (
                            <S.OtherWrapper>
                                <S.OtherMessageContainer>
                                    <S.OtherMessageText>
                                        {message.data.text}
                                    </S.OtherMessageText>
                                </S.OtherMessageContainer>
                            </S.OtherWrapper>
                        );
                    return (
                        <S.MyWrapper>
                            <S.MyMessageContainer>
                                <S.MyMessageText>
                                    {message.data.text}
                                </S.MyMessageText>
                            </S.MyMessageContainer>
                        </S.MyWrapper>
                    );
                })}
            </S.MessagesArea>
        </S.Wrapper>
    );
};

export default ChatRoom;
