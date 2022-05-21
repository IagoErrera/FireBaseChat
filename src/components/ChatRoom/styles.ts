import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
`;

export const MessagesArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: flex-start;
    width: 100%;
    margin-top: 50px;
`;

export const OtherWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const MyWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const OtherMessageContainer = styled.div`
    max-width: 300px;
    background: green;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    padding: 4px 16px;
    border: 2px solid black;
`;

export const MyMessageContainer = styled.div`
    max-width: 300px;
    background: white;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    padding: 4px 16px;
    border: 2px solid black;
`;

export const OtherMessageText = styled.text`
    font-size: 16px;
    color: white;
`;

export const MyMessageText = styled.text`
    font-size: 16px;
    color: black;
`;

export const Field = styled.input`
    width: 500px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    color: black;
    border-color: black;
    padding: 4px;
`;

export const SendButton = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: black;
    margin-left: 20px;
`;

export const SendArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
