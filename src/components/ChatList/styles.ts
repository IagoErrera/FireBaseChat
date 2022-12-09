import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    border-right: 1px solid gray;
`;

export const Search = styled.input`
    width: 75%;
    height: 30px;
    font-size: 14px;
    color: black;
    border: 2px solid black;
    border-radius: 16px;
    margin-right: 10px;
`;

export const AddChatButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

export const AddChatText = styled.text`
    color: black;
    font-size: 16px;
`;

export const SearchContainer = styled.div`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 20px;
`;

export const Chats = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    background-color: gray;
    width: 100%;
`;

export const ChatName = styled.text`
    font-size: 12px;
    color: black;
`;
